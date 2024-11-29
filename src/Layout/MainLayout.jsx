import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
const MainLayout = () => {
  return (
    <div className="font-text_font">
      <Navbar></Navbar>
      <div className="min-h-screen-minus-240 pt-16">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
