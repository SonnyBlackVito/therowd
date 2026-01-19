'use client';

import Image from 'next/image';
import Link from 'next/link';

interface GettingStartedCardProps {
  category: string;
  title: string;
  description: string;
  image: string;
}

function GettingStartedCard({
  category,
  title,
  description,
  image,
}: GettingStartedCardProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="relative h-40 w-full overflow-hidden rounded-[18px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 400px"
          priority
        />
      </div>

      <div className="space-y-3 text-white">
        <p className="text-sm font-semibold text-[#36E8CA]">{category}</p>
        <h3 className="text-lg font-semibold leading-snug">{title}</h3>
        <p className="text-sm text-white/70">{description}</p>
      </div>
    </div>
  );
}

export default function GettingStartedSection() {
  const articles = [
    {
      category: 'Getting Started',
      title: 'How To Invest in Biotech Stocks: Key Steps & Strategies',
      description:
        'Biotechnology focuses on creating technology based on biology with the purpose of improving our overall quality of life.',
      image: '/dashboard/building.png',
    },
    {
      category: 'Getting Started',
      title: 'How To Invest in Biotech Stocks: Key Steps & Strategies',
      description:
        'Biotechnology focuses on creating technology based on biology with the purpose of improving our overall quality of life.',
      image: '/dashboard/building.png',
    },
    {
      category: 'Getting Started',
      title: 'How To Invest in Biotech Stocks: Key Steps & Strategies',
      description:
        'Biotechnology focuses on creating technology based on biology with the purpose of improving our overall quality of life.',
      image: '/dashboard/building.png',
    },
  ];

  return (
    <section className="w-full bg-[#05010F] py-8">
      <div className="mx-auto flex w-full flex-col gap-6 px-4">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-3xl font-bold text-[#60A5E0]">
            Learn how to get started
          </h2>
          <Link
            href="/guides"
            className="text-base font-semibold text-[#60A5E0] transition-colors duration-200 hover:text-[#36E8CA]"
          >
            See all
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
          {articles.map((article, index) => (
            <GettingStartedCard key={index} {...article} />
          ))}
        </div>
      </div>
    </section>
  );
}