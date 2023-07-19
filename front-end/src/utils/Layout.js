import { memo } from "react";
import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

function Layout() {
  const token = localStorage.getItem("token");
  return  token? (
    <>
      <Navbar />
      <Outlet />
    </>
  ): (
    <Navigate to="/login" />
  );
}
export default memo(Layout);
