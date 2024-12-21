import React from "react";
import { NavLink } from "react-router";
import useGetAuth from "../Hooks/useGetAuth";

const Navbar = () => {
  const { user, userLogout } = useGetAuth();
  return (
    <div>
      <div className="navbar bg-base-300 z-30 fixed h-16">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>
                  <NavLink to={"/"}>Home</NavLink>
                </a>
              </li>
              <li>
                <a>
                  <NavLink to={"/about"}>About</NavLink>
                </a>
              </li>
              <li>
                <a>
                  <NavLink to={"/contact"}>Contact</NavLink>
                </a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">The Foundation Of Dreams</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-black font-semibold ">
            <li>
              <a>
                <NavLink to={"/"}>Home</NavLink>
              </a>
            </li>
            <li>
              <a>
                <NavLink to={"/about"}>About</NavLink>
              </a>
            </li>
            <li>
              <a>
                <NavLink to={"/contact"}>Contact</NavLink>
              </a>
            </li>
          </ul>
        </div>
        {user ? (
          <div className="navbar-end gap-2">
            <button className="btn btn-outline btn-primary btn-sm">
              <NavLink onClick={() => userLogout()} to={""}>
                LogOut
              </NavLink>
            </button>
          </div>
        ) : (
          <div className="navbar-end gap-2">
            <button className="btn btn-outline btn-primary btn-sm">
              <NavLink to={"/login"}>Login</NavLink>
            </button>
            <button className="btn btn-outline btn-secondary btn-sm">
              <NavLink to={"/register"}>Register</NavLink>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
