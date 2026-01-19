'use client';

import StepsToInvestSection from './components/StepsToInvestSection';
import WhyInvestSection from './components/WhyInvestSection';
import TrendingSection from './components/TrendingSection';
import QuestionSection from './components/QuestionSection';
import ConsultationSection from './components/ConsultationSection';
import StartupAndFundsSection from './components/StartupAndFundsSection';

export default function HowToInvestPage() {
  return (
    <div className="flex flex-col">
      <StepsToInvestSection />
      <div className="bg-[#1e1e1e] p-10">
        <div className="mx-auto flex w-full flex-col gap-12 px-4 max-w-7xl">
          <StartupAndFundsSection />
        </div>
      </div>
      <WhyInvestSection />
      <TrendingSection />
      <QuestionSection />
      <ConsultationSection />
    </div>
  );
}

