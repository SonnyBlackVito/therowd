import Image from 'next/image';
import { investmentProjects } from '@/data/investments';

export default function PoolTokenomicsCard({ project }: { project: (typeof investmentProjects)[number] }) {
  const tokenomicsData = [
    {
      left: [
        { label: 'Symbol:', value: `K ${project.ticker}`, hasLogo: true, logo: project.badgeIcon },
        { label: 'Join Network:', value: 'Solana', hasLogo: true, logo: '/crypto/solana.png' },
        { label: 'Token Network:', value: 'Ethereum', hasLogo: true, logo: '/crypto/ethereum.png' },
      ],
      right: [
        { label: 'Swap Rate:', value: project.summary.find(s => s.label === 'Swap Rate')?.value || '1 KRST = 0.6 USDC' },
        { label: 'Total Raise:', value: '$200,000 USDC' },
        { label: 'Total Supply:', value: project.summary.find(s => s.label === 'Total Supply')?.value || '20,000,000 $KRST' },
      ],
    },
  ];

  return (
    <div
      className="rounded-[24px] border p-4 sm:p-5 md:p-6 lg:p-11"
      style={{
        borderColor: '#D5E0F5',
        background:
          'radial-gradient(107.32% 141.42% at 0% 0%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%)',
        backdropFilter: 'blur(15px)'
      }}
    >
      <div className="flex flex-col md:flex-row gap-4 md:gap-4 lg:gap-4">
        <div className="flex-1 space-y-3 sm:space-y-4">
          {tokenomicsData[0].left.map((item, idx) => (
            <div key={idx} className="grid grid-cols-2 gap-2 sm:gap-2 items-center">
              <p className="text-xs sm:text-sm text-[#FFF]-400 break-words">{item.label}</p>
              <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                {item.hasLogo && (
                  <div className="relative h-3 w-3 sm:h-4 sm:w-4 rounded-full overflow-hidden shrink-0">
                    <Image src={item.logo} alt={item.value} fill className="object-contain" />
                  </div>
                )}
                <p className="text-xs sm:text-sm font-semibold text-white break-words">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="h-px md:h-auto md:w-px bg-white/10"></div>

        <div className="flex-1 space-y-3 sm:space-y-4">
          {tokenomicsData[0].right.map((item, idx) => (
            <div key={idx} className="grid grid-cols-2 gap-2 sm:gap-2 items-center">
              <p className="text-xs sm:text-sm text-[#FFF]-400 break-words">{item.label}</p>
              <p className="text-xs sm:text-sm font-semibold text-white break-words text-right">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

