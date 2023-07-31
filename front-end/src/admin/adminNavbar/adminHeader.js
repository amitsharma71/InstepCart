import React from "react";
import { Button, Col, Container, Form, Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Offcanvas from "react-bootstrap/Offcanvas";
import Sidebar from "../sidebar";

function AdminNavbar() {
  return (
    <>
      <div className="nav_header">
        {["xl"].map((expand) => (
          <Navbar
            key={expand}
            expand={expand}
            className="bg-body-tertiary mb-3"
          >
            <Container fluid className="">
              <div className="nav_bar w-100">
                <Navbar.Brand href="#">INSTEPCART</Navbar.Brand>
                <Form className="d-flex search-bar">
                  <Form.Control
                    type="search"
                    placeholder="What is on your mind today?"
                    className=" search_bar"
                    aria-label="Search"
                  />
                  <Button className="search_button">Search</Button>
                </Form>
                <div className="nav-icons sub_header_hide">
                  {/* <p className="share ">
                    share
                    <span>location</span>
                  </p> */}
                  {/* <img src="/Image/location.png" alt="location" /> */}
                  {/* <span>
                    <img
                      onClick={notificationClick}
                      src="/Image/notification.png"
                      alt="notification"
                    />
                  </span> */}
                  {/* <span onClick={heartClick}>
                    <BsHeart />
                  </span> */}
                  {/* <img onClick={cartClick} src="/Image/cart.png" alt="cart" /> */}
                  {/* <p onClick={SignClick} className="sign_hover">
                    Sign In
                  </p> */}
                </div>
              </div>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
            </Container>
          </Navbar>
        ))}
      </div>
    </>
  );
}

export default AdminNavbar;
