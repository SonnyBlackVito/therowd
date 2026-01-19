'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Footer from "./Footer";
import Header from "./Header";
import InvestmentHeader from "./InvestmentHeader";
import WagmiProvider from '@/app/context';
import ReduxProvider from '@/store/Provider';
import DashboardHeader from './DashboarHeader';
import DashboardSidebar from './DashboardSidebar';
import DashboardFooter from './DashboardFooter';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isInvestmentRoute = pathname?.startsWith('/investment') || pathname?.startsWith('/launch-pool');
  const isDashboardRoute = pathname?.startsWith('/dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  if (isDashboardRoute) {
    return (
      <ReduxProvider>
        <WagmiProvider>
          <div className="min-h-screen bg-[#1E1E1E]">
            <DashboardHeader onMenuToggle={toggleSidebar} isSidebarOpen={isSidebarOpen} />
            <DashboardSidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
            <main className="lg:ml-[260px] mt-[76px] mb-[46px] min-h-[calc(100vh-122px)]">
              {children}
            </main>
            <DashboardFooter />
          </div>
        </WagmiProvider>
      </ReduxProvider>
    )
  }

  return (
    <ReduxProvider>
      <WagmiProvider>
        <div className="flex flex-col min-h-screen">
          {isInvestmentRoute ? <InvestmentHeader /> : <Header />}
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </WagmiProvider>
    </ReduxProvider>
  )
}