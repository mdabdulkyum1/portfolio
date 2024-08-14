/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About.jsx';
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    return(
        <div className="bg-midnight-blue text-slate-gray min-h-screen">
        <nav className="bg-nav-navy p-4 border-b border-gray-600 sticky top-0">
          <div className="container mx-auto flex items-center justify-between">
            <Link to="/" className="text-steel-gray text-2xl font-bold shadow-sm shadow-gray-400">Md Abdul Kyum</Link>
            <button
              onClick={toggleMenu}
              className="text-steel-gray lg:hidden focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
            <ul className={`lg:flex lg:items-center lg:space-x-6 ${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
              <li><Link to="/" className="hover:text-slate-gray hover:bg-deep-navy py-1 px-4 rounded">Home</Link></li>
              <li><Link to="/about" className="hover:text-slate-gray hover:bg-deep-navy py-1 px-4 rounded">About</Link></li>
              <li><Link to="/profile" className="hover:text-slate-gray hover:bg-deep-navy py-1 px-4 rounded">Profile</Link></li>
              <li><Link to="/contact" className="hover:text-slate-gray hover:bg-deep-navy py-1 px-4 rounded">Contact</Link></li>
              <li><Link to="/hire" className="hover:text-slate-gray hover:bg-deep-navy py-1 px-4 rounded">Hire</Link></li>
            </ul>
          </div>
          <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-deep-navy`}>
            <ul className="space-y-2 px-4 py-4">
              <li><Link to="/" className="block text-steel-gray hover:text-slate-gray hover:bg-deep-navy py-1 px-4">Home</Link></li>
              <li><Link to="/about" className="block text-steel-gray hover:text-slate-gray hover:bg-deep-navy py-1 px-4">About</Link></li>
              <li><Link to="/profile" className="block text-steel-gray hover:text-slate-gray hover:bg-deep-navy py-1 px-4">Profile</Link></li>
              <li><Link to="/contact" className="block text-steel-gray hover:text-slate-gray hover:bg-deep-navy py-1 px-4">Contact</Link></li>
              <li><Link to="/hire" className="block text-steel-gray hover:text-slate-gray hover:bg-deep-navy py-1 px-4">Hire</Link></li>
            </ul>
          </div>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    );
}

export default Navbar;