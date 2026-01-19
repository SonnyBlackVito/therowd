'use client';

import { useState } from 'react';

interface SectionProps {
  title: string;
  titleText?: string;
  paragraphs: string[];
}

function Section({ title, titleText, paragraphs }: SectionProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <p 
          className="text-[20px] tracking-[0.3em] whitespace-nowrap"
          style={{
            background: 'linear-gradient(90deg, #60A5E0 0%, #36E8CA 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {title}
        </p>
        <div 
          className="flex-1 h-[1px]"
          style={{
            background: 'linear-gradient(90deg, #60A5E0 0%, #36E8CA 100%)',
            maskImage: 'repeating-linear-gradient(90deg, transparent, transparent 8px, black 8px, black 12px)',
            WebkitMaskImage: 'repeating-linear-gradient(90deg, transparent, transparent 8px, black 8px, black 12px)',
          }}
        ></div>
      </div>
      {titleText && (
        <h3 className="text-[24px] font-semibold text-white">
          {titleText}
        </h3>
      )}
      <div className="space-y-4 text-[18px] text-white">
        {paragraphs.map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}

interface TabbedContentProps {
  about: string[];
  shortDescription?: string;
  problem?: string[];
  solution?: string[];
}

const tabLabels = ['Description', 'Token Sale', 'Contract Metrics', 'Vesting Schedule'];

export default function TabbedContent({
  about,
  shortDescription,
  problem,
  solution,
}: TabbedContentProps) {
  const [activeTab, setActiveTab] = useState(0);

  const renderContent = () => {
    switch (activeTab) {
      case 0: // Description
        return (
          <div className="space-y-8">
            <Section 
              title="ABOUT PROJECT" 
              titleText={shortDescription}
              paragraphs={about}
            />
            <Section 
              title="PROBLEM" 
              paragraphs={problem || about}
            />
            <Section 
              title="SOLUTION" 
              paragraphs={solution || about}
            />
          </div>
        );
      case 1: // Token Sale
        return (
          <div className="space-y-4 text-[18px] text-white">
            <p>Token Sale content will be displayed here.</p>
          </div>
        );
      case 2: // Contract Metrics
        return (
          <div className="space-y-4 text-[18px] text-white">
            <p>Contract Metrics content will be displayed here.</p>
          </div>
        );
      case 3: // Vesting Schedule
        return (
          <div className="space-y-4 text-[18px] text-white">
            <p>Vesting Schedule content will be displayed here.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-4 border-b border-white/10 pb-2">
        {tabLabels.map((label, index) => (
          <button
            key={label}
            onClick={() => setActiveTab(index)}
            className={`pb-3 text-sm font-medium transition-colors ${
              activeTab === index 
                ? 'text-white border-b-2 border-[#36E8CA]' 
                : 'text-gray-500 hover:text-gray-300'
            }`}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="mt-6">
        {renderContent()}
      </div>
    </div>
  );
}

