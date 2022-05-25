import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ toggle }) => {
  return (
    <nav
      className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono"
      role="navigation"
    >
      <Link to="/" className="pl-8">
        EGG
      </Link>
      <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
        <svg
          className="w-8 h-8"
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
          />
        </svg>
      </div>
      <div className="pr-8 md:block  hidden">
        <Link to="/" className="p-4">
          Home
        </Link>
        <Link to="/about" className="p-4">
          About
        </Link>
        <Link to="/services" className="p-4">
          Services
        </Link>
        <Link to="/projects" className="p-4">
          Projects
        </Link>
        <Link to="/properties" className="p-4">
          Properties
        </Link>
        <Link to="/contact" className="p-4">
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
