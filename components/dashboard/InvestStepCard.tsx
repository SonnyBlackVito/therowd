'use client';

interface InvestStepCardProps {
  stepNumber: number;
  title: string;
  description: string;
  position: 'top-left' | 'top-right' | 'bottom-right' | 'bottom-left';
}

export default function InvestStepCard({
  stepNumber,
  title,
  description,
  position,
}: InvestStepCardProps) {
  return (
    <div
      className={`flex flex-col ${
        position === 'top-left' || position === 'bottom-left'
          ? 'items-start'
          : 'items-end'
      }`}
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-[#60A5E0] to-[#36E8CA] text-lg font-bold text-white">
          {stepNumber}
        </div>
        <span className="text-sm font-medium text-white/70">STEP {stepNumber}</span>
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-sm leading-relaxed text-white/80 max-w-md">{description}</p>
    </div>
  );
}

