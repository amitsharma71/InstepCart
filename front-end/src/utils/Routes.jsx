import AddtoCart from "../components/Addcart/AddtoCart";
import Home from "../components/Homepage/Home";
// import ProductDetails from "../components/Product/ProductDetails";
import Notification from "../components/NotificationPage/Notification";
import LikeItem from "../components/likeProduct/LikeItem";
import Login from "../components/loginpage/LoginPage";
import CreateLogin from "../components/signup/CreatePage";
import LoginLayout from "./LoginLayout";
import { getToken, getUserId } from "./auth";
import Layout from "./Layout";
import { Navigate } from "react-router-dom";
import AdminLayout from "./AdminLayout";
import ProductDetails from "../components/Product/ProductDetails";
import Dashboard from "../admin/adminDashboard";
import ProductForm from "../admin/adminProductDetail/addProductForm";
import AllProductListing from "../admin/adminProductDetail/allDataListing";

const role = getUserId() ? getUserId()?.userRole : null;
console.log(role, "aaasdfgfds");
const isLoggedIn = getToken();
const protects = {
  user: [
    {
      path: "/",
      element: isLoggedIn ? <Layout /> : <Navigate to="/" />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/addcart", element: <AddtoCart /> },
        { path: "/notification", element: <Notification /> },
        { path: "/likeitem", element: <LikeItem /> },
        { path: "/productdetail/:id", element: <ProductDetails /> },
        { path: "*", element: "NO PAGE FOUND" },
      ],
    },
  ],
  admin: [
    {
      path: "/",
      element: isLoggedIn ? <AdminLayout /> : <Navigate to="/" />,
      children: [
        { path: "/", element: <Dashboard /> },
        { path: "productform", element: <ProductForm /> },
        { path: "allproductlist", element: <AllProductListing /> },
        // { path: "/createlogin", element: <CreateLogin /> },
        // { path: "/addcart", element: <AddtoCart /> },
        // { path: "/login", element: <Login /> },
        { path: "/notification", element: <Notification /> },
        { path: "/likeitem", element: <LikeItem /> },
        { path: "/productdetail/:id", element: <ProductDetails /> },
        // { path: "/updateproduct/:id", element: <ProductForm /> },
        { path: "*", element: "NO PAGE FOUND" },
      ],
    },
  ],

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
        { path: "/notification", element: <Notification /> },
        { path: "/likeitem", element: <LikeItem /> },
        { path: "/productdetail/:id", element: <ProductDetails /> },
        { path: "*", element: "NO PAGE FOUND" },
      ],
    },
  ],
};

export const protect =
  role && isLoggedIn ? protects[role] : protects["default"];
export const defaultProtect = protects["default"];
