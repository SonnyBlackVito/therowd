"use client";

import Image from "next/image";
import Link from "next/link";
import { FiMoreVertical } from "react-icons/fi";

interface NewsArticleProps {
  thumbnail: string;
  headline: string;
  source: string;
  timeAgo: string;
  readTime: string;
  companyTag: string;
}

function NewsArticle({
  thumbnail,
  headline,
  source,
  timeAgo,
  readTime,
  companyTag,
}: NewsArticleProps) {
  return (
    <div className="group relative flex items-stretch gap-6 rounded-[18px] border border-white/60 bg-gradient-to-br from-[#1E1E1E] to-[#2B2B2B] p-5 transition-all duration-300 hover:border-white hover:shadow-2xl min-h-[170px]">
      <button
        type="button"
        className="absolute right-5 top-5 z-10 rounded-full p-2 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
        aria-label="More options">
        <FiMoreVertical className="h-5 w-5" />
      </button>

      <div className="relative w-56 shrink-0 overflow-hidden rounded-l-[18px] rounded-r-none md:w-64">
        <Image
          src={thumbnail}
          alt={headline}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 220px, 260px"
          priority
        />
      </div>

      <div className="flex flex-1 flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold leading-snug text-white">
            {headline}
          </h3>
        </div>

        <div className="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-center">
          <div className="flex item-center gap-5 text-sm text-white/70 space-y-1">
            <p>{source}</p>
            <p>{timeAgo}</p>
            <p>{readTime}</p>
          </div>
          <span className="w-47.5 py-3 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#60A5E0] to-[#36E8CA] px-4  text-xs font-semibold text-[#FFF]">
            {companyTag}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function PortfolioNewsSection() {
  const newsArticles = [
    {
      thumbnail: "/dashboard/visual.png",
      headline:
        "Lambda doubles down on Midwest expansion, to build AI factory in Kansas City, MO",
      source: "PR Newswire",
      timeAgo: "5 days ago",
      readTime: "3 min read",
      companyTag: "Lambda (lambda.ai)",
    },
    {
      thumbnail: "/dashboard/growth.png",
      headline:
        "Dani Cherkassky, CEO and Co-Founder of Kardome - Interview Series",
      source: "Unite.Ai",
      timeAgo: "5 days ago",
      readTime: "3 min read",
      companyTag: "Kardome",
    },
    {
      thumbnail: "/dashboard/analytics.png",
      headline:
        "IQM collaborates with NVIDIA on NVQLink to enable scalable quantum error correction",
      source: "IQM",
      timeAgo: "5 days ago",
      readTime: "3 min read",
      companyTag: "IQM",
    },
  ];

  return (
    <section className="w-full bg-[#05010F] py-8">
      <div className="mx-auto flex w-full flex-col gap-6 px-4">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold text-[#60A5E0]">
              Portfolio News
            </h2>
            <p className="text-base text-white/80">
              Up to the minute coverage of OurCrowd&apos;s portfolio companies
              and alternative investment opportunities
            </p>
          </div>
          <Link
            href="/news"
            className="ml-auto text-base font-semibold text-[#60A5E0] transition-colors duration-200 hover:text-[#36E8CA]">
            See all
          </Link>
        </div>

        <div className="flex flex-col gap-5">
          {newsArticles.map((article, index) => (
            <NewsArticle
              key={index}
              thumbnail={article.thumbnail}
              headline={article.headline}
              source={article.source}
              timeAgo={article.timeAgo}
              readTime={article.readTime}
              companyTag={article.companyTag}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
