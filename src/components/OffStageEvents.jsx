import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Offstages from "../assets/images/Offstages.jpg";
import Illuminati from "../assets/images/Illuminati.jpg";
import Flameless from "../assets/images/FlamelessFest.jpg";
import Ecocraft from "../assets/images/Ecocraft.jpg";

const images = [Offstages, Illuminati, Flameless, Ecocraft];
const registrationLinks = [
    "#offstages",
    "#illuminati",
    "#flameless",
    "#ecocraft"
]; // Replace these with actual registration links

export default function OffStageEvents() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNext = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="relative w-full max-w-3xl mx-auto">
            {/* Neon Heading */}
            <h1 className="text-4xl md:text-6xl font-orbitron font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-cyan-400 to-purple-500 animate-pulse">
                Offstage Events
            </h1>

            {/* Slider Container */}
            <div className="flex items-center justify-center">
                <div className="relative w-full h-96 overflow-hidden rounded-xl bg-black/20 backdrop-blur lg:w-4/5 xl:w-3/4">
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
                                        className="w-full h-full object-center rounded-lg"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={goToPrevious}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/75 transition-colors z-20"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={goToNext}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/75 transition-colors z-20"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Indicators */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index
                                        ? "bg-cyan-400 shadow-[0_0_8px_2px_rgba(34,211,238,0.6)]"
                                        : "bg-white/50 hover:bg-white/75"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
            {/* Register Now Button outside the image div */}
            <div className="text-center mt-4 z-20">
                <a
                    href={registrationLinks[currentIndex]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-cyan-400 text-white font-semibold rounded-lg hover:bg-cyan-500 transition-all duration-300 shadow-lg shadow-cyan-500/50 hover:shadow-2xl transform scale-105 hover:scale-110"
                >
                    Register Now
                </a>
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
