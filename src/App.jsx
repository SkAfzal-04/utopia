import React from 'react';
import Navbar from './components/Navbar';
import './index.css';
// import { Contact } from './pages/Contact';
import { About } from './pages/About';
import { Home } from './pages/Home';
import Performers from './pages/Performers';  // Default import for performers section
import { Schedule } from './pages/Schedule';
// import { Sponsors } from './pages/Sponsors';
import './App.css';

function App() {
  return (
    <div className="bg-gray-900 text-white">
      <Navbar />
      <main className="pt-24">
        <Home />
        <About />
        <Performers />
        <Schedule />
        {/* <Sponsors />
        <Contact /> */}
      </main>
    </div>
  );
}

export default App;
