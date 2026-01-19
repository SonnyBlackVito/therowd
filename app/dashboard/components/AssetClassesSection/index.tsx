'use client';

import Link from 'next/link';

interface AssetClassCardProps {
  title: string;
  description: string;
  href: string;
}

function AssetClassCard({ title, description, href }: AssetClassCardProps) {
  return (
    <div className="rounded-[12px] border border-white/20 bg-gradient-to-b from-[#2A2A2A] to-[#1E1E1E] p-6 transition-all duration-300 hover:border-white/40 hover:shadow-lg">
      <h3 className="mb-4 text-xl font-semibold text-[#60A5E0]">{title}</h3>
      <p className="mb-6 text-sm leading-relaxed text-white/80">
        {description}
      </p>
      <Link
        href={href}
        className="inline-flex items-center text-sm font-medium text-white transition-colors duration-200 hover:text-[#60A5E0]"
      >
        Explore Opportunities
        <svg
          className="ml-2 h-4 w-4"
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
  );
}

export default function AssetClassesSection() {
  const assetClasses = [
    {
      title: 'Big title in here',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.',
      href: '/asset-classes/1',
    },
    {
      title: 'Big title in here',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.',
      href: '/asset-classes/2',
    },
    {
      title: 'Big title in here',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.',
      href: '/asset-classes/3',
    },
  ];

  return (
    <section className="w-full bg-[#05010F] py-8">
      <div className="mx-auto flex w-full flex-col gap-8 px-4">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-bold text-[#60A5E0]">
            OurCrowd&apos;s Asset Classes
          </h2>
          <p className="text-base text-white/80">
            Explore diversified investments in unique asset classes
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {assetClasses.map((assetClass, index) => (
            <AssetClassCard
              key={index}
              title={assetClass.title}
              description={assetClass.description}
              href={assetClass.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
