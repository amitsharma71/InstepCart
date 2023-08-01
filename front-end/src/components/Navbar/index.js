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
            className="bg-body-tertiary py-4"
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
                    <Nav.Link href="www.google.com">ELECTRONICS</Nav.Link>
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
          <div class="Nav_link">
            ELECTRONICS
            <div className="nav_Filter Electric_positon">
              <div>
                <ul className="border_right">
                  <h5>Smartphone</h5>
                  <li>Apple</li>
                  <li>Samsung</li>
                  <li>Dell</li>
                  <li>Sony</li>
                </ul>
                <ul className="border_right">
                  <h5> Laptop</h5>
                  <li>Apple</li>
                  <li>Samsung</li>
                  <li>Dell</li>
                  <li>Sony</li>
                </ul>
                <ul>
                  <h5>Speaker</h5>
                  <li>Samsung</li>
                  <li>DEll</li>
                  <li>Sony</li>
                  <li>Bose</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="Nav_link">
            MEN
            <div className="nav_Filter men_position">
              <div>
                <ul className="border_right">
                  <h5> Mens's Clothing</h5>
                  <li>Nike</li>
                  <li> Adidas</li>
                  <li> Levi's</li>
                </ul>
                <ul className="border_right">
                  <h5> Footwear</h5>
                  <li>Nike</li>
                  <li> Adidas</li>
                  <li> Levi's</li>
                  <li> Puma</li>
                </ul>   
                <ul>
                  <h5> Glasses</h5>
                  <li>Ray-Ban</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="Nav_link">
            WOMEN
            <div className="nav_Filter Women_Position">
              <div>
                <ul className="border_right">
                  <h5> Women's Clothing</h5>
                  <li>Zara</li>
                  <li> Gucci</li>
                  <li> H&M</li>
                  <li> Prada</li>
                  <li> Jimmy Choo</li>
                </ul>
                <ul className="border_right">
                  <h5> Footwear</h5>
                  <li>Zara</li>
                  <li> Gucci</li>
                  <li> H&M</li>
                  <li> Prada</li>
                  <li> Jimmy Choo</li>
                </ul>
                <ul>
                  <h5> Glasses</h5>
                  <li>Zara</li>
                  <li> Gucci</li>
                  <li> H&M</li>
                  <li> Prada</li>
                  <li> Jimmy Choo</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="Nav_link">
            HOME & KITCHEN
            <div className="nav_Filter home_position">
            <div>
                <ul className="border_right">
                  <h5> Kitchen & Dining</h5>
                  <li>KitchenAid</li>
                  <li> Cuisinart</li>
                  <li> IKEA</li>
                  <li> H&M Home</li>
                  <li>West Elm</li>
                </ul>
                <ul>
                  <h5> Decor</h5>
                  <li>KitchenAid</li>
                  <li> Cuisinart</li>
                  <li> IKEA</li>
                  <li> H&M Home</li>
                  <li>West Elm</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="Nav_link">
            APPLIANCES
            <div className="nav_Filter Appliance_position">
            <div>
                <ul className="border_right">
                  <h5>Aircooler</h5>
                  <li>Honeywell</li>
                  <li> Dyson</li>
                  <li> Bajaj</li>
                  <li> Philips</li>
                  <li>Vornado</li>
                </ul>
                <ul>
                  <h5> Room Heaters</h5>
                  <li>KitchenAid</li>
                  <li> Dyson</li>
                  <li> Bajaj</li>
                  <li> Philips</li>
                  <li>Vornado</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="Nav_link">
            SPORTS & MORE
            <div className="nav_Filter sport_position">
            <div>
                <ul className="border_right">
                  <h5>Sports</h5>
                  <li>Nike</li>
                  <li> Under Armour</li>
                  <li> Reebok</li>
                  <li> Adidas</li>
                  <li>Fitbit</li>
                </ul>
                <ul>
                  <h5>Health & Wellness</h5>
                  <li>Nike</li>
                  <li> Under Armour</li>
                  <li> Reebok</li>
                  <li> Adidas</li>
                  <li>Fitbit</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbaar;
