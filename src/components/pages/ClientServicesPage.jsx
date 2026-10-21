"use client";

import CtaEyebrow from "@/components/global/CtaEyebrow";
import { useMemo, useState } from "react";
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

  if (name === "link") {
    return (
      <svg {...common}>
        <path d="M10.6 13.4a5 5 0 0 0 7.1 0l2.1-2.1a5 5 0 0 0-7.1-7.1l-1.2 1.2" />
        <path d="M13.4 10.6a5 5 0 0 0-7.1 0l-2.1 2.1a5 5 0 0 0 7.1 7.1l1.2-1.2" />
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

  if (name === "insert") {
    return (
      <svg {...common}>
        <path d="M4 7h10M4 12h7M4 17h10" />
        <path d="M18 9v6M15 12h6" />
      </svg>
    );
  }

  if (name === "globe") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.4 2.5 3.6 5.5 3.6 9S14.4 18.5 12 21c-2.4-2.5-3.6-5.5-3.6-9S9.6 5.5 12 3Z" />
      </svg>
    );
  }

  if (name === "authority") {
    return (
      <svg {...common}>
        <path d="m12 3 2.2 4.5 5 .7-3.6 3.5.8 5-4.4-2.3-4.4 2.3.8-5-3.6-3.5 5-.7L12 3Z" />
      </svg>
    );
  }

  if (name === "media") {
    return (
      <svg {...common}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M7 9h4M7 13h4M15 9h2M15 13h2M7 16h10" />
      </svg>
    );
  }

  if (name === "search") {
    return (
      <svg {...common}>
        <circle cx="11" cy="11" r="6" />
        <path d="m16 16 4 4M8.5 11h5M11 8.5v5" />
      </svg>
    );
  }

  if (name === "growth") {
    return (
      <svg {...common}>
        <path d="M4 19V9M10 19V5M16 19v-7M22 19V3" />
        <path d="m4 13 6-5 6 2 6-6" />
      </svg>
    );
  }

  if (name === "code") {
    return (
      <svg {...common}>
        <path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" />
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
        <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3Z" />
        <path d="M18.5 15.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2Z" />
      </svg>
    );
  }

  if (name === "filter") {
    return (
      <svg {...common}>
        <path d="M4 6h16M7 12h10M10 18h4" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

const services = [
  {
    title: "Guest Posting",
    description:
      "Get high-quality, in-content backlinks through our tailored guest posting and link building services. Trusted by agencies and marketing teams to boost authority, traffic, and rankings.",
    points: [
      "Real-site prospecting & vetting",
      "Editor outreach & negotiation",
      "Editorial do-follow placements + report",
    ],
    icon: "link",
    tag: "Most requested",
    category: "Link Building",
  },
  {
    title: "Ultra High Quality Backlinks",
    description:
      "We focus on premium link building with strict quality checks to ensure you get safe, white-hat backlinks that truly strengthen your site’s authority.",
    points: [
      "Strategy & editorial calendar",
      "SEO-ready articles & visuals",
      "Distribution & scheduled updates",
    ],
    icon: "shield",
    tag: "Premium",
    category: "Link Building",
  },
  {
    title: "Link Insertion",
    description:
      "Secure niche-relevant links placed naturally within existing content on authority blogs, helping boost your rankings with contextually relevant edits.",
    points: [
      "Contextual placements in ranking posts",
      "Publisher network access",
      "Relevance-first, safe acquisition",
    ],
    icon: "insert",
    tag: "Contextual",
    category: "Link Building",
  },
  {
    title: "Country Specific Link",
    description:
      "Reach your audience in specific regions with backlinks from trusted websites based in your target country, ensuring local relevance and impact.",
    points: [
      "Ghostwriting in brand voice",
      "Media list & pitching",
      "Publication coordination & analytics",
    ],
    icon: "globe",
    tag: "Global reach",
    category: "Link Building",
  },
  {
    title: "Authority Link",
    description:
      "Strengthen your domain authority with backlinks from high-authority sites that improve credibility and search engine rankings.",
    points: [
      "Hands-on or spec-based testing",
      "Comparison tables & schema",
      "Publish on niche sites or your blog",
    ],
    icon: "authority",
    tag: "Authority",
    category: "Link Building",
  },
  {
    title: "Media Placement",
    description:
      "Get featured on trusted media outlets with backlinks from reputable and penalty-free news and magazine websites.",
    points: [
      "Authority site placements",
      "Interview or byline formats",
      "Amplification assets included",
    ],
    icon: "media",
    tag: "Editorial",
    category: "Link Building",
  },
  {
    title: "On-Page SEO",
    description:
      "Optimize your website content, meta tags, and internal structure to improve rankings and user engagement.",
    points: [
      "Keyword-focused content & headings",
      "Meta tags & structured data optimization",
      "Internal linking strategy for better crawlability",
    ],
    icon: "search",
    tag: "SEO",
    category: "SEO & Web",
  },
  {
    title: "Off-Page SEO",
    description:
      "Build authority and drive traffic with high-quality backlinks from trusted sources.",
    points: [
      "Guest posts & link insertion campaigns",
      "Authority site placements",
      "Niche-specific link building",
    ],
    icon: "growth",
    tag: "Growth",
    category: "Link Building",
  },
  {
    title: "SEO-Optimized Web Solutions",
    description:
      "Ensure your website is fast, crawlable, and fully optimized for search engines while providing a seamless user experience.",
    points: [
      "Site speed & performance improvements",
      "Mobile responsiveness & core web vitals optimization",
      "Crawlability, indexing & structured data",
      "Clean, optimized code and secure architecture",
      "SEO-friendly website architecture & navigation",
    ],
    icon: "code",
    tag: "Development",
    category: "SEO & Web",
  },
];

const deliverySteps = [
  {
    number: "01",
    title: "Wide network of trusted publishers",
    body: "We’ve built strong relationships with real websites across different niches and regions. Most of the sites we work with have DR 20+ and 500+ monthly visitors, so every placement drives real visibility and results.",
  },
  {
    number: "02",
    title: "Complete blogger outreach",
    body: "From finding the right websites to negotiating with editors and managing publishing, our outreach team handles everything. We make sure your content gets placed on relevant sites that match your goals.",
  },
  {
    number: "03",
    title: "Services you can count on",
    body: "High-quality guest post content, transparent and trackable approvals, research-driven planning, and smart anchor text selection and placement.",
  },
  {
    number: "04",
    title: "Simple, hassle-free link building",
    body: "We make link building straightforward with clear steps, quick turnaround times, and do-follow links that meet quality standards while bringing long-term value.",
  },
];

function ServiceStackVisual() {
  return (
    <div className="services-hero-visual" aria-hidden="true">
      <div className="services-orbit services-orbit--one" />
      <div className="services-orbit services-orbit--two" />

      <div className="services-stack-card services-stack-card--back">
        <div className="services-stack-icon">
          <Icon name="search" size={19} />
        </div>
        <div>
          <span>SEO foundation</span>
          <strong>On-page + technical</strong>
        </div>
        <i>03</i>
      </div>

      <div className="services-stack-card services-stack-card--middle">
        <div className="services-stack-icon">
          <Icon name="shield" size={19} />
        </div>
        <div>
          <span>Quality layer</span>
          <strong>Vetted publishers</strong>
        </div>
        <i>02</i>
      </div>

      <div className="services-stack-main">
        <div className="services-stack-head">
          <div>
            <span className="services-stack-kicker">Campaign system</span>
            <strong>Growth services</strong>
          </div>
          <span className="services-stack-status">
            <i /> Active
          </span>
        </div>

        <div className="services-stack-focus">
          <span>
            <Icon name="link" size={23} />
          </span>
          <div>
            <small>Primary focus</small>
            <strong>Guest Posting</strong>
          </div>
          <b>01</b>
        </div>

        <div className="services-stack-progress">
          <div>
            <span>Prospecting</span>
            <b>Complete</b>
          </div>
          <div className="services-progress-line">
            <i />
          </div>
        </div>

        <div className="services-stack-mini-grid">
          <div>
            <span>Links</span>
            <strong>Do-Follow</strong>
            <small>Editorial placements</small>
          </div>
          <div>
            <span>Reach</span>
            <strong>Global</strong>
            <small>Niches & regions</small>
          </div>
        </div>

        <div className="services-stack-list">
          <div>
            <span>
              <Icon name="check" size={13} />
            </span>
            <strong>Real-site vetting</strong>
            <b>Ready</b>
          </div>
          <div>
            <span>
              <Icon name="check" size={13} />
            </span>
            <strong>Editor outreach</strong>
            <b>Ready</b>
          </div>
          <div>
            <span>
              <Icon name="check" size={13} />
            </span>
            <strong>Transparent reporting</strong>
            <b>Ready</b>
          </div>
        </div>
      </div>

      <div className="services-float-pill services-float-pill--one">
        <Icon name="globe" size={16} />
        <span>Global niches</span>
      </div>
      <div className="services-float-pill services-float-pill--two">
        <Icon name="shield" size={16} />
        <span>Quality checked</span>
      </div>
    </div>
  );
}

function ServiceDetail({ service, index }) {
  const detailRoutes = {
    "Guest Posting": "/services/blogger-outreach",
    "Ultra High Quality Backlinks": "/services/ultra-high-quality-backlinks",
  };

  const detailRoute = detailRoutes[service.title];

  return (
    <div className="services-detail-panel" key={service.title}>
      <div className="services-detail-top">
        <div className="services-detail-icon">
          <Icon name={service.icon} size={28} />
        </div>
        <div>
          <span>{service.tag}</span>
          <strong>{String(index + 1).padStart(2, "0")}</strong>
        </div>
      </div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <div className="services-detail-points">
        {service.points.map((point) => (
          <div key={point}>
            <span>
              <Icon name="check" size={14} />
            </span>
            <strong>{point}</strong>
          </div>
        ))}
      </div>
      <Link
        href={detailRoute ?? "/contact"}
        className="button button--dark services-detail-button"
      >
        {detailRoute ? "View full service page" : "Discuss this service"}{" "}
        <Icon name="arrow" size={17} />
      </Link>
    </div>
  );
}

export default function ClientServicesPage() {
  const [activeCategory, setActiveCategory] = useState("All services");
  const [activeService, setActiveService] = useState(0);

  const filteredServices = useMemo(() => {
    if (activeCategory === "All services") return services;
    return services.filter((service) => service.category === activeCategory);
  }, [activeCategory]);

  const selectedService = services[activeService];

  function chooseCategory(category) {
    setActiveCategory(category);
    if (category === "All services") return;
    const firstMatching = services.findIndex(
      (service) => service.category === category,
    );
    if (firstMatching >= 0) setActiveService(firstMatching);
  }

  return (
    <div className="site-shell">
      <Header />
      <main id="main-content" tabIndex={-1}>
        <section className="services-hero">
          <div className="hero-grid-pattern" />
          <div className="hero-glow hero-glow--one" />
          <div className="hero-glow hero-glow--two" />
          <div className="container services-hero-layout">
            <div className="services-hero-copy">
              <div className="eyebrow eyebrow--light">
                <span className="eyebrow-dot" /> What we do
              </div>
              <h1>Featured Services</h1>
              <p className="services-hero-lead">
                Turning content into powerful backlinks.
              </p>
              <p className="services-hero-description">
                From guest posting and contextual link placements to on-page SEO
                and optimized web solutions, explore the services Propage
                Digital uses to help brands strengthen authority, traffic,
                rankings, and digital performance.
              </p>
              <div className="hero-actions">
                <a href="#services-explorer" className="button button--white">
                  Explore Services <Icon name="arrow" size={18} />
                </a>
                <Link href="/contact" className="button button--glass">
                  Get Started
                </Link>
              </div>
            </div>
            <ServiceStackVisual />
          </div>

          <div className="container services-hero-strip">
            <div>
              <span>01</span>
              <strong>Real-site prospecting</strong>
            </div>
            <div>
              <span>02</span>
              <strong>Editor outreach</strong>
            </div>
            <div>
              <span>03</span>
              <strong>Editorial placements</strong>
            </div>
            <div>
              <span>04</span>
              <strong>Transparent reporting</strong>
            </div>
          </div>
        </section>

        <section className="services-explorer-section" id="services-explorer">
          <div className="container">
            <div className="services-section-head">
              <div>
                <div className="eyebrow">
                  <span className="eyebrow-dot" /> Service explorer
                </div>
                <h2>
                  One growth system.
                  <br />
                  Nine focused services.
                </h2>
              </div>
              <p>
                Select a service to see the exact scope, then move directly into
                a conversation with the team when you’re ready.
              </p>
            </div>

            <div
              className="services-category-tabs"
              aria-label="Filter services"
            >
              {["All services", "Link Building", "SEO & Web"].map(
                (category) => (
                  <button
                    key={category}
                    type="button"
                    className={activeCategory === category ? "is-active" : ""}
                    onClick={() => chooseCategory(category)}
                    aria-pressed={activeCategory === category}
                  >
                    {category === "All services" && (
                      <Icon name="filter" size={15} />
                    )}
                    {category}
                  </button>
                ),
              )}
            </div>

            <div className="services-explorer-grid">
              <div className="services-selector-list">
                {filteredServices.map((service) => {
                  const originalIndex = services.findIndex(
                    (item) => item.title === service.title,
                  );
                  const active = originalIndex === activeService;
                  return (
                    <button
                      type="button"
                      key={service.title}
                      className={`services-selector-item ${
                        active ? "is-active" : ""
                      }`}
                      onClick={() => setActiveService(originalIndex)}
                      aria-pressed={active}
                    >
                      <span className="services-selector-icon">
                        <Icon name={service.icon} size={19} />
                      </span>
                      <span className="services-selector-copy">
                        <small>{service.tag}</small>
                        <strong>{service.title}</strong>
                      </span>
                      <span className="services-selector-number">
                        {String(originalIndex + 1).padStart(2, "0")}
                      </span>
                      <span className="services-selector-arrow">
                        <Icon name="arrow" size={16} />
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="services-detail-wrap">
                <ServiceDetail
                  service={selectedService}
                  index={activeService}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="services-quality-section">
          <div className="container services-quality-layout">
            <div className="services-quality-copy">
              <div className="eyebrow eyebrow--light">
                <span className="eyebrow-dot" /> Quality-first delivery
              </div>
              <h2>
                Links that matter.
                <br />A process you can follow.
              </h2>
              <p>
                Propage Digital combines publisher relationships, outreach,
                content, approvals, and reporting into a clear delivery system
                designed around relevance and long-term value.
              </p>
              <div className="services-quality-stats">
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
                  <span>Niches & regions</span>
                </div>
              </div>
            </div>

            <div className="services-quality-board">
              <div className="services-quality-board-head">
                <span>Placement quality</span>
                <b>
                  <i /> Reviewed
                </b>
              </div>
              <div className="services-quality-score">
                <div className="services-score-ring">
                  <span>PPD</span>
                </div>
                <div>
                  <small>Quality framework</small>
                  <strong>Relevance before volume.</strong>
                  <p>
                    Real websites, contextual placements, clean anchors, and
                    transparent campaign updates.
                  </p>
                </div>
              </div>
              <div className="services-quality-checks">
                <div>
                  <span>
                    <Icon name="check" size={13} />
                  </span>
                  <strong>Real-site prospecting & vetting</strong>
                </div>
                <div>
                  <span>
                    <Icon name="check" size={13} />
                  </span>
                  <strong>Publisher network access</strong>
                </div>
                <div>
                  <span>
                    <Icon name="check" size={13} />
                  </span>
                  <strong>Quality guest post content</strong>
                </div>
                <div>
                  <span>
                    <Icon name="check" size={13} />
                  </span>
                  <strong>Transparent and trackable approvals</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services-delivery-section">
          <div className="container">
            <div className="services-section-head services-section-head--delivery">
              <div>
                <div className="eyebrow">
                  <span className="eyebrow-dot" /> Portfolio & capabilities
                </div>
                <h2>How the service becomes a result.</h2>
              </div>
              <p>
                From publisher access to live placement, every stage is handled
                with clear checks and straightforward communication.
              </p>
            </div>

            <div className="services-delivery-grid">
              {deliverySteps.map((step, index) => (
                <article className="services-delivery-card" key={step.number}>
                  <div className="services-delivery-card-top">
                    <span>{step.number}</span>
                    <i>
                      <Icon
                        name={
                          index === 0
                            ? "globe"
                            : index === 1
                              ? "link"
                              : index === 2
                                ? "shield"
                                : "spark"
                        }
                        size={21}
                      />
                    </i>
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="services-cta-section">
          <div className="container">
            <div className="services-cta-card">
              <div className="services-cta-grid" />
              <div className="services-cta-copy">
                <CtaEyebrow />
                <h2>Book a Free Consultation</h2>
                <p>
                  Talk to our outreach specialists about your goals, target
                  niches, and timelines. We’ll suggest a tailored plan and share
                  real examples.
                </p>
                <div className="services-cta-actions">
                  <Link
                    href="/contact#contact-form"
                    className="button button--white"
                  >
                    Plan a consultation <Icon name="arrow" size={18} />
                  </Link>
                  <Link href="/contact" className="button button--glass">
                    Contact Us
                  </Link>
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
