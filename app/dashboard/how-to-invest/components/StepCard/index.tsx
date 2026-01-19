'use client';

export interface StepCardProps {
  number: string;
  stepLabel: string;
  title: string;
  description: string;
}

export default function StepCard({ number, stepLabel, title, description }: StepCardProps) {
  const gradientId = `gradient-${number}`;

  return (
    <div className="flex flex-col gap-4">
      <div className="relative w-10 h-10">
        <svg width="46" height="46" viewBox="0 0 46 46" fill="none" className="w-10 h-10">
          <circle cx="23" cy="23" r="23" fill={`url(#${gradientId})`} />
          <defs>
            <linearGradient id={gradientId} x1="0" y1="23" x2="46" y2="23" gradientUnits="userSpaceOnUse">
              <stop stopColor="#60A5E0" />
              <stop offset="1" stopColor="#36E8CA" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-white text-[20px] font-medium">
          {number}
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <div 
          className="text-[20px] font-medium"
          style={{
            background: 'linear-gradient(90deg, #60A5E0 0%, #36E8CA 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          {stepLabel}
        </div>
        <h3 className="text-[20px] sm:text-[16px] font-semibold text-white leading-tight">
          {title}
        </h3>
        <p className="text-[14px] sm:text-[12px] text-white leading-relaxed opacity-90">
          {description}
        </p>
      </div>
    </div>
  );
}

