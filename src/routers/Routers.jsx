import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import ErrorPage from "../pages/ErrorPage";
import AddVolunteer from "../pages/AddVolunteer";
import Volunteers from "../pages/Volunteers";
import Details from "../pages/Details";
import ManageMyPost from "../pages/ManageMyPost";
import VolunteerRequest from "../pages/VolunteerRequest";
import Private from "./Private";
import Programs from "../pages/Programs";
import About from "../pages/About";
import Profile from "../pages/Profile";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/add_volunteer",
                element: <Private><AddVolunteer /></Private>
            },
            {
                path: "/volunteers",
                loader: () => fetch(`${import.meta.env.VITE_API_URL}/volunteers_count`),
                element: <Volunteers />
            },
            {
                path: "/details/:id",
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/volunteers/${params.id}`),
                element: <Private><Details /></Private>
            },
            {
                path: "/manage_post",
                element: <Private><ManageMyPost /></Private>
            },
            {
                path: "/program",
                element: <Programs/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/profile",
                element: <Private><Profile/></Private>
            },
            {
                path: "/volunteer_request",
                element: <Private><VolunteerRequest /></Private>
            },
            {
                path: "/sign_in",
                element: <SignIn />
            },
            {
                path: "/sign_up",
                element: <SignUp />
            },
        ]
    },
]);