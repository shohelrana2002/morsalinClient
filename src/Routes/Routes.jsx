import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Login from "../Home/Login/Login";
import Register from "../Home/Login/Register";
import ForgetPassword from "../Home/Login/ForgetPassword";
import UserProfile from "../Home/Profile/UserProfile";
import PrivateRoute from "./PrivateRoutes/PrivateRoute";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/forgetPassword",
        element: <ForgetPassword></ForgetPassword>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <UserProfile></UserProfile>{" "}
          </PrivateRoute>
        ),
      },
    ],
  },
]);
