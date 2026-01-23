"use client";

import { useEffect, useRef } from "react";
import { useAppKitAccount } from "@reown/appkit/react";
import { useAccount } from "wagmi";
import { useAppDispatch } from "@/store/store";
import { setUser, clearUser } from "@/store/slices/authSlice";

export function AuthSyncProvider({ children }: { children: React.ReactNode }) {
  const {
    embeddedWalletInfo,
    isConnected: isAppKitConnected,
    address: appKitAddress,
    caipAddress,
  } = useAppKitAccount();

  const { address: wagmiAddress, isConnected: isWagmiConnected } = useAccount();
  const dispatch = useAppDispatch();
  const prevStateRef = useRef<{
    isConnected: boolean;
    email: string | null;
    address: string | null;
  } | null>(null);

  useEffect(() => {
    // Determine current state
    const isUserConnected = isAppKitConnected || isWagmiConnected;
    const currentAddress = appKitAddress || wagmiAddress;
    const userEmail = embeddedWalletInfo?.user?.email || null;

    console.log("Auth State:", {
      isAppKitConnected,
      isWagmiConnected,
      userEmail,
      currentAddress,
      embeddedWalletInfo,
    });

    // Check if state actually changed
    const stateChanged =
      prevStateRef.current?.isConnected !== isUserConnected ||
      prevStateRef.current?.email !== userEmail ||
      prevStateRef.current?.address !== currentAddress;

    if (!stateChanged) {
      return;
    }

    // User is connected with email
    if (isUserConnected && userEmail && currentAddress) {
      const username = userEmail.split("@")[0];

      dispatch(
        setUser({
          email: userEmail,
          username: username,
          address: currentAddress,
          name: userEmail,
          avatar: embeddedWalletInfo?.user?.username || null,
        }),
      );

      prevStateRef.current = {
        isConnected: true,
        email: userEmail,
        address: currentAddress,
      };
    }
    // User connected with wallet only (no email)
    else if (isWagmiConnected && wagmiAddress && !userEmail) {
      const shortAddress = `${wagmiAddress.slice(0, 6)}...${wagmiAddress.slice(-4)}`;

      dispatch(
        setUser({
          email: null,
          username: shortAddress,
          address: wagmiAddress,
          name: shortAddress,
          avatar: null,
        }),
      );

      prevStateRef.current = {
        isConnected: true,
        email: null,
        address: wagmiAddress,
      };
    }
    // User connected with AppKit email only
    else if (isAppKitConnected && userEmail && appKitAddress) {
      const username = userEmail.split("@")[0];

      dispatch(
        setUser({
          email: userEmail,
          username: username,
          address: appKitAddress,
          name: userEmail,
          avatar: embeddedWalletInfo?.user?.username || null,
        }),
      );

      prevStateRef.current = {
        isConnected: true,
        email: userEmail,
        address: appKitAddress,
      };
    }
    // User disconnected
    else if (!isAppKitConnected && !isWagmiConnected) {
      dispatch(clearUser());

      prevStateRef.current = {
        isConnected: false,
        email: null,
        address: null,
      };
    }
  }, [
    isAppKitConnected,
    isWagmiConnected,
    embeddedWalletInfo,
    appKitAddress,
    wagmiAddress,
    dispatch,
  ]);

  return <>{children}</>;
}
