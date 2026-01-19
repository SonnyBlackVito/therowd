'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

export default function WhyChooseUsSection() {
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
    <section className="relative w-full py-12 sm:py-16 lg:py-20 bg-black overflow-hidden">
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center text-[26px] sm:text-[29px] md:text-[32px] lg:text-[35px] font-bold mb-8 sm:mb-12 lg:mb-16"
        >
          <span className="bg-gradient-to-r from-[#60A5E0] to-[#36E8CA] bg-clip-text text-transparent">
            Why choose Kpop Road ?
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full max-w-3xl mx-auto"
        >
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{
              border: '2px solid rgba(96, 165, 224, 0.5)',
              boxShadow: '0 0 40px rgba(96, 165, 224, 0.4), 0 0 80px rgba(54, 232, 202, 0.3)',
            }}
          >
            <video
              ref={videoRef}
              src="/video/introduce-crypto.mp4"
              className="w-full h-auto"
              onClick={handleVideoClick}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              controls={isPlaying}
            />

              {!isPlaying && (
                <div
                  className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/20 hover:bg-black/30 transition-colors duration-300"
                  onClick={handlePlayClick}
                >
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24">
                    <div className="absolute inset-0 bg-white rounded-full opacity-90"></div>
                    <div className="relative w-full h-full flex items-center justify-center">
                      <svg
                        className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-black ml-1"
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
        </motion.div>
      </div>
    </section>
  );
}