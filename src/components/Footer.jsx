import React from "react";
import { FaReact, FaFacebook, FaTwitter, FaInstagram ,FaEnvelope, FaWhatsapp} from "react-icons/fa";
import logo from "../assets/logo-main.png"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 px-4 md:py-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
          <img
            src= {logo}// Path to the logo image in the public folder
            alt="Logo"
            className="h-12 mr-4"  // Adjust the size of the logo as needed
          />
            <h2 className="text-xl md:text-2xl font-bold">Utopia-2k25</h2>
          </div>

          <div className="flex gap-6">
            {[
              { Icon: FaWhatsapp, href: "https://whatsapp.com/channel/0029Vb1611T8fewpIkWGQs0Z ", hoverColor: "hover:text-green-400" },
              { Icon: FaInstagram, href: "https://www.instagram.com/utopia_.2k25/profilecard/?igsh=bW1hNWdjY2xzODdu", hoverColor: "hover:text-pink-400" },
              { Icon: FaEnvelope, href: "mailto:utopia@mckvie.edu.in", hoverColor: "hover:text-yellow-400" }
              
            ].map(({ Icon, href, hoverColor }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={href.split('.com')[0].replace('https://', '')}
                className={`${hoverColor} transition-colors duration-300`}
              >
                <Icon className="w-5 h-5 md:w-6 md:h-6" />
              </a>
            ))}
          </div>
        </div>

        <div className="text-center mt-6 text-sm md:text-base text-gray-400">
          © {new Date().getFullYear()} All rights reserved to Utopia-2k25 Developers team.
        </div>
      </div>
    </footer>
  );
};

export default Footer;