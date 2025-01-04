import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from './../components/Navbar/Navbar';

const MainLayout = () => {
    return (
        <div className="pt-16">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;