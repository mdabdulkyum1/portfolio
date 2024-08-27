/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contacts from "./Contacts";
import Portfolio from "./Portfolio";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Close the menu when a link is clicked
  const handleLinkClick = () => setIsMenuOpen(false);

  return (
    <div className="text-slate-gray min-h-screen">
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
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
            <ul className="hidden lg:flex lg:items-center lg:space-x-6">
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
            className={`fixed inset-y-0 left-0 bg-deep-navy w-64 transform ${
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out lg:hidden z-50`}
          >
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-steel-gray focus:outline-none"
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
            <ul className="space-y-2 px-4 py-4">
              <li>
                <Link
                  to="/"
                  onClick={handleLinkClick}
                  className="block text-steel-gray hover:text-slate-gray hover:bg-deep-navy py-2 px-4 rounded font-bold"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={handleLinkClick}
                  className="block text-steel-gray hover:text-slate-gray hover:bg-deep-navy py-2 px-4 rounded font-bold"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  onClick={handleLinkClick}
                  className="block text-steel-gray hover:text-slate-gray hover:bg-deep-navy py-2 px-4 rounded font-bold"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={handleLinkClick}
                  className="block text-steel-gray hover:text-slate-gray hover:bg-deep-navy py-2 px-4 rounded font-bold"
                >
                  Contact Me
                </Link>
              </li>
              <li>
                <Link
                  to="/hire"
                  onClick={handleLinkClick}
                  className="block bg-gradient-to-r from-slate-500 to-slate-900 text-white py-2 px-6 rounded-md font-bold shadow-sm hover:bg-gradient-to-r hover:from-slate-500 hover:to-slate-900 transition duration-300 tracking-widest"
                >
                  Hire
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </main>
    </div>
  );
};

export default Navbar;
