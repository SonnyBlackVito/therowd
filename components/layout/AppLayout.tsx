"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Footer from "./Footer";
import Header from "./Header";
import InvestmentHeader from "./InvestmentHeader";
import WagmiProvider from "@/app/context";
import ReduxProvider from "@/store/Provider";
import DashboardHeader from "./DashboarHeader";
import DashboardSidebar from "./DashboardSidebar";
import DashboardFooter from "./DashboardFooter";
import { AuthSyncProvider } from "./AuthSyncProvider";

// Tạo QueryClient một lần
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1000 * 60 * 60 * 24, // 24 hours
    },
  },
});

export default function ClientLayout({
  children,
  cookies,
}: {
  children: React.ReactNode;
  cookies: string | null;
}) {
  const pathname = usePathname();
  const isInvestmentRoute =
    pathname?.startsWith("/investment") || pathname?.startsWith("/launch-pool");
  const isDashboardRoute = pathname?.startsWith("/dashboard");
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
        <WagmiProvider cookies={cookies}>
          <QueryClientProvider client={queryClient}>
            <AuthSyncProvider>
              <div className="min-h-screen bg-[#1E1E1E]">
                <DashboardHeader
                  onMenuToggle={toggleSidebar}
                  isSidebarOpen={isSidebarOpen}
                />
                <DashboardSidebar
                  isOpen={isSidebarOpen}
                  onClose={closeSidebar}
                />
                <main className="lg:ml-65 mt-19 mb-11.5 min-h-[calc(100vh-122px)]">
                  {children}
                </main>
                <DashboardFooter />
              </div>
            </AuthSyncProvider>
          </QueryClientProvider>
        </WagmiProvider>
      </ReduxProvider>
    );
  }

  return (
    <ReduxProvider>
      <WagmiProvider cookies={cookies}>
        <QueryClientProvider client={queryClient}>
          <AuthSyncProvider>
            <div className="flex flex-col min-h-screen">
              {isInvestmentRoute ? <InvestmentHeader /> : <Header />}
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </AuthSyncProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </ReduxProvider>
  );
}
