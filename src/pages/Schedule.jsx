import React, { useState } from 'react';
import { TimelineEventComponent } from '../components/TimelineEvent';
import { DaySelector } from '../components/DaySelector';
import { eventsByDay } from '../assets/data/events';

export const Schedule = () => {
  const [selectedDay, setSelectedDay] = useState(1);
  const currentEvents = eventsByDay[selectedDay];

  
  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 md:mb-10 text-center font-orbitron bg-gradient-to-r from-lime-400 via-emerald-300 to-lime-400 text-transparent bg-clip-text">
          UTOPIA 2025
        </h1>
        <DaySelector selectedDay={selectedDay} onDayChange={setSelectedDay} />
        
        <div className="relative">
          {/* Center line - Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-lime-400/80 to-emerald-400/80 transform -translate-x-1/2" />
          
          {/* Left line - Mobile */}
          <div className="md:hidden absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-lime-400/80 to-emerald-400/80" />
          
          <div className="relative">
            {currentEvents.map((event, index) => (
              <div key={index} className="relative">
                {/* Desktop dot */}
                <div className="hidden md:block">
                  <div className="timeline-dot" style={{ left: 'calc(50% - 8px)', top: '24px' }} />
                </div>
                
                {/* Mobile dot */}
                <div className="md:hidden">
                  <div className="timeline-dot" style={{ left: '-8px', top: '24px' }} />
                </div>
                
                <TimelineEventComponent 
                  event={event} 
                  isLeft={index % 2 === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
