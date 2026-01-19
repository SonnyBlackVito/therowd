'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FiX } from 'react-icons/fi';

function CloseBadge({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-[#3B3B3B] transition hover:bg-white/30"
      aria-label="Dismiss"
    >
      <FiX className="h-5 w-5" />
    </button>
  );
}

export default function InvestmentIntroSection() {
  const [isDismissed, setIsDismissed] = useState(false);

  const handleDismiss = () => {
    setIsDismissed(true);
  };

  if (isDismissed) {
    return null;
  }

  return (
    <section className="w-full bg-[#05010F] py-8">
      <div className="mx-auto flex w-full px-4">
        <div className="relative w-full rounded-[26px] bg-gradient-to-r from-[#E2F2FF] via-[#E7E7FF] to-[#F9DAFF] p-8 shadow-lg shadow-black/40">
          <div className="absolute right-4 top-4 z-10">
            <CloseBadge onClick={handleDismiss} />
          </div>

          <div className="flex flex-col gap-8 lg:flex-row">
            <div className="flex flex-1 flex-col justify-center space-y-4 text-[#3B3B3B]">
              <p className="text-lg font-semibold text-[#7C7A86]">
                Investment Preferences Questionnaire
              </p>
              <h3 className="text-3xl font-semibold text-[#151515]">
                Nice to meet you!
              </h3>
              <p className="text-base leading-relaxed">
                Please complete this short questionnaire so we can keep you
                informed about investments that match your interests.
              </p>

              <button
                type="button"
                className="mt-4 w-fit rounded-full bg-gradient-to-r from-[#5C9DFF] to-[#33E0C8] px-8 py-3 text-sm font-semibold text-white shadow-md shadow-[#33E0C8]/50 transition hover:opacity-90"
              >
                Start
              </button>
            </div>

            <div className="relative flex flex-1 items-center justify-center">
              <div className="relative h-[250px] w-[250px]">
                <Image
                  src="/dashboard/office-work.png"
                  alt="Office work illustration"
                  fill
                  className="object-contain"
                  sizes="250px"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
