"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import GradientButton from "@/components/ui/buttons/GradientButton";

interface ProjectCardProps {
  slug: string;
  banner: string;
  logo: string;
  title: string;
  token: string;
  status: "allowlist" | "closed";
  description: string;
  totalRaised: string;
  targetRaised: string;
  saleType: string;
}

function ProjectCard({
  slug,
  banner,
  logo,
  title,
  token,
  status,
  description,
  totalRaised,
  targetRaised,
  saleType,
  index,
}: ProjectCardProps & { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="rounded-[12px] sm:rounded-[16px] lg:rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border-2 border-white"
      style={{
        background: "linear-gradient(180deg, #2A2A2A 0%, #1E1E1E 100%)",
      }}>
      <div className="relative w-full h-32 sm:h-36 lg:h-48">
        <Image src={banner} alt={title} fill className="object-cover" />
        <div className="absolute -bottom-6 sm:-bottom-8 lg:-bottom-10 left-1/2 transform -translate-x-1/2 z-10">
          <div
            className="relative w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full border-2 border-white shadow-lg overflow-hidden"
            style={{
              background: "linear-gradient(180deg, #2A2A2A 0%, #1E1E1E 100%)",
            }}>
            <Image
              src={logo}
              alt={`${title} logo`}
              fill
              className="p-1.5 sm:p-2 object-contain"
            />
          </div>
        </div>
      </div>

      <div
        className="p-4 pt-10 sm:p-5 sm:pt-12 lg:p-6 lg:pt-14"
        style={{
          background:
            "radial-gradient(173.79% 141.62% at 100.09% -0.08%, rgba(255, 255, 255, 0.40) 0%, rgba(255, 255, 255, 0.00) 100%)",
          backdropFilter: "blur(15px)",
        }}>
        <div className="flex items-start justify-between mb-3 sm:mb-4">
          <div className="flex-1 flex items-center gap-1.5 sm:gap-2">
            <h3 className="text-[13px] sm:text-[14px] lg:text-[16px] font-bold text-white">
              {title}
            </h3>
            <p className="text-[12px] sm:text-[13px] lg:text-[15px] text-gray-400">
              {token}
            </p>
          </div>
          <span
            className={`inline-flex items-center gap-1 sm:gap-2 px-2 py-1 sm:px-3 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-medium whitespace-nowrap ml-2 sm:ml-3 ${
              status === "allowlist"
                ? "bg-gray-200"
                : "bg-gray-700 text-gray-300"
            }`}>
            {status === "allowlist" ? (
              <>
                <div className="w-3 h-3 sm:w-5 sm:h-5 rounded-full bg-black flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/crypto/solana.png"
                    alt="Solana"
                    width={16}
                    height={16}
                    className="w-2.5 h-2.5 sm:w-4 sm:h-4"
                  />
                </div>
                <span
                  style={{
                    background:
                      "linear-gradient(90deg, #A855F7 0%, #60A5E0 50%, #36E8CA 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}>
                  Allowlist Open
                </span>
              </>
            ) : (
              "Closed"
            )}
          </span>
        </div>

        <p className="text-xs sm:text-sm md:text-base text-[#D9D9D9] leading-relaxed mb-4 sm:mb-5 lg:mb-6">
          {description}
        </p>

        <div className="space-y-2 sm:space-y-3 md:space-y-4 mb-4 sm:mb-5 lg:mb-6">
          <div className="flex items-center justify-between text-xs sm:text-sm md:text-base text-white">
            <div className="flex items-center gap-2 sm:gap-3">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
              <span className="text-white">Total raised:</span>
            </div>
            <strong className="text-white font-semibold">{totalRaised}</strong>
          </div>
          <div className="flex items-center justify-between text-xs sm:text-sm md:text-base text-white">
            <div className="flex items-center gap-2 sm:gap-3">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-white">Total raised:</span>
            </div>
            <strong
              className="font-semibold"
              style={{
                background: "linear-gradient(90deg, #60A5E0 0%, #36E8CA 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
              {targetRaised}
            </strong>
          </div>
          <div className="flex items-center justify-between text-xs sm:text-sm md:text-base text-white">
            <div className="flex items-center gap-2 sm:gap-3">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                />
              </svg>
              <span className="text-white">Sale Type:</span>
            </div>
            <strong className="text-white font-semibold">{saleType}</strong>
          </div>
        </div>

        <Link href={`/investment/${slug}`} className="block">
          <GradientButton
            size="sm"
            className="w-full rounded-[8px] border-2"
            gradient="linear-gradient(90deg, #60A5E0 0%, #36E8CA 100%)"
            style={{
              borderColor: "#36E8CA",
              boxShadow: "0 4px 4px 0 rgba(96, 165, 224, 0.50)",
            }}>
            Token Sale
          </GradientButton>
        </Link>
      </div>
    </motion.div>
  );
}

export default function InvestSection() {
  const projects = [
    {
      slug: "kpop-road",
      banner: "/home/invest/kpoproad-banner.png",
      logo: "/home/invest/kpoproad-logo.png",
      title: "Kpop Road",
      token: "$KRST",
      status: "allowlist" as const,
      description:
        "KpopRoad's 300-NFT collection offers exclusive K-pop access, VIP rewards, and virtual events.",
      totalRaised: "$200,000",
      targetRaised: "Finished!",
      saleType: "Vanguard",
    },
    {
      slug: "klove-pet",
      banner: "/home/invest/klove-pet-banner.png",
      logo: "/home/invest/klove-pet-logo.png",
      title: "K-Love Pet",
      token: "$KPET",
      status: "closed" as const,
      description:
        "K-LovePet is a blockchain platform connecting pet lovers through digital assets, events, and rewards.",
      totalRaised: "$200,000",
      targetRaised: "Finished!",
      saleType: "Vanguard",
    },
    {
      slug: "royal-heritage",
      banner: "/home/invest/royal-banner.png",
      logo: "/home/invest/royal-logo.png",
      title: "Royal Heritage",
      token: "$RHCrd",
      status: "allowlist" as const,
      description:
        "Royal Heritage Card preserves culture and creates elegance through exclusive membership benefits.",
      totalRaised: "$500,000",
      targetRaised: "Finished!",
      saleType: "Vanguard",
    },
  ];

  return (
    <section className="relative w-full py-12 sm:py-16 lg:py-20 bg-[#1E1E1E]">
      <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16">
          <h2 className="text-[26px] sm:text-[29px] md:text-[32px] lg:text-[35px] font-bold text-[#ffffff]-900 mb-6">
            Invest in the Future -{" "}
            <span className="text-[#36E8CA]">Web2 & Web3</span>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[15px] sm:text-[18px] text-[#ffffff]-700 max-w-4xl mx-auto mb-4">
            Exclusive access to high-growth startups, elite venture funds, and
            private market deals across both traditional tech (Web2) and
            next-generation blockchain innovations (Web3).
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-[15px] sm:text-[18px] font-italic text-[#ffffff]-700 max-w-4xl mx-auto">
            Own early. Invest alongside top VCs, funds and family offices.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 mb-5">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              banner={project.banner}
              logo={project.logo}
              title={project.title}
              slug={project.slug}
              token={project.token}
              status={project.status}
              description={project.description}
              totalRaised={project.totalRaised}
              targetRaised={project.targetRaised}
              saleType={project.saleType}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center">
          <Link
            // href="/opportunities"
            href="/dashboard/opportunities"
            className="inline-flex items-center text-[#36E8CA] hover:text-[#60A5E0] font-medium text-[13px] sm:text-[16px] transition-colors duration-200">
            See more investment opportunities
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
