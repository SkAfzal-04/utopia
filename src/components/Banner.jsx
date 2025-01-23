import React, { useState } from "react";

export default function Banner({ event, events, onClose, onEventClick }) {
  const [selectedTab, setSelectedTab] = useState("about"); // Move this out of the conditional

  // Early return if event and events are null or undefined
  if (!event && !events) return null;

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-blue-900 p-8 rounded-lg shadow-xl overflow-hidden w-11/12 md:w-2/3 max-h-[80vh] relative border-2 border-purple-500">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white p-2 rounded-full shadow-md hover:bg-opacity-50 transition duration-300"
        >
          X
        </button>

        {/* Event List */}
        {events && (
          <div className="overflow-y-auto max-h-[70vh]">
            {events.map((eventItem, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center md:items-start bg-gradient-to-b from-navy-900 to-blue-900 p-6 rounded-lg mb-6 shadow-lg cursor-pointer hover:from-navy-800 hover:to-blue-800 transition-all duration-300"
              >
                <div className="flex-shrink-0 mb-4 md:mb-0 md:w-1/3 flex justify-center items-center">
                  <img
                    src={eventItem.imageUrl}
                    alt={`${eventItem.title} Logo`}
                    className="object-contain w-full h-40 md:h-56 rounded-lg shadow-xl"
                  />
                </div>
                <div className="md:ml-6 flex flex-col justify-center items-center text-white text-center md:text-left">
                  <h2 className="text-3xl font-orbitron font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 hover:from-cyan-400 hover:via-purple-400 hover:to-cyan-400 transition-all duration-700 animate-gradient">{eventItem.title}</h2>
                  <p className="font-sans" style={{ whiteSpace: "pre-line" }}>{eventItem.about}</p>
                  <button
                    onClick={() => onEventClick(eventItem)}
                    className="mt-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105"
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Event Details */}
        {event && (
          <div className="overflow-y-auto max-h-[70vh]">
            <div className="flex flex-col md:flex-row items-center md:items-start bg-gradient-to-b from-navy-900 to-blue-900 p-6 rounded-lg mb-6 shadow-lg hover:from-navy-800 hover:to-blue-800 transition-all duration-300">
              {/* Event Image on Left */}
              <div className="flex-shrink-0 mb-4 md:mb-0 md:w-1/3 flex justify-center items-center">
                <img
                  src={event.imageUrl}
                  alt={`${event.title} Logo`}
                  className="object-contain w-full h-40 md:h-56 rounded-lg shadow-xl"
                />
              </div>

              {/* Event Title & Button on Right */}
              <div className="md:ml-6 flex flex-col justify-center items-center text-white text-center w-full">
                <h2 className="text-3xl font-orbitron font-bold mb-4 w-full text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 hover:from-cyan-400 hover:via-purple-400 hover:to-cyan-400 transition-all duration-700 animate-gradient">{event.title}</h2>

                {/* Tab Navigation */}
                <div className="flex mb-4 space-x-4 justify-center w-full">
                  <button
                    className={`relative group transition-all duration-300 font-semibold ${
                      selectedTab === "about" 
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-400 border-b-2 border-gradient-to-r border-rose-500 border-pink-500" 
                      : "text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-rose-400 hover:to-pink-400"
                    }`}
                    onClick={() => handleTabChange("about")}
                  >
                    About
                    <span
                      className={`absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-rose-500 to-pink-500 group-hover:w-full transition-all duration-300 ${
                        selectedTab === "about" ? "w-full" : ""
                      }`}
                    ></span>
                  </button>

                  <button
                    className={`relative group transition-all duration-300 font-semibold ${
                      selectedTab === "timeline" 
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 border-b-2 border-gradient-to-r border-blue-500 border-cyan-500" 
                      : "text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:to-cyan-400"
                    }`}
                    onClick={() => handleTabChange("timeline")}
                  >
                    Time
                    <span
                      className={`absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-full transition-all duration-300 ${
                        selectedTab === "timeline" ? "w-full" : ""
                      }`}
                    ></span>
                  </button>

                  <button
                    className={`relative group transition-all duration-300 font-semibold ${
                      selectedTab === "fees" 
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400 border-b-2 border-gradient-to-r border-teal-500 border-emerald-500" 
                      : "text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-teal-400 hover:to-emerald-400"
                    }`}
                    onClick={() => handleTabChange("fees")}
                  >
                    Fees
                    <span
                      className={`absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-teal-500 to-emerald-500 group-hover:w-full transition-all duration-300 ${
                        selectedTab === "fees" ? "w-full" : ""
                      }`}
                    ></span>
                  </button>

                  <button
                    className={`relative group transition-all duration-300 font-semibold ${
                      selectedTab === "contact" 
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400 border-b-2 border-gradient-to-r border-amber-500 border-orange-500" 
                      : "text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-amber-400 hover:to-orange-400"
                    }`}
                    onClick={() => handleTabChange("contact")}
                  >
                    Contact
                    <span
                      className={`absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-amber-500 to-orange-500 group-hover:w-full transition-all duration-300 ${
                        selectedTab === "contact" ? "w-full" : ""
                      }`}
                    ></span>
                  </button>
                </div>

                {/* Tab Content */}
                <div className="mt-6 text-white overflow-hidden">
                  {selectedTab === "about" && (
                    <p className="font-sans text-lg text-gray-100 animate-slideIn p-6 bg-black/20 rounded-lg border border-rose-500/20 hover:border-rose-500/40 transition-all duration-300" style={{ whiteSpace: "pre-line" }}>
                      {event.about}
                    </p>
                  )}
                  {selectedTab === "timeline" && (
                    <p className="font-sans text-lg text-gray-100 animate-slideIn p-6 bg-black/20 rounded-lg border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 animate-glowPulse" style={{ whiteSpace: "pre-line" }}>
                      {event.timeline}
                    </p>
                  )}
                  {selectedTab === "fees" && (
                    <p className="font-sans text-lg text-gray-100 animate-slideIn p-6 bg-black/20 rounded-lg border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300" style={{ whiteSpace: "pre-line" }}>
                      {event.fees}
                    </p>
                  )}
                  {selectedTab === "contact" && (
                    <p className="font-sans text-lg text-gray-100 animate-slideIn p-6 bg-black/20 rounded-lg border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300" style={{ whiteSpace: "pre-line" }}>
                      {event.contact}
                    </p>
                  )}
                </div>

                {/* Rules and Registration Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
                  {event.rules && (
                    <a
                      href={event.rules}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 text-center"
                    >
                      Rules
                    </a>
                  )}
                  {event.registrationLink && (
                    <a
                      href={event.registrationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 text-center"
                    >
                      Register Now
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
