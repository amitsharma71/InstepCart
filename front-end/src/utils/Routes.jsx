import Login from "../components/loginpage/LoginPage";
import CreateLogin from "../components/signup/CreatePage";
import LoginLayout from "./LoginLayout";



const protects = {
    default: [
        {
            path: "/",
            element: <LoginLayout />,
            children: [
                { path: "/", element: "HomePage" },
                { path: "/login", element: <Login /> },
                { path: "/createlogin", element: <CreateLogin /> },
                { path: "*", element: "NO PAGE FOUND" }
            ],
        },

    ]
}


export const defaultProtect = protects["default"];