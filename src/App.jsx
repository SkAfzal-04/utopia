import React, { useRef ,useState, useEffect} from "react";
import Navbar from "./components/Navbar";
import "./index.css";
// import { Contact } from './pages/Contact';

import { Home } from "./pages/Home";
import Performers from "./pages/Performers"; // Default import for performers section
import { Schedule } from "./pages/Schedule";
import Preloader from "./components/Preloader";
import Footer from "./components/Footer";
import "./App.css";
import Contact from "./pages/Contact";
import Registration from "./pages/Registration";
import EventCard from "./components/EventCards";
import Sponsors from "./components/Sponsors";

function App() {
  

  const nextSectionRef = useRef(null); // Create a reference to the next section

  // const scrollToNextSection = () => {
  //   // Scroll to the next section when the button is clicked
  //   nextSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  // };
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // Simulate loading
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />; // Show preloader while loading
  }

  return (
    <div className="bg-gray-900 text-white">
      <Navbar />
      <main className="pt-24">
        <section id="home">
          <Home />
        </section>
        {/*<section id="about">
          <About scrollToNextSection={scrollToNextSection}/>
        </section>*/}
        <section id="performers" ref={nextSectionRef}>
          <Performers />
        </section>
        <section id="schedule">
          <Schedule />
        </section>
        <section id="registration">
          <Registration />
        </section>
        <EventCard />
        <section id="contact">
          <Contact />
        </section>
        {/* <Sponsors /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;