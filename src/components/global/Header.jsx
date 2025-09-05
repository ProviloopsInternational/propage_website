'use client';

import { useState } from 'react';
import Link from 'next/link';
import theme from '@/theme/theme';

const nav = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact Us' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{ background: theme.colors.backgroundGradient }}
      className="sticky top-0 z-50 text-white"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:py-4">
        {/* Brand */}
        <Link
          href="/"
          className="select-none text-xl md:text-2xl font-extrabold tracking-tight"
          style={{ color: '#0B1221' }}
        >
          Pro Page Digital
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-white/95 hover:text-white transition font-medium"
            >
              {item.label}
            </Link>
          ))}

          {/* CTA (white pill) */}
          <Link
            href="/contact"
            className="rounded-full bg-white text-black px-6 py-2.5 font-semibold shadow hover:opacity-90"
          >
            Book a consultation
          </Link>
        </nav>

        {/* Mobile: hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Open menu"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/15 text-white hover:bg-white/20"
          >
            <span className="sr-only">Menu</span>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/10">
          <nav className="mx-auto max-w-7xl px-4 py-3 space-y-2">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2 text-white/95 hover:bg-white/10"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-white px-4 py-2.5 font-semibold text-black shadow"
            >
              Book a consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
