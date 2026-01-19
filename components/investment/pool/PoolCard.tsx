import Link from 'next/link';
import GradientButton from '@/components/ui/buttons/GradientButton';

interface PoolCardProps {
  title: string;
  subtitle: string;
  details: Array<{ label: string; value: string; highlight?: boolean }>;
  progress: {
    current: number;
    total: number;
    percentage: number;
  };
  buttonText?: string;
  buttonAction?: () => void;
}

export default function PoolCard({
  title,
  subtitle,
  details,
  progress,
  buttonText,
  buttonAction,
}: PoolCardProps) {
  return (
    <div
      className="rounded-[24px] border p-4 md:p-5"
      style={{
        borderColor: '#D5E0F5',
        background:
          'radial-gradient(107.32% 141.42% at 0% 0%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%)',
        backdropFilter: 'blur(15px)'
      }}
    >
      <div className="space-y-4 sm:space-y-6">
        <div className='text-center'>
          <h3 className="text-lg sm:text-xl font-semibold text-white">{title}</h3>
          <p className="text-xs sm:text-sm text-gray-400 mt-1">{subtitle}</p>
        </div>

        <dl className="space-y-2 sm:space-y-3 p-2 sm:p-3"
          style={{
            borderRadius: '8px',
            background: 'rgba(255, 255, 255, 0.50)',
          }}
        >
          {details.map((item, idx) => (
            <div key={idx} className="flex items-center justify-between gap-2 sm:gap-4 text-xs sm:text-sm md:text-[14px]">
              <dt className="text-[#FFF]-400 shrink-0 text-left">{item.label}</dt>
              <dd className={`font-semibold text-right break-words max-w-[60%] sm:max-w-[65%] ${item.highlight ? 'text-[#36E8CA]' : 'text-[#474747]'}`}>
                {item.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs sm:text-sm">
            <span className="text-gray-400">COMMIT PROGRESS</span>
          </div>
          <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full rounded-full transition-all duration-300"
              style={{
                width: `${progress.percentage}%`,
                background: progress.percentage === 100 
                  ? 'linear-gradient(90deg, #60A5E0 0%, #36E8CA 100%)' 
                  : 'linear-gradient(90deg, #60A5E0 0%, #36E8CA 100%)',
              }}
            />
          </div>
          <p className="text-xs sm:text-sm text-gray-400 break-words">
            {progress.current.toLocaleString()} USDC / {progress.total.toLocaleString()} USDC
          </p>
        </div>

        {buttonText && (
          <Link href="/launch-pool">
            <GradientButton
              onClick={buttonAction}
              className="w-full"
              size="md"
            >
              {buttonText}
            </GradientButton>
          </Link>
        )}
      </div>
    </div>
  );
}

