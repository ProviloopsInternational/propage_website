import CtaEyebrow from "@/components/global/CtaEyebrow";
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

  if (name === "check")
    return (
      <svg {...common}>
        <path d="m5 12 4 4L19 6" />
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
  if (name === "document")
    return (
      <svg {...common}>
        <path d="M6 3h8l4 4v14H6z" />
        <path d="M14 3v5h5M9 12h6M9 16h6" />
      </svg>
    );
  if (name === "search")
    return (
      <svg {...common}>
        <circle cx="10.5" cy="10.5" r="5.5" />
        <path d="m15 15 5 5" />
      </svg>
    );
  if (name === "chart")
    return (
      <svg {...common}>
        <path d="M4 19V9M10 19V5M16 19v-7M22 19V3" />
        <path d="m4 13 6-5 6 2 6-6" />
      </svg>
    );
  if (name === "arrow")
    return (
      <svg {...common}>
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    );
  return (
    <svg {...common}>
      <path d="M10.6 13.4a5 5 0 0 0 7.1 0l2.1-2.1a5 5 0 0 0-7.1-7.1l-1.2 1.2" />
      <path d="M13.4 10.6a5 5 0 0 0-7.1 0l-2.1 2.1a5 5 0 0 0 7.1 7.1l1.2-1.2" />
    </svg>
  );
}

const features = [
  {
    icon: "search",
    title: "Real-site prospecting & vetting",
    body: "We identify relevant websites, review quality signals, and focus on placements that make sense for your niche and campaign goals.",
  },
  {
    icon: "link",
    title: "Editor outreach & negotiation",
    body: "Our outreach team handles publisher conversations, placement coordination, and the back-and-forth needed to move each opportunity forward.",
  },
  {
    icon: "document",
    title: "Editorial do-follow placements",
    body: "Guest post content is coordinated for natural in-content placement, with transparent approvals and a clear campaign report.",
  },
];

const process = [
  [
    "01",
    "Define the campaign",
    "We align on your goals, target niches, regions, landing pages, and the type of publishers that fit the campaign.",
  ],
  [
    "02",
    "Prospect & vet",
    "Relevant websites are reviewed before outreach, with quality and audience fit prioritized over raw volume.",
  ],
  [
    "03",
    "Outreach & content",
    "Editors are contacted, placement opportunities are negotiated, and guest post content is prepared around the approved direction.",
  ],
  [
    "04",
    "Publish & report",
    "Once approved, the placement goes live and campaign delivery is shared clearly so the result is easy to track.",
  ],
];

export default function GuestPostingPage() {
  return (
    <div className="site-shell guest-page">
      <Header />
      <main id="main-content" tabIndex={-1}>
        <section className="guest-hero">
          <div className="hero-grid-pattern" />
          <div className="hero-glow hero-glow--one" />
          <div className="hero-glow hero-glow--two" />

          <div className="container guest-hero-layout">
            <div className="guest-hero-copy">
              <Link href="/services" className="guest-back-link">
                ← All Services
              </Link>
              <div className="eyebrow eyebrow--light">
                <span className="eyebrow-dot" /> Link Building
              </div>
              <h1>Guest Posting</h1>
              <p className="guest-hero-lead">
                High-quality, in-content backlinks built through tailored
                outreach.
              </p>
              <p className="guest-hero-body">
                Get high-quality, in-content backlinks through our tailored
                guest posting and link building services. Trusted by agencies
                and marketing teams to boost authority, traffic, and rankings.
              </p>
              <div className="hero-actions">
                <Link className="button button--white" href="/contact">
                  Start a Campaign <Icon name="arrow" size={18} />
                </Link>
                <a className="button button--glass" href="#guest-process">
                  See the Process
                </a>
              </div>
            </div>

            <div
              className="guest-dashboard"
              aria-label="Guest posting campaign dashboard visual"
            >
              <div className="guest-dashboard-head">
                <div>
                  <span>Guest Posting</span>
                  <strong>Campaign overview</strong>
                </div>
                <b>
                  <i /> Active
                </b>
              </div>

              <div className="guest-score-card">
                <div className="guest-score-icon">
                  <Icon name="link" size={25} />
                </div>
                <div>
                  <small>Primary outcome</small>
                  <strong>Editorial backlinks</strong>
                </div>
                <span>01</span>
              </div>

              <div className="guest-progress-block">
                <div>
                  <span>Publisher matching</span>
                  <strong>Quality first</strong>
                </div>
                <div className="guest-progress-track">
                  <i />
                </div>
              </div>

              <div className="guest-mini-grid">
                <div>
                  <span>Links</span>
                  <strong>Do-Follow</strong>
                  <small>In-content placements</small>
                </div>
                <div>
                  <span>Reach</span>
                  <strong>Global</strong>
                  <small>Niches & regions</small>
                </div>
              </div>

              <div className="guest-check-list">
                <div>
                  <span>
                    <Icon name="check" size={13} />
                  </span>
                  <b>Real-site vetting</b>
                  <em>Ready</em>
                </div>
                <div>
                  <span>
                    <Icon name="check" size={13} />
                  </span>
                  <b>Editor outreach</b>
                  <em>Ready</em>
                </div>
                <div>
                  <span>
                    <Icon name="check" size={13} />
                  </span>
                  <b>Transparent reporting</b>
                  <em>Ready</em>
                </div>
              </div>
            </div>
          </div>

          <div className="container guest-hero-strip">
            <div>
              <Icon name="shield" size={17} />
              <span>Quality checked</span>
            </div>
            <div>
              <Icon name="globe" size={17} />
              <span>Global publisher reach</span>
            </div>
            <div>
              <Icon name="document" size={17} />
              <span>Guest post content</span>
            </div>
            <div>
              <Icon name="chart" size={17} />
              <span>Clear campaign reporting</span>
            </div>
          </div>
        </section>

        <section className="guest-intro-section">
          <div className="container guest-intro-grid">
            <div className="guest-section-heading">
              <div className="eyebrow">
                <span className="eyebrow-dot" /> What’s included
              </div>
              <h2>Guest posting without the messy outreach process.</h2>
            </div>
            <div className="guest-intro-copy">
              <p>
                Propage Digital combines prospecting, publisher vetting,
                outreach, content coordination, approvals, and reporting into
                one straightforward service.
              </p>
              <p>
                The focus stays on relevant websites and contextual placements
                rather than chasing volume for its own sake.
              </p>
            </div>
          </div>

          <div className="container guest-feature-grid">
            {features.map((feature, index) => (
              <article className="guest-feature-card" key={feature.title}>
                <div className="guest-feature-top">
                  <span>
                    <Icon name={feature.icon} size={22} />
                  </span>
                  <b>{String(index + 1).padStart(2, "0")}</b>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="guest-quality-section">
          <div className="container guest-quality-grid">
            <div className="guest-quality-copy">
              <div className="eyebrow eyebrow--light">
                <span className="eyebrow-dot" /> Publisher quality
              </div>
              <h2>Real sites. Relevant audiences. Long-term value.</h2>
              <p>
                Propage Digital works with trusted websites across different
                niches and regions. Most of the sites in the network have DR 20+
                and 500+ monthly visitors.
              </p>
              <div className="guest-quality-stats">
                <div>
                  <strong>DR 20+</strong>
                  <span>Publisher benchmark</span>
                </div>
                <div>
                  <strong>500+</strong>
                  <span>Monthly visitors on most sites</span>
                </div>
                <div>
                  <strong>Global</strong>
                  <span>Niches and regions</span>
                </div>
              </div>
            </div>

            <div className="guest-quality-panel">
              <div className="guest-panel-head">
                <span>Placement review</span>
                <b>
                  <i /> Quality checked
                </b>
              </div>
              <div className="guest-panel-score">
                <div>
                  <span>PPD</span>
                </div>
                <section>
                  <small>Review framework</small>
                  <strong>Relevance before volume.</strong>
                  <p>
                    Publisher fit, clean context, sensible anchors, and clear
                    approvals.
                  </p>
                </section>
              </div>
              <div className="guest-panel-list">
                <div>
                  <span>
                    <Icon name="check" size={13} />
                  </span>
                  Real-site prospecting & vetting
                </div>
                <div>
                  <span>
                    <Icon name="check" size={13} />
                  </span>
                  Publisher relationship management
                </div>
                <div>
                  <span>
                    <Icon name="check" size={13} />
                  </span>
                  High-quality guest post content
                </div>
                <div>
                  <span>
                    <Icon name="check" size={13} />
                  </span>
                  Transparent and trackable approvals
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="guest-process-section" id="guest-process">
          <div className="container">
            <div className="guest-section-head-row">
              <div className="guest-section-heading">
                <div className="eyebrow">
                  <span className="eyebrow-dot" /> How it works
                </div>
                <h2>From brief to live placement.</h2>
              </div>
              <p>
                Four clear stages keep every guest posting campaign easy to
                follow.
              </p>
            </div>

            <div className="guest-process-grid">
              {process.map(([number, title, body]) => (
                <article className="guest-process-card" key={number}>
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="guest-cta-section">
          <div className="container">
            <div className="guest-cta-card">
              <div className="guest-cta-copy">
                <CtaEyebrow />
                <h2>Book a Free Consultation</h2>
                <p>
                  Talk to our outreach specialists about your goals, target
                  niches, and timelines. We’ll suggest a tailored plan and share
                  real examples.
                </p>
                <div className="guest-cta-actions">
                  <Link href="/contact" className="button button--white">
                    Start a Campaign <Icon name="arrow" size={18} />
                  </Link>
                  <a
                    href="mailto:hello@propagedigital.com"
                    className="button button--glass"
                  >
                    Email Us
                  </a>
                </div>
                <span>No commitment · 15–30 mins · Strategy & next steps</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
