import Link from 'next/link';
import { investmentProjects } from '@/data/investments';
import PoolTokenomics from './components/PoolTokenomics';
import PoolIntro from './components/PoolIntro';
import Pool from './components/Pool';

export default async function PoolPage({ params }: { params: Promise<{ slug?: string }> }) {
  const { slug } = await params;
  const normalizedSlug = slug?.toLowerCase().replace(/\s+/g, '-') ?? '';
  const project = investmentProjects.find((item) => item.id === normalizedSlug) ?? investmentProjects[0];

  const pools = [
    {
      title: 'FCFS',
      subtitle: '$KRST / USDC',
      details: [
        { label: 'Total raised:', value: '$150,000' },
        { label: 'Swap Rate:', value: '1 CFA = 0.15 USDC' },
        { label: 'Start Pool:', value: 'TBA' },
        { label: 'End Pool:', value: 'TBA' },
        { label: 'Vesting:', value: '15% at TGE, 1-month cliff, 12 months linear vesting', highlight: true },
        { label: 'Claim:', value: 'TBA' },
      ],
      progress: {
        current: 150000,
        total: 150000,
        percentage: 100,
      },
    },
    {
      title: 'FCFS',
      subtitle: '$KRST / USDC',
      details: [
        { label: 'Total raised:', value: '$150,000' },
        { label: 'Swap Rate:', value: '1 CFA = 0.15 USDC' },
        { label: 'Start Pool:', value: 'TBA' },
        { label: 'End Pool:', value: 'TBA' },
        { label: 'Vesting:', value: '15% at TGE, 1-month cliff, 12 months linear vesting', highlight: true },
        { label: 'Claim:', value: 'TBA' },
      ],
      progress: {
        current: 0,
        total: 150000,
        percentage: 0,
      },
      buttonText: 'Investment',
    },
  ];

  return (
    <div className="min-h-screen bg-[#040B16] text-white py-10">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 space-y-8">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1">
            <PoolIntro project={project} />
          </div>
          <div className="flex-1">
            <PoolTokenomics project={project} />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 justify-center items-stretch lg:items-start">
          {pools.map((pool, index) => (
            <div key={index} className="w-full lg:w-[400px]">
              <Pool
                title={pool.title}
                subtitle={pool.subtitle}
                details={pool.details}
                progress={pool.progress}
                buttonText={pool.buttonText}
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/dashboard" className="text-[#36E8CA] hover:text-[#60A5E0] font-medium text-sm inline-block">
            Go to Dashboard &gt;
          </Link>
        </div>
      </div>
    </div>
  );
}
