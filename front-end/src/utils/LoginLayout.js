import React, { memo } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const LoginLayout = () => {
  const token = localStorage.getItem("token");
  return token? (
    <>
      <Navbar />
      <Outlet />
    </>
  ):(
    <Navigate to="/" />
  );
};

export default memo(LoginLayout);
