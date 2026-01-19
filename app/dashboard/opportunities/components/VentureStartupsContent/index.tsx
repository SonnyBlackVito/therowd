'use client';

import { useState } from 'react';
import { FiChevronDown, FiX } from 'react-icons/fi';
import ProjectCard from '../ProjectCard';

export default function VentureStartupsContent() {
  const [activeFilters, setActiveFilters] = useState([
    'Funding Now',
    'Cybersecurity',
    'Healthcare',
    'Application Software',
    'Seed',
    'Asia',
    'Europe',
  ]);

  const projects = [
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

  const allProjects = [
    ...projects,
    ...projects,
    ...projects,
  ].slice(0, 9);

  const removeFilter = (filter: string) => {
    setActiveFilters(activeFilters.filter((f) => f !== filter));
  };

  const clearAllFilters = () => {
    setActiveFilters([]);
  };

  return (
    <div className="flex w-full flex-col gap-6 py-8">
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center gap-4">
          <div className="relative">
            <select className="appearance-none rounded-lg border border-white/20 bg-[#1E1E1E] px-4 py-2 pr-10 text-sm text-white focus:border-white/40 focus:outline-none">
              <option>Funding Status</option>
            </select>
            <FiChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/60" />
          </div>
          <div className="relative">
            <select className="appearance-none rounded-lg border border-white/20 bg-[#1E1E1E] px-4 py-2 pr-10 text-sm text-white focus:border-white/40 focus:outline-none">
              <option>Sector</option>
            </select>
            <FiChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/60" />
          </div>
          <div className="relative">
            <select className="appearance-none rounded-lg border border-white/20 bg-[#1E1E1E] px-4 py-2 pr-10 text-sm text-white focus:border-white/40 focus:outline-none">
              <option>Theme</option>
            </select>
            <FiChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/60" />
          </div>
          <div className="relative">
            <select className="appearance-none rounded-lg border border-white/20 bg-[#1E1E1E] px-4 py-2 pr-10 text-sm text-white focus:border-white/40 focus:outline-none">
              <option>Funding Stage</option>
            </select>
            <FiChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/60" />
          </div>
          <div className="relative">
            <select className="appearance-none rounded-lg border border-white/20 bg-[#1E1E1E] px-4 py-2 pr-10 text-sm text-white focus:border-white/40 focus:outline-none">
              <option>Location</option>
            </select>
            <FiChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/60" />
          </div>

          <div className="ml-auto flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-white/70">Sort by:</span>
              <div className="relative">
                <select className="appearance-none rounded-lg border border-white/20 bg-[#1E1E1E] px-4 py-2 pr-10 text-sm text-white focus:border-white/40 focus:outline-none">
                  <option>Relevance</option>
                </select>
                <FiChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/60" />
              </div>
            </div>
            <button
              type="button"
              onClick={clearAllFilters}
              className="rounded-lg border border-white/20 bg-[#1E1E1E] px-4 py-2 text-sm text-white transition-colors hover:border-white/40"
            >
              CLEAR FILTERS
            </button>
          </div>
        </div>

        {activeFilters.length > 0 && (
          <div className="flex flex-wrap items-center gap-2">
            {activeFilters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => removeFilter(filter)}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#2A2A2A] px-3 py-1.5 text-xs text-white transition-colors hover:border-white/40"
              >
                <span>{filter}</span>
                <FiX className="h-3 w-3" />
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {allProjects.map((project, index) => (
          <ProjectCard
            key={`${project.slug}-${index}`}
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
    </div>
  );
}

