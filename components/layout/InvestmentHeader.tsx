'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import GradientButton from '@/components/ui/buttons/GradientButton';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function InvestmentHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Invest', href: '/invest' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'About Us', href: '/about' },
    { label: 'Events', href: '/events' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className={`w-full sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#030B1B]/80 backdrop-blur-md' 
          : 'bg-[#030B1B]'
      }`}
      style={isScrolled ? {
        background: '#030B1B',
        opacity: 0.8,
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      } : {}}
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center z-50">
            <Image 
              src="/logo/logo-white.png" 
              alt="THEROWD Logo" 
              width={100} 
              height={30}
              className="w-20 sm:w-24 md:w-28 h-auto"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white/80 hover:text-white transition-colors duration-200 font-medium text-sm xl:text-base"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link href="/connect-wallet">
              <GradientButton size="md">
                Connect Wallet
              </GradientButton>
            </Link>
          </div>

          <button
            onClick={toggleMobileMenu}
            className="lg:hidden text-white p-2 z-50"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm lg:hidden z-40"
                onClick={toggleMobileMenu}
              />

              {/* Menu Content */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden absolute left-0 right-0 top-full bg-[#060C3C] border-t border-white/10 z-50"
              >
                <nav className="flex flex-col px-4 py-6 space-y-4">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        onClick={toggleMobileMenu}
                        className="block text-white/80 hover:text-white transition-colors duration-200 font-medium text-base py-2"
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navItems.length * 0.1 }}
                    className="pt-4"
                  >
                    <GradientButton size="md" className="w-full">
                      Join For Free
                    </GradientButton>
                  </motion.div>
                </nav>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
