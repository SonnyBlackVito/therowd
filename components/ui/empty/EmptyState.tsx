'use client';

import Image from 'next/image';
import { ReactNode } from 'react';
import { FiRefreshCw } from 'react-icons/fi';

interface EmptyStateProps {
  image?: string;
  message: string;
  actionLabel?: string;
  onAction?: () => void;
  children?: ReactNode;
}

export default function EmptyState({
  image = '/dashboard/empty.png',
  message,
  actionLabel,
  onAction,
  children,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      {image && (
        <div className="relative mb-2 h-64 w-64 md:h-80 md:w-80">
          <Image
            src={image}
            alt="Empty state"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 256px, 320px"
            priority
          />
        </div>
      )}

      <p className="mb-6 text-center text-base text-white/80">{message}</p>

      {actionLabel && onAction && (
        <button
          type="button"
          onClick={onAction}
          className="inline-flex items-center gap-2 text-[#36E8CA] transition-colors hover:text-[#60A5E0]"
        >
          <FiRefreshCw className="h-5 w-5" />
          <span className="font-medium">{actionLabel}</span>
        </button>
      )}

      {children}
    </div>
  );
}

