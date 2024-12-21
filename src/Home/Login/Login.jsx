import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import useGetAuth from "../../Hooks/useGetAuth";

const Login = () => {
  const { userLogin, userLogout, forgetPassword } = useGetAuth();
  const [errorMessage, setErrorMessage] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const email = data?.email;
    const usersCreateData = { email };
    userLogin(data?.email, data?.password)
      .then((res) => {
        if (!res?.user?.emailVerified) {
          userLogout();
          return alert(
            "Your email is not verified. Please verify your email to continue."
          );
        }
      })
      .catch((error) => {
        if (error.message) {
          setErrorMessage(error?.message || "Password or Account Invalid");
        } else {
          setErrorMessage(" ");
        }
      });
  };
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="flex justify-between lg:gap-28 items-center flex-col lg:flex-row-reverse">
          <div className="w-full">
            <picture>
              <img src="./login.svg" alt="" />
            </picture>
          </div>
          <div className=" rounded-md bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              {/* Email */}
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
              {/* Password */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered"
                  {...register("password", { required: true, min: 6 })}
                />
                {errors.password && (
                  <span className="text-red-700">password is invalid </span>
                )}
                {errorMessage && (
                  <span className="text-red-700">{errorMessage}</span>
                )}
              </div>
              <Link to={"/forgetPassword"}>Forget Your Password ?</Link>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <div>
                <p className="text-black font-medium">
                  Are You New?
                  <Link className="text-red-500" to={"/register"}>
                    Register
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
