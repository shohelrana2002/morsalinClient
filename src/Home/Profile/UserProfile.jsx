import React from "react";
import useGetAuth from "../../Hooks/useGetAuth";

const UserProfile = () => {
  const { user } = useGetAuth();
  return (
    <div className="">
      <div className="flex justify-center flex-col items-center my-4">
        <picture>
          <img
            className="rounded-full"
            src={
              user?.photoURL ||
              "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            }
            alt="User Profile"
          />
        </picture>
        <p>Name:{user?.displayName}</p>
        <p>Gmail:{user?.email}</p>
        <p>
          Last Login Time:{" "}
          {user?.metadata?.lastSignInTime
            ? new Date(user?.metadata?.lastSignInTime).toLocaleString()
            : "No Time "}
        </p>
      </div>
    </div>
  );
};

export default UserProfile;
