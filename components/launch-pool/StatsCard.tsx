interface StatItem {
  value: string;
  label: string;
}

interface StatsCardProps {
  stats: StatItem[];
}

export default function StatsCard({ stats }: StatsCardProps) {
  return (
    <div className="rounded-2xl p-6 border" style={{
      borderColor: '#D5E0F5',
        background:
          'linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), radial-gradient(81.83% 139.48% at 100% 0%, rgba(255, 255, 255, 0.40) 0%, rgba(255, 255, 255, 0.00) 100%)',
        backdropFilter: 'blur(15px)'
    }}>
      <div className="flex flex-col sm:flex-row">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center flex-1">
            <div className="flex-1 space-y-2">
              <p className="text-[14px] sm:text-[15px] md:text-[16px] font-bold text-white break-words">
                {stat.value}
              </p>
              <p className="text-[12px] sm:text-[13px] md:text-[14px] text-gray-400 break-words">
                {stat.label}
              </p>
            </div>
            {index < stats.length - 1 && (
              <>
                <div className="hidden sm:block w-px bg-white/10 mx-4 sm:mx-6 shrink-0 h-full self-stretch"></div>
                <div className="sm:hidden w-full h-px bg-white/10 my-4"></div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

