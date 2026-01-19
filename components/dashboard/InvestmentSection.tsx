'use client';

import Image from 'next/image';
import Link from 'next/link';
import GradientButton from '@/components/ui/buttons/GradientButton';

interface ProjectCardProps {
  slug: string;
  banner: string;
  logo: string;
  title: string;
  token: string;
  status: 'allowlist' | 'closed';
  description: string;
  totalRaised: string;
  targetRaised: string;
  saleType: string;
}

function ProjectCard({
  slug,
  banner,
  logo,
  title,
  token,
  status,
  description,
  totalRaised,
  targetRaised,
  saleType,
}: ProjectCardProps) {
  return (
    <div className="rounded-[12px] overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-white/10 bg-gradient-to-b from-[#2A2A2A] to-[#1E1E1E]">
      <div className="relative w-full h-48">
        <Image
          src={banner}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="relative w-16 h-16 rounded-full border-2 border-white shadow-lg overflow-hidden bg-gradient-to-b from-[#2A2A2A] to-[#1E1E1E]">
            <Image
              src={logo}
              alt={`${title} logo`}
              fill
              className="p-2 object-contain"
            />
          </div>
        </div>
      </div>

      <div className="p-6 pt-12 bg-gradient-to-b from-transparent to-[#1E1E1E]">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
            <p className="text-sm text-gray-400">{token}</p>
          </div>
          <span
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap ${
              status === 'allowlist'
                ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                : 'bg-gray-700 text-gray-300'
            }`}
          >
            {status === 'allowlist' ? (
              <>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <span>Allowlist Open</span>
              </>
            ) : (
              'Closed'
            )}
          </span>
        </div>

        <p className="text-sm text-[#D9D9D9] leading-relaxed mb-6">
          {description}
        </p>

        <div className="space-y-3 mb-6">
          <div className="flex items-center justify-between text-sm text-white">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-white flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
              <span>Total raised:</span>
            </div>
            <strong className="font-semibold">{totalRaised}</strong>
          </div>
          <div className="flex items-center justify-between text-sm text-white">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-white flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Total raised:</span>
            </div>
            <strong
              className="font-semibold"
              style={{
                background: 'linear-gradient(90deg, #60A5E0 0%, #36E8CA 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {targetRaised}
            </strong>
          </div>
          <div className="flex items-center justify-between text-sm text-white">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-white flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                />
              </svg>
              <span>Sale Type:</span>
            </div>
            <strong className="font-semibold">{saleType}</strong>
          </div>
        </div>

        <Link href={`/investment/${slug}`} className="block">
          <GradientButton
            size="sm"
            className="w-full rounded-[8px] border-2"
            gradient="linear-gradient(90deg, #60A5E0 0%, #36E8CA 100%)"
            style={{
              borderColor: '#36E8CA',
              boxShadow: '0 4px 4px 0 rgba(96, 165, 224, 0.50)',
            }}
          >
            Token Sale
          </GradientButton>
        </Link>
      </div>
    </div>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  seeAllLink?: string;
}

function SectionHeader({ title, subtitle, seeAllLink }: SectionHeaderProps) {
  return (
    <div className="flex items-start justify-between mb-6">
      <div>
        <h2 
          className="text-2xl font-bold mb-2"
          style={{
            background: 'linear-gradient(90deg, #60A5E0 0%, #36E8CA 100%)',
            backgroundClip: 'text'
          }}
        >
          {title}
        </h2>
        {subtitle && <p className="text-base text-white/80">{subtitle}</p>}
      </div>
      {seeAllLink && (
        <Link
          href={seeAllLink}
          className="text-[#36E8CA] hover:text-[#60A5E0] font-medium text-sm transition-colors duration-200 whitespace-nowrap ml-4"
        >
          See all
        </Link>
      )}
    </div>
  );
}

interface InvestmentSectionProps {
  variant?: 'dashboard' | 'opportunities';
}

export default function InvestmentSection({
  variant = 'dashboard',
}: InvestmentSectionProps = {}) {
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

  if (variant === 'opportunities') {
    return (
      <div className="flex w-full flex-col gap-12 py-8">
        <div>
          <SectionHeader title="Trending Now" />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
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
        </div>

        <div>
          <SectionHeader title="New Opportunities" />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard
                key={`new-${project.slug}`}
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

        <div>
          <SectionHeader title="Investment in Funds" />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard
                key={`funds-${project.slug}`}
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

        {/* All Opportunities Section */}
        <div>
          <SectionHeader title="All Opportunities" />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
              key="all-opportunities"
              slug={projects[0].slug}
              banner={projects[0].banner}
              logo={projects[0].logo}
              title={projects[0].title}
              token={projects[0].token}
              status={projects[0].status}
              description={projects[0].description}
              totalRaised={projects[0].totalRaised}
              targetRaised={projects[0].targetRaised}
              saleType={projects[0].saleType}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="w-full bg-[#05010F] py-8">
      <div className="mx-auto flex w-full flex-col gap-12 px-4">
        <div>
          <SectionHeader
            title="Trending Opportunities"
            subtitle="Invest in cutting-edge tech startups from around the world"
            seeAllLink="/opportunities?filter=trending"
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
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
        </div>

        <div>
          <SectionHeader
            title="New Opportunities"
            subtitle="Invest in OurCrowd's new investment opportunities"
            seeAllLink="/opportunities?filter=new"
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard
                key={`new-${project.slug}`}
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
      </div>
    </section>
  );
}
