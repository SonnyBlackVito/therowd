'use client';

import Link from 'next/link';
import { FiTrendingUp, FiBell } from 'react-icons/fi';

interface NextStepCardProps {
  icon: React.ReactNode;
  title: string;
  time: string;
  href: string;
}

function NextStepCard({ icon, title, time, href }: NextStepCardProps) {
  return (
    <Link
      href={href}
      className="group relative flex flex-col items-center rounded-[12px] border border-white/20 bg-gradient-to-b from-[#2A2A2A] to-[#1E1E1E] p-8 transition-all duration-300 hover:border-white/40 hover:shadow-lg"
    >
      <div className="absolute -top-6 z-10">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-[#60A5E0] to-[#36E8CA] shadow-lg">
          <div className="text-white">{icon}</div>
        </div>
      </div>

      <div className="mt-6 flex flex-col items-center text-center">
        <h3 className="mb-2 text-lg font-medium text-white">{title}</h3>
        <p className="text-sm text-white/70">{time}</p>
      </div>
    </Link>
  );
}

export default function NextStepSection() {
  const steps = [
    {
      icon: <FiTrendingUp className="h-6 w-6" />,
      title: 'Browse Opportunities',
      time: '5 min',
      href: '/opportunities',
    },
    {
      icon: <FiBell className="h-6 w-6" />,
      title: 'Refer a friend',
      time: '2 min',
      href: '/refer',
    },
  ];

  return (
    <section className="w-full bg-[#05010F] py-8">
      <div className="mx-auto flex w-full flex-col gap-6 px-4">
        <h2 className="text-2xl font-semibold text-[#60A5E0]">
          Your Next Steps
        </h2>

        <div className="grid grid-cols-3 gap-6 md:grid-cols-5">
          {steps.map((step, index) => (
            <NextStepCard
              key={index}
              icon={step.icon}
              title={step.title}
              time={step.time}
              href={step.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
