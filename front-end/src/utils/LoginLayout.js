import React, { memo } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const LoginLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default memo(LoginLayout);
