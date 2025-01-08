import React, { useState, useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Phone,
  Mail,
  MapPin,
  Calendar,
  Ticket,
  Clock,
  User,
  Info,
  CalendarDays,
  MonitorSmartphone,
  ClipboardList,
  GraduationCap,
  MapPinHouse,
} from "lucide-react";

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
        background: linear-gradient(135deg, #9333ea 0%, #3b82f6 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
      .heading-gradient-1 {
        background: linear-gradient(135deg, #a3e635 0%, #16a34a 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
        .heading-gradient-2 {
        background: linear-gradient(135deg, #38bdf8 0%, #0ea5e9 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
      .heading-gradient-3 {
        background: linear-gradient(135deg, #fb7185 0%, #9333ea 100%);
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
      className="min-h-screen bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 p-2 sm:p-4 md:p-8"
    >
      <motion.div
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="max-w-6xl mx-auto bg-white/10 backdrop-blur-lg rounded-xl p-6 md:p-8 shadow-[0_0_25px_rgba(139,92,246,0.3),0_0_45px_rgba(96,165,250,0.2)] overflow-hidden"
      >
        <motion.h1
          variants={itemVariants}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 font-orbitron heading-gradient"
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
                      <MapPin className="h-6 w-6 text-emerald-500" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-pink-400 font-orbitron heading-gradient-1">
                      Location
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-300">
                    <MapPinHouse className="h-4 w-4" />
                    <p className="bg-gradient-to-br from-emerald-100 to-emerald-400 bg-clip-text text-transparent">
                      {eventDetails.location}
                    </p>
                  </div>
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
                      <CalendarDays className="h-6 w-6 text-cyan-500" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-cyan-400 font-orbitron heading-gradient-2">
                      Date & Time
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 text-sky-300">
                    <Calendar className="h-4 w-4" />
                    <p className="bg-gradient-to-br from-sky-300 to-sky-400 bg-clip-text text-transparent">
                      {eventDetails.date}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-sky-200">
                    <Clock className="h-4 w-4" />
                    <p className="bg-gradient-to-br from-sky-100 to-sky-400 bg-clip-text text-transparent">
                      {eventDetails.time}
                    </p>
                  </div>
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
                      <Ticket className="h-6 w-6 text-pink-500" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-yellow-400 font-orbitron heading-gradient-3">
                      Registration
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 text-pink-400">
                    <User className="h-4 w-4" />
                    <p className="bg-gradient-to-br from-pink-300 to-pink-600 bg-clip-text text-transparent">
                      Internal: {eventDetails.registrationFee.internal}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-rose-200">
                    <User className="h-4 w-4" />
                    <p className="bg-gradient-to-br from-pink-200 to-pink-400 bg-clip-text text-transparent">
                      External: {eventDetails.registrationFee.external}
                    </p>
                  </div>
                  <div className="flex items-start gap-2 text-rose-100 mt-2 text-sm">
                    <Info className="h-4 w-4 mt-1" />
                    <p className="bg-gradient-to-br from-pink-100 to-pink-200 bg-clip-text text-transparent leading-relaxed">
                      Entry only with a valid festival pass.{" "}
                      <br className="hidden md:block" />
                      Available at the registration desk.
                    </p>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          <motion.div variants={containerVariants}>
            <motion.h2
              variants={itemVariants}
              className="text-2xl font-bold mb-6 heading-gradient hover:scale-105 transition-transform duration-300 font-orbitron flex items-center gap-3"
            >
              <MonitorSmartphone className="h-6 w-6 text-violet-700" />
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
                  <div className="flex items-center gap-2">
                    <User className="h-5 w-5 text-violet-300" />
                    <h3 className="text-xl font-semibold bg-gradient-to-r from-violet-400 via-pink-400 to-blue-400 bg-clip-text text-transparent break-words">
                      {dev.name}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 text-violet-200">
                    <GraduationCap className="h-5 w-5 text-green-500" />
                    <p className="bg-gradient-to-r from-teal-400 via-green-400 to-yellow-400 bg-clip-text text-transparent">
                      {dev.dept}, {dev.year}
                    </p>
                  </div>
                  <motion.div
                    className="mt-4 space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.2 }}
                  >
                    <div className="flex items-center gap-2 text-orange-400">
                      <Phone className="h-4 w-4 flex-shrink-0" />
                      <p className="text-sm sm:text-base bg-gradient-to-r from-orange-400 via-red-400 to-purple-400 bg-clip-text text-transparent break-all">
                        {dev.phone}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-cyan-500">
                      <Mail className="h-4 w-4 flex-shrink-0" />
                      <p className="text-sm sm:text-base bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent break-all">
                        {dev.email}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={containerVariants}>
            <motion.h2
              variants={itemVariants}
              className="text-2xl font-bold mb-6 heading-gradient hover:scale-105 transition-transform duration-300 font-orbitron flex items-center gap-3"
            >
              <ClipboardList className="h-6 w-6 text-purple-600" />
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
                  <div className="flex items-center gap-2">
                    <User className="h-5 w-5 text-teal-500" />
                    <h3 className="text-xl font-semibold bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500 text-transparent bg-clip-text break-words">
                      {coord.name}
                    </h3>
                    {/* <h3 className="text-xl font-semibold bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                      {coord.name.split(" ")[0]}
                    </h3>
                    <h3 className="text-xl font-semibold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
                      {coord.name.split(" ")[1]}
                    </h3> */}
                  </div>
                  <div className="flex items-center gap-2 text-purple-500">
                    <GraduationCap className="h-5 w-5" />
                    <p className="bg-gradient-to-r from-purple-500 via-indigo-400 to-pink-400 bg-clip-text text-transparent">
                      {coord.dept}, {coord.year}
                    </p>
                  </div>
                  <motion.div
                    className="mt-4 space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.2 }}
                  >
                    <div className="flex items-center gap-2 text-teal-500">
                      <Phone className="h-4 w-4 flex-shrink-0" />
                      <p className="text-sm sm:text-base bg-gradient-to-r from-teal-400 via-green-400 to-blue-400 bg-clip-text text-transparent break-all">
                        {coord.phone}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-pink-500">
                      <Mail className="h-4 w-4 flex-shrink-0" />
                      <p className="text-sm sm:text-base bg-gradient-to-r from-pink-400 via-red-400 to-yellow-400 bg-clip-text text-transparent break-all">
                        {coord.email}
                      </p>
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
