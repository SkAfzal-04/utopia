import React from "react";
//import { Button } from "../components/ui/button"; // Import button component
import vid1 from "../assets/vid1.mp4";

export function Home  ()  {
  return (
    <div className="relative w-full h-screen mb-[-130px]">
      {/* Video Background */}
      <div className="absolute top-[-100px] left-0 w-full h-full">
      <video autoPlay muted loop className="w-full h-full object-cover">
          <source src={vid1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay dark color */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-90"></div>
      </div>

      {/* Content on top of video */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center text-white space-y-6">
        <p className="text-xl text-white-500">28-29 JAN, 2025</p>
        <h1 className="text-6xl md:text-8xl font-bold neon-text">UTOPIA-2K25</h1>
        <p className="text-2xl">MCKV INSTITUTE OF ENGINEERING</p>

        {/*<Button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 mt-8 rounded-lg hover:opacity-90 transition-opacity">
          Get Tickets
        </Button>*/}
      </div>
    </div>
  );
};


