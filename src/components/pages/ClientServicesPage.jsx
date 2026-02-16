'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import theme from '@/theme/theme';

function Section({ children, className = '', style }) {
  return (
    <section className={`relative ${className}`} style={style}>
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

export default function ClientServicesPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <Section
        className="overflow-hidden py-16 md:py-24 text-white"
        style={{ background: theme.colors.backgroundGradient }}
      >
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          {/* Left: Copy */}
          <div>
            <motion.span
              initial={{ y: 8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.45 }}
              className="inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-medium"
            >
              Pro Page Digital · Services
            </motion.span>

            <motion.h1
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="mt-3 text-4xl font-extrabold tracking-tight md:text-6xl"
            >
              SEO & Web Solutions,
              <br className="hidden sm:block" /> Done Right.
            </motion.h1>

            <motion.p
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 max-w-xl text-white/90"
            >
              We make SEO and web solutions simple, transparent, and effective. From on-page tweaks and off-page strategies to technical improvements and smart web development, we focus on what truly matters. We help your website rank higher, attract more visitors, and grow your brand. 
              With us, you’ll always know what’s being done, why it matters, and the impact it’s having on your business.
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
                href="/portfolio"
                className="rounded-full border border-white/30 px-6 py-3 font-semibold text-white hover:bg-white/10"
              >
                See Portfolio
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
                <div className="mb-3 flex items-center gap-2">
                  <span
                    className="inline-block h-8 w-8 rounded-lg"
                    style={{ background: theme.colors.primaryDark }}
                  />
                  <div className="text-sm font-medium text-gray-600">Placement Pipeline</div>
                </div>
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

      {/* A. GUEST POSTING SERVICES */}
      <Section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
            A. Guest Posting Services
          </h2>
          <p className="mt-4 text-gray-700">
            As a quality-first partner, we provide consistent, reliable guest posting that helps your brand
            stand out across evolving niches. Content stays fresh, persuasive, and on-brand, so visibility and
            trust compound over time.
          </p>
          <p className="mt-4 text-gray-700">
            Our approach pairs a vetted publisher network with transparent communication. You’ll see every step—from
            targeting to approvals—so results align with your standards and timelines.
          </p>
        </div>

        {/* Steps to publish prime quality guest posts */}
        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: 'Domain Prospecting',
              desc:
                'We handpick real, relevant sites with solid traffic and engaged audiences. Every site goes through a careful check so your links stay safe and impactful.',
            },
            {
              title: 'Outreach Campaigns',
              desc:
                'Our team reaches out to publishers directly, building genuine connections to land placements that make sense for your niche and budget.',
            },
            {
              title: 'Guest Post Writing',
              desc:
                'We craft articles that feel natural, add value to the publisher’s audience, and blend your anchors smoothly for seamless approvals.',
            },
            {
              title: 'Live Links Tracking ',
              desc:
                'You get full visibility with detailed reports on every placement, from draft to live link.',
            },
          ].map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ y: 8, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.35 }}
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

        {/* Differentiators */}
        <div className="mx-auto mt-14 max-w-5xl">
          <h3 className="text-xl font-extrabold tracking-tight text-gray-900">
            What makes us different
          </h3>
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              {
                t: 'Wide Coverage',
                d: 'Access to 100+ niches and markets so you never run out of growth options.',
              },
              {
                t: 'Smart Anchors',
                d: 'Natural, keyword-rich anchors that support rankings without raising red flags.',
              },
              {
                t: 'Real Traffic Sites',
                d: 'We focus on publishers with meaningful organic visibility, so every link has discovery power.',
              },
              {
                t: 'Quality Content',
                d: 'Experienced writers deliver engaging, SEO-friendly articles that pass publisher checks with ease.',
              },
            ].map((x) => (
              <div key={x.t} className="flex items-start gap-3 rounded-xl bg-white p-5 shadow-sm ring-1 ring-gray-100">
                <Check />
                <div>
                  <div className="font-semibold text-gray-900">{x.t}</div>
                  <p className="text-gray-700">{x.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* B. LINK INSERTION SERVICES (Niche Edits) */}
      <Section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
            B. Link Insertion Services
          </h2>
          <p className="mt-4 text-gray-700">
            Sometimes the fastest way to boost results isn’t a new article—it’s placing your link into content that’s already live and ranking. 
            Our link insertion (niche edit) service does exactly that, giving you contextual backlinks in existing, trusted articles.
          </p>
        </div>

        {/* Why it’s worth your time + what we do */}
        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            {
              title: 'Opportunity Mapping',
              desc:
                'We find relevant, ranking pages where your link fits naturally.',
            },
            {
              title: 'Publisher Outreach',
              desc:
                'We negotiate with site owners and editors on your behalf to secure placements that last.',
            },
            {
              title: 'Backlink Management',
              desc:
                'Every insertion is tracked and reported, so you know exactly what you’re getting.',
            },
          ].map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ y: 8, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100"
            >
              <div className="text-lg font-semibold text-gray-900">{c.title}</div>
              <p className="mt-2 text-gray-700">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* C. SEO Services */}
      <Section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
            C. SEO Services
          </h2>
          <p className="mt-4 text-gray-700">
           SEO (Search Engine Optimization) is how your website gets noticed on search engines. 
           It helps your business reach the right audience, attract more visitors, and generate meaningful leads. Investing in SEO means your brand stays visible, competitive, and growing online
          </p>
        </div>

        {/* Why it’s worth your time + what we do */}
        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            {
              title: 'On-Page SEO',
              desc:
                'Optimize every page with the right structure, content, and keywords to make your site search-engine friendly and user-ready.',
            },
            {
              title: 'Off-Page SEO',
              desc:
                'Build authority and credibility with smart link strategies and outreach that drive traffic and strengthen your online presence.',
            },
            {
              title: 'SEO-Optimized Web Solutions',
              desc:
                'Combine technical improvements and web optimization to ensure your site ranks higher, performs better, and delivers real results.',
            },
          ].map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ y: 8, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100"
            >
              <div className="text-lg font-semibold text-gray-900">{c.title}</div>
              <p className="mt-2 text-gray-700">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="pb-20">
        <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 text-center shadow-xl ring-1 ring-gray-100">
          <h3 className="text-2xl font-extrabold tracking-tight text-gray-900 md:text-3xl">
            Ready to put quality links to work?
          </h3>
          <p className="mx-auto mt-2 max-w-2xl text-gray-700">
            Book a quick call and we’ll outline a guest posting or link insertion plan aligned with your goals and budget.
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
