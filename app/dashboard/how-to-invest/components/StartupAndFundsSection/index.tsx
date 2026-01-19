'use client';

import Image from 'next/image';
import Link from 'next/link';
import GradientButton from '@/components/ui/buttons/GradientButton';

interface StartupCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

function StartupCard({ title, description, image, link }: StartupCardProps) {
  return (
    <div className="rounded-lg border border-white/20 bg-gradient-to-b from-[#2A2A2A] to-[#1E1E1E] overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative w-full h-64">
        <Image
          src={image}
          alt={title}
          fill
          className="contain"
        />
      </div>

      <div className="p-6 bg-gradient-to-b from-transparent to-[#1E1E1E]">
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-sm text-white/90 leading-relaxed mb-4">
          {description.split('...')[0]}
          {description.includes('...') && (
            <>
              ...{' '}
              <Link
                href={link}
                className="text-[#60A5E0] hover:text-[#36E8CA] transition-colors"
              >
                Read more
              </Link>
            </>
          )}
        </p>
        <Link href={link} className="block">
          <GradientButton
            size="md"
            className="w-full"
            gradient="linear-gradient(90deg, #60A5E0 0%, #36E8CA 100%)"
          >
            Browse startups
          </GradientButton>
        </Link>
      </div>
    </div>
  );
}

export default function StartupAndFundsSection() {
  const cards: StartupCardProps[] = [
    {
      title: 'Early-stage Startups',
      description:
        'Discover early-stage startups that are looking for funding to accelerate their growth. These projects are often innovative, agile, and have the potential for strong growth in the near future.... Read more',
      image: '/dashboard/how-to-invest/startup.png',
      link: '/dashboard/opportunities?tab=Venture Startups',
    },
    {
      title: 'Scaling Startups',
      description:
        'Startups that are rapidly growing, generating revenue, and seeking capital to expand into new markets, develop products, or optimize operations. Ideal for investors looking for lower risk but still high potential... Read more',
      image: '/dashboard/how-to-invest/startup.png',
      link: '/dashboard/opportunities?tab=Venture Startups',
    },
    {
      title: 'Venture Capital Funds',
      description:
        'A curated selection of professionally managed venture capital funds. Invest indirectly in multiple startups through a single channel to reduce risk, optimize returns, and access high-quality deals... Read more',
      image: '/dashboard/how-to-invest/startup.png',
      link: '/dashboard/opportunities?tab=Venture Funds',
    },
  ];

  return (
    <div className="w-full py-12">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">
        Choose startups and venture funds
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card) => (
          <StartupCard
            key={card.title}
            title={card.title}
            description={card.description}
            image={card.image}
            link={card.link}
          />
        ))}
      </div>
    </div>
  );
}
