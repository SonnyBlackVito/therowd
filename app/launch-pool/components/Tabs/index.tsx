'use client';

import { useRef, useEffect, useState } from 'react';

interface TabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = ['Upcoming', 'Active', 'Ended', 'Joined'];

export default function Tabs({ activeTab, onTabChange }: TabsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [gradientStyle, setGradientStyle] = useState({ left: 0, width: 0 });
  
  useEffect(() => {
    const updateGradientPosition = () => {
      const activeIndex = tabs.indexOf(activeTab);
      const activeButton = buttonRefs.current[activeIndex];
      const container = containerRef.current;
      
      if (activeButton && container) {
        const containerRect = container.getBoundingClientRect();
        const buttonRect = activeButton.getBoundingClientRect();
        
        setGradientStyle({
          left: buttonRect.left - containerRect.left,
          width: buttonRect.width,
        });
      }
    };
    
    updateGradientPosition();
    window.addEventListener('resize', updateGradientPosition);
    
    return () => {
      window.removeEventListener('resize', updateGradientPosition);
    };
  }, [activeTab]);
  
  return (
    <div className="relative" ref={containerRef}>
      <div className="flex gap-4 pb-2">
        {tabs.map((tab, index) => {
          const isActive = activeTab === tab;
          return (
            <button
              key={tab}
              ref={(el) => {
                buttonRefs.current[index] = el;
              }}
              onClick={() => onTabChange(tab)}
              className={`text-sm sm:text-base font-medium transition-all duration-200 flex-1 ${
                isActive ? '' : 'text-gray-400'
              }`}
              style={
                isActive
                  ? {
                      background: 'linear-gradient(90deg, #60A5E0 0%, #36E8CA 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }
                  : undefined
              }
            >
              {tab}
            </button>
          );
        })}
      </div>
      <div className="relative h-0.5">
        <div className="absolute inset-0 bg-gray-400" />
        <div
          className="absolute h-full transition-all duration-200"
          style={{
            left: `${gradientStyle.left}px`,
            width: `${gradientStyle.width}px`,
            background: 'linear-gradient(90deg, #60A5E0 0%, #36E8CA 100%)',
          }}
        />
      </div>
    </div>
  );
}

