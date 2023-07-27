import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
// import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import { useState } from "react";
import ListMobile from "./ListDetails/List";
import { useNavigate } from "react-router";
import { BsHeart } from "react-icons/bs";
import { Dropdown, DropdownButton } from "react-bootstrap";

const Navbaar = () => {
  const navigate = useNavigate();

  const userLogin = localStorage.getItem("token");
  console.log(userLogin, "userLogin");

  const [showMessage, setShowMessage] = useState({
    MOBILE: "false",
    MEN: "false",
    WOMEN: "false",
    HOMEKITCHEN: "false",
    APPLIANCES: "false",
    SPORTS: "false",
  });

  const hideMessage = () => {
    setShowMessage(true);
  };
  const heartClick = () => {
    navigate("/likeitem");
  };

  const SignClick = (e) => {
    navigate("/login");
    console.log(e, "SignClick");
  };

  const cartClick = () => {
    navigate("/addcart");
  };
  const notificationClick = () => {
    navigate("/notification");
  };

  return (
    <>
      <div className="nav_header">
        {/* <div className="top-right">
          <p className="vr-border">Sell with us</p>
          <p className="vr-border">call us</p>
          <p>download App</p>
          <img src="/Image/windows.png" alt="" />
        </div> */}
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
                  <img onClick={cartClick} src="/Image/cart.png" alt="cart" />
                  {/* <p onClick={SignClick} className="sign_hover">
                    Sign In
                  </p> */}
                  {userLogin ? (
                    <DropdownButton
                      id="dropdown-basic-button"
                      title="Dropdown button"
                    >
                      <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        <span onClick={() => notificationClick()}>
                          <img
                            src="/Image/notification.png"
                            alt="notification"
                          />
                          Notification
                        </span>
                      </Dropdown.Item>

                      <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
                    </DropdownButton>
                  ) : (
                    <DropdownButton
                      id="dropdown-basic-button"
                      title="Dropdown button"
                    >
                      <Dropdown.Item href="#/action-1">
                        <span onClick={() => notificationClick()}>
                          <img
                            src="/Image/notification.png"
                            alt="notification"
                          />
                          Notification
                        </span>
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        <p onClick={SignClick} className="sign_hover">
                          Sign In
                        </p>
                      </Dropdown.Item>
                      {/* <Dropdown.Item href="#/action-3">Logout</Dropdown.Item> */}
                    </DropdownButton>
                  )}
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
                    INSTEPCART
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className=" hide_links ">
                    <Nav.Link href="">
                      <img src="/Image/location.png" alt="location" />
                      <img src="/Image/cart.png" alt="cart" />
                    </Nav.Link>
                    <Nav.Link href="www.google.com">MOBILE & MORE</Nav.Link>
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
          <div
            className="position-relative"
            onMouseOver={() => {
              setShowMessage({ ...showMessage, MOBILE: "false" });
            }}
            onMouseOut={hideMessage}
          >
            <p>MOBILE & MORE</p>

            {showMessage.MOBILE && (
              <Container>
                <Row>
                  <Col md={{ span: 6, offset: 3 }}>
                    <div
                      className="mouseoverdiv"
                      style={{ backgroundColor: "white" }}
                    >
                      {" "}
                      <ListMobile />
                    </div>
                  </Col>
                </Row>
              </Container>
            )}
          </div>

          <div
            className="position-relative"
            onMouseOver={() => {
              setShowMessage({ ...showMessage, MEN: "true" });
            }}
            onMouseOut={hideMessage}
          >
            <p>MEN</p>
            {showMessage.MEN && (
              <Container>
                <Row>
                  <Col md={{ span: 6, offset: 3 }}>
                    <div
                      className="mouseoverdiv"
                      style={{ backgroundColor: "white" }}
                    >
                      {" "}
                      hellooo
                    </div>
                  </Col>
                </Row>
              </Container>
            )}
          </div>

          <div
            className="position-relative"
            onMouseOver={() => {
              setShowMessage({ ...showMessage, WOMEN: "true" });
            }}
            onMouseOut={hideMessage}
          >
            <p>WOMEN</p>

            {showMessage.WOMEN && (
              <Container>
                <Row>
                  <Col md={{ span: 6, offset: 3 }}>
                    <div
                      className="mouseoverdiv"
                      style={{ backgroundColor: "white" }}
                    >
                      women
                    </div>
                  </Col>
                </Row>
              </Container>
            )}
          </div>
          <div
            className="position-relative"
            onMouseOver={() => {
              setShowMessage({ ...showMessage, HOMEKITCHEN: "true" });
            }}
            onMouseOut={hideMessage}
          >
            <p>HOME & KITCHEN</p>

            {showMessage.HOMEKITCHEN && (
              <Container>
                <Row>
                  <Col md={{ span: 6, offset: 3 }}>
                    <div
                      className="mouseoverdiv"
                      style={{ backgroundColor: "white" }}
                    >
                      {" "}
                      HOMEKITCHEN
                    </div>
                  </Col>
                </Row>
              </Container>
            )}
          </div>

          <div
            className="position-relative"
            onMouseOver={() => {
              setShowMessage({ ...showMessage, APPLIANCES: "true" });
            }}
          >
            <p onMouseOut={hideMessage}>APPLIANCES</p>

            {showMessage.APPLIANCES && (
              <Container>
                <Row>
                  <Col md={{ span: 6, offset: 3 }}>
                    <div
                      className="mouseoverdiv"
                      style={{ backgroundColor: "white" }}
                    >
                      {" "}
                      APPLIANCES
                    </div>
                  </Col>
                </Row>
              </Container>
            )}
          </div>
          <div
            className="position-relative"
            onMouseOver={() => {
              setShowMessage({ ...showMessage, SPORTS: "true" });
            }}
          >
            <p onMouseOut={hideMessage}>SPORTS & MORE</p>
            {showMessage.SPORTS && (
              <Container>
                <Row>
                  <Col md={{ span: 6, offset: 3 }}>
                    <div
                      className="mouseoverdiv"
                      style={{ backgroundColor: "white" }}
                    >
                      {" "}
                      SPORTS
                    </div>
                  </Col>
                </Row>
              </Container>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbaar;
