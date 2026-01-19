'use client';

import { useState } from 'react';
import FundingNowContent from './components/FundingNowContent';
import VentureStartupsContent from './components/VentureStartupsContent';
import VentureFundsContent from './components/VentureFundsContent';
import AlternativeInvestmentContent from './components/AlternativeInvestmentContent';
import AllPortfolioContent from './components/AllPortfolioContent';

const tabs = [
  'Funding Now',
  'Venture Startups',
  'Venture Funds',
  'Alternative Investment',
  'All Portfolio',
];

export default function OpportunitiesPage() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="bg-[#1e1e1e] p-10">
      <div className="mx-auto flex w-full flex-col gap-6 px-4">
        <div className="flex flex-wrap items-center gap-6 border-b border-white/30 pb-4">
          <div className="flex flex-1 flex-wrap items-center gap-8">
            {tabs.map((tab) => {
              const isActive = tab === activeTab;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`relative pb-2 text-base font-medium transition-colors ${
                    isActive
                      ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#60A5E0] to-[#36E8CA]'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  {tab}
                  {isActive && (
                    <span className="absolute left-0 right-0 -bottom-[14px] h-[3px] rounded-full bg-gradient-to-r from-[#60A5E0] via-[#36E8CA] to-[#60A5E0]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {activeTab === 'Funding Now' && <FundingNowContent />}
        {activeTab === 'Venture Startups' && <VentureStartupsContent />}
        {activeTab === 'Venture Funds' && <VentureFundsContent />}
        {activeTab === 'Alternative Investment' && (
          <AlternativeInvestmentContent />
        )}
        {activeTab === 'All Portfolio' && <AllPortfolioContent />}
      </div>
    </div>
  );
}