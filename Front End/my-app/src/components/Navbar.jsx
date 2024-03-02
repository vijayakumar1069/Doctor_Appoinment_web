import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-[#B5C0D0] p-4 flex items-center justify-between">
      {/* Logo on the left */}
      <div className="flex items-center">
        <div className="font-bold text-2xl md:text-3xl lg:text-4xl text-gray-800 mr-4">
          MyClinic
        </div>
      </div>

      {/* Hamburger Menu and Login Button on the right */}
      <div className="flex items-center space-x-4">
        {/* Navigation Links (visible on larger screens) */}
        <div className="hidden md:flex space-x-4">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/doctors">Our Doctors</NavLink>
          <NavLink href="/contact">Contact Us</NavLink>
        </div>

        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-800 hover:text-gray-600 transition duration-300 focus:outline-none"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Login Button (visible on larger screens) */}
        <div className="hidden md:block">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Login
          </button>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden fixed top-0 left-0 h-screen w-screen bg-white z-50 p-4`}
      >
        <div className="flex flex-col space-y-4">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/doctors">Our Doctors</NavLink>
          <NavLink href="/contact">Contact Us</NavLink>
        </div>
        {/* Login Button (visible on mobile) */}
        <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Login
        </button>
      </div>
    </div>
  );
};

const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="block text-gray-800 hover:text-gray-600 transition duration-300"
  >
    {children}
  </a>
);

export default Navbar;
