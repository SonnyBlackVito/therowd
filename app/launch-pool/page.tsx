'use client';

import { useState } from 'react';
import Link from 'next/link';
import Stats from './components/Stats';
import Tabs from './components/Tabs';
import LaunchPool from './components/LaunchPool';

export default function LaunchPoolPage() {
  const [activeTab, setActiveTab] = useState('Active');

  const stats = [
    {
      value: '73,768,945.657 BSCS',
      label: 'Total Staked Amount',
    },
    {
      value: '$107,878.547',
      label: 'Total Value Staked',
    },
    {
      value: '2,756',
      label: 'Total Platform Investors',
    },
  ];

  const activePools = [
    {
      logo: '/logo/logo-white.png',
      title: 'TheROWD Launchpool',
      lockPeriod: '3 Months Locked',
      lockIcon: '/icons/calendar.png',
      rewardEndsIn: '215d 5h 48m 19s',
      totalInvestedAmount: '29M TheROWD',
      totalPortfolioValue: '$42,567.4671',
      numberOfInvestors: 71,
      poolCap: '30,000,000',
      remainingPool: '690,475.78',
      progressPercentage: 97.7,
    },
    {
      logo: '/logo/logo-white.png',
      title: 'TheROWD Launchpool',
      lockPeriod: 'Infinity',
      lockIcon: '/icons/calendar.png',
      rewardEndsIn: 'Infinity',
      totalInvestedAmount: '44M TheROWD',
      totalPortfolioValue: '$64,657,5678',
      numberOfInvestors: 2678,
      poolCap: 'Unlimited',
      remainingPool: 'Unlimited',
      progressPercentage: 100,
    },
  ];

  const renderPools = () => {
    switch (activeTab) {
      case 'Active':
        return activePools;
      case 'Upcoming':
        return [];
      case 'Ended':
        return [];
      case 'Joined':
        return [];
      default:
        return [];
    }
  };

  const pools = renderPools();

  return (
    <div className="min-h-screen bg-[#040B16] text-white py-10">
      <div className="w-full max-w-[850px] mx-auto px-4 sm:px-6 lg:px-12 space-y-8">
        <Stats stats={stats} />

        <Tabs activeTab={activeTab} onTabChange={setActiveTab} />

        {pools.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pools.map((pool, index) => (
              <LaunchPool key={index} {...pool} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-400 text-sm sm:text-base">
              No pools available in this category.
            </p>
          </div>
        )}

        <div className="text-center">
          <Link
            href="/dashboard"
            className="inline-block font-medium text-sm sm:text-base"
            style={{
              background: 'linear-gradient(90deg, #60A5E0 0%, #36E8CA 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Go to Dashboard &gt;
          </Link>
        </div>
      </div>
    </div>
  );
}
