import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Users, X } from "lucide-react";

// New component for the name modal
const NameModal = ({ name, onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, []);

  return (
    <motion.div
      ref={modalRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, y: 50 }}
        animate={{
          scale: 1,
          y: 0,
          transition: {
            type: "spring",
            stiffness: 300,
            damping: 25,
          },
        }}
        exit={{ scale: 0.8, y: 50 }}
        className="bg-white/20 backdrop-blur-lg p-8 rounded-lg relative max-w-md w-full mx-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white hover:text-gray-300"
        >
          <X className="h-6 w-6" />
        </button>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.1 },
          }}
          className="flex flex-col items-center gap-4"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 20,
                delay: 0.2,
              },
            }}
            className="bg-white/10 rounded-full p-4"
          >
            <User className="h-12 w-12 text-white" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.3 },
            }}
            className="text-3xl font-bold text-white text-center font-orbitron"
          >
            {name}
          </motion.h2>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const VerticalMarquee = ({
  items,
  icon: Icon,
  iconColor,
  speed = 20,
  onNameClick,
}) => {
  const itemHeight = 40;
  const visibleItems = 4;
  const containerHeight = visibleItems * itemHeight;

  return (
    <div
      className="relative overflow-hidden"
      style={{ height: `${containerHeight}px` }}
    >
      <motion.div
        className="absolute w-full"
        animate={{
          y: [-itemHeight, -(items.length + visibleItems) * itemHeight],
        }}
        transition={{
          y: {
            repeat: Infinity,
            repeatType: "loop",
            duration: items.length * speed,
            ease: "linear",
          },
        }}
        whileHover={{ animationPlayState: "paused" }}
      >
        {[...items, ...items, ...items].map((item, index) => (
          <motion.div
            key={index}
            className="flex items-center gap-3 p-2 hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
            style={{ height: `${itemHeight}px` }}
            whileHover={{ scale: 1.02 }}
            onClick={() => onNameClick(item)}
          >
            <Icon className={`h-5 w-5 ${iconColor} shrink-0`} />
            <span className="text-white truncate">{item}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

const VerticalMarquee_1 = ({
  items,
  icon: Icon,
  iconColor,
  speed = 20,
  onNameClick,
}) => {
  const itemHeight = 40;
  const visibleItems = 2;
  const containerHeight = visibleItems * itemHeight;

  return (
    <div
      className="relative overflow-hidden"
      style={{ height: `${containerHeight}px` }}
    >
      <motion.div
        className="absolute w-full"
        animate={{
          y: [-itemHeight, -(items.length + visibleItems) * itemHeight],
        }}
        transition={{
          y: {
            repeat: Infinity,
            repeatType: "loop",
            duration: items.length * speed,
            ease: "linear",
          },
        }}
        whileHover={{ animationPlayState: "paused" }}
      >
        {[...items, ...items, ...items].map((item, index) => (
          <motion.div
            key={index}
            className="flex items-center gap-3 p-2 hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
            style={{ height: `${itemHeight}px` }}
            whileHover={{ scale: 1.02 }}
            onClick={() => onNameClick(item)}
          >
            <Icon className={`h-5 w-5 ${iconColor} shrink-0`} />
            <span className="text-white truncate">{item}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

const TeamSection = ({ teamMembers }) => {
  const [selectedName, setSelectedName] = useState(null);

  const handleNameClick = (name) => {
    setSelectedName(name);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
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
      },
    },
    hover: {
      scale: 1.03,
      y: -5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  return (
    <>
      <motion.div variants={containerVariants} className="space-y-6" id="team">
        <motion.h2
          variants={itemVariants}
          className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text font-orbitron"
        >
          Our Team
        </motion.h2>

        {/* Leadership */}
        <motion.div
          variants={cardVariants}
          whileHover="hover"
          className="bg-white/20 p-6 rounded-lg"
        >
          <h3 className="text-xl font-semibold text-orange-400 mb-4 font-orbitron">
            Leadership
          </h3>
          <VerticalMarquee_1
            items={[
              `Chairman: ${teamMembers.chairman}`,
              `Co-Chairman: ${teamMembers.coChairman}`,
            ]}
            icon={User}
            iconColor="text-blue-400"
            speed={3}
            onNameClick={handleNameClick}
          />
        </motion.div>

        {/* Developers */}
        <motion.div
          variants={cardVariants}
          whileHover="hover"
          className="bg-white/20 p-6 rounded-lg"
        >
          <h3 className="text-xl font-semibold text-fuchsia-500 mb-4 font-orbitron">
            Developers
          </h3>
          <VerticalMarquee
            items={teamMembers.developers}
            icon={User}
            iconColor="text-cyan-500"
            speed={3}
            onNameClick={handleNameClick}
          />
        </motion.div>

        {/* Committee Members */}
        <motion.div
          variants={cardVariants}
          whileHover="hover"
          className="bg-white/20 p-6 rounded-lg"
        >
          <h3 className="text-xl font-semibold text-green-400 mb-4 font-orbitron">
            Committee Members
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-medium text-purple-400 mb-2">
                Core Committee
              </h4>
              <VerticalMarquee
                items={teamMembers.coreCommitteeMembers}
                icon={Users}
                iconColor="text-purple-400"
                speed={4}
                onNameClick={handleNameClick}
              />
            </div>
            <div>
              <h4 className="text-lg font-medium text-blue-400 mb-2">
                Advisory Committee
              </h4>
              <VerticalMarquee
                items={teamMembers.advisoryCommitteeMembers}
                icon={Users}
                iconColor="text-blue-400"
                speed={3.5}
                onNameClick={handleNameClick}
              />
            </div>
          </div>
        </motion.div>

        {/* Student Committee */}
        <motion.div
          variants={cardVariants}
          whileHover="hover"
          className="bg-white/20 p-6 rounded-lg"
        >
          <h3 className="text-xl font-semibold text-cyan-400 mb-4 font-orbitron">
            Student Committee
          </h3>
          <VerticalMarquee
            items={teamMembers.studentCommitteeMembers}
            icon={Users}
            iconColor="text-yellow-400"
            speed={3}
            onNameClick={handleNameClick}
          />
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {selectedName && (
          <NameModal
            name={selectedName}
            onClose={() => setSelectedName(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default TeamSection;
