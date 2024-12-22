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
    <div>
      <ToastContainer />
      <button
        onClick={handleGoogleLogin}
        className="btn-outline btn-primary btn text-center w-full flex items-center gap-x-1 justify-center text-green-700 text-2xl"
      >
        Google
        <IoLogoGoogle></IoLogoGoogle>
      </button>
    </div>
  );
};

export default GoogleLogin;
