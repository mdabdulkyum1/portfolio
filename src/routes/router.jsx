import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from './../layouts/MainLayout';
import About from "../pages/About";
import Portfolio from "../pages/Portfolio";
import ContactForm from "../pages/ContactForm";
import ProjectDetails from "../pages/ProjectDetails";

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
            }, 
            {
                path: 'details/:id',
                element: <ProjectDetails></ProjectDetails>,
                loader: ()=> fetch("/portfolio.json")
            }
         
        ]
    }
])

export default router;