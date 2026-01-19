'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function PartnerSection() {
  const partners = [
    { name: 'tvK', logo: '/home/partners/tvk-logo.png' },
    { name: 'THE HANA', logo: '/home/partners/hana-logo.png' },
    { name: 'TikTok', logo: '/home/partners/tiktok-logo.png' },
    { name: 'N pay', logo: '/home/partners/npay-logo.png' },
    { name: 'K LOVE PET', logo: '/home/partners/klove-pet-logo.png' },
    { name: 'K POP ROAD', logo: '/home/partners/kpoproad-logo.png' },
  ];

  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="relative w-full py-7 sm:py-8 lg:py-10 overflow-hidden bg-[#000]">
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center text-[18px] sm:text-[22px] md:text-[24px] lg:text-[30px] font-bold mb-8 sm:mb-10 lg:mb-12"
        >
          <span className="text-white">Trusted Backers </span>
          <span className="text-[#36E8CA]">&</span>
          <span className="text-white"> Partners</span>
        </motion.h2>

        <div className="hidden lg:flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center w-[180px] h-[98px] rounded-[12px] bg-black border border-[#313131] shadow-[0_4px_10px_0_rgba(255,255,255,0.25)]"
              style={{
                padding: '31px 38.104px 31.173px 38px',
              }}
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={120}
                className="w-full h-full object-contain"
              />
            </motion.div>
          ))}
        </div>

        {/* Mobile/Tablet view - auto scrolling carousel */}
        <div className="lg:hidden overflow-hidden">
          <div className="flex animate-scroll gap-4 sm:gap-6">
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center w-[180px] h-[98px] rounded-[12px] bg-black border border-[#313131] shadow-[0_4px_10px_0_rgba(255,255,255,0.25)]"
                style={{
                  padding: '31px 38.104px 31.173px 38px',
                }}
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={120}
                  height={120}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-180px * 6 - 1rem * 5));
          }
        }
        @keyframes scroll-sm {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-180px * 6 - 1.5rem * 5));
          }
        }
        .animate-scroll {
          animation: scroll 10s linear infinite;
        }
        @media (min-width: 640px) {
          .animate-scroll {
            animation: scroll-sm 10s linear infinite;
          }
        }
      `}</style>
    </section>
  );
}