'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import theme from '@/theme/theme';

const ITEMS = [
  {
    title: 'Outstanding Blogger Outreach',
    body:
      'We earn authentic, editorial links on real sites—relevance first, clean anchors, and zero PBNs. Every placement is vetted for audience fit and long-term value.',
  },
  {
    title: 'Country Wise Lists',
    body:
      'Pick locally relevant categories with confidence. Our country-wise publisher lists are curated by language, audience, and compliance to match your market.',
  },
  {
    title: 'Wide-Reaching Guest Posts Opportunities',
    body:
      'Our outreach engine spans 100+ niches across B2B and B2C. From SaaS and FinTech to Health, Travel, and Lifestyle, we source context that actually ranks.',
  },
  {
    title: 'Devoted Officials',
    body:
      'Work with a dedicated manager who’s accountable for strategy, timelines, and approvals—so communication stays clear and execution stays fast.',
  },
  {
    title: 'First-class Guest Post Content',
    body:
      'Senior editors craft research-backed, on-brand articles that meet publisher guidelines and SEO best practices—ready for smooth approvals.',
  },
  {
    title: 'Prominent Management Service',
    body:
      'Responsive support with 24/7 availability, status updates, and transparent reports. Clients stay because the process is predictable and effortless.',
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
            What you can expect from Pro Page Digital—clear process, quality links, and responsive support.
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
