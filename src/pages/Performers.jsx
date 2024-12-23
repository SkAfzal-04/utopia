import React from 'react';
import PerformerCard from '../components/performerCard/performerCard';
import AnkitaImage from '../assets/images/Ankita.jpeg';
import BullteImage from '../assets/images/bullet.jpeg';

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
    name: "DJ",
    date: "29th January",
    imageUrl: "/placeholder.svg?height=400&width=300",
    description: "Bands"
  }
];

const Performers = () => {
  return (
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
  );
};

export default Performers;
