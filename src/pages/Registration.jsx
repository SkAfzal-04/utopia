import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Music, Users, ArrowRight, Sparkles } from "lucide-react";

const Registration = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Create separate states for each competition
  const [expandedStates, setExpandedStates] = useState({
    dance: false,
    singing: false,
  });

  const toggleExpand = (id) => {
    setExpandedStates((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const pageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: 45,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    hover: {
      scale: 1.02,
      boxShadow: "0 20px 30px rgba(0,0,0,0.2)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const competitions = [
    {
      id: "dance",
      title: "Dance Competition",
      icon: Users,
      color: "from-pink-500 to-rose-500",
      shadowColor: "rgba(244,63,94,0.3)",
    },
    {
      id: "singing",
      title: "Singing Competition",
      icon: Music,
      color: "from-violet-500 to-purple-500",
      shadowColor: "rgba(139,92,246,0.3)",
    },
  ];

  const DetailCard = ({ competition }) => (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      className="overflow-hidden"
    >
      <div className="p-6 space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-lg font-medium text-gray-200">Solo</span>
          <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            ₹200
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-lg font-medium text-gray-200">Duo</span>
          <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            ₹300
          </span>
        </div>
        <motion.div
          className="pt-4"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a
            href="#"
            className="block text-center bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Register Now
            <ArrowRight className="inline ml-2 h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-navy-900 via-navy-800 to-navy-900 p-4 md:p-8">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={pageVariants}
        className="max-w-6xl mx-auto"
      >
        <motion.h1
          variants={cardVariants}
          className="text-5xl font-bold text-center mb-14 bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent h-20 font-orbitron"
        >
          Registration
        </motion.h1>

        {/* Internal Registration Card */}
        <motion.div
          variants={cardVariants}
          whileHover="hover"
          className="mb-16 p-8 rounded-2xl backdrop-blur-lg shadow-[0_0_50px_rgba(139,92,246,0.3)]"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
          }}
        >
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent flex items-center gap-3 font-orbitron">
            <Sparkles className="h-8 w-8" />
            Internal Registration
          </h2>
          <p className="text-xl text-gray-300 mb-4">
            Registration form links will be available soon!
          </p>
          <p className="text-gray-400 italic">
            * SPOCs of various competitions will provide registration links for
            each competition.
          </p>
        </motion.div>

        {/* External Registration Section */}
        <motion.div variants={cardVariants} className="space-y-8">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent font-orbitron">
            External Registration
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {competitions.map((comp) => (
              <div key={comp.id} className="relative">
                <motion.div
                  variants={cardVariants}
                  whileHover="hover"
                  className={`rounded-2xl overflow-hidden backdrop-blur-lg transition-all duration-300 ${
                    expandedStates[comp.id] ? "md:col-span-2" : ""
                  }`}
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
                    boxShadow: `0 0 50px ${comp.shadowColor}`,
                  }}
                >
                  <motion.div
                    className="p-6 cursor-pointer"
                    onClick={() => toggleExpand(comp.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <comp.icon
                          className={`h-8 w-8 bg-gradient-to-r ${comp.color} bg-clip-text text-transparent`}
                        />
                        <h3
                          className={`text-2xl font-bold bg-gradient-to-r ${comp.color} bg-clip-text text-transparent font-orbitron`}
                        >
                          {comp.title}
                        </h3>
                      </div>
                      <motion.div
                        animate={{ rotate: expandedStates[comp.id] ? 90 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ArrowRight className="h-6 w-6 text-gray-400" />
                      </motion.div>
                    </div>
                  </motion.div>

                  <AnimatePresence>
                    {expandedStates[comp.id] && (
                      <DetailCard competition={comp} />
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Important Notes */}
          <motion.div
            variants={cardVariants}
            className="mt-12 p-8 rounded-2xl backdrop-blur-lg shadow-[0_0_50px_rgba(244,63,94,0.3)]"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
            }}
          >
            <h4 className="text-2xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-rose-400 bg-clip-text text-transparent font-orbitron">
              Important Notes
            </h4>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center gap-3">
                <ArrowRight className="h-5 w-5 text-orange-400" />
                Registration fees must be paid on spot
              </li>
              <li className="flex items-center gap-3">
                <ArrowRight className="h-5 w-5 text-orange-400" />
                Participants must carry valid ID proof
              </li>
              <li className="flex items-center gap-3">
                <ArrowRight className="h-5 w-5 text-orange-400" />
                Registration is on a first-come-first-served basis
              </li>
              <li className="flex items-center gap-3">
                <ArrowRight className="h-5 w-5 text-orange-400" />
                For any queries, contact the event coordinators
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Registration;
