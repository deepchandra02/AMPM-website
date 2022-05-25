import React from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? "grid grid-rows-4 text-center items-center bg-yellow-500"
          : "hidden"
      }
      onClick={toggle}
    >
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
  );
};

export default Dropdown;
