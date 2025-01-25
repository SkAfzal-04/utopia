import React, { useState } from "react";
import Banner from "./Banner"; // Make sure the path is correct
import battleOfBeats from "../assets/images/battleOfBeats.jpg";
import soloSinging from "../assets/images/soloSinging.jpg";
import Illuminati from "../assets/images/Illuminati.jpg";
import Flameless from "../assets/images/FlamelessFest.jpg";
import Ecocraft from "../assets/images/Ecocraft.jpg";

const EventCards = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedEvent, setSelectedEvent] = useState(null);

    // Dummy event data for onstage and offstage events
    const onstageEvents = [
        {
            title: "Battle Of Beats",
            about: `Get ready to dance and shine at the Battle of Beats Dance Competition, Utopia 2K25, proudly hosted by MCKVIE! 
      ❗ Registration Deadline: January 24, 2025`,
            imageUrl: battleOfBeats,
            timeline: "Event Date : January 29, 2025",
            fees: `Registration Fees : ₹250 (Solo)
            ₹300 (Duo)
            ₹600 (Group of max 6 participants)
            Off-campus participants are required to pay their fees on the day of the event.
        `,
            contact: `Contact for any queries: 
            Sreejeeta Dutta - 7278194815 
            Shreya Mete - 9330756588 
            Pabitra Bhanu Dash  - 9474649610 `,
            rules: `Rules :
            Dance Categories: 
            Solo : Maximum duration of 3 minutes.
            Duo : Maximum duration of 5 minutes. 
            Group Performance : Maximum duration of 6 minutes. 
                `,
            registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSfrfIJMQUZk3C1G3u1WW2_9tARhqNxJDqnK77ESS6gP8hUV7g/viewform",
        },
        {
            title: "Octet Solo Singing Competition",
            about: `Unleash your vocal brilliance at the OCTET Solo Singing Competition, part of Utopia 2K25, proudly hosted by MCKVIE!    
            ❗Registration Deadline : January 21, 2025  `,
            imageUrl: soloSinging,
            timeline: "Event Date : January 29, 2025  ",
            fees: "Registration Fees : ₹200",
            contact: `Contact for any queries: 
            Snehashree Chakraborty - 6289811172.  `,
            rules: `Rules: 1. Each participant has a 5-minute time limit, including sound check.  
            2. Participants should use their preferable music tracks during participation.
            3. They must send their track in this contact number below with a proper introduction of themselves. 
            4. Solo Singers must sing a complete song within the given time limit, No Mashup or Mix song allowed in the competition.`,
            registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSd32pe27w0pyH3oMkNhQT8nWwexXfJ_MUoDbp8RO1g9FrUUdQ/viewform?usp=send_form",
        },
    ];

    const offstageEvents = [
        {
            title: "Illumina",
            about: `The Face Painting Competition
            MCKV Institute of Engineering is thrilled to announce UTOPIA 2K25, our highly anticipated annual cultural fest. This year, let your imagination shine at "Illumina," our face painting contest. Showcase your creativity with vivid colors and turn your face into a captivating masterpiece that tells a unique story.`,
            imageUrl: Illuminati,
            timeline: `Event Details:
            Date: 29th January 2025
            Time: 2 PM onwards
            Venue: Mechanical Workshop `,
            fees: `MCKVIE Students : ₹50/team
            External Students : ₹200/team
            Registration fees to be paid on the event day in cash only.`,
            contact: `For Queries, Contact:
            Anwesha Laha: 9123361646
            Khushi Kachhap: 7209846205
            Riya Karmakar: 7602372605`,
            rules: "https://shorturl.at/iJoed",
            registrationLink: "https://forms.gle/r2HJECTAxzVPAqqJA",
        },
        {
            title: "Flameless Feast",
            about: `A Non-Fire Cooking Contest
            MCKV Institute of Engineering is thrilled to announce UTOPIA 2K25 – our eagerly awaited annual cultural fest!
            Prepare for an exciting culinary challenge with "Flameless Feast," a unique non-fire cooking competition designed to let you showcase your creativity and skill in crafting delicious, flame-free dishes.`,
            imageUrl: Flameless,
            timeline: `Event Details:
            Date: 29th January 2025
            Time: 2 PM onwards
            Venue: Mechanical Workshop`,
            fees: `MCKVIE Students : ₹50/team
            External Students : ₹200/team
            Registration fees to be paid on the event day in cash only.`,
            rules: "https://shorturl.at/nAjgY",
            contact: `For Queries, Contact:
            Anwesha Laha: 9123361646
            Khushi Kachhap: 7209846205
            Riya Karmakar: 7602372605`,
            registrationLink: "https://forms.gle/tpoRkSx73Qe8RYCb8",
        },
        {
            title: "Ecocraft",
            about: `The Art Out Of Waste Contest 
            MCKV Institute of Engineering is delighted to present UTOPIA 2K25 – our highly anticipated annual cultural fest!
            Showcase your ingenuity at "EcoCraft," an Art Out of Waste Contest. Turn everyday waste materials into remarkable creations and impress everyone with your innovation and presentation skills.`,
            imageUrl: Ecocraft,
            timeline: `Event Details:
            Date: 29th January 2025
            Time: 2 PM onwards
            Venue: Mechanical Workshop `,
            fees: `MCKVIE Students : ₹50/team
            External Students : ₹200/team
            Registration fees to be paid on the event day in cash only.`,
            contact: `For Queries, Contact:
            Anwesha Laha: 9123361646
            Khushi Kachhap: 7209846205
            Riya Karmakar: 7602372605`,
            rules: "https://shorturl.at/CV6Il",
            registrationLink: "https://forms.gle/KbhHLJbpPMjX47w56",
        }
    ];

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setSelectedEvent(null); // Reset selected event when category is clicked
    };

    const handleEventClick = (event) => {
        setSelectedEvent(event); // Set the selected event for detailed view
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 font-orbitron">
            <h1 className="text-6xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-cyan-400 to-purple-500 animate-pulse hover:text-yellow-500 transition-all">
                Events
            </h1>
            <div className="grid gap-8 sm:grid-cols-2 grid-cols-1">
                {/* Onstage Events Card */}
                <div className="relative bg-gradient-to-b from-blue-800 to-blue-600 text-white p-8 sm:p-6 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all w-72 border-4 border-transparent hover:border-cyan-500 animate-glow">
                    <h2 className="text-2xl font-bold text-center hover:text-yellow-500 transition-all">
                        Onstage Events
                    </h2>
                    <div className="flex justify-center mt-6">
                        <button
                            onClick={() => handleCategoryClick('onstage')}
                            className="px-4 py-2 bg-cyan-500 text-white font-semibold rounded hover:bg-cyan-400 transition-all hover:text-yellow-300"
                        >
                            Explore
                        </button>
                    </div>
                </div>

                {/* Offstage Events Card */}
                <div className="relative bg-gradient-to-b from-blue-800 to-blue-600 text-white p-8 sm:p-6 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all w-72 border-4 border-transparent hover:border-cyan-500 animate-glow">
                    <h2 className="text-2xl font-bold text-center hover:text-yellow-500 transition-all">
                        Offstage Events
                    </h2>
                    <div className="flex justify-center mt-6">
                        <button
                            onClick={() => handleCategoryClick('offstage')}
                            className="px-4 py-2 bg-cyan-500 text-white font-semibold rounded hover:bg-cyan-400 transition-all hover:text-yellow-300"
                        >
                            Explore
                        </button>
                    </div>
                </div>
            </div>

            {/* Show Popup with Event List based on Category */}
            {selectedCategory && !selectedEvent && (
                <div>
                    <Banner
                        events={selectedCategory === 'onstage' ? onstageEvents : offstageEvents}
                        onClose={() => setSelectedCategory(null)}  // Close the event list popup
                        onEventClick={handleEventClick} // Pass the handleEventClick to the Banner component
                    />
                </div>
            )}

            {/* Show Detailed Event Popup */}
            {selectedEvent && (
                <Banner
                    event={selectedEvent}
                    onClose={() => setSelectedEvent(null)} // Close event detail popup
                />
            )}
        </div>
    );
};

export default EventCards;
