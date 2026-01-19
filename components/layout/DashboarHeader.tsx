'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FiSearch, FiBell, FiUser, FiMenu, FiX } from 'react-icons/fi';

interface DashboardHeaderProps {
  onMenuToggle?: () => void;
  isSidebarOpen?: boolean;
}

export default function DashboardHeader({ onMenuToggle, isSidebarOpen = false }: DashboardHeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between border-b border-[#474747] bg-[#0E0810]">
      <div className="mx-auto flex w-full items-center justify-between gap-6 px-4 sm:px-8 py-4">
        <div className="flex flex-1 items-center gap-4 sm:gap-6">
          {/* Burger Menu / Close Button - Mobile/Tablet */}
          <button
            onClick={onMenuToggle}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-white/40 hover:text-white/80 lg:hidden"
            aria-label={isSidebarOpen ? "Close menu" : "Open menu"}
          >
            {isSidebarOpen ? (
              <FiX className="h-5 w-5" />
            ) : (
              <FiMenu className="h-5 w-5" />
            )}
          </button>

          <div className="flex items-center gap-4 sm:gap-7">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo/logo-white.png"
                alt="THEROWD"
                width={130}
                height={32}
                priority
                className="h-6 w-auto sm:h-8"
              />
            </Link>

            <nav className="hidden sm:block text-sm font-medium">
              <Link
                href="/portfolio"
                style={{
                  background: 'linear-gradient(90deg, #60A5E0 0%, #36E8CA 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                My Portfolio
              </Link>
            </nav>
          </div>

          <div className="hidden lg:flex w-[360px] max-w-[420px] items-center rounded-[8px] bg-[#303030] px-5 py-2 text-sm text-white/70">
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 bg-transparent text-white placeholder:text-white/40 focus:outline-none"
              aria-label="Search"
            />
            <span className="mx-3 h-6 w-px bg-white/20" aria-hidden="true" />
            <button type="button" className="text-white/90 hover:text-white">
              <FiSearch className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3 sm:gap-5">
          {/* Search Button - Mobile */}
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-white/40 hover:text-white/80 lg:hidden"
            aria-label="Search"
          >
            <FiSearch className="h-5 w-5" />
          </button>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-white/40 hover:text-white/80"
            aria-label="Notifications"
          >
            <FiBell className="h-5 w-5" />
          </button>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-white/40 hover:text-white/80"
            aria-label="Account"
          >
            <FiUser className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}