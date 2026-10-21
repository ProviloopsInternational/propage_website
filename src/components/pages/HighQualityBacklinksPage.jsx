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

  if (name === "shield")
    return (
      <svg {...common}>
        <path d="M12 3 19 6v5c0 4.8-2.8 8-7 10-4.2-2-7-5.2-7-10V6l7-3Z" />
        <path d="m9.5 12 1.7 1.7 3.8-4" />
      </svg>
    );
  if (name === "check")
    return (
      <svg {...common}>
        <path d="m5 12 4 4L19 6" />
      </svg>
    );
  if (name === "search")
    return (
      <svg {...common}>
        <circle cx="10.5" cy="10.5" r="5.5" />
        <path d="m15 15 5 5" />
      </svg>
    );
  if (name === "document")
    return (
      <svg {...common}>
        <path d="M6 3h8l4 4v14H6z" />
        <path d="M14 3v5h5M9 12h6M9 16h6" />
      </svg>
    );
  if (name === "globe")
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.6 3.7 5.6 3.7 9S14.5 18.4 12 21c-2.5-2.6-3.7-5.6-3.7-9S9.5 5.6 12 3Z" />
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

const qualityChecks = [
  {
    icon: "search",
    title: "Strict quality checks",
    body: "Every opportunity is reviewed with a quality-first approach so placements support authority instead of simply adding link volume.",
  },
  {
    icon: "shield",
    title: "Safe, white-hat acquisition",
    body: "The service is built around premium editorial placements and careful vetting rather than shortcuts that can weaken long-term SEO value.",
  },
  {
    icon: "link",
    title: "Authority-building relevance",
    body: "Links are approached as contextual endorsements, with relevance and editorial fit kept central to the campaign direction.",
  },
];

const process = [
  [
    "01",
    "Strategy & editorial calendar",
    "We establish the campaign direction, target pages, themes, and publishing priorities before placements move forward.",
  ],
  [
    "02",
    "Quality-led publisher selection",
    "Potential placements are reviewed against the campaign so the focus stays on trustworthy, relevant opportunities.",
  ],
  [
    "03",
    "SEO-ready content & visuals",
    "Content is prepared around the approved topic direction with search visibility, readability, and editorial presentation in mind.",
  ],
  [
    "04",
    "Distribution & scheduled updates",
    "Publishing is coordinated and delivery updates are kept clear so the campaign remains easy to follow.",
  ],
];

export default function HighQualityBacklinksPage() {
  return (
    <div className="site-shell hq-page">
      <Header />
      <main id="main-content" tabIndex={-1}>
        <section className="hq-hero">
          <div className="hero-grid-pattern" />
          <div className="hero-glow hero-glow--one" />
          <div className="hero-glow hero-glow--two" />

          <div className="container hq-hero-layout">
            <div className="hq-hero-copy">
              <Link className="hq-back-link" href="/services">
                ← Back to Services
              </Link>
              <div className="eyebrow eyebrow--light">
                <span className="eyebrow-dot" /> Premium link building
              </div>
              <h1>Ultra High Quality Backlinks</h1>
              <p className="hq-hero-lead">
                Premium backlinks built around strict quality checks.
              </p>
              <p className="hq-hero-description">
                We focus on premium link building with strict quality checks to
                ensure you get safe, white-hat backlinks that truly strengthen
                your site’s authority.
              </p>
              <div className="hero-actions">
                <Link href="/contact" className="button button--white">
                  Discuss your campaign <Icon name="arrow" size={18} />
                </Link>
                <a href="#quality-framework" className="button button--glass">
                  See quality framework
                </a>
              </div>
            </div>

            <div className="hq-console" aria-hidden="true">
              <div className="hq-console-head">
                <div>
                  <i />
                  <i />
                  <i />
                </div>
                <span>Premium placement review</span>
                <b>
                  <i /> Quality checked
                </b>
              </div>

              <div className="hq-score-row">
                <div className="hq-score-ring">
                  <span>HQ</span>
                </div>
                <div>
                  <small>Campaign standard</small>
                  <strong>Authority + relevance</strong>
                  <p>
                    Premium link building reviewed through a stricter quality
                    lens.
                  </p>
                </div>
              </div>

              <div className="hq-review-grid">
                <div>
                  <span>01</span>
                  <strong>Publisher fit</strong>
                  <small>Reviewed</small>
                </div>
                <div>
                  <span>02</span>
                  <strong>Editorial context</strong>
                  <small>Reviewed</small>
                </div>
                <div>
                  <span>03</span>
                  <strong>White-hat approach</strong>
                  <small>Required</small>
                </div>
                <div>
                  <span>04</span>
                  <strong>Campaign relevance</strong>
                  <small>Required</small>
                </div>
              </div>

              <div className="hq-console-footer">
                <span>
                  <Icon name="shield" size={16} /> Premium quality layer
                </span>
                <b>Ready for review</b>
              </div>
            </div>
          </div>

          <div className="container hq-hero-strip">
            <div>
              <Icon name="shield" size={17} />
              <span>Strict quality checks</span>
            </div>
            <div>
              <Icon name="link" size={17} />
              <span>Premium placements</span>
            </div>
            <div>
              <Icon name="document" size={17} />
              <span>SEO-ready content</span>
            </div>
            <div>
              <Icon name="globe" size={17} />
              <span>Campaign distribution</span>
            </div>
          </div>
        </section>

        <section className="hq-intro-section" id="quality-framework">
          <div className="container">
            <div className="hq-intro-grid">
              <div className="hq-section-heading">
                <div className="eyebrow">
                  <span className="eyebrow-dot" /> Quality framework
                </div>
                <h2>
                  Not more links.
                  <br />
                  Better links.
                </h2>
              </div>
              <div className="hq-intro-copy">
                <p>
                  Ultra High Quality Backlinks is the premium layer of Propage
                  Digital’s link-building service mix: fewer compromises,
                  stronger review standards, and a clear focus on
                  authority-building relevance.
                </p>
                <p>
                  The campaign combines quality-led placement selection with
                  SEO-ready content and organized distribution so every stage
                  supports long-term value.
                </p>
              </div>
            </div>

            <div className="hq-feature-grid">
              {qualityChecks.map((feature, index) => (
                <article className="hq-feature-card" key={feature.title}>
                  <div className="hq-feature-top">
                    <span>
                      <Icon name={feature.icon} size={21} />
                    </span>
                    <b>{String(index + 1).padStart(2, "0")}</b>
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="hq-dark-section">
          <div className="container hq-dark-grid">
            <div className="hq-dark-copy">
              <div className="eyebrow eyebrow--light">
                <span className="eyebrow-dot" /> Premium by design
              </div>
              <h2>A stricter layer for authority-focused campaigns.</h2>
              <p>
                The emphasis stays on premium link building, safe acquisition,
                and editorial quality rather than chasing raw placement counts.
              </p>
              <div className="hq-value-list">
                <div>
                  <span>
                    <Icon name="check" size={14} />
                  </span>
                  <strong>Quality-first review before placement</strong>
                </div>
                <div>
                  <span>
                    <Icon name="check" size={14} />
                  </span>
                  <strong>White-hat campaign direction</strong>
                </div>
                <div>
                  <span>
                    <Icon name="check" size={14} />
                  </span>
                  <strong>SEO-ready content and editorial presentation</strong>
                </div>
                <div>
                  <span>
                    <Icon name="check" size={14} />
                  </span>
                  <strong>Clear distribution and campaign updates</strong>
                </div>
              </div>
            </div>

            <div className="hq-audit-board" aria-hidden="true">
              <div className="hq-audit-head">
                <span>Placement audit</span>
                <b>
                  <i /> Active
                </b>
              </div>
              <div className="hq-audit-row hq-audit-row--primary">
                <span>
                  <Icon name="shield" size={18} />
                </span>
                <div>
                  <small>Priority</small>
                  <strong>Quality before volume</strong>
                </div>
                <b>01</b>
              </div>
              <div className="hq-audit-meter">
                <div>
                  <span>Review depth</span>
                  <b>Strict</b>
                </div>
                <div>
                  <i />
                </div>
              </div>
              <div className="hq-audit-list">
                <div>
                  <span>
                    <Icon name="check" size={13} />
                  </span>
                  <strong>Relevance check</strong>
                  <b>Pass</b>
                </div>
                <div>
                  <span>
                    <Icon name="check" size={13} />
                  </span>
                  <strong>Editorial fit</strong>
                  <b>Pass</b>
                </div>
                <div>
                  <span>
                    <Icon name="check" size={13} />
                  </span>
                  <strong>White-hat standard</strong>
                  <b>Pass</b>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="hq-process-section">
          <div className="container">
            <div className="hq-section-head-row">
              <div>
                <div className="eyebrow">
                  <span className="eyebrow-dot" /> Delivery process
                </div>
                <h2>From strategy to distribution.</h2>
              </div>
              <p>
                The premium workflow keeps the campaign structured, quality-led,
                and easy to follow from planning through publishing.
              </p>
            </div>

            <div className="hq-process-grid">
              {process.map(([number, title, body]) => (
                <article className="hq-process-card" key={number}>
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="hq-cta-section">
          <div className="container">
            <div className="hq-cta-card">
              <div className="hq-cta-copy">
                <CtaEyebrow />
                <h2>Build authority with a stricter quality standard.</h2>
                <p>
                  Tell us the pages, niches, and campaign goals you want to
                  support and we’ll help scope the right premium link-building
                  direction.
                </p>
                <div className="hq-cta-actions">
                  <Link href="/contact" className="button button--white">
                    Start a conversation <Icon name="arrow" size={18} />
                  </Link>
                  <Link href="/services" className="button button--glass">
                    Explore all services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
