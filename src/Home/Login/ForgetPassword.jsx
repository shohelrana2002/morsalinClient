import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useGetAuth from "../../Hooks/useGetAuth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
const ForgetPassword = () => {
  const { forgetPassword } = useGetAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data.email);
    forgetPassword(data?.email)
      .then(() => {
        Swal.fire({
          position: "top",
          width: "400px",
          icon: "success",
          title: "Check your Gmail",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Invalid Yor Gmail or Account",
          showConfirmButton: false,
          timer: 1500,
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
