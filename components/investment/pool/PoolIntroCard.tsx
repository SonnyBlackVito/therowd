import Image from 'next/image';
import Badge from '@/components/ui/badge/Badge';
import { investmentProjects } from '@/data/investments';

export default function PoolIntroCard({ project }: { project: (typeof investmentProjects)[number] }) {
  const socialIcons = [
    { id: 'link', label: 'Website', icon: '/icons/link.png' },
    { id: 'telegram', label: 'Telegram', icon: '/icons/telegram.png' },
    { id: 'twitter', label: 'Twitter', icon: '/icons/twitter.png' },
  ];

  return (
    <div
      className="rounded-[24px] border p-4 sm:p-5 md:p-[20px]"
      style={{
        borderColor: '#D5E0F5',
        background:
          'radial-gradient(107.32% 141.42% at 0% 0%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%)',
        backdropFilter: 'blur(15px)'
      }}
    >
      <div className="space-y-3 sm:space-y-4">
        <div className="flex items-start gap-3 sm:gap-4 md:gap-5">
          <div className="relative h-16 w-16 sm:h-20 sm:w-20 md:h-[100px] md:w-[100px] rounded-full border border-white bg-black flex items-center justify-center shrink-0">
            <Image src={project.badgeIcon} alt={project.name} fill className="object-contain p-1.5 sm:p-2" />
          </div>
          <div className="flex-1 space-y-2 sm:space-y-3 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-base sm:text-lg font-semibold text-white break-words">{project.name}</h1>
              <span className="text-xs sm:text-sm text-gray-400 shrink-0">{project.ticker}</span>
            </div>
            <div>
              <Badge className="bg-white/10 border-white/20 text-white text-xs">{project.tier}</Badge>
            </div>
            <div className="flex items-center gap-2">
              {socialIcons.map((item) => (
                <button
                  key={item.id}
                  aria-label={item.label}
                  className="h-5 w-5 sm:h-6 sm:w-6 flex items-center justify-center transition-colors hover:opacity-80"
                >
                  <Image src={item.icon} alt={item.label} width={20} height={20} className="object-contain" />
                </button>
              ))}
            </div>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-white/90 leading-relaxed break-words">{project.shortDescription}</p>
      </div>
    </div>
  );
}

