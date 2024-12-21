import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import "./index.css";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Performers} from "./pages/Performers"
import { Schedule } from "./pages/Schedule"
import { Sponsors } from "./pages/Sponsors"
import './App.css';



function App() {
  return (
    <div className="bg-gray-900 text-white">
      <>
      <Router>
        <Navbar />
        {/* <div className="pages"> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/schedule" element={<Schedule/>} />
            <Route path="/sponsors" element={<Sponsors/>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/perfomers" element={<Performers />} />
          </Routes>
        {/* </div> */}
      </Router>
  </>
    
     
      <main className="pt-24">
        
     
        
       
        
        <section id="performers" className="h-screen flex items-center justify-center bg-gray-900">
          <div className="space-y-8 text-center">
            <h2 className="text-4xl font-bold text-yellow-400">Performers</h2>
            <p className="text-lg">Explore our services</p>
          </div>
        </section>
        
        <section id="schedule" className="h-screen flex items-center justify-center bg-gray-900">
          <div className="space-y-8 text-center">
            <h2 className="text-4xl font-bold text-yellow-400">Schedule</h2>
            <p className="text-lg">Check out our portfolio</p>
          </div>
        </section>
        <section id="team" className="h-screen flex items-center justify-center bg-gray-900">
          <div className="space-y-8 text-center">
            <h2 className="text-4xl font-bold text-yellow-400">Our team</h2>
            <p className="text-lg">Get in touch with us</p>
          </div>
        </section>
        <section id="sponsors" className="h-screen flex items-center justify-center bg-gray-900">
          <div className="space-y-8 text-center">
            <h2 className="text-4xl font-bold text-yellow-400">Sponsors</h2>
            <p className="text-lg">Get in touch with us</p>
          </div>
        </section>
        <section id="contact" className="h-screen flex items-center justify-center bg-gray-900">
          <div className="space-y-8 text-center">
            <h2 className="text-4xl font-bold text-yellow-400">Contact Us</h2>
            <p className="text-lg">Get in touch with us</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
