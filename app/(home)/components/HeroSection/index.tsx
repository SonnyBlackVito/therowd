"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#060C3C]">
      <div className="relative z-20 w-full pt-12 sm:pt-16 lg:pt-20 pb-10 sm:pb-30 lg:pb-48">
        <div className="w-full max-w-360 mx-auto px-4 sm:px-6">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] font-bold mb-5 sm:mb-5.5 bg-linear-to-r from-[#60A5E0] to-[#36E8CA] bg-clip-text text-transparent">
              Invest in the Future
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="space-y-3 sm:space-y-4 text-[#ffffff]-700 max-w-4xl mx-auto">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-[15px] sm:text-[18px] md:text-[20px] font-semibold">
                Startups. VC Funds. Alternatives.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-[15px] sm:text-[18px] md:text-[20px]">
                <span className="font-semibold">Access</span> exclusive private
                market deals.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-[15px] sm:text-[18px] md:text-[20px]">
                <span className="font-semibold">Invest</span> in pre-vetted
                startups, targeted venture funds and a range of alternatives.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-[15px] sm:text-[18px] md:text-[20px]">
                <span className="font-semibold">Join</span> high net worth
                investors in private equity, private credit, and other
                alternative assets.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="relative w-full sm:-mt-40 lg:-mt-48">
        <div className="absolute inset-0 z-0 w-full">
          <Image
            src="/home/hero/background.png"
            alt="Background"
            fill
            className="w-full"
            priority
          />
          <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-[#060C3C] via-[#060C3C]/50 to-transparent h-100 pointer-events-none" />
        </div>

        <div className="relative z-10 w-full max-w-360 mx-auto px-4 sm:px-6 h-full flex items-center justify-center pt-8 sm:pt-12">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            className="relative w-full max-w-4xl">
            <div className="relative aspect-video w-full">
              <Image
                src="/home/hero/product.png"
                alt="TheROWD Platform"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
