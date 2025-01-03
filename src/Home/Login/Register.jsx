import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import useGetAuth from "../../Hooks/useGetAuth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Register = () => {
  const { createAccount, userLogout, emailVerification } = useGetAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const fistName = data?.name;
    const lastName = data?.lastName;
    const role = data.role;
    const status = role === "user" ? "approved" : "pending";
    const email = data?.email;
    const usersCreateData = { fistName, lastName, status, email };
    console.log(usersCreateData);
    createAccount(data.email, data.password)
      .then(() => {
        emailVerification().then(() => {
          toast.success(
            "Your account created successfully.Plz  verified Your Email.",
            {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
            }
          );
          userLogout();
        });
        return;
      })
      .catch(() => {
        toast.error("Your Gmail Already Use ", {
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
    <div>
      <div className="hero py-8 bg-base-200 min-h-screen">
        <div className="flex justify-between lg:gap-28 items-center flex-col lg:flex-row">
          <div className="w-full">
            <picture>
              <img src="./login.svg" alt="" />
            </picture>
          </div>
          <div className=" rounded-md bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              {/* Fist Name  */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Fist Name"
                  className="input input-bordered"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-red-700">Name is Required </span>
                )}
              </div>
              {/* Last Name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Last Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="input input-bordered"
                  {...register("lastName", {
                    required: true,
                    pattern: /^[A-Za-z]+$/i,
                  })}
                />
                {errors.lastName && (
                  <span className="text-red-700">Last Name is Required </span>
                )}
                {errors.pattern && <span>hi</span>}
              </div>
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
                  <span className="text-red-700">password is Required </span>
                )}
              </div>
              {/* confirm Password */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password </span>
                </label>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="input input-bordered"
                  {...register("ConfirmPassword", {
                    required: "Confirm Password is Required",
                    min: 6,
                    validate: (value) =>
                      watch("password") === value ||
                      "Your Password Don't Match",
                  })}
                />
                {errors.ConfirmPassword && (
                  <span className="text-red-700">
                    {errors.ConfirmPassword.message}
                  </span>
                )}
              </div>
              {/* Role  */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Role</span>
                </label>
                <select
                  className="select select-bordered w-full max-w-full                  "
                  {...register("role", { required: true })}
                >
                  <option value="buyer">User</option>
                  <option value="seller">Admin</option>
                </select>
                {errors.role && <p>Select On</p>}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
                <ToastContainer></ToastContainer>
              </div>
              <div>
                <p className="text-black font-medium">
                  All Ready Have Account?
                  <Link className="text-red-500" to={"/login"}>
                    Login
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

export default Register;
