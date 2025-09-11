'use client';

import { motion } from 'framer-motion';
import theme from '@/theme/theme';

function Float({ children, delay = 0, duration = 6, className = '' }) {
  return (
    <motion.div
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: [-6, 6, -6], opacity: 1 }}
      transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Check({ className }) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" className={className}>
      <path
        d="M20 6L9 17l-5-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Portfolio() {
  return (
    <section className="relative bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-16 md:grid-cols-2 md:py-24">

        {/* LEFT — Content */}
        <div>
          <span className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
            Our SEO-Driven Guest Posting Agency assists your business
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
            Portfolio & Capabilities
          </h2>

          {/* 1 */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-900">
              1) Wide network of trusted publishers
            </h3>
            <p className="mt-2 text-gray-700">
              We’ve built strong relationships with real websites across different niches and regions. 
              Most of the sites we work with have <strong>DR 20+ </strong> and <strong> 500+ monthly visitors,</strong> so every placement drives real visibility and results.
            </p>
          </div>

          {/* 2 */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-900">
              2) Complete blogger outreach
            </h3>
            <p className="mt-2 text-gray-700">
              From finding the right websites to negotiating with editors and managing publishing, our outreach team handles everything. 
              We make sure your content gets placed on relevant sites that match your goals.
            </p>
          </div>

          {/* 3 */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-900">
              3) Services you can count on
            </h3>
            <ul className="mt-3 space-y-2 text-gray-700">
              <li className="flex gap-2"><Check className="mt-0.5 text-gray-400" /> High-quality guest post content</li>
              <li className="flex gap-2"><Check className="mt-0.5 text-gray-400" /> Transparent and trackable approvals</li>
              <li className="flex gap-2"><Check className="mt-0.5 text-gray-400" /> Research-driven planning</li>
              <li className="flex gap-2"><Check className="mt-0.5 text-gray-400" /> Smart anchor text selection and placement</li>
            </ul>
          </div>

          {/* 4 */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-900">
              4) Simple, hassle-free link building
            </h3>
            <p className="mt-2 text-gray-700">
              We make link building straightforward with clear steps, quick turnaround times, and do-follow links that meet quality standards while bringing long-term value.
            </p>
          </div>
        </div>

        {/* RIGHT — Fresh animated graphic */}
        <div className="relative">
          {/* soft glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-10 -right-10 h-72 w-72 rounded-full blur-3xl opacity-40"
            style={{ background: theme.colors.backgroundGradient }}
          />
          {/* ring */}
          <div className="absolute -inset-6 -z-10 grid place-items-center">
            <div
              className="h-72 w-72 rounded-full border animate-spin"
              style={{
                borderColor: 'rgba(0,0,0,.06)',
                borderTopColor: 'rgba(0,0,0,.18)',
                animationDuration: '20s',
              }}
            />
          </div>

          {/* Card: Inventory */}
          <Float delay={0.2} className="mx-auto w-[92%] max-w-[520px]">
            <div className="rounded-2xl bg-white p-4 shadow-xl ring-1 ring-black/5">
              <div className="mb-3 flex items-center gap-2">
                <div
                  className="h-8 w-8 rounded-lg"
                  style={{ background: theme.colors.primary || '#6D28D9' }}
                />
                <div className="text-sm font-medium text-gray-600">Inventory Snapshot</div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700">DR 20+</span>
                <span className="rounded-full bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700">300+ Visits</span>
                <span className="rounded-full bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700">Real Sites</span>
                <span className="rounded-full bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700">Global Niches</span>
              </div>

              {/* animated bars */}
              <div className="mt-4 grid grid-cols-6 items-end gap-2 h-24">
                {[10, 18, 14, 22, 16, 20].map((base, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: base }}
                    animate={{ height: [base, base + 40, base + 10, base + 30, base] }}
                    transition={{ duration: 3 + i * 0.2, repeat: Infinity, ease: 'easeInOut' }}
                    className="rounded-sm"
                    style={{ background: theme.colors.backgroundGradient }}
                  />
                ))}
              </div>
            </div>
          </Float>

          {/* Card: Publisher Reach */}
          <Float delay={0.6} className="absolute -left-4 -bottom-6 w-48">
            <div className="rounded-2xl bg-white p-4 shadow-xl ring-1 ring-black/5">
              <div className="text-xs font-semibold text-gray-600 mb-2">Publisher Reach</div>
              <ul className="space-y-1 text-xs text-gray-700">
                <li className="flex gap-1.5"><span className="mt-1 h-1.5 w-1.5 rounded-full" style={{ background: theme.colors.primaryLight }}/><span>Tech & SaaS</span></li>
                <li className="flex gap-1.5"><span className="mt-1 h-1.5 w-1.5 rounded-full" style={{ background: theme.colors.primaryDark }}/><span>Finance</span></li>
                <li className="flex gap-1.5"><span className="mt-1 h-1.5 w-1.5 rounded-full" style={{ background: theme.colors.primary }}/><span>Lifestyle</span></li>
              </ul>
            </div>
          </Float>

          {/* Pill: Do-Follow */}
          <Float delay={1} className="absolute -right-4 -top-6">
            <div className="rounded-full bg-black/80 px-4 py-2 text-sm font-semibold text-white shadow-md backdrop-blur">
              Do-Follow ✓
            </div>
          </Float>
        </div>
      </div>
    </section>
  );
}
