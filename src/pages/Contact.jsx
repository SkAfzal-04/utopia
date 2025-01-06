import React, { useState, useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Phone, Mail, MapPin, Calendar, Ticket } from "lucide-react";

const Contact = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.3,
      },
    },
    hover: {
      scale: 1.05,
      y: -10,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const eventDetails = {
    location: "MCKVIE College, Main Campus",
    date: "January 28-29, 2025",
    time: "4:00 PM - 10:00 PM",
    registrationFee: {
      internal: "₹200",
      external: "₹300",
    },
    passInfo:
      "Entry only with valid festival pass. Available at registration desk.",
  };

  const contacts = {
    developers: [
      {
        name: "Akash Banerjee",
        dept: "CSE",
        year: "4th Year",
        phone: "+91 XXXXXXXXXX",
        email: "akash.b@college.edu",
      },
      {
        name: "Shibam Jha",
        dept: "IT",
        year: "4th Year",
        phone: "+91 XXXXXXXXXX",
        email: "shibam.j@college.edu",
      },
    ],
    coordinators: [
      {
        name: "Saptarshi Banik",
        dept: "CSE",
        year: "4th Year",
        phone: "+91 XXXXXXXXXX",
        email: "saptarshi.b@college.edu",
      },
      {
        name: "Swarnadeep Chakroborty",
        dept: "CSE",
        year: "4th Year",
        phone: "+91 XXXXXXXXXX",
        email: "swarnadeep.c@college.edu",
      },
    ],
  };

  const styles = {
    glowingText: `
      @keyframes glow {
        0%, 100% {
          text-shadow: 0 0 12px #ff6b6b,
                       0 0 20px #ff6b6b,
                       0 0 30px #ff6b6b;
        }
        50% {
          text-shadow: 0 0 14px #4f46e5,
                       0 0 24px #4f46e5,
                       0 0 36px #4f46e5;
        }
      }
      .glow-text {
        animation: glow 3s ease-in-out infinite;
      }
      .heading-gradient {
        background: linear-gradient(135deg, #ff6b6b 0%, #4f46e5 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
    `,
  };

  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = styles.glowingText;
    document.head.appendChild(styleSheet);
    return () => styleSheet.remove();
  }, []);

  return (
    <div
      id="contact-section"
      ref={ref}
      className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-4 md:p-8"
    >
      <motion.div
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="max-w-6xl mx-auto bg-white/10 backdrop-blur-lg rounded-xl p-6 md:p-8 shadow-2xl"
      >
        <motion.h1
          variants={itemVariants}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-4xl md:text-5xl font-bold text-center mb-8 font-orbitron heading-gradient"
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
            delay: 0.3,
          }}
        >
          Contact Us
        </motion.h1>

        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          <AnimatePresence>
            {isVisible && (
              <>
                <motion.div
                  variants={cardVariants}
                  whileHover="hover"
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/20 p-6 rounded-lg"
                >
                  <div className="flex items-center gap-3 text-white mb-4">
                    <motion.div
                      // className="flex items-center gap-3"
                      animate={{
                        x: [0, 5, -5, 0],
                        transition: { duration: 2, repeat: Infinity },
                      }}
                    >
                      <MapPin className="h-6 w-6 text-pink-500" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-pink-400">
                      Location
                    </h3>
                  </div>
                  <p className="text-emerald-300">{eventDetails.location}</p>
                </motion.div>

                <motion.div
                  variants={cardVariants}
                  whileHover="hover"
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/20 p-6 rounded-lg"
                >
                  <div className="flex items-center gap-3 text-white mb-4">
                    <motion.div
                      className="flex items-center gap-3"
                      animate={{
                        rotate: [0, 360],
                        transition: {
                          duration: 4,
                          repeat: Infinity,
                          ease: "linear",
                        },
                      }}
                    >
                      <Calendar className="h-6 w-6 text-cyan-500" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-cyan-400">
                      Date & Time
                    </h3>
                  </div>
                  <p className="text-sky-300">{eventDetails.date}</p>
                  <p className="text-sky-200">{eventDetails.time}</p>
                </motion.div>

                <motion.div
                  variants={cardVariants}
                  whileHover="hover"
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/20 p-6 rounded-lg"
                >
                  <div className="flex items-center gap-3 text-white mb-4">
                    <motion.div
                      className="flex items-center gap-3"
                      animate={{
                        scale: [1, 1.2, 1],
                        transition: { duration: 2, repeat: Infinity },
                      }}
                    >
                      <Ticket className="h-6 w-6 text-yellow-400" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-yellow-400">
                      Registration
                    </h3>
                  </div>
                  <p className="text-rose-300">
                    Internal: {eventDetails.registrationFee.internal}
                  </p>
                  <p className="text-rose-200">
                    External: {eventDetails.registrationFee.external}
                  </p>
                  <p className="text-rose-100 mt-2 text-sm">
                    {eventDetails.passInfo}
                  </p>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div variants={containerVariants}>
            <motion.h2
              variants={itemVariants}
              className="text-2xl font-bold mb-6 heading-gradient hover:scale-105 transition-transform duration-300"
            >
              Technical Team
            </motion.h2>
            <div className="space-y-4">
              {contacts.developers.map((dev, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover="hover"
                  whileTap={{ scale: 0.95 }}
                  custom={index}
                  className="bg-white/20 p-6 rounded-lg transform-gpu"
                  transition={{ delay: index * 0.2 }}
                >
                  <h3 className="text-xl font-semibold text-violet-300">
                    {dev.name}
                  </h3>
                  <p className="text-violet-200">
                    {dev.dept}, {dev.year}
                  </p>
                  <motion.div
                    className="mt-4 space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.2 }}
                  >
                    <div className="flex items-center gap-2 text-violet-100">
                      <Phone className="h-4 w-4" />
                      <p>{dev.phone}</p>
                    </div>
                    <div className="flex items-center gap-2 text-violet-100">
                      <Mail className="h-4 w-4" />
                      <p>{dev.email}</p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={containerVariants}>
            <motion.h2
              variants={itemVariants}
              className="text-2xl font-bold mb-6 heading-gradient hover:scale-105 transition-transform duration-300"
            >
              Event Coordinators
            </motion.h2>
            <div className="space-y-4">
              {contacts.coordinators.map((coord, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover="hover"
                  whileTap={{ scale: 0.95 }}
                  custom={index}
                  className="bg-white/20 p-6 rounded-lg transform-gpu"
                  transition={{ delay: index * 0.2 }}
                >
                  <h3 className="text-xl font-semibold text-amber-300">
                    {coord.name}
                  </h3>
                  <p className="text-amber-200">
                    {coord.dept}, {coord.year}
                  </p>
                  <motion.div
                    className="mt-4 space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.2 }}
                  >
                    <div className="flex items-center gap-2 text-amber-100">
                      <Phone className="h-4 w-4" />
                      <p>{coord.phone}</p>
                    </div>
                    <div className="flex items-center gap-2 text-amber-100">
                      <Mail className="h-4 w-4" />
                      <p>{coord.email}</p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
