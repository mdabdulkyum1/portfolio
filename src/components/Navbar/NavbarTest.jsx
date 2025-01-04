import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleLinkClick = () => setIsMenuOpen(false);

  const links = (
    <>
      <li>
        <NavLink to="/" className="">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className="">
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/portfolio" className="">
          Portfolio
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" className="">
          Contact Me
        </NavLink>
      </li>
    </>
  );

  return (
    // <div className="bg-white">
    //   <div className="bg-nav-navy border-b border-gray-600 sticky top-0 z-50">
    //     <nav className="bg-nav-navy p-4 max-w-6xl mx-auto">
    //       <div className="container mx-auto flex items-center justify-between">
    //         <Link
    //           to="/"
    //           className="text-slate-gray text-2xl font-bold shadow-sm shadow-gray-400"
    //         >
    //           Md Abdul Kyum
    //         </Link>
    //         <button
    //           onClick={toggleMenu}
    //           className="text-steel-gray lg:hidden focus:outline-none"
    //         >
    //           <svg
    //             className="w-6 h-6"
    //             fill="none"
    //             stroke="currentColor"
    //             viewBox="0 0 24 24"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth="2"
    //               d="M4 6h16M4 12h16M4 18h16"
    //             ></path>
    //           </svg>
    //         </button>
    //         <ul className=" hidden  lg:flex lg:items-center lg:space-x-6">
    //           {links}
    //         </ul>
    //       </div>

    //       {/* Mobile Menu */}
    //       <div
    //         className={`fixed inset-0 bg-deep-navy transform transition-transform ${
    //           isMenuOpen ? "translate-x-0" : "translate-x-full"
    //         }`}
    //       >
    //         <button
    //           onClick={toggleMenu}
    //           className="absolute top-4 right-4 text-slate-gray"
    //         >
    //           <svg
    //             className="w-6 h-6"
    //             fill="none"
    //             stroke="currentColor"
    //             viewBox="0 0 24 24"
    //             xmlns="http://www.w3.org/2000/svg"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth="2"
    //               d="M6 18L18 6M6 6l12 12"
    //             ></path>
    //           </svg>
    //         </button>
    //         <ul className="menu  flex flex-col items-center mt-16 bg-nav-navy space-y-6 py-6">
    //           {links}
    //         </ul>
    //       </div>
    //     </nav>
    //   </div>
    // </div>


    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <div className="">
    <Link
              to="/"
              className="text-slate-gray text-2xl font-bold shadow-sm shadow-gray-400"
            >
              Md Abdul Kyum
            </Link>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
  <NavLink
          to="/hire"
          className="bg-gradient-to-r from-slate-500 to-slate-900 text-white py-2 px-6 rounded-md font-bold shadow-sm hover:bg-gradient-to-r hover:from-slate-500 hover:to-slate-900 transition duration-300 tracking-widest"
        >
          Hire
        </NavLink>
  </div>
</div>
  );
};

export default Navbar;
