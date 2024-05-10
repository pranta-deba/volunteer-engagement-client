import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import ErrorPage from "../pages/ErrorPage";
import AddVolunteer from "../pages/AddVolunteer";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/add_volunteer",
                element: <AddVolunteer/>
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