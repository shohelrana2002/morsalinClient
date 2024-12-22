import React from "react";
import { NavLink } from "react-router";

const Error = () => {
  return (
    <div className="min-h-screen bg-gray-300 flex flex-col justify-center items-center ">
      <p className="text-4xl ">Page Not Found</p>
      <NavLink to={"/"}>
        <span className="btn btn-outline btn-primary my-4">Back To Home</span>{" "}
      </NavLink>
    </div>
  );
};

export default Error;
