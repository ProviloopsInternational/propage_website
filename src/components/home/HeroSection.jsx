'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import theme from '@/theme/theme';

function FloatingCard({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      initial={{ y: 0, rotate: 0, opacity: 0 }}
      animate={{ y: [-4, 6, -4], rotate: [0, 1.5, 0], opacity: 1 }}
      transition={{ duration: 3, repeat: Infinity, delay, ease: 'easeInOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      style={{ background: theme.colors.backgroundGradient }}
      className="relative overflow-hidden"
    >
      {/* soft radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 h-[32rem] w-[32rem] rounded-full blur-3xl opacity-50"
        style={{ background: 'radial-gradient(closest-side, rgba(255,255,255,.35), transparent 70%)' }}
      />
      {/* dotted texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(currentColor 1px, transparent 1px)',
          backgroundSize: '18px 18px',
          color: 'rgba(255,255,255,.35)',
        }}
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-20 md:grid-cols-2 md:py-28 lg:gap-16">
        {/* LEFT — Text */}
        <div className="text-white">
          <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
            Your Growth, Backed by Proven Digital Solutions
          </h1>

          <p className="mt-5 text-base leading-relaxed text-white/90 md:text-lg">

            Our global network of trusted bloggers builds links that matter, and expert developers make sure your website ranks higher, loads faster, and drives real results. Together, we help your brand grow, get noticed, and stay ahead in the digital space.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="rounded-full px-6 py-3 font-semibold shadow"
              style={{ background: theme.colors.accent, color: theme.colors.accentText }}
            >
              Get Started
            </Link>
            <Link
              href="/services"
              className="rounded-full border px-6 py-3 font-semibold text-white hover:bg-white/10"
              style={{ borderColor: 'rgba(255,255,255,.25)' }}
            >
              Explore Services
            </Link>
          </div>
        </div>

        {/* RIGHT — Fresh animated graphic */}
        <div className="relative">
          {/* rotating ring */}
          <div className="absolute -inset-6 -z-10 grid place-items-center">
            <div
              className="h-72 w-72 rounded-full border animate-spin"
              style={{
                borderColor: 'rgba(255,255,255,.25)',
                borderTopColor: 'rgba(255,255,255,.65)',
                animationDuration: '18s',
              }}
            />
          </div>

          {/* main “dashboard” card */}
          <FloatingCard delay={0.2} className="mx-auto w-[92%] max-w-[520px]">
            <div className="rounded-2xl bg-white p-4 text-black shadow-xl ring-1 ring-black/5">
              {/* fake browser bar */}
              <div className="mb-3 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
                <div className="ml-3 text-sm font-medium text-gray-500">Guest Posting Dashboard</div>
              </div>

              {/* grid content */}
              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-2 rounded-xl bg-gray-50 p-3">
                  <div className="mb-2 h-3 w-24 rounded bg-gray-200" />
                  <div className="grid grid-cols-3 gap-2">
                    <div className="h-16 rounded bg-white ring-1 ring-gray-200" />
                    <div className="h-16 rounded bg-white ring-1 ring-gray-200" />
                    <div className="h-16 rounded bg-white ring-1 ring-gray-200" />
                  </div>
                </div>
                <div className="rounded-xl bg-gray-50 p-3">
                  <div className="mb-2 h-3 w-20 rounded bg-gray-200" />
                  <div className="h-16 rounded bg-white ring-1 ring-gray-200" />
                </div>
              </div>
            </div>
          </FloatingCard>

          {/* small stats card */}
          <FloatingCard delay={0.6} className="absolute -left-4 -bottom-6 w-40">
            <div className="rounded-xl bg-white p-3 text-black shadow-xl ring-1 ring-black/5">
              <div className="mb-2 text-xs font-semibold text-gray-600">Approval Rate</div>
              <div className="flex items-center gap-2">
                {/* donut */}
                <svg viewBox="0 0 36 36" className="h-10 w-10">
                  <circle cx="18" cy="18" r="16" fill="none" stroke="#E5E7EB" strokeWidth="4" />
                  <circle
                    cx="18"
                    cy="18"
                    r="16"
                    fill="none"
                    stroke="#6366F1"
                    strokeWidth="4"
                    strokeDasharray="75 100"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="text-lg font-bold">75%</div>
              </div>
            </div>
          </FloatingCard>

          {/* do-follow pill */}
          <FloatingCard delay={1} className="absolute -right-4 -top-6">
            <div className="rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-black shadow-md backdrop-blur">
              Do-Follow Links ✓
            </div>
          </FloatingCard>
        </div>
      </div>
    </section>
  );
}
