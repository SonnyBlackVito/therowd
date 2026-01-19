'use client';

import Image from 'next/image';
import Link from 'next/link';
import ProjectCard from '@/app/dashboard/opportunities/components/ProjectCard';

export default function TrendingSection() {
  const trendingProjects = [
    {
      slug: 'kpop-road',
      banner: '/home/invest/kpoproad-banner.png',
      logo: '/home/invest/kpoproad-logo.png',
      title: 'Kpop Road',
      token: '$KRST',
      status: 'allowlist' as const,
      description:
        "KpopRoad's 300-NFT collection offers exclusive K-pop access, VIP rewards, and virtual events.",
      totalRaised: '$200,000',
      targetRaised: 'Finished!',
      saleType: 'Vanguard',
    },
    {
      slug: 'klove-pet',
      banner: '/home/invest/klove-pet-banner.png',
      logo: '/home/invest/klove-pet-logo.png',
      title: 'K-Love Pet',
      token: '$KPET',
      status: 'closed' as const,
      description:
        "KpopRoad's 300-NFT collection offers exclusive K-pop access, VIP rewards, and virtual events.",
      totalRaised: '$200,000',
      targetRaised: 'Finished!',
      saleType: 'Vanguard',
    },
    {
      slug: 'royal-heritage',
      banner: '/home/invest/royal-banner.png',
      logo: '/home/invest/royal-logo.png',
      title: 'Royal Heritage Card',
      token: '$RHCrd',
      status: 'allowlist' as const,
      description:
        "KpopRoad's 300-NFT collection offers exclusive K-pop access, VIP rewards, and virtual events.",
      totalRaised: '$500,000',
      targetRaised: 'Finished!',
      saleType: 'Vanguard',
    },
  ];

  return (
    <section className="relative w-full py-12 sm:py-16 lg:py-20 overflow-hidden">

      <div className="absolute inset-0">
        <Image
          src="/dashboard/how-to-invest/trending-background.png"
          alt="Trending background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 sm:mb-12 lg:mb-16">
          Trending Now
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {trendingProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              slug={project.slug}
              banner={project.banner}
              logo={project.logo}
              title={project.title}
              token={project.token}
              status={project.status}
              description={project.description}
              totalRaised={project.totalRaised}
              targetRaised={project.targetRaised}
              saleType={project.saleType}
            />
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/dashboard/opportunities"
            className="inline-flex items-center gap-2 text-lg font-medium text-white hover:text-[#60A5E0] transition-colors duration-300"
          >
            See more investment opportunities
            <svg
              className="w-5 h-5"
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
        </div>
      </div>
    </section>
  );
}
