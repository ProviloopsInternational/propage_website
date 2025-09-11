'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import theme from '@/theme/theme';

function Section({ children, className = '' }) {
  return (
    <section className={`relative ${className}`}>
      <div className="mx-auto max-w-7xl px-4">{children}</div>
    </section>
  );
}

function Check({ className = 'text-gray-400' }) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" className={className} aria-hidden>
      <path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export default function ClientAboutPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <Section className="overflow-hidden py-16 md:py-24">
        {/* gradient splash */}
              <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 z-0"
                  style={{ background: theme.colors.backgroundGradient }}
              />

         <div className="relative z-10 grid grid-cols-1 items-center gap-12 md:grid-cols-2 text-white">
          {/* Left: Copy */}
          <div className="text-white">
            <motion.span
              initial={{ y: 8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.45 }}
              className="inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-medium"
            >
              About Pro Page Digital
            </motion.span>

            <motion.h1
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="mt-3 text-4xl font-extrabold tracking-tight md:text-6xl"
            >
              Links With Lasting Value
            </motion.h1>

            <motion.p
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 max-w-xl text-white/90"
            >
              Finding the right sites, building relationships, pitching content, and chasing approvals can eat up valuable time. 
              We handle all of that for you, so you can focus on growing your brand.
            </motion.p>

            <motion.div
              initial={{ y: 14, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Link
                href="/contact"
                className="rounded-full bg-white px-6 py-3 font-semibold text-black shadow hover:opacity-90"
              >
                Book a Consultation
              </Link>
              <Link
                href="/services"
                className="rounded-full border border-white/30 px-6 py-3 font-semibold text-white hover:bg-white/10"
              >
                Explore Services
              </Link>
            </motion.div>
          </div>

          {/* Right: Animated graphic */}
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

            {/* floating dashboard card */}
            <motion.div
              initial={{ y: 0, opacity: 0 }}
              animate={{ y: [-6, 6, -6], opacity: 1 }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="mx-auto w-[92%] max-w-[520px]"
            >
              <div className="rounded-2xl bg-white p-4 text-black shadow-xl ring-1 ring-black/5">
                {/* Header */}
                <div className="mb-3 flex items-center gap-2">
                  <span
                    className="inline-block h-8 w-8 rounded-lg"
                    style={{ background: theme.colors.primaryDark }}
                  />
                  <div className="text-sm font-medium text-gray-600">
                    Outreach & Approvals
                  </div>
                </div>

                {/* Content blocks */}
                <div className="grid grid-cols-3 gap-2">
                  <div className="h-16 rounded-lg bg-gray-50 ring-1 ring-gray-200" />
                  <div className="h-16 rounded-lg bg-gray-50 ring-1 ring-gray-200" />
                  <div className="h-16 rounded-lg bg-gray-50 ring-1 ring-gray-200" />
                  <div className="col-span-3 h-12 rounded-lg bg-gray-50 ring-1 ring-gray-200" />
                </div>
              </div>
            </motion.div>

            {/* orbiting chips */}
            {[
              { label: 'Global Publishers', pos: '-right-4 -top-6', delay: 0.2 },
              { label: 'Do-Follow Links', pos: '-left-6 top-8', delay: 0.4 },
              { label: 'Editorial QA', pos: '-right-6 bottom-0', delay: 0.6 },
            ].map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ y: 0, opacity: 0 }}
                animate={{ y: [-4, 6, -4], opacity: 1 }}
                transition={{ duration: 5 + i, repeat: Infinity, delay: c.delay, ease: 'easeInOut' }}
                className={`absolute ${c.pos}`}
              >
                <div className="rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-black shadow backdrop-blur">
                  {c.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* RATIONALE */}
      <Section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
            Offering Superlative Guest Posting Services
          </h2>
          <p className="mt-4 text-gray-700">
            With a blend of smart tools and hands-on expertise, we secure placements that are relevant, safe, and built to last. 
            You’ll always have full visibility, and every link we deliver is designed to bring real, long-term value to your SEO.
          </p>
          
        </div>

        {/* three pillars */}
        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            {
              title: 'Simplicity',
              desc:
                'A clear process, quick approvals, and transparent updates every step of the way.',
            },
            {
              title: 'Scalability ',
              desc:
                'Access to a wide network of publishers across niches and regions to fuel your growth.',
            },
            {
              title: 'Quality',
              desc:
                'Natural content, clean anchors, and contextual placements that strengthen your business.',
            },
          ].map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ y: 8, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="group relative"
            >
              <div
                className="absolute -inset-px rounded-2xl opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100"
                style={{ background: theme.colors.backgroundGradient }}
              />
              <div className="relative rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
                <div
                  className="mb-3 inline-block h-2 w-10 rounded-full"
                  style={{ background: theme.colors.primaryDark }}
                />
                <div className="text-lg font-semibold text-gray-900">{c.title}</div>
                <p className="mt-2 text-gray-700">{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* HOW WE WORK */}
      <Section className="py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
            A smoother path to live links
          </span>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              step: '1) Brief & Targeting',
              desc:
                'We start by understanding your goals. Together, we define the right niches, regions, anchors, and guidelines to make sure every placement fits your strategy.',
            },
            {
              step: '2) Prospect & Negotiate',
              desc:
                'Our team finds real, relevant sites, vets them for quality, and works directly with editors to secure the best opportunities.',
            },
            {
              step: '3) Content & Approval',
              desc:
                'We create engaging, publisher-ready content with natural anchors. You’ll review and approve before anything goes live.',
            },
            {
              step: '4) Placement & Reporting',
              desc:
                'Once links are published, we share clear reports with live URLs, anchors, and status updates so you’re always in the loop.',
            },
          ].map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ y: 8, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100"
            >
              <div className="text-lg font-semibold text-gray-900">{s.step}</div>
              <p className="mt-2 text-gray-700">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* WHY US */}
      <Section className="py-16 md:py-24">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-extrabold tracking-tight text-gray-900">
              Built for SEO Specialists
            </h3>
            <p className="mt-2 text-gray-700">
              We designed Pro Page Digital to automate the tedious parts—without compromising
              editorial standards. Save hours, keep control, and scale outreach with confidence.
            </p>
            <ul className="mt-4 space-y-2 text-gray-700">
              {[
                'Automation where it helps; humans where it matters',
                'Global publisher network across niches & locales',
                'Quality-first do-follow links with clean anchors',
                'Transparent dashboards and progress updates',
              ].map((t) => (
                <li key={t} className="flex gap-2">
                  <Check />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* simple stats */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { k: '100+', v: 'Niches covered' },
              { k: '24/7', v: 'Client support' },
              { k: 'Global', v: 'Publisher network' },
            ].map((s, i) => (
              <motion.div
                key={s.k}
                initial={{ y: 8, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="rounded-2xl bg-gray-50 p-6 text-center ring-1 ring-gray-200"
              >
                <div
                  className="mx-auto h-1.5 w-8 rounded-full"
                  style={{ background: theme.colors.backgroundGradient }}
                />
                <div className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900">{s.k}</div>
                <div className="text-xs text-gray-600">{s.v}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="pb-20">
        <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 text-center shadow-xl ring-1 ring-gray-100">
          <h3 className="text-2xl font-extrabold tracking-tight text-gray-900 md:text-3xl">
            Ready to streamline your outreach?
          </h3>
          <p className="mx-auto mt-2 max-w-2xl text-gray-700">
            Tell us your goals and timelines—we’ll propose a fast, quality-first way to get
            placements live.
          </p>
          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold shadow hover:opacity-90"
              style={{ background: theme.colors.accent, color: theme.colors.accentText }}
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}
