'use client';

import { FiSettings } from 'react-icons/fi';
import EmptyState from '@/components/ui/empty/EmptyState';
import FollowSection from './components/FollowSection';

export default function NewsPage() {
  const handleRefreshFeed = () => {
    console.log('Refresh feed');
  };

  const mostFollowedCompanies = [
    {
      image: '/dashboard/building.png',
      title: 'Big title',
      subtitle: 'Big title Big title',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      followerCount: '1.7K Followers',
    },
    {
      image: '/dashboard/building.png',
      title: 'Big title',
      subtitle: 'Big title Big title',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      followerCount: '1.7K Followers',
    },
    {
      image: '/dashboard/building.png',
      title: 'Big title',
      subtitle: 'Big title Big title',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      followerCount: '1.7K Followers',
    },
    {
      image: '/dashboard/building.png',
      title: 'Big title',
      subtitle: 'Big title Big title',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      followerCount: '1.7K Followers',
    },
  ];

  const popularSectors = [
    {
      image: '/dashboard/building.png',
      title: 'Big title',
      subtitle: 'Big title Big title',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      followerCount: '1.7K Followers',
    },
    {
      image: '/dashboard/building.png',
      title: 'Big title',
      subtitle: 'Big title Big title',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      followerCount: '1.7K Followers',
    },
    {
      image: '/dashboard/building.png',
      title: 'Big title',
      subtitle: 'Big title Big title',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      followerCount: '1.7K Followers',
    },
    {
      image: '/dashboard/building.png',
      title: 'Big title',
      subtitle: 'Big title Big title',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      followerCount: '1.7K Followers',
    },
  ];

  return (
    <div className="flex h-full flex-col bg-[#05010F] text-white">
      <div className="flex items-center justify-between px-8 py-6">
        <h1 className="text-2xl font-semibold text-white">News Feed</h1>
        <button
          type="button"
          className="flex items-center gap-2 text-white transition-colors hover:text-white/80"
        >
          <FiSettings className="h-5 w-5" />
          <span className="text-sm font-medium">Manage</span>
        </button>
      </div>

      <div className="w-full px-8 py-6">
        <EmptyState
          message="Your feed is currently empty, but it doesn't have to be!"
          actionLabel="Refresh Feed"
          onAction={handleRefreshFeed}
        />
      </div>

      <div className="max-w-[1000px] mx-auto">
        <FollowSection
          title="Most followed companies:"
          items={mostFollowedCompanies}
        />
        <FollowSection
          title="Popular sectors to follow:"
          items={popularSectors}
        />
      </div>
    </div>
  );
}
