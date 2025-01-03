import React from "react";
import { FaReact, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <FaReact className="text-blue-400 w-12 h-12" />
          <h2 className="text-2xl font-bold">Utopia-2k25</h2>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-6 md:mt-0">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook className="w-6 h-6 text-white hover:text-blue-500 transition duration-300" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter className="w-6 h-6 text-white hover:text-blue-400 transition duration-300" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram className="w-6 h-6 text-white hover:text-pink-400 transition duration-300" />
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-6 text-gray-400">
        © {new Date().getFullYear()} All rights reserved to Utopia-2k25 Developers team.
      </div>
    </footer>
  );
};

export default Footer;

