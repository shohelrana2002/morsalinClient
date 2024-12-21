import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useGetAuth from "../../Hooks/useGetAuth";

const ForgetPassword = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

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
        setMessage("Password reset email sent! Check your inbox.");
        setError("");
      })
      .catch((err) => {
        setError(err.message || "Failed to send password reset email.");
        setMessage("");
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen  ">
      <div className="flex items-center justify-between flex-col md:flex-row-reverse">
        <div>
          <div className="w-full">
            <picture>
              <img src="./login.svg" alt="" />
            </picture>
          </div>
        </div>

        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email </span>
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
          {message && <p style={{ color: "green" }}>{message}</p>}
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
