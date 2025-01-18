import { useState, useEffect } from "react";
import battleOfBeats from "../assets/images/battleOfBeats.jpg";
import soloSinging from "../assets/images/soloSinging.jpg";

const images = [battleOfBeats, soloSinging];

export default function OnStageEvents() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);


  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      {/* Neon Heading */}
      <h1 className="text-4xl md:text-6xl font-orbitron font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-cyan-400 to-purple-500 animate-pulse">
        Onstage Events
      </h1>

      {/* Slider Container */}
      <div className="relative w-full h-96 overflow-hidden rounded-xl bg-black/20 backdrop-blur">
        {/* Multicolor Glow Effect */}
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 opacity-30 animate-pulse"></div>

        <div
          className="absolute w-full h-full transition-transform duration-500 ease-out z-10"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="absolute top-0 left-0 w-full h-full"
              style={{ transform: `translateX(${index * 100}%)` }}
            >
              {/* Image Container with Glow Effect */}
              <div className="h-full p-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-xl animate-glow">
                <img
                  src={image || "/placeholder.svg"}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-centre  rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "bg-cyan-400 shadow-[0_0_8px_2px_rgba(34,211,238,0.6)]"
                  : "bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Background Glow Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-purple-500 to-cyan-400 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
