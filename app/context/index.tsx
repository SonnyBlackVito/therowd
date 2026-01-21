"use client";

import { wagmiConfig } from "@/lib/wagmi";
import { Config, cookieToInitialState, WagmiProvider as Provider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1000 * 60 * 60 * 24, // 24 hours
    },
  },
});

export default function WagmiProvider({
  children,
  cookies,
}: {
  children: ReactNode;
  cookies: string | null;
}) {
  // const initialState = cookieToInitialState(WagmiAdapter.wagmiConfig as Config, cookies)
  const initialState = cookieToInitialState(wagmiConfig as Config, cookies);
  return (
    <Provider config={wagmiConfig} initialState={initialState}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </Provider>
  );
}
