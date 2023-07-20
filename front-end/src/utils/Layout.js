import { memo } from "react";
import React from "react";
import Navbar from "../components/Navbar";

import { Navigate, Outlet } from "react-router-dom";
function Layout() {
  const token = localStorage.getItem("token");
  return  token ? (
    <>
      <Navbar />
      <Outlet />
    </>
  ): (
    <Navigate to="/login" />
  );
}
export default memo(Layout);
