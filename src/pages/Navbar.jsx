import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contacts from "./Contacts";
import Portfolio from "./Portfolio";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleLinkClick = () => setIsMenuOpen(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  return (
    <div className={`min-h-screen ${darkMode ? "bg-bg-light" : "bg-deep-navy"}`}>
      <div className="bg-nav-navy border-b border-gray-600 sticky top-0 z-50">
        <nav className="bg-nav-navy p-4 max-w-6xl mx-auto">
          <div className="container mx-auto flex items-center justify-between">
            <Link
              to="/"
              className="text-slate-gray text-2xl font-bold shadow-sm shadow-gray-400"
            >
              Md Abdul Kyum
            </Link>
            <button
              onClick={toggleMenu}
              className="text-steel-gray lg:hidden focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
             {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="hidden lg:block text-slate-gray focus:outline-none"
            >
              <svg
                className={`h-10 w-10 fill-current ${darkMode ? "swap-off" : "swap-on"}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                {/* Moon Icon */}
                <path
                  className={darkMode ? "hidden" : "block"}
                  d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
                />
                {/* Sun Icon */}
                <path
                  className={!darkMode ? "hidden" : "block"}
  
                  d="M5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/>
              </svg>
            </button>

            <ul className="hidden lg:flex lg:items-center lg:space-x-6">
              {/* Navigation Links */}
              <li>
                <Link
                  to="/"
                  className="hover:text-slate-gray hover:bg-deep-navy py-1 px-4 rounded font-bold"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-steel-gray hover:text-slate-gray hover:bg-deep-navy py-1 px-4 rounded font-bold"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="text-steel-gray hover:text-slate-gray hover:bg-deep-navy py-1 px-4 rounded font-bold"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-steel-gray hover:text-slate-gray hover:bg-deep-navy py-1 px-4 rounded font-bold"
                >
                  Contact Me
                </Link>
              </li>
              <li>
                <Link
                  to="/hire"
                  className="bg-gradient-to-r from-slate-500 to-slate-900 text-white py-2 px-6 rounded-md font-bold shadow-sm hover:bg-gradient-to-r hover:from-slate-500 hover:to-slate-900 transition duration-300 tracking-widest"
                >
                  Hire
                </Link>
              </li>
            </ul>
            
          </div>
          
          {/* Mobile Menu */}
          <div
            className={`fixed inset-0 bg-deep-navy transform transition-transform ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-slate-gray"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            <ul className="flex flex-col items-center mt-16 bg-nav-navy space-y-6 py-6">
              <li>
                <Link
                  to="/"
                  onClick={handleLinkClick}
                  className="text-slate-gray hover:text-slate-gray hover:bg-deep-navy py-2 px-4 rounded font-bold"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={handleLinkClick}
                  className="text-slate-gray hover:text-slate-gray hover:bg-deep-navy py-2 px-4 rounded font-bold"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  onClick={handleLinkClick}
                  className="text-slate-gray hover:text-slate-gray hover:bg-deep-navy py-2 px-4 rounded font-bold"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={handleLinkClick}
                  className="text-slate-gray hover:text-slate-gray hover:bg-deep-navy py-2 px-4 rounded font-bold"
                >
                  Contact Me
                </Link>
              </li>
              <li>
                <Link
                  to="/hire"
                  onClick={handleLinkClick}
                  className="bg-gradient-to-r from-slate-500 to-slate-900 text-white py-2 px-4 rounded-md font-bold shadow-sm hover:bg-gradient-to-r hover:from-slate-500 hover:to-slate-900 transition duration-300 tracking-widest"
                >
                  Hire
                </Link>
              </li>
            </ul>
          </div>
          <button
              onClick={toggleDarkMode}
              className=" lg:hidden text-slate-gray absolute right-16 top-4 focus:outline-none"
            >
              <svg
                className={`h-8 w-8 fill-current ${darkMode ? "swap-off" : "swap-on"}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                {/* Moon Icon */}
                <path
                  className={darkMode ? "hidden" : "block"}
                  d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
                />
                {/* Sun Icon */}
                <path
                  className={!darkMode ? "hidden" : "block"}
  
                  d="M5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/>
              </svg>
          </button>
        </nav>
      </div>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contacts />} />
      </Routes>
    </div>
  );
};

export default Navbar;
