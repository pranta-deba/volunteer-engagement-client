import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: "hi",
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/profile",
                element: "profile"
            },
            {
                path: "/sign_in",
                element: <SignIn/>
            },
            {
                path: "/sign_up",
                element: <SignUp/>
            },
        ]
    },
]);