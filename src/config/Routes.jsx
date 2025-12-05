import Home from "../pages/home";
import { FaHome, FaUserEdit } from "react-icons/fa";
import { Navigate } from "react-router-dom";
import { MdDashboard } from "react-icons/md";


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
                element: <Home/>,
                icon: <FaHome/>
            },
            {
                name: "Dashboard",
                path: "dashboard",
                element: <Dashboard/>,
                icon: <MdDashboard />
            },
            {
                name: ""
            }
        ]
    }
]