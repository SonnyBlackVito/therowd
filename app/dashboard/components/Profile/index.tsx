"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { useAppKitAccount } from "@reown/appkit/react";

import { useAppSelector } from "@/store/store";
import { shortAddress } from "@/utils/shoraddress";

export default function ProfileSection() {
  const user = useAppSelector((state) => state.auth.user);
  console.log("user", user);
  const isConnected = useAppSelector((state) => state.auth.isConnected);
  return (
    <section className="w-full bg-[#05010F] py-8">
      <h1>Hello</h1>
    </section>
  );
}
