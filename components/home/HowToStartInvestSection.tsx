'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

interface StepCard {
  step: string;
  title: string;
  description: string;
  visualType: 'login' | 'verify' | 'invest';
  stepNumber: string;
}

export default function HowToStartInvestSection() {
  const steps: StepCard[] = [
    {
      step: '01',
      stepNumber: '1',
      title: 'Create an Account',
      description: 'Join by creating a free Investor account (accredited investors only.)',
      visualType: 'login',
    },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: 'center',
      loop: steps.length > 1,
      slidesToScroll: 1,
      breakpoints: {
        '(min-width: 768px)': { slidesToScroll: 1 },
      },
    },
    steps.length > 1 ? [Autoplay({ delay: 5000, stopOnInteraction: false })] : []
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on('select', onSelect);
    onSelect();

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  const lightDots = useMemo(() => {
    return Array.from({ length: 50 }).map((_, i) => {
      const seed = i * 137.508;
      const left = (Math.sin(seed) * 0.5 + 0.5) * 100;
      const top = (Math.cos(seed * 0.7) * 0.5 + 0.5) * 100;
      const delay = (i * 0.1) % 3;
      const duration = 2 + (i % 3) * 0.5;
      const size = 4 + (i % 5) * 1.5;
      
      return { left, top, delay, duration, size, key: i };
    });
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden pt-18 sm:pt-25 lg:pt-30 pb-18 sm:pb-25 lg:pb-30">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 z-0">
          <Image
            src="/home/how-to-start-invest/background.png"
            alt="Background"
            fill
            className="w-full"
            priority
          />
        </div>
        <div className="absolute inset-0 z-[1] pointer-events-none">
          {lightDots.map((dot) => (
            <motion.div
              key={dot.key}
              className="absolute rounded-full"
              style={{
                left: `${dot.left}%`,
                top: `${dot.top}%`,
                width: `${dot.size}px`,
                height: `${dot.size}px`,
                background: `radial-gradient(circle, rgba(96, 165, 224, 0.9) 0%, rgba(54, 232, 202, 0.6) 50%, transparent 100%)`,
                boxShadow: `0 0 ${dot.size * 2}px rgba(96, 165, 224, 0.8), 0 0 ${dot.size * 4}px rgba(54, 232, 202, 0.4)`,
              }}
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 1, 0.5, 1, 0],
                scale: [0.8, 1, 0.9, 1, 0.8],
              }}
              transition={{
                duration: dot.duration,
                delay: dot.delay,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-transparent pointer-events-none z-[3]" />
      </div>
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 sm:mb-8 lg:mb-10"
        >
          <h2 className="text-[26px] sm:text-[29px] md:text-[32px] lg:text-[35px] font-bold text-white mb-3 sm:mb-4">
            How to Start Investing with TheROWD
          </h2>
          <div className="space-y-1 text-[16px] sm:text-[18px] md:text-[20px] text-white/80 max-w-3xl mx-auto">
            <p>Tokenized ownership may provide optional secondary liquidity.</p>
            <p>All opportunities are subject to due-diligence and audit review.</p>
          </div>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4 sm:gap-6">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="min-w-0 relative flex-[0_0_100%] sm:flex-[0_0_85%] lg:flex-[0_0_75%] max-w-[844px] mx-auto"
                >
                  <div className="absolute -right-12 sm:-right-14 lg:-right-16 top-35 -translate-y-1/2 flex flex-col items-center gap-3 z-20">
                    <div
                      className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-none"
                      style={{
                        writingMode: 'vertical-rl',
                        textOrientation: 'mixed',
                        letterSpacing: '0.05em',
                      }}
                    >
                      {step.step}
                    </div>
                    
                    <div className="relative flex flex-col items-center">
                      <div className="w-px h-12 sm:h-16 lg:h-20 bg-white/30" />
                      
                      <div 
                        className="absolute right-2 top-2/3 w-1.5 h-1.5 rounded-full"
                        style={{
                          background: 'rgba(54, 232, 202, 0.6)',
                          boxShadow: '0 0 8px rgba(54, 232, 202, 0.8)',
                        }}
                      />
                    </div>
                    
                    <div
                      className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white/40 leading-none"
                      style={{
                        writingMode: 'vertical-rl',
                        textOrientation: 'mixed',
                        letterSpacing: '0.05em',
                      }}
                    >
                      03
                    </div>
                  </div>

                  <StepCard
                    step={step}
                    isActive={selectedIndex === index}
                    index={index}
                  />

                  <div className="flex items-center gap-2 mt-4">
                    {[0, 1, 2].map((idx) => (
                      <button
                        key={idx}
                        onClick={() => scrollTo(idx)}
                        className={`transition-all duration-300 ${
                          idx === selectedIndex
                            ? 'h-2 w-8 rounded-full bg-white'
                            : 'w-2 h-2 rounded-full bg-transparent border border-white'
                        }`}
                        aria-label={`Go to step ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <ArticleSection />
    </section>
  );
}

function ArticleSection() {
  return (
    <div className="relative w-full mt-12 sm:mt-16 lg:mt-20">
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative w-full mb-8 sm:mb-10 lg:mb-12">
            <div className="relative w-full max-w-4xl mx-auto aspect-[16/10] rounded-lg overflow-hidden border-2 border-white/10">
              <Image
                src="/home/how-to-start-invest/article.png"
                alt="Article"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[22px] sm:text-[24px] md:text-[26px] lg:text-[29px] font-bold text-white text-center leading-tight"
            >
              Evaluated by experts. Verified by data. Protected by blockchain.
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4 sm:space-y-6 text-center"
            >
              <p className="text-[14px] sm:text-[16px] md:text-[18px] text-white/90 leading-relaxed">
                TheRowd curates and evaluates startups from seed to growth stage through a team of Web2 analysts, Web3 specialists, and independent blockchain auditors. Only verified and high-potential opportunities are tokenized and offered to investors.
              </p>

              <p className="text-[14px] sm:text-[16px] md:text-[18px] text-white/90 leading-relaxed">
                To redefine private market investing by making high-value opportunities accessible, secure, and transparent through tokenized ownership.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-4 sm:pt-6"
            >
              <p
                className="text-[14px] sm:text-[16px] md:text-[18px] text-center leading-relaxed font-medium"
                style={{
                  background: 'linear-gradient(90deg, #60A5E0 0%, #36E8CA 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                To curate, evaluate, and unlock early-stage to growth-stage investment opportunities – through expert due diligence, institutional standards, and blockchain-powered ownership.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function StepCard({
  step,
  isActive,
  index,
}: {
  step: StepCard;
  isActive: boolean;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{
        opacity: isActive ? 1 : 0.8,
        scale: isActive ? 1 : 0.95,
      }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="rounded-[20px] overflow-hidden transition-all duration-500"
    >
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: '844/473' }}>
        <Image
          src="/home/how-to-start-invest/create-account.png"
          alt="Create Account"
          fill
          priority
        />

        <div className="relative z-10 h-full flex items-center">
          <div className="p-5 sm:p-8 lg:p-10 w-full lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
            >
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4 leading-tight drop-shadow-lg">
                {step.stepNumber}. {step.title}
              </h3>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed drop-shadow-md">
                {step.description}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

