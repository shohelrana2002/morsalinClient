import React from "react";
import useGetAuth from "../Hooks/useGetAuth";
import { NavLink, Link } from "react-router";
const DropDownProfile = () => {
  const { user, userLogout } = useGetAuth();
  return (
    <div>
      <div className="dropdown dropdown-bottom dropdown-end md:mx-5">
        <picture tabIndex={0} role="button">
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-6 rounded-full ring ring-offset-2">
              <img
                src={
                  user?.photoURL ||
                  "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                }
                alt="User Profile"
              />
            </div>
          </div>
        </picture>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          <li>
            <button className="btn btn-outline btn-primary btn-sm">
              <Link to={"/profile"}>Profile </Link>
            </button>
          </li>
          <li>
            <button className="btn btn-outline btn-primary btn-sm">
              <NavLink onClick={() => userLogout()} to={"/login"}>
                LogOut
              </NavLink>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DropDownProfile;
