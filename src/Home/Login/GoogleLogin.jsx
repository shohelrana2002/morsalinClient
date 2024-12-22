import React from "react";
import { IoLogoGoogle } from "react-icons/io5";
import useGetAuth from "../../Hooks/useGetAuth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const GoogleLogin = () => {
  const { googleLogin } = useGetAuth();
  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => {
        if (!res?.user?.emailVerified) {
          userLogout();
          toast.error(
            "Your email is not verified. Please verify your email to continue.",
            {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
            }
          );
          return;
        }
        toast.success("Login successful!", {
          position: "top-right",
          autoClose: 3000,
        });
        console.log(res.user);
      })
      .catch((err) => {
        toast.error(`Error: ${err.message}`, {
          position: "top-right",
          autoClose: 5000,
        });
      });
  };
  return (
    <div className="">
      <p className="cursor-pointer" onClick={handleGoogleLogin}>
        <ToastContainer />
        <IoLogoGoogle className="text-center w-full text-green-700 text-2xl"></IoLogoGoogle>
      </p>
    </div>
  );
};

export default GoogleLogin;
