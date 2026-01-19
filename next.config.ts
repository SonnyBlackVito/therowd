import type { NextConfig } from "next";
import webpack from "webpack";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.builder.io',
        pathname: '/api/v1/image/**',
      },
    ],
  },

  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@base-org/account': false,
      '@gemini-wallet/core': false,
      '@metamask/sdk': false,
      '@coinbase/wallet-sdk': false,
      '@walletconnect/ethereum-provider': false,
      'porto': false,
    };

    const ignoredPackages = [
      /^tap$/,
      /^why-is-node-running$/,
      /^desm$/,
      /^fastbench$/,
      /^pino-elasticsearch$/,
    ];

    ignoredPackages.forEach((pattern) => {
      config.plugins.push(
        new webpack.IgnorePlugin({ resourceRegExp: pattern })
      );
    });

    config.plugins.push(
      new webpack.IgnorePlugin({
        resourceRegExp: /thread-stream\/(test|bench)/,
        contextRegExp: /thread-stream/,
      })
    );

    return config;
  },
  transpilePackages: [
    "pino",
    "pino-abstract-transport",
    "@walletconnect",
    "@reown"
  ],
};

export default nextConfig;
