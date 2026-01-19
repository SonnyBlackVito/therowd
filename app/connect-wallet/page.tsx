'use client';

import Image from 'next/image';
import ConnectWalletForm from '@/components/connect-wallet/ConnectWalletForm';

export default function ConnectWalletPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/connect-wallet/background.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-12 md:py-20">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-white space-y-6 md:space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Invest in the Future
            </h1>

            <div className="space-y-4 text-lg md:text-xl">
              <p>
                <span className="font-bold">Startups. VC Funds. Alternatives.</span>
              </p>
              <p className="text-white/90">
                Access exclusive private market deals.
              </p>
              <p className="text-white/80">
                Invest in pre-vetted startups, targeted venture funds and a range of alternatives.
              </p>
              <p className="text-white/80">
                Join high net worth investors in private equity, private credit, and other
                alternative assets.
              </p>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="flex justify-center lg:justify-end">
            <ConnectWalletForm />
          </div>
        </div>
      </div>
    </div>
  );
}
