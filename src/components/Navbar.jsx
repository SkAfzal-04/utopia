import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from '../logo.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (sectionId) => {
    if (sectionId === 'team') {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
        
        // Set active tab to "team" in Contact component
        const teamTab = document.querySelector('[data-tab="team"]');
        if (teamTab) {
          teamTab.click();
        }
      }
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
    setIsOpen(false);
  };

  const navItems = ["Home", "Performers", "Schedule", "Our Team", "Registration" ,"Sponsors", "Contact"];

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-black p-4 shadow-lg fixed w-full top-0 z-50">
      <div className="flex items-center">
        <a href="#home">
          <img
            src={logo}
            alt="Logo"
            className="h-12 mr-4"
          />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 ml-auto">
          {navItems.map((item) => (
            <li key={item} className="group">
              <a
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.toLowerCase() === 'our team' ? 'team' : item.toLowerCase());
                }}
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
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-white text-xl block hover:text-yellow-400 transition duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.toLowerCase() === 'our team' ? 'team' : item.toLowerCase());
                  }}
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