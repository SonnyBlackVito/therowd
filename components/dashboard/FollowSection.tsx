'use client';

import { useEffect, useRef, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import FollowCard from './FollowCard';

interface FollowItem {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  followerCount: string;
}

interface FollowSectionProps {
  title: string;
  items: FollowItem[];
}

export default function FollowSection({ title, items }: FollowSectionProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollability();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollability);
      window.addEventListener('resize', checkScrollability);
      return () => {
        container.removeEventListener('scroll', checkScrollability);
        window.removeEventListener('resize', checkScrollability);
      };
    }
  }, [items]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320;
      const newScrollLeft =
        scrollContainerRef.current.scrollLeft +
        (direction === 'left' ? -scrollAmount : scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative w-full">
      <h2 className="mb-6 text-xl font-semibold text-white">{title}</h2>

      <div className="relative">
        {canScrollLeft && (
          <button
            type="button"
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#1E1E1E] border border-white/20 text-white shadow-lg transition-opacity hover:opacity-80"
            aria-label="Scroll left"
          >
            <FiChevronLeft className="h-5 w-5" />
          </button>
        )}

        <div
          ref={scrollContainerRef}
          onScroll={checkScrollability}
          className="flex gap-4 overflow-x-auto scrollbar-hide pb-4"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {items.map((item, index) => (
            <FollowCard
              key={index}
              image={item.image}
              title={item.title}
              subtitle={item.subtitle}
              description={item.description}
              followerCount={item.followerCount}
            />
          ))}
        </div>

        {canScrollRight && (
          <button
            type="button"
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#1E1E1E] border border-white/20 text-white shadow-lg transition-opacity hover:opacity-80"
            aria-label="Scroll right"
          >
            <FiChevronRight className="h-5 w-5" />
          </button>
        )}
      </div>
    </div>
  );
}

