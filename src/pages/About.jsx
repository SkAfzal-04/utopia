// src/pages/About.jsx
import React from 'react';

export function About  ()  {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-8">
      <div className="space-y-8 text-center max-w-4xl">
        <h2 className="text-5xl font-bold text-yellow-400">About Us</h2>
        <p className="text-lg leading-relaxed">
          We are a passionate team dedicated to delivering top-notch services. Our mission is to provide innovative solutions
          that make life easier and more enjoyable. With years of experience and a drive for excellence, we strive to exceed
          our clients' expectations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <img
              src="https://via.placeholder.com/200"
              alt="Team Member 1"
              className="w-48 h-48 object-cover rounded-full shadow-lg"
            />
            <p className="mt-4 text-lg font-semibold">John Doe</p>
            <p className="text-sm">CEO & Founder</p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="https://via.placeholder.com/200"
              alt="Team Member 2"
              className="w-48 h-48 object-cover rounded-full shadow-lg"
            />
            <p className="mt-4 text-lg font-semibold">Jane Smith</p>
            <p className="text-sm">Chief Designer</p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="https://via.placeholder.com/200"
              alt="Team Member 3"
              className="w-48 h-48 object-cover rounded-full shadow-lg"
            />
            <p className="mt-4 text-lg font-semibold">Mike Johnson</p>
            <p className="text-sm">Lead Developer</p>
          </div>
        </div>

        <p className="text-lg leading-relaxed">
          Our core values are integrity, innovation, and customer satisfaction. We believe in creating a positive impact
          through our work and fostering long-term relationships with our clients and partners.
        </p>
      </div>
    </section>
  );
};


