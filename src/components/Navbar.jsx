import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/almadar-logo.jpg";

const Navbar = () => {
  // responsive toggle function
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const handleClose = () => setNav(!nav);

  return (
    <nav className="bg-white h-18 w-screen fixed drop-shadow-lg">
      <div className="justify-around px-2 lg:px-10">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              {/* <!-- Website Logo --> */}
              <Link
                to="/"
                className="flex items-center justify-start py-4 px-2"
              >
                <img className="h-14 w-auto" src={Logo} alt="logo" />
                <span className="p-2 text-black font-montserrat">
                  Property <br /> Management
                </span>
              </Link>
            </div>
          </div>
          {/* <!-- Navbar items --> */}
          <div className="hidden lg:flex justify-end items-center space-x-5 ">
            <Link to="/" id="/" className="nav-items">
              Home
            </Link>
            <Link to="/about" id="about" className="nav-items">
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
            <Link
              to="/contact"
              className="p-2 pt-1 pb-1 current text-black font-montserrat transition duration-300 border-2 border-mpurple rounded-lg hover:bg-mpurple hover:text-white"
            >
              Contact Us
            </Link>
          </div>
          {/* <!-- Mobile menu button --> */}
          <div className="lg:hidden flex items-center" onClick={handleClick}>
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
