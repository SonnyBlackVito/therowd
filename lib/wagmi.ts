import { createAppKit } from "@reown/appkit/react";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import {
  mainnet,
  arbitrum,
  polygon,
  optimism,
  base,
  sepolia,
} from "@reown/appkit/networks";

const projectId =
  process.env.WALLETCONNECT_PROJECT_ID || "424f08f79552aebad3a5092c7f3442b6";

const metadata = {
  name: "TheRowd",
  description: "Invest in the Future",
  url:
    typeof window !== "undefined"
      ? window.location.origin
      : "https://therowd.com",
  icons: [
    typeof window !== "undefined"
      ? `${window.location.origin}/logo/logo-white.png`
      : "https://therowd.com/logo.png",
  ],
};

const wagmiAdapter = new WagmiAdapter({
  networks: [mainnet, arbitrum, polygon, optimism, base, sepolia],
  projectId,
  ssr: true,
});

// Create AppKit with WagmiAdapter
export const appKit = createAppKit({
  adapters: [wagmiAdapter],
  projectId,
  networks: [mainnet, arbitrum, polygon, optimism, base, sepolia],
  defaultNetwork: mainnet,
  metadata,
  features: {
    analytics: true,
    email: true,
    socials: ["google", "facebook", "apple"],
    emailShowWallets: true,
  },
  allWallets: "SHOW",
});

// Export wagmi config for use in WagmiProvider
export const wagmiConfig = wagmiAdapter.wagmiConfig;
