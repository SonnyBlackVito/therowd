'use client';

import Image from 'next/image';
import GradientButton from '@/components/ui/buttons/GradientButton';

export default function ConsultationSection() {
  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/home/benefits/background.png"
          alt="Consultation background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 sm:mb-10 lg:mb-12 leading-tight max-w-4xl">
            Schedule A Call With A Representative To Discuss Your Investment Options.
          </h2>

          <GradientButton
            size="lg"
            className="px-8 py-4 text-lg font-semibold"
            gradient="linear-gradient(90deg, #60A5E0 0%, #36E8CA 100%)"
          >
            Book A Call
          </GradientButton>
        </div>
      </div>
    </section>
  );
}
