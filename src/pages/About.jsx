import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function About({ scrollToNextSection }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="min-h-screen bg-gray-900 py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group"
          >
            <div className="relative h-64 lg:h-[450px] flex items-center justify-center">
              <img
                src="https://pragati2024.online/static/media/MCKVIE.bd3b30d36a5aa8b90cd3.png"
                alt="College Fest"
                className="relative z-10 w-full h-full object-contain transform transition duration-500 hover:scale-105 p-8 drop-shadow-[0_35px_35px_rgba(187,68,255,1)]"
              />
            </div>
          </motion.div>

          <div className="space-y-6">
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-orbitron"
            >
              About Our Fest
            </motion.h2>

            <div className="space-y-4">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg text-gray-300"
              >
                Welcome to Festiva 2024 - where creativity meets celebration! Our annual college festival brings together talent, innovation, and excitement in one spectacular event.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-200 mb-3">
                  What to Expect
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <motion.li
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    className="flex items-center hover:scale-105 hover:text-purple-400"
                  >
                    <span className="h-2 w-2 bg-purple-500 rounded-full mr-2"></span>
                    Musical performances and dance battles
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    className="flex items-center hover:scale-105 hover:text-pink-400"
                  >
                    <span className="h-2 w-2 bg-pink-500 rounded-full mr-2"></span>
                    Technical workshops and competitions
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ duration: 0.5, delay: 1.4 }}
                    className="flex items-center hover:scale-105 hover:text-purple-400"
                  >
                    <span className="h-2 w-2 bg-purple-500 rounded-full mr-2"></span>
                    Art exhibitions and cultural showcases
                  </motion.li>
                </ul>
              </motion.div>
            </div>
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300"            
              onClick={scrollToNextSection}
              >
              Learn More
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}