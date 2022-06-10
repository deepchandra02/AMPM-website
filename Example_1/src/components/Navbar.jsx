import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../images/almadar-logo.jpg";

import { Link } from "react-scroll";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Navbar = () => {
  // responsive toggle function
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const handleClose = () => setNav(!nav);

  return (
    <div className="w-screen h-[80px] z-10 bg-white fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <div>
            {/* <!-- Website Logo --> */}
            <Link to="/" className="flex items-center justify-start py-4 px-2">
              <img className="h-14 w-auto" src={Logo} alt="logo" />
              <span className="p-2 text-black font-montserrat">
                Property <br /> Management
              </span>
            </Link>
          </div>
        </div>
        <div className="hidden lg:flex justify-end items-center pr-4">
          <ul className="hidden justify-between md:flex">
            <li>
              <Link to="home" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} offset={-200} duration={500}>
                About
              </Link>
            </li>
            <li>
              <Link to="support" smooth={true} offset={-50} duration={500}>
                Support
              </Link>
            </li>
            <li>
              <Link to="platforms" smooth={true} offset={-100} duration={500}>
                Platforms
              </Link>
            </li>
            <li>
              <Link to="pricing" smooth={true} offset={-50} duration={500}>
                Pricing
              </Link>
            </li>
          </ul>
        </div>

        <div className="lg:hidden mr-4" onClick={handleClick}>
          {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
        </div>
      </div>

      <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link onClick={handleClose} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            to="about"
            smooth={true}
            offset={-200}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            to="support"
            smooth={true}
            offset={-50}
            duration={500}
          >
            Support
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            to="platforms"
            smooth={true}
            offset={-100}
            duration={500}
          >
            Platforms
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            to="pricing"
            smooth={true}
            offset={-50}
            duration={500}
          >
            Pricing
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
