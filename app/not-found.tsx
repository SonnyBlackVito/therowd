"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-black to-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-8xl font-bold">404</h1>
        <p className="mt-4 text-lg text-gray-400">
          The website is under development.
        </p>

        <Link
          href="/"
          className="mt-8 inline-block rounded-xl bg-white px-6 py-3 text-black hover:bg-gray-200 transition">
          Back to homepage
        </Link>
      </div>
    </div>
  );
}
