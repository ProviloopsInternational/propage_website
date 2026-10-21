"use client";

import { useState } from "react";
import Footer from "@/components/global/Footer";
import Header from "@/components/global/Header";
import Link from "next/link";

function Icon({ name, size = 20 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  if (name === "mail")
    return (
      <svg {...common}>
        <path d="M4 6h16v12H4z" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    );
  if (name === "phone")
    return (
      <svg {...common}>
        <path d="M7 3h3l1 5-2 2a15 15 0 0 0 5 5l2-2 5 1v3c0 1.1-.9 2-2 2C10.2 19 5 13.8 5 7c0-2.2.9-4 2-4Z" />
      </svg>
    );
  if (name === "clock")
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    );
  if (name === "calendar")
    return (
      <svg {...common}>
        <rect x="4" y="5" width="16" height="15" rx="2" />
        <path d="M8 3v4M16 3v4M4 10h16" />
      </svg>
    );
  if (name === "check")
    return (
      <svg {...common}>
        <path d="m5 12 4 4L19 6" />
      </svg>
    );
  if (name === "brief")
    return (
      <svg {...common}>
        <rect x="4" y="7" width="16" height="12" rx="2" />
        <path d="M9 7V5h6v2M4 11h16" />
      </svg>
    );
  if (name === "globe")
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.6 3.7 5.6 3.7 9S14.5 18.4 12 21c-2.5-2.6-3.7-5.6-3.7-9S9.5 5.6 12 3Z" />
      </svg>
    );
  if (name === "shield")
    return (
      <svg {...common}>
        <path d="M12 3 19 6v5c0 4.8-2.8 8-7 10-4.2-2-7-5.2-7-10V6l7-3Z" />
        <path d="m9.5 12 1.7 1.7 3.8-4" />
      </svg>
    );
  return (
    <svg {...common}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

const benefits = [
  [
    "shield",
    "Quality-first do-follow placements",
    "Campaigns are built around vetted, relevant opportunities rather than volume for volume’s sake.",
  ],
  [
    "brief",
    "Transparent process & reporting",
    "You’ll know what’s being worked on and what has moved forward.",
  ],
  [
    "globe",
    "Global publisher network",
    "Share your regions and niches so outreach can be aligned to your target market.",
  ],
];

const initial = {
  name: "",
  email: "",
  company: "",
  website: "",
  service: "Guest Posting",
  budget: "Not sure yet",
  message: "",
  trap: "", // honeypot
};

export default function ClientContactPage({
  calendlyUrl = "https://calendly.com/your-team/consultation-30min",
}) {
  const [data, setData] = useState(initial);
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState(false);
  const [err, setErr] = useState("");

  const onChange = (e) => {
    const { name, value } = e.target;
    setData((d) => ({ ...d, [name]: value }));
  };

  async function onSubmit(e) {
    e.preventDefault();
    setErr("");
    setOk(false);

    // basic client validation
    if (!data.name.trim() || !data.email.trim() || !data.message.trim()) {
      setErr("Please fill name, email, and message.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      setErr("Please enter a valid email.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) {
        throw new Error(json?.error || "Something went wrong.");
      }
      setOk(true);
      setData(initial);
    } catch (e) {
      setErr(e.message || "Failed to submit the form.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="site-shell contact-page">
      <Header />
      <main id="main-content" tabIndex={-1}>
        <section className="contact-hero">
          <div className="contact-orb" />
          <div className="container contact-hero-grid">
            <div className="contact-hero-copy">
              <div className="contact-kicker">
                <i /> Contact Propage Digital
              </div>
              <h1>Let’s talk outreach & links</h1>
              <p>
                Tell us your goals and timelines—we’ll outline a plan for guest
                posting or link insertion aligned with your budget.
              </p>
              <div className="contact-hero-actions">
                <a className="button button--white" href="#contact-form">
                  Start Your Brief <Icon name="brief" size={18} />
                </a>
                <a
                  className="button button--glass"
                  href={calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book on Calendly <Icon name="calendar" size={18} />
                </a>
                <Link className="button button--glass" href="/services">
                  View Services
                </Link>
              </div>

              <div className="contact-direct-grid">
                <a
                  className="contact-direct-card"
                  href="mailto:hello@propagedigital.com"
                >
                  <span>
                    <Icon name="mail" size={17} />
                  </span>
                  <small>Email</small>
                  <strong>hello@propagedigital.com</strong>
                </a>
                <a className="contact-direct-card" href="tel:+447466172010">
                  <span>
                    <Icon name="phone" size={17} />
                  </span>
                  <small>Phone</small>
                  <strong>+44 (746) 6172010</strong>
                </a>
                <div className="contact-direct-card">
                  <span>
                    <Icon name="clock" size={17} />
                  </span>
                  <small>Response</small>
                  <strong>Typical response: same day</strong>
                </div>
              </div>
            </div>

            <div
              className="contact-brief-card"
              aria-label="Campaign brief preview"
            >
              <div className="contact-brief-top">
                <strong>Campaign brief</strong>
                <span>
                  <i /> Ready to scope
                </span>
              </div>
              <div className="contact-brief-body">
                <div className="contact-brief-row">
                  <span>
                    <Icon name="brief" size={17} />
                  </span>
                  <div>
                    <small>Primary service</small>
                    <strong>Guest Posting / Link Insertion</strong>
                  </div>
                  <b>01</b>
                </div>
                <div className="contact-brief-row">
                  <span>
                    <Icon name="globe" size={17} />
                  </span>
                  <div>
                    <small>Targeting</small>
                    <strong>Niches + regions + acceptance criteria</strong>
                  </div>
                  <b>02</b>
                </div>
                <div className="contact-brief-row">
                  <span>
                    <Icon name="shield" size={17} />
                  </span>
                  <div>
                    <small>Quality</small>
                    <strong>Relevant, trackable, quality-first</strong>
                  </div>
                  <b>03</b>
                </div>
              </div>
              <div className="contact-brief-summary">
                <div>
                  <small>Call length</small>
                  <strong>15–30 min</strong>
                </div>
                <div>
                  <small>Support</small>
                  <strong>24/7</strong>
                </div>
                <div>
                  <small>Next step</small>
                  <strong>Tailored plan</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-main" id="contact-form">
          <div className="container contact-main-grid">
            <div className="contact-form-card">
              <div className="section-eyebrow">Send us a message</div>
              <h2>Share a bit about your project.</h2>
              <p>
                Niches, regions, anchor strategy, target timelines, and any
                acceptance criteria are all useful context.
              </p>

              <form className="contact-form" onSubmit={onSubmit}>
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
                  <div
                    className="contact-form-alert contact-form-alert--error"
                    role="alert"
                  >
                    {err}
                  </div>
                )}
                {ok && (
                  <div
                    className="contact-form-alert contact-form-alert--success"
                    role="status"
                  >
                    Thanks! Your message has been sent. We’ll get back to you
                    shortly.
                  </div>
                )}

                <div className="contact-form-grid">
                  <div className="contact-field">
                    <label htmlFor="name">Name *</label>
                    <input
                      id="name"
                      name="name"
                      autoComplete="name"
                      placeholder="Your full name"
                      value={data.name}
                      onChange={onChange}
                      required
                    />
                  </div>
                  <div className="contact-field">
                    <label htmlFor="email">Email *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@company.com"
                      value={data.email}
                      onChange={onChange}
                      required
                    />
                  </div>
                  <div className="contact-field">
                    <label htmlFor="company">Company</label>
                    <input
                      id="company"
                      name="company"
                      autoComplete="organization"
                      placeholder="Company name"
                      value={data.company}
                      onChange={onChange}
                    />
                  </div>
                  <div className="contact-field">
                    <label htmlFor="website">Website</label>
                    <input
                      id="website"
                      name="website"
                      type="url"
                      placeholder="https://"
                      value={data.website}
                      onChange={onChange}
                    />
                  </div>
                  <div className="contact-field">
                    <label htmlFor="service">Service</label>
                    <select
                      id="service"
                      name="service"
                      value={data.service}
                      onChange={onChange}
                    >
                      <option>Guest Posting</option>
                      <option>Ultra High Quality Backlinks</option>
                      <option>Link Insertion</option>
                      <option>Country Specific Link</option>
                      <option>Authority Link</option>
                      <option>Media Placement</option>
                      <option>On-Page SEO</option>
                      <option>Off-Page SEO</option>
                      <option>SEO-Optimized Web Solutions</option>
                    </select>
                  </div>
                  <div className="contact-field">
                    <label htmlFor="budget">Budget</label>
                    <select
                      id="budget"
                      name="budget"
                      value={data.budget}
                      onChange={onChange}
                    >
                      <option>Not sure yet</option>
                      <option>Under £1,000</option>
                      <option>£1,000–£3,000</option>
                      <option>£3,000–£5,000</option>
                      <option>£5,000+</option>
                    </select>
                  </div>
                </div>
                <div className="contact-field">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={data.message}
                    onChange={onChange}
                    required
                    placeholder="Tell us what you’re trying to achieve, your target niches/regions, and preferred timeline."
                  />
                </div>
                <div className="contact-submit-row">
                  <button
                    className="button button--dark"
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? "Sending…" : "Send Message"}{" "}
                    <Icon name="arrow" size={17} />
                  </button>
                </div>
                <p className="contact-submit-note">
                  By sending an enquiry, you acknowledge our{" "}
                  <Link href="/privacy">Privacy Policy</Link> and understand
                  that we will use the details you provide to respond to your
                  request.
                </p>
              </form>
            </div>

            <aside className="contact-side">
              <div className="contact-side-card contact-side-card--dark">
                <p className="contact-side-label">What you can count on</p>
                <h3>A clear, quality-first conversation.</h3>
                <p>
                  Share the campaign context and we’ll focus the discussion on
                  feasibility, fit, and a practical next step.
                </p>
                <div className="contact-checks">
                  {benefits.map(([icon, title, body]) => (
                    <div className="contact-check" key={title}>
                      <span>
                        <Icon name={icon} size={14} />
                      </span>
                      <div>
                        <strong>{title}</strong>
                        <small>{body}</small>
                      </div>
                    </div>
                  ))}
                </div>
                <a
                  className="contact-calendly"
                  href={calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book on Calendly <Icon name="calendar" size={15} />
                </a>
              </div>

              <div className="contact-side-card">
                <p className="contact-side-label">Prefer email or phone?</p>
                <h3>Reach us directly.</h3>
                <div className="contact-contact-links">
                  <a href="mailto:hello@propagedigital.com">
                    <span>
                      <Icon name="mail" size={16} />
                      hello@propagedigital.com
                    </span>
                    <Icon name="arrow" size={15} />
                  </a>
                  <a href="tel:+447466172010">
                    <span>
                      <Icon name="phone" size={16} />
                      +44 (746) 6172010
                    </span>
                    <Icon name="arrow" size={15} />
                  </a>
                </div>
                <p className="contact-status-note">
                  24/7 support · Typical response time: same day
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section className="contact-bottom">
          <div className="container">
            <div className="contact-bottom-card">
              <div>
                <h3>Not sure which service fits?</h3>
                <p>
                  Start with your goal. We’ll help map the right outreach or SEO
                  direction.
                </p>
              </div>
              <div className="contact-bottom-meta">
                <span>
                  <b>15–30 mins</b>
                  <br />
                  Strategy call
                </span>
                <span>
                  <b>No commitment</b>
                  <br />
                  Next-step focused
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
