import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from './../layouts/MainLayout';
import About from "../pages/About";
import Portfolio from "../pages/Portfolio";
import ContactForm from "../pages/ContactForm";

const router = createBrowserRouter([
    {
        path:"/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "about",
                element: <About></About>
            },
            {
                path: "portfolio",
                element: <Portfolio></Portfolio>
            },
            {
                path: "contact",
                element: <ContactForm></ContactForm>
            }
         
        ]
    }
])

export default router;