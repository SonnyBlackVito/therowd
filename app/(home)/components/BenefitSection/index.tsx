'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface BenefitCardProps {
  title: string;
  description?: string;
  ctaText: string;
  ctaHref: string;
}

function BenefitCard({ title, description, ctaText, ctaHref }: BenefitCardProps) {
  return (
    <div
      className="inline-flex flex-col justify-center items-center rounded-[20px] gap-4 sm:gap-6 md:gap-10 h-full w-full py-5 px-3 sm:py-7 sm:px-4 md:py-6 md:px-3 lg:py-10 lg:px-4"
      style={{
        border: '2px solid #D5E0F5',
        background: 'radial-gradient(107.32% 141.42% at 0% 0%, rgba(255, 255, 255, 0.40) 0%, rgba(255, 255, 255, 0.00) 100%)',
        backdropFilter: 'blur(15px)',
      }}
    >
      <h3
        className="text-[13px] sm:text-[15px] md:text-[18px] font-bold text-white text-center"
        style={{
          textShadow:
            '0 0 25px rgba(255, 255, 255, 0.85), 0 0 15px rgba(54, 232, 202, 0.65)',
        }}
      >
        {title}
      </h3>
      {description && (
        <p className="text-[#ffffff]-600 text-sm sm:text-base md:text-lg text-center">
          {description}
        </p>
      )}
      {ctaText && (
        <Link
          href={ctaHref}
          className="inline-flex items-center text-[#9EE2FF] hover:text-[#9EE2FF] font-medium text-sm sm:text-base transition-colors duration-200"
        >
          {ctaText}
          <svg
            className="ml-2 w-4 h-4 sm:w-5 sm:h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      )}
    </div>
  );
}

export default function BenefitSection() {
  const benefits = [
    {
      title: 'Invest Directly in Breakout Startups(Web2-Web3)',
      description: undefined,
      ctaText: '',
      ctaHref: '/invest',
    },
    {
      title: 'Co-Invest With Elite Venture Funds',
      description: 'Exclusive access to institutional-grade funds.',
      ctaText: 'Join the Round',
      ctaHref: '/co-invest',
    },
    {
      title: 'Grow Wealth Through Private Alternatives',
      description: 'Unlock asset classes outside Wall Street.',
      ctaText: 'Discover Investments',
      ctaHref: '/alternatives',
    },
  ];

  return (
    <section className="relative w-full py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/home/benefits/background.png"
          alt="Background"
          fill
          className="w-full"
          priority
        />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 
            className="text-[22px] sm:text-[35px] md:text-[40px] lg:text-[45px] font-bold text-[#ffffff]-900 mb-4 sm:mb-6"
            style={{
              textShadow:
                '0 0 25px rgba(255, 255, 255, 0.85), 0 0 15px rgba(54, 232, 202, 0.65)',
            }}
          >
            Your access to exclusive private market investments – once reserved for elite investors.
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[16px] sm:text-[20px] md:text-[24px] text-[#ffffff]-700"
          >
            Invest like a venture fund. Own what others can&apos;t.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-6 md:gap-8 lg:gap-10 items-start">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`md:min-h-0 ${
                index === 0 
                  ? 'md:mt-0' 
                  : index === 1 
                  ? 'md:mt-8 lg:mt-12' 
                  : 'md:mt-16 lg:mt-24'
              }`}
            >
              <BenefitCard
                title={benefit.title}
                description={benefit.description}
                ctaText={benefit.ctaText}
                ctaHref={benefit.ctaHref}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}