import React from "react";
import { Sidenav, Nav } from "rsuite";
import MagicIcon from "@rsuite/icons/legacy/Magic";
import "rsuite/dist/rsuite-no-reset.min.css";
import { AiFillTool, AiOutlineDashboard } from "react-icons/ai";
import { HiDocument } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const AllProductClick = () => {
    navigate("/allproductlist");
  };
  const AddProductClick = () => {
    navigate("/productform");
  };

  return (
    <div className="admin_sidebar col_hide">
      <Sidenav defaultOpenKeys={["3", "4"]}>
        <Sidenav.Body>
          <Nav activeKey="1">
            <Nav.Item eventKey="1">
              {" "}
              <AiOutlineDashboard />
              Dashboard
            </Nav.Item>{" "}
            <Nav.Menu eventKey="2" title="Component" icon={<MagicIcon />}>
              <Nav.Item eventKey="3-1">Button</Nav.Item>
              <Nav.Item eventKey="3-2">Cards</Nav.Item>
            </Nav.Menu>
            <Nav.Menu eventKey="3" title="Utilities" icon={<AiFillTool />}>
              <Nav.Item eventKey="3-1">Colors</Nav.Item>
              <Nav.Item eventKey="3-2">Borders</Nav.Item>
              <Nav.Item eventKey="3-2">Animations</Nav.Item>
              <Nav.Item eventKey="3-2">other</Nav.Item>
            </Nav.Menu>
            <Nav.Menu eventKey="4" title="Page" icon={<HiDocument />}>
              <Nav.Item eventKey="4-1">Login</Nav.Item>
              <Nav.Item eventKey="4-2">Register</Nav.Item>
              <Nav.Item eventKey="4-3">Forget password</Nav.Item>
              <Nav.Menu eventKey="4-5" title="Product">
                <Nav.Item eventKey="4-5-1" onClick={() => AllProductClick()}>
                  All Proucts
                </Nav.Item>
                <Nav.Item eventKey="4-5-2" onClick={() => AddProductClick()}>
                  Add Product
                </Nav.Item>
              </Nav.Menu>
            </Nav.Menu>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
};

export default Sidebar;
