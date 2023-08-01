import { memo } from "react";
import React from "react";

import { Navigate, Outlet } from "react-router-dom";
import AdminNavbar from "../admin/adminNavbar/adminHeader";
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "../admin/sidebar";
function AdminLayout() {
  const token = localStorage.getItem("token");
  return token ? (
    <>
      <AdminNavbar />
      <Container className="container_width">
        <Row>
          <Col md={4} lg={3}>
            <Sidebar />
          </Col>
          <Col md={8} lg={9}>
            <Outlet />
          </Col>
        </Row>
      </Container>
    </>
  ) : (
    <Navigate to="/login" />
  );
}
export default memo(AdminLayout);
