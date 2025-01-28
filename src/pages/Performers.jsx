import React from 'react';
import PerformerCard from '../components/performerCard/performerCard';
import { motion } from "framer-motion";
import AnkitaImage from '../assets/images/ankita.jpg';
import BullteImage from '../assets/images/B-one.jpg';
import DJImage from '../assets/images/djnight.jpg';
// import { h2 } from 'framer-motion/client';

const performersArray = [
{
    name: "Ankita",
    date: "29th January",
    imageUrl: AnkitaImage,
    description: "Singer"
  },
  {
    name: "BULLET",
    date: "30th January",
    imageUrl: BullteImage,
    description: "Band"
  },
  
  {
    name: "DJ Night",
    date: "30th January",
    imageUrl: DJImage,
    description: "Band"
  },
];

const Performers = () => {
  return (
    <>
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex justify-center items-center h-full"
    >
      <h1
        className="font-orbitron text-5xl font-bold text-center text-white relative"
        style={{
          position: "relative",
          color: "cyan",
          background: "radial-gradient(circle, cyan 60%, cyan 100%)",  // Pure cyan without black
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Performers
      </h1>
    </motion.div>
    <div  className="flex flex-wrap justify-around gap-6 mt-6">
      {performersArray.map((performer, index) => (
        <PerformerCard
          key={index}
          name={performer.name}
          date={performer.date}
          imageUrl={performer.imageUrl}
          description={performer.description}
        />
      ))}
    </div>
    </>
  );
};

export default Performers;
