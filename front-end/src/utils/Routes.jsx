import AddtoCart from "../components/Addcart/AddtoCart";
import Home from "../components/Homepage/Home";
import ProductDetails from "../components/Product/ProductDetails";
import Notification from "../components/NotificationPage/Notification";
import ProductDetail from "../components/ProductDetailPage/ProductDetail";
import LikeItem from "../components/likeProduct/LikeItem";
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
                { path: "/notification", element: <Notification /> },
                { path: "/likeitem", element: <LikeItem /> },
                { path: "/productdetail", element: <ProductDetail /> },
                { path: "*", element: "NO PAGE FOUND" }
            ],
        },
    ]
}

export const defaultProtect = protects["default"];
