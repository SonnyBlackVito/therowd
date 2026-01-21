"use client";

import { useEffect, useRef } from "react";
import { useAppKitAccount } from "@reown/appkit/react";
import { useConnection } from "wagmi";
import { useAppDispatch } from "@/store/store";
import { setUser, clearUser } from "@/store/slices/authSlice";

export function AuthSyncProvider({ children }: { children: React.ReactNode }) {
  const {
    embeddedWalletInfo,
    isConnected: isAppKitConnected,
    address: appKitAddressSociallyConnected,
  } = useAppKitAccount();
  const { address, isConnected: isWagmiConnected } = useConnection();
  const dispatch = useAppDispatch();
  const syncedRef = useRef(false);

  useEffect(() => {
    if (syncedRef.current) return;

    if (isAppKitConnected && embeddedWalletInfo?.user?.email) {
      const email = embeddedWalletInfo.user.email;
      const username = email.split("@")[0];

      dispatch(
        setUser({
          email: email,
          username: username,
          address: appKitAddressSociallyConnected || null,
          name: embeddedWalletInfo.user.email || username,
          avatar: embeddedWalletInfo.user.username || null,
        }),
      );

      syncedRef.current = true;
    } else if (isWagmiConnected && address) {
      // const shortAddress = `${address.slice(0, 6)}...${address.slice(-4)}`;

      dispatch(
        setUser({
          email: null,
          username: address,
          address: address,
          name: address,
          avatar: null,
        }),
      );

      syncedRef.current = true;
    } else if (!isAppKitConnected && !isWagmiConnected && syncedRef.current) {
      dispatch(clearUser());
      syncedRef.current = false;
    }
  }, [
    isAppKitConnected,
    embeddedWalletInfo,
    isWagmiConnected,
    address,
    dispatch,
  ]);

  return <>{children}</>;
}
