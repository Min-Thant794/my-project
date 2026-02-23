import Home from "../pages/Home";
import { FaHome, FaUserEdit } from "react-icons/fa";
import { Navigate } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import Deals from "../pages/Deals";
import Cars from "../pages/Cars";
import Booking from "../pages/Booking";
import AboutUs from "../pages/AboutUs";


export const routes = [
    {
        name: "Login",
        path: "/login",
        elemenet: <Login/>
    },
    {
        name: "Main",
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <Navigate to="/home"/>
            },
            {
                name: "Home",
                path: "/home",
                elemenet: <Home/>,
                //icon: <FaHome/>
            },
            {
                name: "Deals",
                path: "/deals",
                element: <Deals/>,
                //icon: <MdDashboard />
            },
            {
                name: "Cars",
                path: "/cars",
                element: <Cars/>
            },
            {
                name: "Booking",
                path: "/booking",
                element: <Booking/>
            },
            {
                name: "About Us",
                path: "/about-us",
                element: <AboutUs/>
            }
        ]
    }
]