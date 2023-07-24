import React, { memo } from "react";
import { Navbar } from "react-bootstrap";
import { Navigate, Outlet } from "react-router-dom";

const AdminLayout = () => {
  const token = localStorage.getItem("token");

  return token ? (
    <>
      <Navbar />
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default memo(AdminLayout);
