import React from "react";
import { IoLogoGoogle } from "react-icons/io5";
import useGetAuth from "../../Hooks/useGetAuth";
const GoogleLogin = () => {
  const { googleLogin } = useGetAuth();
  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => {
        if (!res?.user?.emailVerified) {
          userLogout();
          return alert(
            "Your email is not verified. Please verify your email to continue."
          );
        }
        console.log(res.user);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="">
      <p className="cursor-pointer" onClick={handleGoogleLogin}>
        <IoLogoGoogle className="text-center w-full text-green-700 text-2xl"></IoLogoGoogle>
      </p>
    </div>
  );
};

export default GoogleLogin;
