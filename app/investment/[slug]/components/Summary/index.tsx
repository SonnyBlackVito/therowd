import Image from "next/image";
import { investmentProjects } from "@/data/investments";
import Badge from "@/components/ui/badge/Badge";
import Link from "next/link";

export default function Summary({ project }: { project: (typeof investmentProjects)[number] }) {
  const socialIcons = [
    { id: 'link', label: 'Website', icon: '/icons/link.png' },
    { id: 'telegram', label: 'Telegram', icon: '/icons/telegram.png' },
    { id: 'twitter', label: 'Twitter', icon: '/icons/twitter.png' },
  ];

  return (
    <div className="lg:contents">
      <div
        className="rounded-[24px] border p-6 md:p-8 lg:row-span-2 lg:flex lg:flex-col lg:self-start"
        style={{
          borderColor: '#D5E0F5',
          background:
            'radial-gradient(107.32% 141.42% at 0% 0%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%)',
          backdropFilter: 'blur(15px)'
        }}
      >
        <div className="flex flex-col space-y-6 lg:flex-1">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="relative h-12 w-12 rounded-full border border-white bg-black flex items-center justify-center shrink-0">
                <Image src={project.badgeIcon} alt={project.name} fill className="object-contain p-2" />
              </div>
              <Badge className="bg-white/10 border-white/20 text-white">{project.tier}</Badge>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-lg font-semibold text-white">{project.name}</h3>
              <span className="text-sm text-gray-400">{project.ticker}</span>
            </div>

            <p className="text-sm text-white/90 leading-relaxed">{project.shortDescription}</p>

            <div className="flex items-center gap-2">
              {socialIcons.map((item) => (
                <button
                  key={item.id}
                  aria-label={item.label}
                  className="h-6 w-6 flex items-center justify-center transition-colors hover:opacity-80"
                >
                  <Image src={item.icon} alt={item.label} width={20} height={20} className="object-contain" />
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center justify-center text-center space-y-3 py-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none" className="shrink-0">
              <circle cx="36" cy="36" r="36" fill="url(#paint0_radial_395_21714)"/>
              <g transform="translate(19.5, 20) scale(1)">
                <path d="M12.142 2.28689C13.8698 -0.762301 18.263 -0.762301 19.9908 2.28689C20.9185 3.92403 22.765 4.81328 24.6234 4.51783C28.0846 3.96756 30.8237 7.40226 29.517 10.6543C28.8155 12.4003 29.2715 14.3984 30.6612 15.6671C33.2495 18.0302 32.2719 22.3132 28.9147 23.3192C27.1122 23.8593 25.8343 25.4616 25.7088 27.3392C25.4751 30.8361 21.517 32.7422 18.6373 30.7446C17.0912 29.6721 15.0417 29.6721 13.4955 30.7446C10.6158 32.7422 6.65771 30.8361 6.42399 27.3392C6.2985 25.4616 5.02066 23.8593 3.21813 23.3192C-0.139085 22.3132 -1.11665 18.0302 1.47161 15.6671C2.86128 14.3984 3.31733 12.4003 2.61577 10.6543C1.3091 7.40226 4.04818 3.96756 7.50941 4.51783C9.36779 4.81328 11.2143 3.92403 12.142 2.28689Z" fill="#F5CB11"/>
              </g>
              <g transform="translate(36, 36) scale(0.7) translate(-36, -36)">
                <path d="M22 36L32 46L50 28" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              <defs>
                <radialGradient id="paint0_radial_395_21714" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(36 45.2432) rotate(-82.7757) scale(34.8169)">
                  <stop offset="0.574154" stopColor="#FFFBEB"/>
                  <stop offset="1" stopColor="#F7D850"/>
                </radialGradient>
              </defs>
            </svg>
            <div>
              <p className="text-white text-lg font-bold">Sale Ended</p>
              <p className="text-gray-300 text-sm mt-1">The token sale has ended.</p>
            </div>
          </div>

          <dl 
            className="space-y-4 lg:flex-1 p-4"
            style={{
              borderRadius: '8px',
              background: 'rgba(255, 255, 255, 0.50)',
            }}
          >
            {project.summary.slice(0, 5).map((item) => (
              <div key={item.label} className="flex items-center justify-between text-sm">
                <dt className="text-[#FFF]-400">{item.label}:</dt>
                <dd className="font-semibold text-[#474747]">{item.value}</dd>
              </div>
            ))}
            {project.summary.length > 5 && (
              <>
                <div className="border-t border-white/10 my-4"></div>
                {project.summary.slice(5).map((item) => (
                  <div key={item.label} className="flex items-center justify-between text-sm">
                    <dt className="text-[#FFF]-400">{item.label}:</dt>
                    <dd className="font-semibold text-[#474747]">{item.value}</dd>
                  </div>
                ))}
              </>
            )}
          </dl>

          <Link href={`/investment/${project.id}/pool`}>
            <button className="w-full rounded-xl border-2 border-[#36E8CA] bg-gradient-to-r from-[#60A5E0] to-[#36E8CA] py-3 font-semibold text-white shadow-[0_10px_30px_rgba(54,232,202,0.25)] hover:opacity-90 transition-opacity">
              View Pool
            </button>
          </Link>
        </div>
      </div>
      <div className="text-right mt-6">
        <Link href="/dashboard" className="text-[#36E8CA] hover:text-[#60A5E0] font-medium text-sm">
          Go to Dashboard &gt;
        </Link>
      </div>
    </div>
  );
}