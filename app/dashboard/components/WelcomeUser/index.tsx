"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { useAppKitAccount } from "@reown/appkit/react";

import { useAppSelector } from "@/store/store";
import { shortAddress } from "@/utils/shoraddress";

export default function WelcomeUserSection() {
  const user = useAppSelector((state) => state.auth.user);
  console.log("user", user);
  const isConnected = useAppSelector((state) => state.auth.isConnected);
  return (
    <section className="w-full bg-[#05010F] py-8">
      <div className="mx-auto flex w-full flex-col gap-8 px-4">
        {isConnected && user ? (
          <div className="flex items-center gap-4">
            <div>
              <h1 className="text-white text-2xl font-bold">
                Hi {user.username}! 👋
              </h1>
              <p className="text-gray-400">{user.email}</p>
              <p className="text-gray-400">{user.address}</p>
            </div>
          </div>
        ) : (
          <h1 className="text-white">Hi</h1>
        )}
      </div>
    </section>
  );
}
