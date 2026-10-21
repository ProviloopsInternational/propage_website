"use client";

import CtaEyebrow from "@/components/global/CtaEyebrow";
import { useState } from "react";
import Footer from "@/components/global/Footer";
import Header from "@/components/global/Header";
import Link from "next/link";

function Icon({ name, size = 22 }) {
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

  if (name === "target") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="3" />
        <path d="M15 9l5-5M16 4h4v4" />
      </svg>
    );
  }

  if (name === "search") {
    return (
      <svg {...common}>
        <circle cx="10.5" cy="10.5" r="6" />
        <path d="m15 15 5 5M7.5 10.5h6" />
      </svg>
    );
  }

  if (name === "file") {
    return (
      <svg {...common}>
        <path d="M6 3h8l4 4v14H6z" />
        <path d="M14 3v5h5M9 12h6M9 16h4" />
      </svg>
    );
  }

  if (name === "link") {
    return (
      <svg {...common}>
        <path d="M10.5 13.5a4.5 4.5 0 0 0 6.4 0l2-2a4.5 4.5 0 0 0-6.4-6.4l-1.1 1.1" />
        <path d="M13.5 10.5a4.5 4.5 0 0 0-6.4 0l-2 2a4.5 4.5 0 0 0 6.4 6.4l1.1-1.1" />
      </svg>
    );
  }

  if (name === "check") {
    return (
      <svg {...common}>
        <path d="m5 12 4 4L19 6" />
      </svg>
    );
  }

  if (name === "spark") {
    return (
      <svg {...common}>
        <path d="M12 3l1.4 4.3L18 9l-4.6 1.7L12 15l-1.4-4.3L6 9l4.6-1.7L12 3Z" />
        <path d="M18.5 15.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2Z" />
      </svg>
    );
  }

  if (name === "network") {
    return (
      <svg {...common}>
        <circle cx="5" cy="12" r="2" />
        <circle cx="12" cy="5" r="2" />
        <circle cx="19" cy="12" r="2" />
        <circle cx="12" cy="19" r="2" />
        <path d="m6.5 10.5 4-4M13.5 6.5l4 4M17.5 13.5l-4 4M10.5 17.5l-4-4" />
      </svg>
    );
  }

  if (name === "shield") {
    return (
      <svg {...common}>
        <path d="M12 3 19 6v5c0 4.8-2.8 8-7 10-4.2-2-7-5.2-7-10V6l7-3Z" />
        <path d="m9.5 12 1.7 1.7 3.8-4" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

const processSteps = [
  {
    number: "01",
    title: "Brief & Targeting",
    description:
      "We start by understanding your goals. Together, we define the right niches, regions, anchors, and guidelines to make sure every placement fits your strategy.",
    icon: "target",
    meta: "Goals · Niches · Regions · Anchors",
  },
  {
    number: "02",
    title: "Prospect & Negotiate",
    description:
      "Our team finds real, relevant sites, vets them for quality, and works directly with editors to secure the best opportunities.",
    icon: "search",
    meta: "Prospecting · Vetting · Editor outreach",
  },
  {
    number: "03",
    title: "Content & Approval",
    description:
      "We create engaging, publisher-ready content with natural anchors. You’ll review and approve before anything goes live.",
    icon: "file",
    meta: "Content · Natural anchors · Approval",
  },
  {
    number: "04",
    title: "Placement & Reporting",
    description:
      "Once links are published, we share clear reports with live URLs, anchors, and status updates so you’re always in the loop.",
    icon: "link",
    meta: "Live URL · Anchor · Status reporting",
  },
];

const principles = [
  {
    title: "Simplicity",
    description:
      "A clear process, quick approvals, and transparent updates every step of the way.",
    icon: "spark",
    index: "01",
  },
  {
    title: "Scalability",
    description:
      "Access to a wide network of publishers across niches and regions to fuel your growth.",
    icon: "network",
    index: "02",
  },
  {
    title: "Quality",
    description:
      "Natural content, clean anchors, and contextual placements that strengthen your business.",
    icon: "shield",
    index: "03",
  },
];

const specialistPoints = [
  "Automation where it helps; humans where it matters",
  "Global publisher network across niches & locales",
  "Quality-first do-follow links with clean anchors",
  "Transparent dashboards and progress updates",
];

function CampaignVisual() {
  return (
    <div className="about-campaign-visual" aria-hidden="true">
      <div className="about-orbit about-orbit--large" />
      <div className="about-orbit about-orbit--small" />

      <div className="about-campaign-window">
        <div className="about-window-topbar">
          <div className="about-window-dots">
            <i />
            <i />
            <i />
          </div>
          <span>Outreach workspace</span>
          <div className="about-live-pill">
            <i /> Live
          </div>
        </div>

        <div className="about-window-body">
          <div className="about-campaign-head">
            <div>
              <span className="about-mini-label">Campaign</span>
              <strong>Authority Growth</strong>
            </div>
            <div className="about-campaign-score">
              <span>Quality</span>
              <strong>94%</strong>
            </div>
          </div>

          <div className="about-pipeline">
            <div className="about-pipeline-track">
              <span />
            </div>
            {[
              ["Brief", "Complete", "✓"],
              ["Prospecting", "42 sites", "✓"],
              ["Approval", "12 ready", "12"],
              ["Live", "8 links", "8"],
            ].map(([label, value, badge], index) => (
              <div
                className={`about-pipeline-row ${
                  index === 2 ? "is-active" : ""
                }`}
                key={label}
              >
                <span className="about-pipeline-node">{index + 1}</span>
                <div>
                  <strong>{label}</strong>
                  <small>{value}</small>
                </div>
                <b>{badge}</b>
              </div>
            ))}
          </div>

          <div className="about-window-footer">
            <div className="about-avatar-stack">
              <i>DR</i>
              <i>SEO</i>
              <i>PR</i>
            </div>
            <div>
              <strong>Publisher network</strong>
              <span>Global niches · quality reviewed</span>
            </div>
            <span className="about-footer-check">
              <Icon name="check" size={15} />
            </span>
          </div>
        </div>
      </div>

      <div className="about-float-card about-float-card--one">
        <span>
          <Icon name="shield" size={16} />
        </span>
        <div>
          <strong>Editorial QA</strong>
          <small>Quality checked</small>
        </div>
      </div>

      <div className="about-float-card about-float-card--two">
        <span>
          <Icon name="link" size={16} />
        </span>
        <div>
          <strong>Do-Follow</strong>
          <small>Placement live</small>
        </div>
      </div>
    </div>
  );
}

function SpecialistDashboard() {
  return (
    <div className="specialist-dashboard" aria-hidden="true">
      <div className="specialist-dashboard-top">
        <div>
          <span>Campaign overview</span>
          <strong>SEO Outreach</strong>
        </div>
        <span className="specialist-status">
          <i /> On track
        </span>
      </div>

      <div className="specialist-metrics">
        <div>
          <span>Prospects</span>
          <strong>128</strong>
          <small>+24 this week</small>
        </div>
        <div>
          <span>Approved</span>
          <strong>46</strong>
          <small>36% approval</small>
        </div>
        <div>
          <span>Live</span>
          <strong>31</strong>
          <small>Do-follow links</small>
        </div>
      </div>

      <div className="specialist-chart">
        <div className="specialist-chart-head">
          <span>Placement progress</span>
          <b>74%</b>
        </div>
        <div className="specialist-bars">
          {[48, 64, 42, 74, 58, 83, 71, 91, 78, 88].map((height, index) => (
            <i key={index} style={{ height: `${height}%` }} />
          ))}
        </div>
      </div>

      <div className="specialist-list">
        <div>
          <span className="specialist-list-icon">
            <Icon name="search" size={14} />
          </span>
          <div>
            <strong>Publisher vetting</strong>
            <small>Authority + relevance checks</small>
          </div>
          <b>Active</b>
        </div>
        <div>
          <span className="specialist-list-icon">
            <Icon name="file" size={14} />
          </span>
          <div>
            <strong>Content approval</strong>
            <small>Publisher-ready drafts</small>
          </div>
          <b>12</b>
        </div>
        <div>
          <span className="specialist-list-icon">
            <Icon name="link" size={14} />
          </span>
          <div>
            <strong>Live placements</strong>
            <small>URLs + anchors tracked</small>
          </div>
          <b>31</b>
        </div>
      </div>
    </div>
  );
}

export default function ClientAboutPage() {
  const [activeStep, setActiveStep] = useState(0);
  const active = processSteps[activeStep];

  return (
    <div className="site-shell about-page">
      <Header />

      <main id="main-content" tabIndex={-1}>
        <section className="about-hero">
          <div className="about-hero-grid" />
          <div className="about-hero-glow about-hero-glow--one" />
          <div className="about-hero-glow about-hero-glow--two" />

          <div className="container about-hero-layout">
            <div className="about-hero-copy">
              <span className="eyebrow eyebrow--light">
                <span className="eyebrow-dot" />
                About Pro Page Digital
              </span>
              <h1>
                Links With <span>Lasting Value</span>
              </h1>
              <p>
                Finding the right sites, building relationships, pitching
                content, and chasing approvals can eat up valuable time. We
                handle all of that for you, so you can focus on growing your
                brand.
              </p>

              <div className="about-hero-actions">
                <Link className="button button--white" href="/contact">
                  Book a Consultation <Icon name="arrow" size={17} />
                </Link>
                <Link className="button button--glass" href="/services">
                  Explore Services
                </Link>
              </div>
            </div>

            <CampaignVisual />
          </div>

          <div className="container about-proof-strip">
            {[
              ["01", "Outreach & Approvals"],
              ["02", "Global Publishers"],
              ["03", "Do-Follow Links"],
              ["04", "Editorial QA"],
            ].map(([number, label]) => (
              <div key={label}>
                <span>{number}</span>
                <strong>{label}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="section about-principles-section">
          <div className="container">
            <div className="about-principles-heading">
              <div>
                <span className="eyebrow">
                  <span className="eyebrow-dot" />
                  What guides the work
                </span>
                <h2>
                  Thoughtful outreach.
                  <br />
                  Lasting partnerships.
                </h2>
              </div>
              <p>
                With a blend of smart tools and hands-on expertise, we secure
                placements that are relevant, safe, and built to last. You’ll
                always have full visibility, and every link we deliver is
                designed to bring real, long-term value to your SEO.
              </p>
            </div>

            <div className="about-principles-grid">
              {principles.map((principle) => (
                <article className="about-principle-card" key={principle.title}>
                  <div className="about-principle-top">
                    <span className="about-principle-icon">
                      <Icon name={principle.icon} size={21} />
                    </span>
                    <span className="about-principle-index">
                      {principle.index}
                    </span>
                  </div>
                  <h3>{principle.title}</h3>
                  <p>{principle.description}</p>
                  <div className="about-principle-line" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section about-process-section">
          <div className="container about-process-layout">
            <div className="about-process-intro">
              <span className="eyebrow eyebrow--light">
                <span className="eyebrow-dot" />
                How it works
              </span>
              <h2>
                A smoother path
                <br />
                to live links
              </h2>
              <p>
                One clear workflow from strategy to reporting, with visibility
                at every stage.
              </p>

              <div className="about-process-panel">
                <span className="about-process-panel-number">
                  {active.number}
                </span>
                <span className="about-process-panel-icon">
                  <Icon name={active.icon} size={24} />
                </span>
                <h3>{active.title}</h3>
                <p>{active.description}</p>
                <div className="about-process-meta">{active.meta}</div>
              </div>
            </div>

            <div className="about-process-list">
              {processSteps.map((step, index) => (
                <button
                  type="button"
                  key={step.number}
                  className={`about-process-step ${
                    activeStep === index ? "is-active" : ""
                  }`}
                  onClick={() => setActiveStep(index)}
                  aria-pressed={activeStep === index}
                >
                  <span className="about-step-number">{step.number}</span>
                  <span className="about-step-icon">
                    <Icon name={step.icon} size={19} />
                  </span>
                  <span className="about-step-copy">
                    <strong>{step.title}</strong>
                    <small>{step.meta}</small>
                  </span>
                  <span className="about-step-arrow">
                    <Icon name="arrow" size={18} />
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="section about-specialists-section">
          <div className="container about-specialists-layout">
            <div className="about-specialists-visual">
              <div className="about-specialists-glow" />
              <SpecialistDashboard />
            </div>

            <div className="about-specialists-copy">
              <span className="eyebrow">
                <span className="eyebrow-dot" />
                Built for scale
              </span>
              <h2>Built for SEO Specialists</h2>
              <p>
                We designed Pro Page Digital to automate the tedious
                parts—without compromising editorial standards. Save hours, keep
                control, and scale outreach with confidence.
              </p>

              <div className="about-specialists-points">
                {specialistPoints.map((point) => (
                  <div key={point}>
                    <span>
                      <Icon name="check" size={15} />
                    </span>
                    <strong>{point}</strong>
                  </div>
                ))}
              </div>

              <div className="about-stat-grid">
                <div>
                  <strong>100+</strong>
                  <span>Niches covered</span>
                </div>
                <div>
                  <strong>24/7</strong>
                  <span>Client support</span>
                </div>
                <div>
                  <strong>Global</strong>
                  <span>Publisher network</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-final-cta-section">
          <div className="container">
            <div className="about-final-cta">
              <div className="about-final-grid" />
              <div className="about-final-glow" />
              <div className="about-final-copy">
                <CtaEyebrow />
                <h2>
                  Ready to streamline
                  <br />
                  your outreach?
                </h2>
                <p>
                  Tell us your goals and timelines—we’ll propose a fast,
                  quality-first way
                  <br />
                  to get placements live.
                </p>
                <Link className="button button--white" href="/contact">
                  Book a Consultation <Icon name="arrow" size={17} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
