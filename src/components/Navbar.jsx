import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // responsive toggle function
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const handleClose = () => setNav(!nav);

  return (
    <nav
      className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg font-montserrat"
      role="navigation"
    >
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <Link to="/" className="text-3xl font-bold mr-4 sm:text-4xl">
            Al Madar Property Management
          </Link>

          <ul className="hidden md:flex">
            <li>
              <Link to="/" className="p-4">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="p-4">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="p-4">
                Services
              </Link>
            </li>
            <li>
              <Link to="/projects" className="p-4">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/properties" className="p-4">
                Properties
              </Link>
            </li>
            <li>
              <Link to="/contact" className="p-4">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="px-4 cursor-pointer md:hidden" onClick={handleClick}>
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
      </div>
      <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link onClick={handleClose} to="/">
            Home
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link onClick={handleClose} to="/about">
            About
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link onClick={handleClose} to="/services">
            Services
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link onClick={handleClose} to="/projects">
            Projects
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link onClick={handleClose} to="/properties">
            Properties
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link onClick={handleClose} to="/contact">
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
