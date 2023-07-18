import AddtoCart from "../components/Addcart/AddtoCart";
import Home from "../components/Homepage/Home";
import ProductDetails from "../components/Product/ProductDetails";
import Login from "../components/loginpage/LoginPage";
import CreateLogin from "../components/signup/CreatePage";
import LoginLayout from "./LoginLayout";

const protects = {
  default: [
    {
      path: "/",
      element: <LoginLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/home", element: <Home /> },
        { path: "/login", element: <Login /> },
        { path: "/createlogin", element: <CreateLogin /> },
        { path: "/addcart", element: <AddtoCart /> },
          ],
    },
  ],
};

export const defaultProtect = protects["default"];
