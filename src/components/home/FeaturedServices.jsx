'use client';

import { motion } from 'framer-motion';
import theme from '@/theme/theme';

const SERVICES = [
  {
    title: 'Blogger Outreach Service',
    desc:
      'We identify real, niche-relevant blogs, vet traffic and authority, and pitch editors with tailored angles. Our team negotiates placements and manages the full editorial workflow so you earn clean, contextual, do-follow mentions that move rankings.',
    highlights: [
      'Real-site prospecting & vetting',
      'Editor outreach & negotiation',
      'Editorial do-follow placements + report',
    ],
  },
  {
    title: 'Content Marketing',
    desc:
      'We design topic clusters and briefs, produce long-form content in your brand voice, and distribute it across channels. Each piece is optimized for search and periodically refreshed to keep performance compounding over time.',
    highlights: [
      'Strategy & editorial calendar',
      'SEO-ready articles & visuals',
      'Distribution & scheduled updates',
    ],
  },
  {
    title: 'Niche Edits',
    desc:
      'Acquire contextual links by inserting your anchors into existing, already-ranking articles. We prioritize relevance and safety—no private networks—so you gain quick traction without compromising your domain’s risk profile.',
    highlights: [
      'Contextual placements in ranking posts',
      'Publisher network access',
      'Relevance-first, safe acquisition',
    ],
  },
  {
    title: 'Branded Publications',
    desc:
      'We craft thought-leadership pieces and place them on trusted media to expand reach and credibility. From messaging to legal review and publication logistics, we handle the details while you get brand visibility where it counts.',
    highlights: [
      'Ghostwriting in brand voice',
      'Media list & pitching',
      'Publication coordination & analytics',
    ],
  },
  {
    title: 'Product Reviews',
    desc:
      'Structured, conversion-ready reviews that help buyers decide faster. We cover real-world use, pros/cons, comparisons, and schema so reviews rank well and inform customers across search and partner sites.',
    highlights: [
      'Hands-on or spec-based testing',
      'Comparison tables & schema',
      'Publish on niche sites or your blog',
    ],
  },
  {
    title: 'Featured Articles',
    desc:
      'High-visibility editorials on authority sites—byline pieces, interviews, or features—that elevate brand authority and pass meaningful link equity. We also prepare amplification assets for social and newsletters.',
    highlights: [
      'Authority site placements',
      'Interview or byline formats',
      'Amplification assets included',
    ],
  },
];

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

function ServiceCard({ title, desc, highlights, i }) {
  return (
    <motion.div
      initial={{ y: 8, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.4, delay: i * 0.05 }}
      className="group relative"
    >
      {/* gradient outline on hover */}
      <div
        className="absolute -inset-px rounded-2xl opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: theme.colors.backgroundGradient }}
      />
      <div className="relative rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 transition-transform duration-300 group-hover:-translate-y-1">
        {/* small brand block */}
        <div className="mb-4 inline-grid h-10 w-10 place-items-center rounded-xl">
          <div
            className="h-8 w-8 rounded-lg"
            style={{ background: theme.colors.primaryDark || '#1E40AF' }}
            aria-hidden
          />
        </div>

        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-gray-700">{desc}</p>

        {Array.isArray(highlights) && highlights.length > 0 && (
          <ul className="mt-4 space-y-2">
            {highlights.map((h) => (
              <li key={h} className="flex items-start gap-2 text-sm text-gray-700">
                <Check className="mt-0.5 text-gray-400" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
}

export default function FeaturedServices({ items = SERVICES }) {
  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
            What we do
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
            Featured Services
          </h2>
          <p className="mt-3 text-gray-600">
            Purpose-built offerings to grow authority, traffic, and trust.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((s, i) => (
            <ServiceCard key={s.title} {...s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
