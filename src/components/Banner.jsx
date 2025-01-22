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
      <div className="bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600 p-8 rounded-lg shadow-xl overflow-hidden w-11/12 md:w-2/3 max-h-[80vh] relative">
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
                className="flex flex-col md:flex-row items-center md:items-start bg-gradient-to-b from-blue-800 to-blue-600 p-6 rounded-lg mb-6 shadow-lg cursor-pointer"
              >
                <div className="flex-shrink-0 mb-4 md:mb-0 md:w-1/3 flex justify-center items-center">
                  <img
                    src={eventItem.imageUrl}
                    alt={`${eventItem.title} Logo`}
                    className="object-contain w-full h-40 md:h-56 rounded-lg shadow-xl"
                  />
                </div>
                <div className="md:ml-6 flex flex-col justify-center items-center text-white text-center md:text-left">
                  <h2 className="text-3xl font-orbitron font-bold mb-4">{eventItem.title}</h2>
                  <p className="font-sans" style={{ whiteSpace: "pre-line" }}>{eventItem.about}</p>
                  <button
                    onClick={() => onEventClick(eventItem)}
                    className="mt-4 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-300"
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
            <div className="flex flex-col md:flex-row items-center md:items-start bg-gradient-to-b from-blue-800 to-blue-600 p-6 rounded-lg mb-6 shadow-lg">
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
                <h2 className="text-3xl font-orbitron font-bold mb-4 w-full">{event.title}</h2>

                {/* Tab Navigation */}
                <div className="flex mb-4 space-x-4 justify-center w-full">
                  <button
                    className={`relative text-white group ${selectedTab === "about" ? "border-b-2 border-cyan-400" : ""}`}
                    onClick={() => handleTabChange("about")}
                  >
                    About
                    <span
                      className={`absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-400 group-hover:w-full transition-all duration-300 ${
                        selectedTab === "about" ? "w-full" : ""
                      }`}
                    ></span>
                  </button>

                  <button
                    className={`relative text-white group ${selectedTab === "timeline" ? "border-b-2 border-cyan-400" : ""}`}
                    onClick={() => handleTabChange("timeline")}
                  >
                    Time
                    <span
                      className={`absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-400 group-hover:w-full transition-all duration-300 ${
                        selectedTab === "timeline" ? "w-full" : ""
                      }`}
                    ></span>
                  </button>

                  <button
                    className={`relative text-white group ${selectedTab === "fees" ? "border-b-2 border-cyan-400" : ""}`}
                    onClick={() => handleTabChange("fees")}
                  >
                    Fees
                    <span
                      className={`absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-400 group-hover:w-full transition-all duration-300 ${
                        selectedTab === "fees" ? "w-full" : ""
                      }`}
                    ></span>
                  </button>

                  <button
                    className={`relative text-white group ${selectedTab === "contact" ? "border-b-2 border-cyan-400" : ""}`}
                    onClick={() => handleTabChange("contact")}
                  >
                    Contact
                    <span
                      className={`absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-400 group-hover:w-full transition-all duration-300 ${
                        selectedTab === "contact" ? "w-full" : ""
                      }`}
                    ></span>
                  </button>
                </div>

                {/* Tab Content */}
                <div className="text-white mb-6 flex justify-center md:justify-start">
                  <div className="max-w-xl w-full font-sans">
                    {selectedTab === "about" && <p style={{ whiteSpace: "pre-line" }}>{event.about}</p>}
                    {selectedTab === "timeline" && <p>{event.timeline}</p>}
                    {selectedTab === "fees" && <p style={{ whiteSpace: "pre-line" }}>{event.fees}</p>}
                    {selectedTab === "contact" && <p style={{ whiteSpace: "pre-line" }}>{event.contact}</p>}
                    {selectedTab === "rules" && (
                      event.rules.startsWith("http")
                        ? window.open(event.rules, "_blank", "noopener,noreferrer")
                        : <p style={{ whiteSpace: "pre-line" }}>{event.rules}</p>
                    )}
                  </div>
                </div>

                {/* Fixed Register & Rules Buttons */}
                <div className="flex space-x-4">
                  <button
                    onClick={() => handleTabChange("rules")}
                    className="bg-cyan-500 hover:bg-cyan-400 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all duration-300"
                  >
                    Rules
                  </button>
                  <a
                    href={event.registrationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-cyan-500 hover:bg-cyan-400 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all duration-300"
                  >
                    Register Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
