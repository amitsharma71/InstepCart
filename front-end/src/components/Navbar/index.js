import React from "react";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";

const Navbaar = () => {
  return (
    <>
      <div className="nav_header">
        <div className="top-right">
          <p className="vr-border">Sell with us</p>
          <p className="vr-border">call us</p>
          <p>download App</p>
          <img src="/Image/windows.png" alt="" />
        </div>
        {["xl"].map((expand) => (
          <Navbar
            key={expand}
            expand={expand}
            className="bg-body-tertiary mb-3"
          >
            <Container fluid className="">
              <div className="nav_bar w-100">
                <Navbar.Brand href="#">INSTEPKART</Navbar.Brand>
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
                  <p className="share ">
                    share
                    <span>location</span>
                  </p>
                  <img src="/Image/location.png" alt="location" />
                  <span>
                    <img src="/Image/notification.png" alt="notification" />
                  </span>
                  <img src="/Image/cart.png" alt="cart" />
                  <p className="sign_hover">Sign In</p>
                </div>
              </div>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    INSTEPKART
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className=" hide_links ">
                    <Nav.Link href="">
                      <img src="/Image/location.png" alt="location" />
                      <img src="/Image/cart.png" alt="cart" />
                    </Nav.Link>
                    <Nav.Link href="#action1">MOBILE & MORE</Nav.Link>
                    <Nav.Link href="#action2">MEN</Nav.Link>
                    <Nav.Link href="#action2">WOMEN</Nav.Link>
                    <Nav.Link href="#action2">HOME & KITCHEN</Nav.Link>
                    <Nav.Link href="#action2">APPLIANCES</Nav.Link>
                    <Nav.Link href="#action2">SPORTS & MORE</Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
        <div className="sales-navbar sub_header_hide">
          <p>MOBILE & MORE</p>
          <p>MEN</p>
          <p>WOMEN</p>
          <p>HOME & KITCHEN</p>
          <p>APPLIANCES</p>
          <p>SPORTS & MORE</p>
        </div>
      </div>
      <div>
        <ScrollingCarousel
          className="promo"
          show={5.5}
          slide={4}
          swiping={true}
        >
          <p>Jaw Dropping Deals</p>
          <p>Refurbished Mobile</p>
          <p>Express Shipping</p>
          <p>Men's Clothing</p>
          <p>Women's Fashion</p>
          <p>Footwear</p>
          <p>Kitchen & Dinning</p>
          <p>Audio & Headphones</p>
          <p>Bags & Luggage</p>
        </ScrollingCarousel>
      </div>
    </>
  );
};
export default Navbaar;
