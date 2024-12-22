import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useGetAuth from "../../Hooks/useGetAuth";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
const ForgetPassword = () => {
  const { forgetPassword } = useGetAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data.email);
    forgetPassword(data?.email)
      .then(() => {
        toast.success("Send Your Code Gmail", {
          position: "top-right",
          autoClose: 3000,
        });
      })
      .catch((err) => {
        toast.error(`${err.message}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen  ">
      <div className="flex items-center lg:gap-x-32 justify-between flex-col md:flex-row-reverse">
        <div>
          <div className="w-full">
            <picture>
              <img src="./login.svg" alt="" />
            </picture>
          </div>
        </div>

        <div>
          <h3 className="text-2xl text-center font-semibold text-gray-700">
            Forget Your Password
          </h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Enter Your Email </span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-700">Email is Required </span>
              )}
            </div>
            <button
              className="btn btn-outline w-full btn-primary mt-4 "
              type="submit"
            >
              Send Password Reset Email
            </button>
            <ToastContainer></ToastContainer>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
