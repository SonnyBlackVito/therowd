import Image from "next/image";
import { investmentProjects } from "@/data/investments";

export default function Overview({
  project,
}: {
  project: (typeof investmentProjects)[number];
}) {
  const socialIcons = [
    { id: "link", label: "Website", icon: "/icons/link.png" },
    { id: "telegram", label: "Telegram", icon: "/icons/telegram.png" },
    { id: "twitter", label: "Twitter", icon: "/icons/twitter.png" },
  ];

  return (
    <div
      className="rounded-3xl border p-6 md:p-8 mb-5"
      style={{
        borderColor: "#D5E0F5",
        background:
          "radial-gradient(107.32% 141.42% at 0% 0%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%)",
        backdropFilter: "blur(15px)",
      }}>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-6">
          <div className="relative h-25 w-25 rounded-full border-2 border-white/60 bg-black flex items-center justify-center shadow-[0_15px_45px_rgba(0,0,0,0.35)]">
            <Image
              src={project.badgeIcon}
              alt={project.name}
              fill
              className="object-contain p-4"
            />
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex flex-wrap items-baseline gap-3">
                <h1 className="text-[18px] font-semibold text-white leading-tight">
                  {project.name}
                </h1>
                <span className="text-[14px] text-white/80">
                  {project.ticker}
                </span>
              </div>
              <div className="inline-flex items-center rounded-[10px] border border-white/40 bg-[#4F4F4F]/10 px-4 py-1 text-sm font-semibold tracking-[0.2em] text-white uppercase">
                {project.tier}
              </div>
            </div>
            <div className="flex items-center gap-2">
              {socialIcons.map((item) => (
                <button
                  key={item.id}
                  aria-label={item.label}
                  className="h-6 w-6 flex items-center justify-center transition-colors">
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                </button>
              ))}
            </div>
            <p className="text-[14px] text-white/90 lg:max-w-xl leading-relaxed">
              {project.shortDescription}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
