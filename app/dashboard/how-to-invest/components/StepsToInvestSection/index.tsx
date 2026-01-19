'use client';

import Image from 'next/image';
import GradientButton from '@/components/ui/buttons/GradientButton';
import StepCard, { StepCardProps } from '../StepCard';

export const steps: StepCardProps[] = [
  {
    number: "1",
    stepLabel: "STEP 1",
    title: "Create Your Free TheROWD Account",
    description:
      "Opening the door to the world of startup investing just takes a few minutes. Join the TheROWD platform by providing basic information and your investment preferences to get access to our diverse deal flow.",
  },
  {
    number: "2",
    stepLabel: "STEP 2",
    title: "Browse Investment Opportunities",
    description:
      "From individual startups to highly diversified funds and hard-to-access alternative asset classes, TheROWD offers investors a wide range of investment opportunities. Research companies, funds and alternative market offering with accessible reports and information.",
  },
  {
    number: "3",
    stepLabel: "STEP 3",
    title: "Invest With Confidence",
    description:
      "After reviewing the information, you have made an informed decision on which opportunity to investment in. Click on the invest button and follow the instructions.",
  },
  {
    number: "4",
    stepLabel: "STEP 4",
    title: "Track Your Portfolio's Performance",
    description:
      "Follow your portfolio's performance with reports, news and other pertinent information about each investment.",
  },
];

export default function StepsToInvestSection() {
  return (
    <div className="min-h-screen bg-[#0A1F2E] relative overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `url('https://api.builder.io/api/v1/image/assets/TEMP/844a0b0f775ad8acf24dad295d25793b5fb3b690?width=2456')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Desktop Version */}
        <div className="hidden md:block relative">
          <div className="absolute inset-0 w-full h-full min-h-[760px] xl:min-h-[900px]">
            <Image
              src="https://api.builder.io/api/v1/image/assets/TEMP/ff233a2bc50ae4380022c4ee79153eb671ac7db6?width=2144"
              alt="Investment steps path"
              fill
              className="object-contain"
              unoptimized
            />
          </div>

          <div className="absolute top-[30px] left-1/2 transform -translate-x-1/2 w-full text-center z-10">
            <h1 className="text-[22px] sm:text-[24px] lg:text-[26px] font-semibold text-white mb-2">
              Steps To Invest
            </h1>
            <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-white max-w-2xl mx-auto leading-relaxed">
              As a member of the OurCrowd platform, you will have access to the same investment opportunities as venture and institutional investors.
            </p>
          </div>

          <div className="relative min-h-[760px] xl:min-h-[900px]">
            {/* Step 1 */}
            <div className="absolute w-72 left-[15%] top-[21%] xl:w-80 xl:left-[25%] xl:top-[21%]">
              <StepCard {...steps[0]} />
            </div>

            {/* Step 2 */}
            <div className="absolute w-72 left-[53%] top-[21%] xl:w-80 xl:left-[54%] xl:top-[21%]">
              <StepCard {...steps[1]} />
            </div>

            {/* Step 4 */}
            <div className="absolute w-72 left-[18%] top-[58%] xl:w-80 xl:left-[28%] xl:top-[58%]">
              <StepCard {...steps[3]} />
            </div>

            {/* Step 3 */}
            <div className="absolute w-72 left-[55%] top-[58%] xl:w-80 xl:left-[60%] xl:top-[58%]">
              <StepCard {...steps[2]} />
            </div>
          </div>

          <div className="absolute left-[20%] bottom-[-1%] xl:left-[30%] lg:bottom-[-1%]">
            <GradientButton
              gradient="linear-gradient(90deg, #D5E0F5 0%, #CEEDF2 100%)"
              className="text-[#474747] hover:scale-105 hover:shadow-lg"
              size="sm"
            >
              Book A Call
            </GradientButton>
          </div>
        </div>

        {/* Mobile Version */}
        <div className="md:hidden text-center mb-10">
          <h1 className="text-[30px] font-semibold text-white mb-2">
            Steps To Invest
          </h1>
          <p className="text-[16px] text-white/70 max-w-2xl mx-auto leading-relaxed">
            As a member of the OurCrowd platform, you will have access to the same investment opportunities as venture and institutional investors.
          </p>
        </div>

        <div className="md:hidden space-y-8">
          <div className="relative rounded-[30px] border border-white/10 bg-white/5 p-6 backdrop-blur-md overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent pointer-events-none" />
            <div className="relative space-y-10 pl-10">
              <div className="absolute left-4 top-2 bottom-4 w-px bg-gradient-to-b from-[#60A5E0] via-[#36E8CA] to-transparent opacity-60" />
              {steps.map((step, index) => (
                <div key={step.number} className="relative">
                  <div className="absolute -left-11 top-2 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-[#60A5E0] to-[#36E8CA] text-white font-semibold shadow-lg shadow-[#36E8CA]/40 border border-white/20">
                    {step.number}
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-[#071628]/60 p-5 shadow-[0_25px_80px_-35px_rgba(7,22,40,0.9)]">
                    <p className="text-[12px] font-semibold tracking-[0.3em] text-[#9EDBFF]">
                      {step.stepLabel}
                    </p>
                    <h3 className="mt-2 text-[20px] font-semibold text-white">{step.title}</h3>
                    <p className="mt-2 text-[14px] text-white/80 leading-relaxed">{step.description}</p>
                  </div>
                  {index !== steps.length - 1 && (
                    <div className="absolute left-[-29px] bottom-[-36px] h-8 w-px bg-gradient-to-b from-transparent via-[#60A5E0]/40 to-transparent" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center pt-4">
            <GradientButton
              gradient="linear-gradient(90deg, #D5E0F5 0%, #CEEDF2 100%)"
              className="text-[#474747] hover:scale-105 hover:shadow-lg"
              size="sm"
            >
              Book A Call
            </GradientButton>
          </div>
        </div>
      </div>
    </div>
  );
}

