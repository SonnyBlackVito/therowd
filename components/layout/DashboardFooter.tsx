'use client';

import Link from 'next/link';

const footerLinks = [
  { label: 'Terms Of Use', href: '/terms' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'General Disclaimer', href: '/general-disclaimer' },
  { label: 'Risk Factors', href: '/risk-factors' },
  { label: 'Disclaimer', href: '/disclaimer' },
  { label: 'Security', href: '/security' },
  { label: 'Cookie Settings', href: '/cookie-settings' },
];

export default function DashboardFooter() {
  return (
    <footer className="fixed bottom-0 left-[260px] right-0 h-[46px] flex items-center justify-center gap-4 px-6 bg-[#1E1E1E]">
      <p className="text-[#474747] text-xs">
        Copyright © Kpop Road 2025. All rights reserved.
      </p>

      <div className="flex items-center gap-2">
        {footerLinks.map((link, index) => (
          <div key={link.href} className="flex items-center gap-3">
            {index > 0 && <span className="text-[#474747] text-sm">|</span>}
            <Link
              href={link.href}
              className="text-[#474747] text-xs hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          </div>
        ))}
      </div>
    </footer>
  );
}