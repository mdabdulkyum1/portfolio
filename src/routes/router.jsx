import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from './../layouts/MainLayout';
import About from "../pages/About";
import Portfolio from "../pages/Portfolio";
import ContactForm from "../pages/ContactForm";
import ProjectDetails from "../pages/ProjectDetails";
import Skills from "../pages/Skills";
import Details from "../pages/projects/Details";

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
                path: "/skills",
                element: <Skills></Skills>
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
            },
            {
                path:'/projects/:id', 
                element:<Details></Details>,
              }
         
        ]
    }
])

export default router;