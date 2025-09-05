'use client';

import { useState } from 'react';
import Link from 'next/link';
import theme from '@/theme/theme';

const initial = {
  name: '',
  email: '',
  company: '',
  website: '',
  service: '',
  budget: '',
  message: '',
  trap: '' // honeypot
};

export default function ClientContactPage({
  calendlyUrl = 'https://calendly.com/your-team/consultation-30min',
}) {
  const [data, setData] = useState(initial);
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState(false);
  const [err, setErr] = useState('');

  const onChange = (e) => {
    const { name, value } = e.target;
    setData((d) => ({ ...d, [name]: value }));
  };

  async function onSubmit(e) {
    e.preventDefault();
    setErr('');
    setOk(false);

    // basic client validation
    if (!data.name.trim() || !data.email.trim() || !data.message.trim()) {
      setErr('Please fill name, email, and message.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      setErr('Please enter a valid email.');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) {
        throw new Error(json?.error || 'Something went wrong.');
      }
      setOk(true);
      setData(initial);
    } catch (e) {
      setErr(e.message || 'Failed to submit the form.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="bg-white">
      {/* HERO */}
      <section
        className="relative overflow-hidden py-16 md:py-24 text-white"
        style={{ background: theme.colors.backgroundGradient }}
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
            <div>
              <span className="inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-medium">
                Contact Pro Page Digital
              </span>
              <h1 className="mt-3 text-4xl font-extrabold tracking-tight md:text-6xl">
                Let’s talk outreach & links
              </h1>
              <p className="mt-4 max-w-xl text-white/90">
                Tell us your goals and timelines—we’ll outline a plan for guest posting or link insertion aligned with your budget.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white px-6 py-3 font-semibold text-black shadow hover:opacity-90"
                >
                  Book on Calendly
                </a>
                <Link
                  href="/services"
                  className="rounded-full border border-white/30 px-6 py-3 font-semibold text-white hover:bg-white/10"
                >
                  View Services
                </Link>
              </div>
            </div>

            {/* quick contact info card */}
            <div className="rounded-2xl bg-white/95 p-6 text-black shadow-xl ring-1 ring-black/5 backdrop-blur">
              <div className="text-sm text-gray-600">Prefer email or phone?</div>
              <div className="mt-2 text-lg font-semibold text-gray-900">hello@propagedigital.com</div>
              <div className="text-gray-700">+00 000 000 0000</div>
              <div className="mt-3 text-sm text-gray-600">24/7 support · Typical response time: same day</div>
            </div>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 md:grid-cols-3">
          {/* left blurb */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
              Send us a message
            </h2>
            <p className="mt-2 text-gray-700">
              Share a bit about your project—niches, regions, anchor strategy, target timelines, and any acceptance criteria.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li>• Quality-first do-follow placements</li>
              <li>• Transparent process & reporting</li>
              <li>• Global publisher network</li>
            </ul>
          </div>

          {/* form card */}
          <div className="md:col-span-2">
            <form
              onSubmit={onSubmit}
              className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200"
            >
              {/* honeypot */}
              <input
                type="text"
                name="trap"
                value={data.trap}
                onChange={onChange}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              {err && (
                <div className="mb-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
                  {err}
                </div>
              )}
              {ok && (
                <div className="mb-4 rounded-lg bg-green-50 px-4 py-3 text-sm text-green-700">
                  Thanks! Your message has been sent. We’ll get back to you shortly.
                </div>
              )}

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-medium text-gray-700">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={data.name}
                    onChange={onChange}
                    required
                    className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2"
                    style={{ boxShadow: 'inset 0 1px 0 rgba(0,0,0,.02)' }}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={onChange}
                    required
                    className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={data.company}
                    onChange={onChange}
                    className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Website</label>
                  <input
                    type="url"
                    name="website"
                    placeholder="https://"
                    value={data.website}
                    onChange={onChange}
                    className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Service</label>
                  <select
                    name="service"
                    value={data.service}
                    onChange={onChange}
                    className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 focus:outline-none focus:ring-2"
                  >
                    <option value="">Select a service</option>
                    <option value="Guest Posting">Guest Posting</option>
                    <option value="Link Insertion">Link Insertion (Niche Edits)</option>
                    <option value="Content Marketing">Content Marketing</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Budget</label>
                  <select
                    name="budget"
                    value={data.budget}
                    onChange={onChange}
                    className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 focus:outline-none focus:ring-2"
                  >
                    <option value="">Select budget</option>
                    <option value="<$1,000">&lt;$1,000</option>
                    <option value="$1,000–$5,000">$1,000–$5,000</option>
                    <option value="$5,000–$10,000">$5,000–$10,000</option>
                    <option value="$10,000+">$10,000+</option>
                  </select>
                </div>
              </div>

              <div className="mt-4">
                <label className="text-sm font-medium text-gray-700">Message *</label>
                <textarea
                  name="message"
                  rows={5}
                  value={data.message}
                  onChange={onChange}
                  required
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2"
                />
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold text-black shadow transition disabled:opacity-70"
                  style={{ background: theme.colors.accent, color: theme.colors.accentText }}
                >
                  {loading ? 'Sending…' : 'Send Message'}
                </button>

                <a
                  href={calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border px-6 py-3 font-semibold text-gray-900 hover:bg-gray-50"
                  style={{ borderColor: 'rgba(0,0,0,.12)' }}
                >
                  Book on Calendly
                </a>
              </div>

              <p className="mt-3 text-xs text-gray-500">
                By submitting, you agree to our{' '}
                <Link href="/privacy" className="underline">
                  Privacy Policy
                </Link>.
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
