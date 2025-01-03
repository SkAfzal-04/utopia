import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // For icons
import logo from '../logo.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-black p-4 shadow-lg fixed w-full top-0 z-50">
     
      <div className="flex items-center">
        <a href="#home">
          <img
            src= {logo}// Path to the logo image in the public folder
            alt="Logo"
            className="h-12 mr-4"  // Adjust the size of the logo as needed
          />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 ml-auto">
          {["Home", "About", "Performers", "Schedule","Our Team","Sponsors","Contact"].map((item) => (
            <li key={item} className="group">
              <a
                href={`#${item.toLowerCase()}`}
                className="text-white text-lg relative group-hover:text-yellow-400 transition duration-300"
              >
                {item}
                <span className="absolute -bottom-1 right-0 w-0 h-1 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white ml-auto" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="absolute top-16 right-0 w-full bg-gray-800 text-center p-6 space-y-4 md:hidden">
            {["Home", "About", "Performers", "Our Team","Schedule","Sponsors","Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-white text-xl block hover:text-yellow-400 transition duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

