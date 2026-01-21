"use client";

import { useEffect, useState } from "react";
import {
  useConnect,
  useConnection,
  useDisconnect,
  useEnsAvatar,
  useEnsName,
} from "wagmi";
import { appKit } from "@/lib/wagmi";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAppKitAccount } from "@reown/appkit/react";

export default function ConnectWalletForm() {
  const [email, setEmail] = useState("");
  const { address, isConnected } = useConnection();
  const disconnect = useDisconnect();

  const router = useRouter();
  const { embeddedWalletInfo } = useAppKitAccount();
  console.log("embeddedWalletInfo", embeddedWalletInfo);
  const handleSocialLogin = () => {
    appKit.open();
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      appKit.open();
    }
  };

  const handleWalletConnect = () => {
    appKit.open();
  };

  const socialButtons = [
    {
      id: "facebook",
      name: "Facebook",
      icon: "/icons/facbook.png",
      bgColor: "#1877F2",
    },
    {
      id: "google",
      name: "Google",
      icon: "/icons/google.png",
      bgColor: "#FFFFFF",
    },
    {
      id: "apple",
      name: "Apple",
      icon: "/icons/apple.png",
      bgColor: "#000000",
    },
  ];

  const walletOptions = [
    { id: "metamask", name: "MetaMask", icon: "/connect-wallet/metamask.png" },
    { id: "phantom", name: "Phantom", icon: "/connect-wallet/phantom.png" },
    {
      id: "coinbase",
      name: "Coinbase Smart Wallet",
      icon: "/connect-wallet/coin-base.png",
    },
    { id: "all", name: "All Wallets", icon: null, count: 416 },
  ];

  return (
    <div
      className="w-full max-w-md rounded-2xl p-6 md:p-8"
      style={{
        background:
          "radial-gradient(107.32% 141.42% at 0% 0%, rgba(255, 255, 255, 0.40) 0%, rgba(255, 255, 255, 0.00) 100%)",
        backdropFilter: "blur(15px)",
        border: "1px solid #D5E0F5",
      }}>
      <h2 className="text-[18px] md:text-[20px] font-bold text-[#FFF] mb-6 text-center">
        Access Exclusive Opportunities
      </h2>

      {isConnected ? (
        <div className="space-y-4">
          <div className="p-4 rounded-lg bg-green-500/20 border border-green-500/50">
            <p className="text-white text-sm mb-2">Connected:</p>
            <p className="text-green-400 font-mono text-xs break-all">
              {address}
            </p>
          </div>
          <button
            onClick={() => router.push("/dashboard")}
            className="w-full py-3 px-4 rounded-lg  text-white font-medium transition-colors border ">
            Move to Dashboard
          </button>

          <button
            onClick={() => disconnect.mutate()}
            className="w-full py-3 px-4 rounded-lg bg-red-500/20 hover:bg-red-500/30 text-white font-medium transition-colors border border-red-500/50">
            Disconnect
          </button>
        </div>
      ) : (
        <>
          <div className="mb-6">
            <p className="text-white/80 text-sm mb-4 text-center">
              Sign Up With:
            </p>
            <div className="flex gap-3 justify-center">
              {socialButtons.map((social) => (
                <button
                  key={social.id}
                  onClick={handleSocialLogin}
                  className="w-12 h-12 rounded-lg flex items-center justify-center transition-transform hover:scale-105 active:scale-95 shadow-md"
                  style={{
                    backgroundColor: social.bgColor,
                  }}
                  aria-label={`Sign in with ${social.name}`}>
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={24}
                    height={24}
                    className="w-6 h-6 object-contain"
                  />
                </button>
              ))}
            </div>
          </div>

          <form onSubmit={handleEmailSubmit} className="mb-6">
            <label htmlFor="email" className="block text-white/80 text-sm mb-2">
              Email/Phone *
            </label>
            <div className="relative">
              <input
                id="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@gmail"
                className="w-full py-3 px-4 pr-12 rounded-lg text-[#474747] placeholder-[#474747] focus:outline-none focus:ring-2 focus:ring-[#36E8CA] focus:border-transparent"
                style={{
                  background: "rgba(255, 255, 255, 0.50)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                }}
                required
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#36E8CA] flex items-center justify-center hover:bg-[#60A5E0] transition-colors">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </form>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-transparent text-white/60">
                or continue with
              </span>
            </div>
          </div>

          <div className="space-y-3">
            {walletOptions.map((wallet) => (
              <button
                key={wallet.id}
                onClick={handleWalletConnect}
                className="w-full flex items-center justify-between py-3 px-4 rounded-lg text-white"
                style={{
                  background: "rgba(255, 255, 255, 0.50)",
                }}>
                <span className="text-[#474747]">{wallet.name}</span>
                {wallet.icon ? (
                  <Image
                    src={wallet.icon}
                    alt={wallet.name}
                    width={24}
                    height={24}
                    className="w-6 h-6 object-contain"
                  />
                ) : (
                  <div className="w-6 h-6 rounded-full bg-[#36E8CA] flex items-center justify-center">
                    <span className="text-xs font-bold text-white">
                      {wallet.count}
                    </span>
                  </div>
                )}
              </button>
            ))}
          </div>
        </>
      )}

      <div className="mt-6 pt-6 border-t border-white/10 text-center">
        <p className="text-white/60 text-xs">
          Powered by <span className="font-bold text-white">SPECFIN</span>
        </p>
      </div>
    </div>
  );
}
