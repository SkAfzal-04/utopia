import React from 'react';
import { Clock, MapPin } from 'lucide-react';

export const TimelineEventComponent = ({ event, isLeft }) => {
  return (
    <div className="mb-12 relative">
      {/* Desktop Layout */}
      <div className={`hidden md:flex ${isLeft ? 'flex-row-reverse' : 'flex-row'} w-full`}>
        <div className="w-1/2" />
        <div className={`w-1/2 ${isLeft ? 'pr-8 text-right' : 'pl-8'}`}>
          <div className="glass-card rounded-xl p-6 transform transition-all duration-300 hover:scale-[1.02] hover:bg-white/15">
            <div className={`flex items-center mb-3 ${isLeft ? 'justify-end space-x-4' : 'space-x-4'}`}>
              <Clock className="w-5 h-5 text-lime-400" />
              <span className="text-lime-400 font-medium font-orbitron">{event.time}</span>
            </div>
            <h2 className="text-2xl font-bold mb-3 font-orbitron bg-gradient-to-r from-white via-lime-100 to-white text-transparent bg-clip-text">
              {event.title}
            </h2>
            {event.location && (
              <div className={`flex items-center space-x-2 text-emerald-300 mb-3 ${isLeft ? 'justify-end' : ''}`}>
                <MapPin className="w-4 h-4" />
                <span className="font-medium">{event.location}</span>
              </div>
            )}
            <p className="text-gray-300 leading-relaxed font-inter">{event.description}</p>
          </div>
        </div>
      </div>
      {/* Mobile Layout */}
      <div className="md:hidden pl-8">
        <div className="glass-card rounded-xl p-5 transform transition-all duration-300 active:scale-[1.01]">
          <div className="flex items-center mb-3 space-x-4">
            <Clock className="w-5 h-5 text-lime-400 flex-shrink-0" />
            <span className="text-lime-400 font-medium font-orbitron text-sm">{event.time}</span>
          </div>
          <h2 className="text-xl font-bold mb-3 font-orbitron bg-gradient-to-r from-white via-lime-100 to-white text-transparent bg-clip-text">
            {event.title}
          </h2>
          {event.location && (
            <div className="flex items-center space-x-2 text-emerald-300 mb-3">
              <MapPin className="w-4 h-4 flex-shrink-0" />
              <span className="text-sm font-medium">{event.location}</span>
            </div>
          )}
          <p className="text-gray-300 leading-relaxed text-sm font-inter">{event.description}</p>
        </div>
      </div>
    </div>
  );
};
