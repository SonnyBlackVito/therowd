'use client';

import { useState, useRef } from 'react';

export default function WhyInvestSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <section className="relative w-full py-12 sm:py-16 lg:py-20 bg-[#1e1e1e]">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 sm:mb-12 lg:mb-16">
          Why invest with OurCrowd?
        </h2>

        <div className="relative w-full max-w-5xl mx-auto">
          <div
            className="relative rounded-2xl overflow-hidden bg-black"
            style={{
              border: '2px solid rgba(96, 165, 224, 0.3)',
              boxShadow: '0 0 40px rgba(96, 165, 224, 0.2), 0 0 80px rgba(54, 232, 202, 0.15)',
            }}
          >
            <video
              ref={videoRef}
              src="/video/why-invest.mp4"
              className="w-full h-auto aspect-video"
              onClick={handleVideoClick}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              controls={isPlaying}
              poster="/dashboard/how-to-invest/video-thumbnail.jpg"
            />

            {!isPlaying && (
              <div
                className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/40 hover:bg-black/50 transition-colors duration-300"
                onClick={handlePlayClick}
              >
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28">
                  <div className="absolute inset-0 bg-red-600 rounded-full opacity-90 shadow-2xl"></div>
                  <div className="relative w-full h-full flex items-center justify-center">
                    <svg
                      className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-white ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
