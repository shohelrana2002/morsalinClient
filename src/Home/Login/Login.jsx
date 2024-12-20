import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const handleLogin = (data) => {
    console.log(data.name);
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
            <form className="card-body">
              <div onSubmit={handleLogin} className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-red-700">Name is Required </span>
                )}
              </div>

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
