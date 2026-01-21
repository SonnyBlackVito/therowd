"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";

const bannerSlides = [
  {
    id: 1,
    title: "Welcome to Kpop Road",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: "/dashboard/visual.png",
  },
  {
    id: 2,
    title: "Discover New Opportunities",
    description:
      "Explore curated investment deals from top creators and companies. Track performance in real time and never miss important updates about your portfolio.",
    image: "/dashboard/visual.png",
  },
  {
    id: 3,
    title: "Stay Ahead of the Curve",
    description:
      "Receive news, webinars, and insights tailored to your interests. Join a growing community of investors who share the same passion.",
    image: "/dashboard/visual.png",
  },
];

function BannerVisual({ image }: { image: string }) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-lg">
      <Image
        src={image}
        alt="Market visual"
        className="h-full w-full object-cover"
        fill
        sizes="(max-width: 768px) 100vw, 35vw"
        priority
      />
    </div>
  );
}

function CloseBadge({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/25 text-white transition hover:bg-white/35"
      aria-label="Dismiss">
      <FiX className="h-5 w-5" />
    </button>
  );
}

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);
  const activeSlide = bannerSlides[activeIndex];

  useEffect(() => {
    if (isDismissed) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % bannerSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
  };

  if (isDismissed) {
    return null;
  }

  return (
    <section className="w-full bg-[#05010F] py-8">
      <div className="mx-auto flex w-full flex-col items-center gap-8 px-4">
        <div className="relative w-full rounded-4xl bg-linear-to-r from-[#151532] via-[#241046] to-[#391064] shadow-2xl shadow-black/40">
          <div className="absolute right-4 top-4 z-10">
            <CloseBadge onClick={handleDismiss} />
          </div>

          <div className="flex flex-col overflow-hidden rounded-lg border border-white/5 lg:flex-row">
            <div className="w-full min-h-55 lg:w-1/3 lg:flex-[0_0_33%]">
              <BannerVisual image={activeSlide.image} />
            </div>

            <div className="relative flex flex-1 flex-col justify-center gap-4 px-8 py-8 text-white">
              <h2 className="text-3xl font-bold lg:text-4xl">
                {activeSlide.title}
              </h2>
              <p className="text-base leading-relaxed text-white/85 lg:pr-8">
                {activeSlide.description}
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-3">
          {bannerSlides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              className={`h-3 w-3 rounded-full transition ${
                index === activeIndex
                  ? "bg-white"
                  : "bg-white/30 hover:bg-white/50"
              }`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
