"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface CarouselSlide {
  id: number;
  title: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonLink: string;
  image: string;
  backgroundColor: string;
}

const slides: CarouselSlide[] = [
  {
    id: 1,
    title: "Invest with confidence verified, audited, safeguarded",
    description: "verified, audited, safeguarded",
    features: [
      "Every offering undergoes strict due-diligence of business & financials",
      "founder & team screening",
      "IP assessment smart contract security",
      "All opportunities undergo on-chain tradeable, immutable independent buying speculation",
      "You are acquiring qualified, verified, asset ownership",
    ],
    buttonText: "Invest Securely",
    buttonLink: "/invest",
    backgroundColor: "bg-white",
    image: "/invesment-how/key_one.png",
  },
  {
    id: 2,
    title: "Curated access to exclusive tokenized investments",
    description:
      "Unlock access to premium, high-value private market deals — from venture-backed startups to tokenized real-world assets. Each opportunity is hand-selected and structured for fractional ownership, allowing you to enter elite investment rounds with minimal capital while retaining institutional-grade transparency and governance.",
    features: [],
    buttonText: "Explore Opportunities",
    buttonLink: "/opportunities",
    backgroundColor: "bg-white",
    image: "/invesment-how/key_one.png",
  },
  {
    id: 3,
    title: "Transparent & Secure",
    description:
      "Blockchain-powered ownership with institutional-grade governance",
    features: [
      "Real-time portfolio tracking",
      "Instant settlements & transfers",
      "Smart contract automation",
      "Full ownership transparency",
    ],
    buttonText: "Learn More",
    buttonLink: "/about",
    backgroundColor: "bg-white",
    image: "/invesment-how/key_two.png",
  },
];

export default function InvestmentCarousel() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlay]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlay(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlay(false);
  };

  const slide = slides[currentSlide];

  return (
    <div className="w-full bg-[#1E1E1E] py-8 md:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Carousel Container */}
        <div className="relative h-auto md:h-96 lg:h-112 flex items-center justify-center py-8 md:py-0">
          {/* Previous Slide - Hidden on mobile and tablet */}
          <div className="hidden lg:block absolute left-0 w-1/4 transition-all duration-500 opacity-60 scale-75 z-10">
            <div className="bg-white rounded-2xl border-2 border-[#36E8CA] overflow-hidden">
              <div className="flex flex-col h-80 p-6">
                <h3 className="text-lg font-bold text-gray-900 pb-4 line-clamp-2">
                  {
                    slides[(currentSlide - 1 + slides.length) % slides.length]
                      .title
                  }
                </h3>
                <p className="text-gray-600 text-sm pb-4 line-clamp-3">
                  {
                    slides[(currentSlide - 1 + slides.length) % slides.length]
                      .description
                  }
                </p>

                {/* Features List */}
                {slides[(currentSlide - 1 + slides.length) % slides.length]
                  .features.length > 0 && (
                  <ul className="space-y-1 mb-6">
                    {slides[
                      (currentSlide - 1 + slides.length) % slides.length
                    ].features
                      .slice(0, 3)
                      .map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[#36E8CA] font-bold text-lg mt-0.5 shrink-0">
                            ✓
                          </span>
                          <span className="text-gray-700 text-xs line-clamp-2">
                            {feature}
                          </span>
                        </li>
                      ))}
                  </ul>
                )}

                <button className="w-fit px-5 py-2 bg-gradient-to-r from-[#60A5E0] to-[#36E8CA] text-white font-semibold rounded-lg hover:opacity-90 transition text-sm">
                  {
                    slides[(currentSlide - 1 + slides.length) % slides.length]
                      .buttonText
                  }
                </button>
              </div>
            </div>
          </div>

          {/* Current Slide - Center */}
          <div className="w-full md:w-4/5 lg:w-3/5 lg:absolute lg:left-1/2 lg:-translate-x-1/2 z-50">
            <div className="bg-white rounded-2xl border-2 border-[#36E8CA] overflow-hidden shadow-2xl">
              <div className="flex flex-col md:flex-row items-stretch h-auto md:h-80">
                {/* Left Side - Text Content */}
                <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between bg-white">
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 line-clamp-3">
                      {slide.title}
                    </h2>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {slide.description}
                    </p>

                    {/* Features List */}
                    {slide.features.length > 0 && (
                      <ul className="space-y-1">
                        {slide.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-[#36E8CA] font-bold text-lg mt-0.5 shrink-0">
                              ✓
                            </span>
                            <span className="text-gray-700 text-xs line-clamp-2">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Button */}
                  <button className="w-fit px-5 py-2 bg-gradient-to-r from-[#60A5E0] to-[#36E8CA] text-white font-semibold rounded-lg hover:opacity-90 transition text-sm">
                    {slide.buttonText}
                  </button>
                </div>

                {/* Right Side - Image */}
                <div className="w-full md:w-1/2 h-40 md:h-80 bg-gradient-to-br from-[#001a4d] to-black overflow-hidden hidden md:flex items-center justify-center relative">
                  {slide.image && (
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      width={400}
                      height={320}
                      className="object-cover w-full h-full"
                      priority
                    />
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Next Slide - Hidden on mobile and tablet */}
          <div className="hidden lg:block absolute right-0 scale-75 w-1/4 transition-all duration-500 opacity-60 z-10">
            <div className="bg-white rounded-2xl border-2 border-[#36E8CA] overflow-hidden shadow-2xl h-80">
              <div className="relative w-full h-full bg-gradient-to-br from-[#001a4d] to-black flex items-center justify-center">
                {slide.image && (
                  <Image
                    src={slides[(currentSlide + 1) % slides.length].image}
                    alt={slides[(currentSlide + 1) % slides.length].title}
                    width={300}
                    height={320}
                    className="object-cover w-full h-full"
                    priority
                  />
                )}
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-40 hidden md:flex w-10 md:w-12 h-10 md:h-12 rounded-full border-2 border-white/70 items-center justify-center hover:border-white hover:bg-white/10 transition -ml-8 md:-ml-20">
            <ChevronLeft className="w-5 md:w-6 h-5 md:h-6 text-white" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-40 hidden md:flex w-10 md:w-12 h-10 md:h-12 rounded-full border-2 border-white/70 items-center justify-center hover:border-white hover:bg-white/10 transition -mr-8 md:-mr-20">
            <ChevronRight className="w-5 md:w-6 h-5 md:h-6 text-white" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 md:gap-3 mt-8 md:mt-12">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all rounded-full ${
                index === currentSlide
                  ? "bg-white w-6 md:w-8 h-2.5 md:h-3"
                  : "bg-white/30 w-2.5 md:w-3 h-2.5 md:h-3 hover:bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
