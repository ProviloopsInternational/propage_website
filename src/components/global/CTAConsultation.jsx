import theme from '@/theme/theme';

export default function CTAConsultation({
  calendlyUrl = 'https://calendly.com/your-team/consultation-30min',
}) {
  return (
    <section
      className="relative"
      style={{ background: theme.colors.backgroundGradient }}
    >
      {/* soft glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(white 1px, transparent 1px)',
          backgroundSize: '16px 16px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="mx-auto max-w-3xl rounded-3xl bg-white/90 p-8 text-center shadow-xl backdrop-blur md:p-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
            Book a Free Consultation
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-700">
            Talk to our outreach specialists about your goals, target niches,
            and timelines. We’ll suggest a tailored plan and share real examples.
          </p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book a Calendly meeting"
              title="Book a Calendly meeting"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold shadow transition"
              style={{
                background: theme.colors.accent,
                color: theme.colors.accentText,
              }}
            >
              Book on Calendly
            </a>

            {/* Optional secondary action (remove if not needed) */}
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border px-6 py-3 font-semibold text-gray-900 hover:bg-gray-50"
              style={{ borderColor: 'rgba(0,0,0,.12)' }}
            >
              Contact Us
            </a>
          </div>

          {/* tiny trust badges (optional) */}
          <div className="mt-6 text-xs text-gray-500">
            No commitment · 15–30 mins · Strategy & next steps
          </div>
        </div>
      </div>
    </section>
  );
}
