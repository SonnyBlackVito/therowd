'use client';

import Image from 'next/image';
import { FiStar } from 'react-icons/fi';
import { useState } from 'react';

interface FollowCardProps {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  followerCount: string;
}

export default function FollowCard({
  image,
  title,
  subtitle,
  description,
  followerCount,
}: FollowCardProps) {
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <div className="flex h-full min-w-[300px] flex-col overflow-hidden rounded-lg border border-white/20 bg-[#1E1E1E]">
      <div className="relative h-40 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="300px"
        />
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="mb-1 text-lg font-bold text-white">{title}</h3>
        <p className="mb-2 text-sm text-white/80">{subtitle}</p>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-white/70">
          {description}
        </p>

        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => setIsFollowing(!isFollowing)}
            className={`flex items-center gap-2 rounded-lg border-2 px-4 py-2 text-sm font-medium transition-colors ${
              isFollowing
                ? 'border-[#36E8CA] bg-[#36E8CA]/10 text-[#36E8CA]'
                : 'border-[#60A5E0] bg-transparent text-white hover:border-[#36E8CA]'
            }`}
          >
            <FiStar className="h-4 w-4" />
            <span>{isFollowing ? 'Following' : 'Follow'}</span>
          </button>

          <span className="text-sm text-white/70">{followerCount}</span>
        </div>
      </div>
    </div>
  );
}

