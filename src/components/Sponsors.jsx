import React, { useEffect, useRef } from 'react';

const Sponsors = () => {
  const sponsorsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.sponsor-card');
            cards.forEach(card => card.classList.add('animate'));
          }
        });
      },
      {
        threshold: 0.1
      }
    );

    if (sponsorsRef.current) {
      observer.observe(sponsorsRef.current);
    }

    return () => {
      if (sponsorsRef.current) {
        observer.unobserve(sponsorsRef.current);
      }
    };
  }, []);

  const sponsors = [
    {
      name: "Sponsor 1",
      logo: "https://e7.pngegg.com/pngimages/519/252/png-clipart-logo-brand-adidas-sponsor-shoe-brands-angle-text.png",
      type: "platinum"
    },
    {
      name: "Sponsor 2",
      logo: "https://e7.pngegg.com/pngimages/519/252/png-clipart-logo-brand-adidas-sponsor-shoe-brands-angle-text.png",
      type: "gold"
    },
    {
      name: "Sponsor 3",
      logo: "https://e7.pngegg.com/pngimages/519/252/png-clipart-logo-brand-adidas-sponsor-shoe-brands-angle-text.png",
      type: "silver"
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900" ref={sponsorsRef}>
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-5xl font-bold text-center mb-12 font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 hover:from-cyan-400 hover:via-purple-400 hover:to-cyan-400 transition-all duration-700 animate-gradient">
          Our Sponsors
        </h2>

        {/* Sponsors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="sponsor-card"
            >
              <div
                className={`card-content p-6 rounded-xl transform transition-all duration-500 ${
                  sponsor.type === 'platinum'
                    ? 'bg-gradient-to-r from-purple-900/30 to-pink-900/30 border-2 border-purple-500/30 hover:border-purple-400'
                    : sponsor.type === 'gold'
                    ? 'bg-gradient-to-r from-amber-900/30 to-yellow-900/30 border-2 border-amber-500/30 hover:border-amber-400'
                    : 'bg-gradient-to-r from-gray-900/30 to-slate-900/30 border-2 border-gray-500/30 hover:border-gray-400'
                }`}
              >
                <div className="flex flex-col items-center justify-center space-y-4">
                  {/* Sponsor Logo */}
                  <div className="sponsor-logo w-32 h-32 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:animate-shine">
                    <img
                      src={sponsor.logo}
                      alt={`${sponsor.name} logo`}
                      className="w-24 h-24 object-contain transition-all duration-300 group-hover:scale-110"
                    />
                  </div>
                  {/* Sponsor Name */}
                  <h3 className={`text-xl font-semibold text-center ${
                    sponsor.type === 'platinum'
                      ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400'
                      : sponsor.type === 'gold'
                      ? 'text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400'
                      : 'text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-slate-400'
                  }`}>
                    {sponsor.name}
                  </h3>
                  {/* Sponsor Type Badge */}
                  <span className={`px-4 py-1 rounded-full text-sm font-medium ${
                    sponsor.type === 'platinum'
                      ? 'bg-gradient-to-r from-purple-600/40 to-pink-600/40 text-purple-200'
                      : sponsor.type === 'gold'
                      ? 'bg-gradient-to-r from-amber-600/40 to-yellow-600/40 text-amber-200'
                      : 'bg-gradient-to-r from-gray-600/40 to-slate-600/40 text-gray-200'
                  }`}>
                    {sponsor.type.charAt(0).toUpperCase() + sponsor.type.slice(1)} Sponsor
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
