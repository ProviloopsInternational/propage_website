import Link from 'next/link';
import theme from '@/theme/theme';

const year = new Date().getFullYear();

const nav = {
  company: [
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  services: [
    { label: 'Services', href: '/services/blogger-outreach' },
  ],
  resources: [
    { label: 'FAQ', href: '/faq' },
  ],
};

function SocialIcon({ label, href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-gray-200 hover:bg-gray-50 transition"
      title={label}
    >
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="bg-white">
      {/* gradient accent line */}
      <div style={{ background: theme.colors.backgroundGradient }} className="h-1 w-full" />

      <div className="mx-auto max-w-7xl px-4 py-12">
        {/* Top row: brand & quick blurb */}
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <div className="text-2xl font-extrabold tracking-tight text-gray-900">
              Pro Page Digital
            </div>
            <p className="mt-1 text-sm text-gray-600">
              SEO-driven guest posting & outreach—quality placements, clean processes, real results.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <SocialIcon label="LinkedIn" href="https://www.linkedin.com/">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" className="text-gray-700">
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0H12v2.2h.06c.63-1.2 2.17-2.46 4.47-2.46 4.78 0 5.66 3.15 5.66 7.25V24h-5v-7.2c0-1.72-.03-3.94-2.4-3.94-2.4 0-2.77 1.87-2.77 3.81V24h-5V8z" />
              </svg>
            </SocialIcon>
            <SocialIcon label="X" href="https://twitter.com/">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" className="text-gray-700">
                <path d="M18.244 2H21l-6.5 7.43L22 22h-6.85l-5.35-6.86L3.4 22H1l7-7.99L2 2h6.85l4.9 6.29L18.244 2zM7.28 3.5H4.6l12.17 16.97h2.68L7.28 3.5z" />
              </svg>
            </SocialIcon>
            <SocialIcon label="YouTube" href="https://www.youtube.com/">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" className="text-gray-700">
                <path d="M23.5 6.2a3.1 3.1 0 0 0-2.2-2.2C19 3.5 12 3.5 12 3.5s-7 0-9.3.5A3.1 3.1 0 0 0 .5 6.2 32.2 32.2 0 0 0 0 12a32.2 32.2 0 0 0 .5 5.8 3.1 3.1 0 0 0 2.2 2.2c2.3.5 9.3.5 9.3.5s7 0 9.3-.5a3.1 3.1 0 0 0 2.2-2.2A32.2 32.2 0 0 0 24 12a32.2 32.2 0 0 0-.5-5.8zM9.75 15.5v-7L15.75 12l-6 3.5z" />
              </svg>
            </SocialIcon>
          </div>
        </div>

        {/* Links grid */}
        <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
          <div>
            <div className="text-sm font-semibold text-gray-900">Company</div>
            <ul className="mt-3 space-y-2">
              {nav.company.map((i) => (
                <li key={i.label}>
                  <Link href={i.href} className="text-sm text-gray-600 hover:text-gray-900 transition">
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold text-gray-900">Services</div>
            <ul className="mt-3 space-y-2">
              {nav.services.map((i) => (
                <li key={i.label}>
                  <Link href={i.href} className="text-sm text-gray-600 hover:text-gray-900 transition">
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold text-gray-900">Resources</div>
            <ul className="mt-3 space-y-2">
              {nav.resources.map((i) => (
                <li key={i.label}>
                  <Link href={i.href} className="text-sm text-gray-600 hover:text-gray-900 transition">
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold text-gray-900">Contact</div>
            <ul className="mt-3 space-y-2">
              <li>
                <a href="mailto:hello@example.com" className="text-sm text-gray-600 hover:text-gray-900 transition">
                  hello@example.com
                </a>
              </li>
              <li>
                <a href="tel:+00000000000" className="text-sm text-gray-600 hover:text-gray-900 transition">
                  +00 000 000 0000
                </a>
              </li>
              <li className="text-sm text-gray-600">Mon–Fri · 24/5 Support</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-gray-200 pt-6 text-sm text-gray-600 md:flex-row md:items-center">
          <div>© {year} Pro Page Digital. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="hover:text-gray-900 transition">Terms</Link>
            <span aria-hidden className="text-gray-300">•</span>
            <Link href="/privacy" className="hover:text-gray-900 transition">Privacy</Link>
            <span aria-hidden className="text-gray-300">•</span>
            <Link href="/sitemap.xml" className="hover:text-gray-900 transition">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
