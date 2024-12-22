import React from 'react';

export const DaySelector = ({ selectedDay, onDayChange }) => {
  return (
    <div className="flex justify-center gap-3 md:gap-5 mb-8 md:mb-10">
      {[1, 2].map((day) => (
        <button
          key={day}
          onClick={() => onDayChange(day)}
          className={`px-6 md:px-10 py-3 md:py-4 rounded-xl font-bold transition-all duration-300 text-sm md:text-base font-orbitron
            ${selectedDay === day
              ? 'bg-gradient-to-r from-lime-400 to-emerald-400 text-navy-900 shadow-lg shadow-lime-400/25 scale-105'
              : 'glass-card text-white hover:bg-white/15 hover:scale-105'
            }`}
        >
          DAY {day}
        </button>
      ))}
    </div>
  );
};
