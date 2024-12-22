import React from "react";
import useGetAuth from "../../Hooks/useGetAuth";
import Loader from "../../Pages/Loader";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useGetAuth();
  if (loading) {
    return <Loader></Loader>;
  }
  if (user) {
    return children;
  }
  return (
    <Navigate to={"/login"} replace:true state={{ from: location }}></Navigate>
  );
};

export default PrivateRoute;
