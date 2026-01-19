'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface AchievementCardProps {
  number: string;
  label: string;
  icon: string;
  index: number;
}

function AchievementCard({ number, label, icon, index }: AchievementCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative rounded-[20px] p-6 sm:p-8 h-full min-h-[140px] sm:min-h-0 flex flex-col"
      style={{
        border: '2px solid #D5E0F5',
        background: 'radial-gradient(107.32% 141.42% at 0% 0%, rgba(255, 255, 255, 0.40) 0%, rgba(255, 255, 255, 0.00) 100%)',
        backdropFilter: 'blur(15px)',
      }}
    >
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
        <Image
          src={icon}
          alt={label}
          width={40}
          height={40}
          className="w-8 h-8 sm:w-10 sm:h-10"
        />
      </div>
      <div className="pr-12 sm:pr-16 flex-1 flex flex-col justify-center">
        <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#34E8CB] mb-2">
          {number}
        </div>
        <div className="text-sm sm:text-base text-[#ffffff]-600">
          {label}
        </div>
      </div>
    </motion.div>
  );
}

export default function AchievementSection() {
  const achievements = [
    {
      number: '$2.6B',
      label: 'Committed Funds',
      icon: '/home/achievements/finance.png',
    },
    {
      number: '500',
      label: 'Direct Portfolio Companies',
      icon: '/home/achievements/office.png',
    },
    {
      number: '73',
      label: 'Exits',
      icon: '/home/achievements/exit.png',
    },
    {
      number: '68',
      label: 'Funds',
      icon: '/home/achievements/funds.png',
    },
    {
      number: '19,500',
      label: 'Companies Vetted',
      icon: '/home/achievements/magnifying.png',
    },
    {
      number: '240,000',
      label: 'Registered Investors',
      icon: '/home/achievements/group.png',
    },
  ];

  return (
    <section className="relative w-full py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/home/achievements/background.png"
          alt="Background"
          fill
          className="w-full"
          priority
        />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 auto-rows-fr">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={index}
              number={achievement.number}
              label={achievement.label}
              icon={achievement.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}