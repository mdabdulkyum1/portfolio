import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "./../components/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="pt-16 bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text">
      <Navbar />
      <main className="min-h-[70vh]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
