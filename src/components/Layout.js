import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      {/* NAVBAR */}
      <Navbar />
      {/* MAIN */}
      <Outlet />
      {/* FOOTER */}
      <Footer />
    </>
  );
};
export default Layout;
