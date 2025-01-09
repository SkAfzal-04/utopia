import React, { useState, useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Phone,
  Mail,
  MapPin,
  Calendar,
  Clock,
  User,
  Users,
  Globe,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import TeamSection from "../components/TeamSection";

const Contact = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [activeTab, setActiveTab] = useState("location");

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

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

  const tabContentVariants = {
    enter: { opacity: 0, y: 20 },
    center: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
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

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const eventDetails = {
    date: "January 28-29, 2025",
    time: "4:00 PM - 10:00 PM",
    registrationDeadline: "January 20, 2025",
    venue: "MCKV Institute of Engineering",
    expectedAttendees: "500+",
    socialMedia: {
      facebook: "facebook.com/utopia2025",
      instagram: "@utopia2025",
      linkedin: "linkedin.com/company/utopia2025",
    },
  };

  const teamMembers = {
    chairman: "Prof. (Dr.) Arun Kumar Jalan",
    coChairman: "Mr. Subir Bhadra",
    coreCommitteeMembers: [
      "Mrs. Arpita Ghosh",
      "Ms. Debanjali Chowdhury",
      "Dr. Abhijit Pramanik",
      "Mr. Sourav Ghorai",
      "Mr. Milan Chakrabortty",
      "Ms. Saptami Roy Chowdhury",
      "Mr. Swarup Chandra Giri",
      "Mr. Dhiman Bhattacharya",
      "Mr. Shyam Sundar Dutta",
      "Dr. Mahua Nandy (Pal)",
      "Dr. Sasmita S Choudhury",
      "Mr. Soham Goswami",
      "Mrs. Moumita Goswami",
      "Mr. Puspen Lahiri",
      "Mr. Shukla Mondal",
      "Dr. Deep Suman Deb",
      "Mr. Sudip Bera",
      "Mrs. Mahua Raha (Patra)",
      "Mrs. Sushmita Dey",
      "Mr. Soham Lodh",
      "Mr. Sekhar Rana",
      "Dr. Debopoma Kar Ray",
      "Mr. Sudeep Samanta",
      "Dr. Suchismita Ghosh",
      "Mr. Santanu Maity",
      "Mr. Arindam Das",
      "Mrs. Anwesa Das",
      "Mr. Uddalok Sen",
      "Mr. Pintu Das",
      "Mr. Nabankur Mandal",
      "Dr. Arindam Ghosh",
      "Mrs. Priyanka Dhar",
      "Mrs. Arpita Sen",
      "Ms. Satakshi Ghoshal",
      "Mr. Basudev Ghatak",
      "Mr. Rohit Rustagi",
      "Mr. Prabir Ghosh",
      "Mr. Pronobesh Sarkar",
    ],
    advisoryCommitteeMembers: [
      "Prof. (Dr.) Abhijit Lahiri",
      "Prof. (Dr.) Satadal Saha",
      "Prof. (Dr.) Sudipto Chaki",
      "Prof. (Dr.) Prasenjit Chatterjee",
      "Dr. Juin Ghosh Sarkar",
      "Dr. Dipankar Ghosh",
      "Mr. Avijit Bose",
      "Mr. Sachin Balo",
      "Dr. Pubali Mukherjee",
      "Dr. Tamal Roy",
      "Dr. Abhijit Dutta",
      "Mr. Tapas Kumar Biswas",
    ],
    studentCommitteeMembers: [
      "Swarnadeep Chakraborty",
      "Nandini Mishra",
      "Anwesha Laha",
      "Khushi Kachhap",
      "Sreejeeta Dutta",
      "Pabitra Bhanu Dash",
      "Shreya Mete",
      "Saptarshi Banik",
      "Meghana Choudhary",
      "Anuran Chatterjee",
      "Snehashree Chakraborty",
      "Bikram Das",
      "Roshan Kumar Singh",
      "Shivam kumar Jha",
      "Aditya Vardhan Rai",
      "Md Arsalan Jawed Ansari",
      "Ripan Kanrar",
      "Rohit Prasad",
      "Sakshi Gupta",
      "Mukund Kumar Jha",
      "Ratul Khan",
      "Junaid Iqbal",
      "Shresthangsu Chatterjee",
      "Arunima Samaddar ",
      "Antara Pal",
      "Tathagata Biswas",
      "Rahul Singh",
      "Amisha Agarwal",
      "Abir Mondal",
      "Sreemoyee Chatterjee",
      "Versha Jha",
    ],
  };

  const tabs = [
    { id: "location", label: "Location" },
    { id: "contact", label: "Contact" },
    { id: "team", label: "Team" },
  ];

  const renderTabContent = (tab) => {
    const content = {
      location: (
        <motion.div
          variants={containerVariants}
          className="space-y-4 sm:space-y-6"
        >
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="bg-white/10 p-4 sm:p-6 rounded-lg backdrop-blur-md"
          >
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="h-6 w-6 text-blue-400" />
              <h3 className="text-xl font-semibold text-white">Location</h3>
            </div>
            <div className="aspect-video w-full rounded-lg overflow-hidden mb-4">
              <iframe
                title="MCKV Institute of Engineering"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.9151917805775!2d88.3451275747585!3d22.6196419312457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89d65da7b3775%3A0x30915f7e98f1b0d5!2sMCKV%20Institute%20of%20Engineering!5e0!3m2!1sen!2sin!4v1736349538093!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              />
            </div>
            <div className="space-y-2 text-gray-300 text-sm sm:text-base">
              <p>{eventDetails.venue}</p>
              <p>243 G. T. Road (North),</p>
              <p>Liluah, Howrah – 711204</p>
            </div>
          </motion.div>

          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="bg-white/10 p-6 rounded-lg backdrop-blur-md"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-purple-400" />
                  <div>
                    <p className="text-white font-medium">Event Date</p>
                    <p className="text-gray-300">{eventDetails.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-pink-400" />
                  <div>
                    <p className="text-white font-medium">Event Time</p>
                    <p className="text-gray-300">{eventDetails.time}</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-blue-400" />
                  <div>
                    <p className="text-white font-medium">Expected Attendees</p>
                    <p className="text-gray-300">
                      {eventDetails.expectedAttendees}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-red-400" />
                  <div>
                    <p className="text-white font-medium">
                      Registration Deadline
                    </p>
                    <p className="text-gray-300">
                      {eventDetails.registrationDeadline}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ),
      contact: (
        <motion.div
          variants={containerVariants}
          className="space-y-4 sm:space-y-6"
        >
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="bg-white/10 p-4 sm:p-6 rounded-lg backdrop-blur-md"
          >
            <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text mb-6 font-orbitron">
              Get in Touch
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-green-400" />
                  <p className="text-gray-300">+91 33 2654 9315 / 17</p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-red-400" />
                  <p className="text-gray-300">utopia@mckvie.edu.in</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5 text-blue-400" />
                  <p className="text-gray-300">utopia-ten-omega.vercel.app</p>
                </div>
                <div className="flex gap-4">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    href={eventDetails.socialMedia.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    <Facebook className="h-5 w-5" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    href={`https://instagram.com/${eventDetails.socialMedia.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-400 hover:text-pink-300"
                  >
                    <Instagram className="h-5 w-5" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    href={eventDetails.socialMedia.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    <Linkedin className="h-5 w-5" />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ),
      team: <TeamSection teamMembers={teamMembers} />,
    };
    return content[tab];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 p-2 sm:p-4 md:p-8">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="max-w-6xl mx-auto bg-black/30 backdrop-blur-xl rounded-xl p-4 sm:p-6 md:p-8 shadow-2xl border border-white/10"
      >
        <motion.div
          variants={fadeInVariants}
          className="text-center mb-8 md:mb-12"
        >
          <motion.h1
            variants={itemVariants}
            className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text font-orbitron"
          >
            Contact Us
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base"
          >
            Join us for an unforgettable experience at Utopia 2025.
          </motion.p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-2 sm:gap-4 mb-6 sm:mb-8"
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 sm:px-6 py-2 rounded-full transition-colors font-orbitron text-sm sm:text-base ${
                activeTab === tab.id
                  ? "bg-white/20 text-white"
                  : "bg-transparent text-gray-400 hover:text-white"
              }`}
            >
              {tab.label}
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial="enter"
            animate="center"
            exit="exit"
            variants={tabContentVariants}
          >
            {renderTabContent(activeTab)}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Contact;
