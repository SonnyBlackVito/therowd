import Image from 'next/image';
import GradientButton from '@/components/ui/buttons/GradientButton';
import Badge from '@/components/ui/badge/Badge';

interface LaunchPoolProps {
  logo: string;
  title: string;
  lockPeriod: string;
  lockIcon?: string;
  rewardEndsIn?: string;
  totalInvestedAmount: string;
  totalPortfolioValue: string;
  numberOfInvestors: number;
  poolCap: string;
  remainingPool: string;
  progressPercentage: number;
  buttonText?: string;
  onViewPool?: () => void;
}

export default function LaunchPool({
  logo,
  title,
  lockPeriod,
  lockIcon,
  rewardEndsIn,
  totalInvestedAmount,
  totalPortfolioValue,
  numberOfInvestors,
  poolCap,
  remainingPool,
  progressPercentage,
  buttonText = 'View Pool',
  onViewPool,
}: LaunchPoolProps) {
  return (
    <div
      className="rounded-[12px] border p-3 sm:p-3 md:p-4"
      style={{
        borderColor: '#D5E0F5',
        background:
          'radial-gradient(107.32% 141.42% at 0% 0%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%)',
        backdropFilter: 'blur(15px)',
      }}
    >
      <div className="space-y-4 sm:space-y-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
            <div className="relative h-10 w-10 sm:h-12 sm:w-12 rounded-full border border-white bg-black flex items-center justify-center shrink-0">
              <Image src={logo} alt={title} fill className="object-contain p-2" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-[12px] sm:text-[14px] font-semibold text-white break-words">
                {title}
              </h3>
            </div>
          </div>
          <Badge 
            size="sm" 
            textSize="text-[10px]"
            className="bg-white/10 border-white/20 text-white flex items-center gap-1 shrink-0"
          >
            {lockIcon && (
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            )}
            {lockPeriod}
          </Badge>
        </div>

        <dl className="space-y-3 rounded-lg">
          {rewardEndsIn && (
            <div className="flex items-center justify-between text-xs sm:text-sm">
              <dt className="text-gray-400">Reward Ends in:</dt>
              <dd className="font-semibold text-[#36E8CA]">{rewardEndsIn}</dd>
            </div>
          )}
          <div className="flex items-center justify-between text-xs sm:text-sm">
            <dt className="text-[#FFF]-400">Total Invested Amount:</dt>
            <dd className="font-semibold text-[#FFF]">{totalInvestedAmount}</dd>
          </div>
          <div className="flex items-center justify-between text-xs sm:text-sm">
            <dt className="text-[#FFF]-400">Total Portfolio Value:</dt>
            <dd className="font-semibold text-[#FFF]">{totalPortfolioValue}</dd>
          </div>
          <div className="flex items-center justify-between text-xs sm:text-sm">
            <dt className="text-[#FFF]-400">Number of Investors:</dt>
            <dd className="font-semibold text-[#FFF]">{numberOfInvestors.toLocaleString()}</dd>
          </div>
        </dl>

        <div className="space-y-2 rounded-[8px] p-2" style={{ background: 'rgba(255, 255, 255, 0.50)' }}>
          <div className="grid grid-cols-2 gap-4 text-xs sm:text-sm">
            <div>
              <p className="text-[#474747] mb-1">Pool cap:</p>
              <p className="font-semibold text-white">{poolCap}</p>
            </div>
            <div>
              <p className="text-[#474747] mb-1">Remaining Pool:</p>
              <p className="font-semibold text-white">{remainingPool}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative h-2 flex-1 bg-white/10 rounded-full overflow-hidden">
              <div
                className="absolute top-0 left-0 h-full rounded-full transition-all duration-300"
                style={{
                  width: `${progressPercentage}%`,
                  background: 'linear-gradient(90deg, #60A5E0 0%, #36E8CA 100%)',
                }}
              />
            </div>
            <p className="text-xs sm:text-sm font-semibold text-[#36E8CA] shrink-0">
              {progressPercentage.toFixed(1)}%
            </p>
          </div>
        </div>

        <GradientButton
          onClick={onViewPool}
          className="w-full"
          size="md"
        >
          {buttonText}
        </GradientButton>
      </div>
    </div>
  );
}

