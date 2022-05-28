import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/almadar-logo.jpg";

const Navbar = () => {
  // responsive toggle function
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const handleClose = () => setNav(!nav);

  return (
    <nav className="bg-white h-16 w-screen fixed drop-shadow-lg">
      <div className="justify-around px-6">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              {/* <!-- Website Logo --> */}
              <Link
                to="/"
                className="flex items-center justify-start py-4 px-2"
              >
                {/* cant' make responsive */}
                <img className="h-8 w-auto md:h-15" src={Logo} alt="logo" />
                <span className="font-montserrat text-gray-500 text-md">
                  Property Management
                </span>
              </Link>
            </div>
          </div>
          {/* <!-- Navbar items --> */}
          <div className="hidden md:flex justify-end items-center space-x-5 ">
            <Link to="/" className="nav-items">
              Home
            </Link>
            <Link to="/about" className="nav-items">
              About
            </Link>
            <Link to="/services" className="nav-items">
              Services
            </Link>
            <Link to="/projects" className="nav-items">
              Projects
            </Link>
            <Link to="/properties" className="nav-items">
              Properties
            </Link>
            <Link to="/contact" className="nav-items">
              Contact Us
            </Link>
          </div>
          {/* <!-- Mobile menu button --> */}
          <div className="md:hidden flex items-center" onClick={handleClick}>
            <button className="outline-none mobile-menu-button">
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
            </button>
          </div>
        </div>
      </div>

      {/* <!-- mobile menu --> */}
      {/* <div className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}> */}
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
      {/* </div> */}
    </nav>
  );
};

export default Navbar;
