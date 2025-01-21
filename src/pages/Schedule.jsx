import React, { useState, useRef } from 'react';
import { TimelineEventComponent } from '../components/TimelineEvent';
import { DaySelector } from '../components/DaySelector';
import { eventsByDay } from '../assets/data/events';
import {ArrowUpFromDot} from 'lucide-react'

export const Schedule = () => {
  const [selectedDay, setSelectedDay] = useState(1);
  const [visibleCount, setVisibleCount] = useState(3); // Default to showing 3 events
  const [expanded, setExpanded] = useState(false); // Tracks if all events are expanded
  const currentEvents = eventsByDay[selectedDay];

  // Ref to scroll to the Schedule heading
  const scheduleHeadingRef = useRef(null);

  const showMoreEvents = () => {
    setVisibleCount(currentEvents.length); // Show all events
    setExpanded(true); // Mark expanded state
  };

  const collapseEvents = () => {
    setVisibleCount(3); // Collapse back to showing 3 events
    setExpanded(false); // Mark collapsed state

    // Scroll to the schedule heading
    scheduleHeadingRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Schedule heading with ref */}
        <h1
          ref={scheduleHeadingRef}
          className="text-4xl md:text-5xl font-bold mb-8 md:mb-10 text-center font-orbitron bg-gradient-to-r from-lime-400 via-emerald-300 to-lime-400 text-transparent bg-clip-text"
        >
          Schedule
        </h1>
        <DaySelector
          selectedDay={selectedDay}
          onDayChange={(day) => {
            setSelectedDay(day);
            setVisibleCount(3); // Reset visible count on day change
            setExpanded(false); // Reset expanded state
          }}
        />

        <div className="relative">
          {/* Center line - Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-lime-400/80 to-emerald-400/80 transform -translate-x-1/2" />

          {/* Left line - Mobile */}
          <div className="md:hidden absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-lime-400/80 to-emerald-400/80" />

          <div className="relative">
            {currentEvents.slice(0, visibleCount).map((event, index) => (
              <div
                key={index}
                className={`relative ${
                  index === visibleCount - 1 && visibleCount < currentEvents.length
                    ? 'drop-shadow-lg' // Add drop shadow for the last displayed event card
                    : ''
                }`}
              >
                {/* Desktop dot */}
                <div className="hidden md:block">
                  <div className="timeline-dot" style={{ left: 'calc(50% - 8px)', top: '24px' }} />
                </div>

                {/* Mobile dot */}
                <div className="md:hidden">
                  <div className="timeline-dot" style={{ left: '-8px', top: '24px' }} />
                </div>

                <TimelineEventComponent event={event} isLeft={index % 2 === 0} />
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="text-center mt-8 z-1 relative">
            {!expanded && visibleCount < currentEvents.length && (
              <button
                onClick={showMoreEvents}
                className="px-6 py-2 rounded-full bg-gradient-to-r from-lime-400 via-emerald-400 to-lime-500 text-navy-900 font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg glow-effect"
              >
                Show More
              </button>
            )}
            {expanded && (
              <button
                onClick={collapseEvents}
                className="px-6 py-2 rounded-full bg-gradient-to-r from-red-400 via-pink-500 to-red-500 text-navy-900 font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg glow-effect"
              >
                <ArrowUpFromDot strokeWidth={2.75} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
