'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import theme from '@/theme/theme';

const ITEMS = [
  {
    title: 'Smart Blogger Outreach',
    body:
      'We build real connections with trusted websites and earn genuine editorial links. Every site is carefully reviewed to make sure it’s relevant, safe, and valuable for the long run.',
  },
  {
    title: 'Localized Publisher Lists',
    body:
      'Target the markets that matter most. Our country-specific lists are organized by language, audience, and industry, so your links reach the right people.',
  },
  {
    title: 'Guest Post Opportunities Across Industries',
    body:
      'Our outreach covers 100+ niches in both B2B and B2C. Whether it’s SaaS, Finance, Health, Travel, or Lifestyle, we place your content where it actually gets seen and ranks.',
  },
  {
    title: 'Dedicated Account Manager',
    body:
      'You’ll have a manager focused on your campaign from start to finish, keeping strategies on track and communication clear at every step.',
  },
  {
    title: 'Quality Guest Post Content',
    body:
      'Our experienced writers and editors create research-backed articles that fit your brand, follow publisher guidelines, and align with SEO best practices.',
  },
  {
    title: 'Reliable Campaign Management',
    body:
      'We make the process easy with fast responses, regular updates, and transparent reporting—so you always know what’s happening and when.',
  },
];

function Chevron({ open }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      className={`transition-transform ${open ? 'rotate-180' : ''}`}
      aria-hidden="true"
    >
      <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function FAQItem({ item, index }) {
  const [open, setOpen] = useState(index === 0); // first open by default

  return (
    <div
      className="group relative rounded-2xl border border-gray-200 bg-white cursor-pointer"
      style={{ overflow: 'hidden' }}
    >
      {/* gradient accent on hover */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: 'linear-gradient(0deg, rgba(0,0,0,0) 75%, rgba(0,0,0,0.02))' }}
      />
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer hover:bg-gray-50"
      >
        <div className="flex items-center gap-3">
          <span
            className="inline-block h-8 w-8 rounded-lg"
            style={{ background: theme.colors.primaryDark || '#1E40AF' }}
            aria-hidden
          />
          <h3 className="text-base font-semibold text-gray-900">{item.title}</h3>
        </div>
        <Chevron open={open} />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="px-5 pb-5 text-sm leading-7 text-gray-700">
              {item.body}
            </div>
            {/* gradient divider */}
            <div
              className="h-0.5 w-full"
              style={{ background: theme.colors.backgroundGradient }}
              aria-hidden
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ({ items = ITEMS }) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
            Answers & Assurances
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-gray-600">
            Here’s what you can count on with Pro Page Digital: a straightforward process, quality links, and a team that’s always ready to help.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:mt-12">
          {items.map((item, i) => (
            <FAQItem key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
