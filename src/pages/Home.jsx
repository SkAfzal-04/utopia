import React from "react";
import vid1 from "../assets/vidbg.mp4";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";

export function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full">
      {/* Hero Section */}
      <section className="relative w-full h-screen -mt-16">
        <div className="absolute inset-0">
          <video 
            autoPlay 
            muted 
            loop 
            className="w-full h-full object-cover"
          >
            <source src={vid1} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-purple-900/50 to-black/90"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center text-white space-y-4 md:space-y-8 px-4 pt-16"
        >
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl font-light tracking-wider text-purple-300 font-orbitron"
          >
            29th-30th JAN, 2025
          </motion.p>
          
          <motion.h1 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8, duration: 1, type: "spring" }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-bold"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient-x font-orbitron">
              UTOPIA-2K25
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-xl sm:text-2xl md:text-3xl font-medium tracking-wide text-purple-200 font-orbitron"
          >
            MCKV INSTITUTE OF ENGINEERING
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="animate-bounce">
            <ArrowDown className="w-6 h-26 text-pink-500 font-extrabold" />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section ref={ref} className="w-full bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
              className="w-full lg:w-5/12"
            >
              <div className="relative group h-[300px] sm:h-[400px] lg:h-[450px] rounded-lg overflow-hidden">
                <div className="absolute -inset-0.5 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"
                style={{ willChange: 'filter' }}></div>
                <div className="relative h-full flex items-center justify-center rounded-lg overflow-hidden">
                  <img
                    src="https://pragati2024.online/static/media/MCKVIE.bd3b30d36a5aa8b90cd3.png"
                    alt="College Fest"
                    className="w-full h-full object-contain transform transition duration-700 group-hover:scale-110 p-8"
                    style={{
                      filter: 'drop-shadow(0 35px 35px rgba(187,68,255,1))'
                    }}
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
              className="w-full lg:w-7/12 space-y-6"
            >
              <div className="backdrop-blur-xl bg-black/40 rounded-2xl p-6 md:p-8 shadow-2xl">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 font-orbitron">
                About Our Cultural Fest: Utopia - 2K25
                </h2>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="space-y-4 md:space-y-6 text-gray-300"
                >
                  <p className="text-base md:text-lg leading-relaxed">
                    UTOPIA-2K24 marked an unforgettable celebration of talent and culture. From mesmerizing Octet performances to the electrifying 'Flight of feet' dance competitions and the glamorous 'Style Symphony' fashion show, the event showcased the best of our creative spirit.
                  </p>
                  
                  <p className="text-base md:text-lg leading-relaxed">
                    Established in 1999, MCKV Institute of Engineering stands as a beacon of excellence in technical education. Our NAAC 'A' Grade accreditation and autonomous status reflect our commitment to quality education and innovation.
                  </p>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="backdrop-blur-xl bg-black/30 rounded-2xl p-6 md:p-8"
              >
                <h3 className="text-xl md:text-2xl font-bold text-purple-300 mb-4 font-orbitron">
                  UTOPIA-2K25 Highlights
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  {['Star Performances', 'Cultural Showcases', 'Technical Events', 'Art Exhibitions'].map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      className="flex items-center space-x-3 group"
                    >
                      <div className="h-2 w-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 group-hover:scale-150 transition-transform duration-300"></div>
                      <span className="text-gray-300 group-hover:text-purple-300 transition-colors duration-300">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}