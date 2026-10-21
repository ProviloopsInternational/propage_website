"use client";

import CtaEyebrow from "@/components/global/CtaEyebrow";
import { useEffect, useRef, useState } from "react";
import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";
import Link from "next/link";

function Icon({ name = "arrow", size = 22 }) {
  const paths = {
    arrow: (
      <>
        <path d="M5 12h14M13 6l6 6-6 6" />
      </>
    ),
    link: (
      <>
        <path d="m10 14 4-4M8 16l-1 1a4 4 0 0 1-6-6l5-5a4 4 0 0 1 6 0M16 8l1-1a4 4 0 0 1 6 6l-5 5a4 4 0 0 1-6 0" />
      </>
    ),
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <ellipse cx="12" cy="12" rx="4" ry="9" />
        <path d="M3 12h18M5 6.5h14M5 17.5h14" />
      </>
    ),
    search: (
      <>
        <circle cx="10.5" cy="10.5" r="6.5" />
        <path d="m16 16 5 5" />
      </>
    ),
    code: (
      <>
        <path d="m7 7-5 5 5 5M17 7l5 5-5 5M14 4l-4 16" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    spark: (
      <path d="m12 2 2.6 7.4L22 12l-7.4 2.6L12 22l-2.6-7.4L2 12l7.4-2.6L12 2Z" />
    ),
    shield: (
      <>
        <path d="m12 3 8 3v5c0 5-4 8-8 10-4-2-8-5-8-10V6l8-3Z" />
        <path d="m8 12 3 3 5-6" />
      </>
    ),
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

const services = [
  {
    title: "Guest posting",
    short: "The right conversations.",
    headline: "Your brand. In good company.",
    text: "Earn a place in the conversations that matter. We connect you with relevant publishers and create content that belongs there.",
    points: [
      "Niche-relevant publishers",
      "Content & editor outreach",
      "Verified live placements",
    ],
    icon: "link",
    href: "/services/blogger-outreach",
  },
  {
    title: "Premium backlinks",
    short: "A higher standard.",
    headline: "Authority has to be earned.",
    text: "Go beyond a metric. Our quality-first approach considers relevance, real audiences and editorial standards before every placement.",
    points: [
      "Publisher quality checks",
      "Contextual editorial links",
      "Transparent placement reporting",
    ],
    icon: "shield",
    href: "/services/ultra-high-quality-backlinks",
  },
  {
    title: "SEO strategy",
    short: "Every detail, connected.",
    headline: "Make it easier to find you.",
    text: "Bring your content, site structure and off-page strategy together. A considered approach to a stronger search presence.",
    points: [
      "On-page & off-page SEO",
      "Content and internal linking",
      "Search-friendly site structure",
    ],
    icon: "search",
    href: "/services#services-explorer",
  },
  {
    title: "Web solutions",
    short: "Built for what comes next.",
    headline: "Beautiful. Fast. Findable.",
    text: "Give your growth a better foundation. Thoughtful websites that connect a great user experience with sound technical SEO.",
    points: [
      "Responsive experiences",
      "Performance & crawlability",
      "Clean website architecture",
    ],
    icon: "code",
    href: "/services#services-explorer",
  },
];
const sectors = [
  {
    name: "Technology",
    center: "Tech & SaaS",
    nodes: [
      "Software",
      "Startups",
      "Cloud",
      "AI & data",
      "Cybersecurity",
      "Product",
    ],
    description:
      "Connect with the publications your next customer already reads.",
  },
  {
    name: "Business",
    center: "Business",
    nodes: [
      "Finance",
      "Leadership",
      "Marketing",
      "E-commerce",
      "Careers",
      "Operations",
    ],
    description:
      "Build relevance around the people, ideas and markets you serve.",
  },
  {
    name: "Lifestyle",
    center: "Lifestyle",
    nodes: ["Travel", "Wellness", "Home", "Fashion", "Food", "Culture"],
    description:
      "Bring your brand into the interests and everyday lives of your audience.",
  },
];
const steps = [
  {
    title: "First, the bigger picture.",
    label: "Discover",
    text: "Your goals, your audience, your next move. We start by understanding where you are and where you want to go.",
    tags: ["Your goals", "Your market", "Your priorities"],
    icon: "search",
  },
  {
    title: "Find your kind of people.",
    label: "Connect",
    text: "We research relevant publishers, review their quality and build a shortlist around your niche and target markets.",
    tags: ["Research", "Quality checks", "Publisher shortlist"],
    icon: "globe",
  },
  {
    title: "Make something that belongs.",
    label: "Create",
    text: "Thoughtful content, natural context and real editor conversations. We manage the details from draft to placement.",
    tags: ["Editorial content", "Outreach", "Coordination"],
    icon: "link",
  },
  {
    title: "Live links. Clear next steps.",
    label: "Deliver",
    text: "See exactly where your brand appears. Verified URLs and straightforward reporting keep your campaign easy to follow.",
    tags: ["Verified placements", "Reporting", "Next steps"],
    icon: "check",
  },
];
const faqs = [
  {
    q: "What makes your approach different?",
    a: "We focus on relevance, real publishers and clear communication. From researching websites to coordinating content and verifying live links, the work is managed as one connected campaign.",
  },
  {
    q: "Can you target my industry or country?",
    a: "Yes. We build publisher shortlists around your niche, preferred markets and quality requirements. Share your target audience and we can discuss relevant opportunities.",
  },
  {
    q: "Do you create the content, too?",
    a: "Guest posting campaigns include content prepared around the publisher's standards and your brief, with natural anchor placement and editorial context. We confirm the scope before work begins.",
  },
  {
    q: "How do you check publisher quality?",
    a: "We review relevance, website activity, audience signals and editorial standards. Most sites in our network have DR 20+ and 500+ monthly visitors; suitability is assessed for each campaign.",
  },
  {
    q: "How will I follow my campaign?",
    a: "You have a clear point of contact for targeting, approvals and progress, along with verified placement URLs and reporting once links go live.",
  },
];

function ServiceArtwork({ active }) {
  return (
    <div
      className={"px-service-art px-service-art--" + active}
      key={active}
      aria-hidden="true"
    >
      <span className="px-art-coordinate">
        PROPAGE / CAPABILITY 0{active + 1}
      </span>
      {active === 0 && (
        <>
          <div className="px-editorial-sheet px-editorial-sheet--back" />
          <div className="px-editorial-sheet">
            <div className="px-sheet-masthead">
              <span>THE EDITORIAL</span>
              <Icon name="spark" size={16} />
            </div>
            <span className="px-sheet-category">
              IDEAS · INSIGHT · PERSPECTIVE
            </span>
            <strong>
              Ideas worth
              <br />
              sharing.
            </strong>
            <div className="px-sheet-picture">
              <div />
              <Icon name="spark" size={80} />
            </div>
            <div className="px-sheet-lines">
              <i />
              <i />
              <i />
            </div>
            <span className="px-context-link">
              Your brand, in context. <Icon name="link" size={14} />
            </span>
          </div>
          <div className="px-art-stamp">
            <Icon name="check" size={14} />
            <span>
              Real content.
              <br />
              <b>Real connections.</b>
            </span>
          </div>
        </>
      )}
      {active === 1 && (
        <>
          <span className="px-authority-letter">
            A<span>+</span>
          </span>
          <div className="px-quality-stack">
            {["Editorial fit", "Real audience", "Niche relevance"].map(
              (text, i) => (
                <div style={{ "--i": i }} key={text}>
                  <span>0{i + 1}</span>
                  <Icon
                    name={i === 0 ? "shield" : i === 1 ? "globe" : "link"}
                    size={27}
                  />
                  <strong>{text}</strong>
                  <Icon name="check" size={16} />
                </div>
              ),
            )}
          </div>
          <span className="px-art-bottom-note">
            A stronger link starts with a better standard.
          </span>
        </>
      )}
      {active === 2 && (
        <>
          <div className="px-search-frame">
            <div className="px-search-bar">
              <Icon name="search" size={18} />
              <span>Your next opportunity</span>
              <span>↵</span>
            </div>
            <strong>
              Built to
              <br />
              be found<span>.</span>
            </strong>
            <div className="px-search-scan" />
            <div className="px-search-checks">
              {[
                "Content with a purpose",
                "Structure that connects",
                "Every detail considered",
              ].map((t) => (
                <span key={t}>
                  <Icon name="check" size={14} />
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="px-search-orbit">
            <Icon name="search" size={30} />
          </div>
        </>
      )}
      {active === 3 && (
        <>
          <div className="px-web-window">
            <div className="px-web-bar">
              <i />
              <i />
              <i />
              <span>your-next-chapter.com</span>
            </div>
            <div className="px-web-body">
              <span>DESIGNED TO MOVE YOU FORWARD</span>
              <strong>
                Fast by
                <br />
                design.
              </strong>
              <div className="px-web-shape">
                <Icon name="spark" size={95} />
              </div>
              <div className="px-web-blocks">
                <i />
                <i />
                <i />
              </div>
            </div>
          </div>
          <div className="px-mobile-window">
            <i />
            <Icon name="spark" size={45} />
            <strong>
              Made
              <br />
              to adapt.
            </strong>
            <span />
          </div>
        </>
      )}
      <span className="px-art-caption">AN ILLUSTRATION OF OUR APPROACH</span>
    </div>
  );
}

function SignalSculpture({ motion }) {
  const artRef = useRef(null);
  function followPointer(event) {
    if (!motion || event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    artRef.current?.style.setProperty(
      "--rx",
      ((event.clientY - bounds.top) / bounds.height) * -12 + 6 + "deg",
    );
    artRef.current?.style.setProperty(
      "--ry",
      ((event.clientX - bounds.left) / bounds.width) * 16 - 8 + "deg",
    );
  }
  function resetPointer() {
    artRef.current?.style.setProperty("--rx", "0deg");
    artRef.current?.style.setProperty("--ry", "0deg");
  }
  return (
    <div
      className="px-sculpture-wrap"
      onPointerMove={followPointer}
      onPointerLeave={resetPointer}
      aria-hidden="true"
    >
      <div className="px-art-axis px-art-axis--x" />
      <div className="px-art-axis px-art-axis--y" />
      <span className="px-art-cross px-art-cross--one">+</span>
      <span className="px-art-cross px-art-cross--two">+</span>
      <div ref={artRef} className="px-sculpture">
        <div className="px-sculpture-halo" />
        <svg className="px-orbit-svg" viewBox="0 0 560 560" fill="none">
          <defs>
            <linearGradient
              id="orbit-metal"
              x1="70"
              y1="50"
              x2="430"
              y2="510"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset=".22" stopColor="#dfeaff" />
              <stop offset=".48" stopColor="#6D28D9" />
              <stop offset=".7" stopColor="#dfeaff" />
              <stop offset="1" stopColor="white" />
            </linearGradient>
            <linearGradient
              id="orbit-edge"
              x1="0"
              y1="0"
              x2="560"
              y2="560"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity=".12" />
            </linearGradient>
            <radialGradient id="orbit-center">
              <stop stopColor="white" stopOpacity=".9" />
              <stop offset="1" stopColor="#dfeaff" stopOpacity=".02" />
            </radialGradient>
          </defs>
          <circle
            cx="280"
            cy="280"
            r="220"
            stroke="white"
            strokeOpacity=".12"
            strokeDasharray="2 8"
          />
          <circle
            cx="280"
            cy="280"
            r="170"
            stroke="white"
            strokeOpacity=".08"
          />
          <g className="px-orbit-turn">
            <ellipse
              cx="280"
              cy="280"
              rx="207"
              ry="93"
              transform="rotate(-38 280 280)"
              stroke="url(#orbit-metal)"
              strokeWidth="30"
            />
            <ellipse
              cx="280"
              cy="280"
              rx="207"
              ry="93"
              transform="rotate(-38 280 280)"
              stroke="url(#orbit-edge)"
              strokeWidth="1"
            />
            <ellipse
              cx="280"
              cy="280"
              rx="207"
              ry="93"
              transform="rotate(38 280 280)"
              stroke="url(#orbit-metal)"
              strokeWidth="30"
            />
            <ellipse
              cx="280"
              cy="280"
              rx="207"
              ry="93"
              transform="rotate(38 280 280)"
              stroke="url(#orbit-edge)"
              strokeWidth="1"
            />
          </g>
          <circle cx="280" cy="280" r="70" fill="url(#orbit-center)" />
          <path
            d="m280 229 13 38 38 13-38 13-13 38-13-38-38-13 38-13 13-38Z"
            fill="white"
          />
        </svg>
        <div className="px-orbit-label px-orbit-label--one">
          <span />
          Relevance
        </div>
        <div className="px-orbit-label px-orbit-label--two">
          <span />
          Authority
        </div>
        <div className="px-orbit-label px-orbit-label--three">
          <span />
          Momentum
        </div>
      </div>
      <div className="px-art-foot">
        <span>CONNECTED BY STRATEGY.</span>
        <span>BUILT FOR IMPACT. ↗</span>
      </div>
    </div>
  );
}

export default function ClientHomePage() {
  const [activeService, setActiveService] = useState(0);
  const [activeSector, setActiveSector] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);
  const [motion, setMotion] = useState(false);
  const [ready, setReady] = useState(false);
  const pageRef = useRef(null);
  const stepRefs = useRef([]);
  const service = services[activeService];
  const sector = sectors[activeSector];

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setMotion(!media.matches);
    const syncMotion = () => setMotion(!media.matches);
    media.addEventListener("change", syncMotion);
    setReady(true);
    return () => media.removeEventListener("change", syncMotion);
  }, []);

  useEffect(() => {
    if (!ready || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("px-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    pageRef.current
      ?.querySelectorAll("[data-reveal]")
      .forEach((el) => observer.observe(el));
    const stepObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting)
            setActiveStep(Number(entry.target.dataset.step));
        });
      },
      { rootMargin: "-20% 0px -45% 0px", threshold: 0 },
    );
    stepRefs.current.forEach((el) => {
      if (el) stepObserver.observe(el);
    });
    return () => {
      observer.disconnect();
      stepObserver.disconnect();
    };
  }, [ready]);

  return (
    <div
      ref={pageRef}
      className={"site-shell premium-home" + (ready ? " px-ready" : "")}
      data-motion={motion ? "on" : "off"}
    >
      <Header />
      <main id="main-content" tabIndex={-1}>
        <section className="px-hero">
          <div className="container">
            <div className="px-hero-topline">
              <span>
                <i /> INDEPENDENT THINKING. CONNECTED GROWTH.
              </span>
              <span>SEO, OUTREACH & DIGITAL EXPERIENCES</span>
            </div>
            <div className="px-hero-grid">
              <div className="px-hero-copy">
                <h1>
                  <span>Don't just</span>
                  <span>show up.</span>
                  <span className="px-hero-outline">
                    Stand out<span className="px-period">.</span>
                  </span>
                </h1>
                <div className="px-hero-description">
                  <span className="px-small-star" aria-hidden="true">
                    ✳
                  </span>
                  <p>
                    Build the kind of presence people notice.
                    <br />
                    Relevant links, thoughtful SEO and digital experiences that
                    move your brand forward.
                  </p>
                </div>
                <Link className="px-pill px-pill--white" href="/contact">
                  <span>Let's make your next move</span>
                  <span className="px-pill-icon">
                    <Icon size={18} />
                  </span>
                </Link>
              </div>
              <SignalSculpture motion={motion} />
            </div>
            <div className="px-hero-floor">
              <a href="#px-intro">
                <span className="px-scroll-icon">↓</span>SCROLL TO EXPLORE
              </a>
              <span>REAL RELATIONSHIPS. LASTING RELEVANCE.</span>
              <button
                onClick={() => setMotion(!motion)}
                aria-pressed={motion}
                aria-label={motion ? "Pause animations" : "Enable animations"}
              >
                <span aria-hidden="true">{motion ? "Ⅱ" : "▷"}</span> MOTION{" "}
                {motion ? "ON" : "OFF"}
              </button>
            </div>
          </div>
        </section>

        <section className="px-intro" id="px-intro">
          <div className="container px-intro-grid" data-reveal>
            <div className="px-eyebrow">
              <span>01 / THE BIGGER PICTURE</span>
              <Icon name="spark" size={25} />
            </div>
            <div>
              <h2>
                Good SEO gets you found.
                <br />
                Great connections make
                <br />
                <span>you matter.</span>
              </h2>
              <div className="px-intro-bottom">
                <p>
                  There is a difference between being online and building a
                  presence. We bring strategy, outreach and craft together to
                  help ambitious businesses earn their place.
                </p>
                <Link
                  className="px-circle-link"
                  href="/about"
                  aria-label="Get to know Propage Digital"
                >
                  <span>
                    Meet
                    <br />
                    Propage
                  </span>
                  <Icon size={20} />
                </Link>
              </div>
            </div>
          </div>
          <div className="px-marquee" aria-hidden="true">
            <div>
              {[0, 1].map((n) => (
                <span key={n}>
                  RELEVANCE <Icon name="spark" size={46} /> AUTHORITY{" "}
                  <Icon name="spark" size={46} /> MOMENTUM{" "}
                  <Icon name="spark" size={46} />{" "}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="px-services" id="featured-services">
          <div className="container">
            <div className="px-section-heading" data-reveal>
              <div>
                <span className="px-eyebrow">02 / OUR CAPABILITIES</span>
                <h2>
                  Different tools.
                  <br />
                  <span>One bigger ambition.</span>
                </h2>
              </div>
              <p>
                A connected approach to your next stage.
                <br />
                Pick a service. Explore the possibilities.
              </p>
            </div>
            <div className="px-service-experience" data-reveal>
              <div
                className="px-service-menu"
                aria-label="Explore our capabilities"
              >
                {services.map((item, i) => (
                  <button
                    key={item.title}
                    className={activeService === i ? "is-active" : ""}
                    onClick={() => setActiveService(i)}
                    aria-pressed={activeService === i}
                    aria-controls="px-service-content"
                  >
                    <span className="px-service-no">0{i + 1}</span>
                    <span>
                      <strong>{item.title}</strong>
                      <small>{item.short}</small>
                    </span>
                    <span className="px-service-go">↗</span>
                  </button>
                ))}
                <Link href="/services">
                  View all 9 services <Icon size={17} />
                </Link>
              </div>
              <div className="px-service-content" id="px-service-content">
                <ServiceArtwork active={activeService} />
                <div
                  className="px-service-detail"
                  aria-live="polite"
                  aria-atomic="true"
                  key={service.title}
                >
                  <div>
                    <h3>{service.headline}</h3>
                    <p>{service.text}</p>
                  </div>
                  <div>
                    <ul>
                      {service.points.map((point) => (
                        <li key={point}>
                          <Icon name="check" size={14} />
                          {point}
                        </li>
                      ))}
                    </ul>
                    <Link href={service.href}>
                      Explore {service.title.toLowerCase()} <Icon size={18} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-network">
          <div className="container">
            <div className="px-network-top">
              <span className="px-eyebrow">03 / THE RIGHT CONNECTIONS</span>
              <span>RELEVANCE IS EVERYTHING ↗</span>
            </div>
            <div className="px-network-layout">
              <div className="px-network-copy" data-reveal>
                <h2>
                  A world of reach.
                  <br />
                  Your kind of
                  <br />
                  <em>relevance.</em>
                </h2>
                <p>
                  Big networks mean little without the right fit. We find
                  publishers that connect your brand with the audience you
                  actually want to reach.
                </p>
                <div
                  className="px-sector-switch"
                  aria-label="Explore publisher niches"
                >
                  {sectors.map((item, i) => (
                    <button
                      key={item.name}
                      onClick={() => setActiveSector(i)}
                      aria-pressed={activeSector === i}
                      className={activeSector === i ? "is-active" : ""}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
                <div className="px-sector-description" aria-live="polite">
                  {sector.description}
                </div>
                <Link className="px-underlined-link" href="/contact">
                  Find your next connection <Icon size={19} />
                </Link>
              </div>
              <div
                className="px-network-map"
                aria-label={"Example publisher categories for " + sector.name}
              >
                <div className="px-map-ring px-map-ring--one" />
                <div className="px-map-ring px-map-ring--two" />
                <div className="px-map-ring px-map-ring--three" />
                <svg viewBox="0 0 560 500" aria-hidden="true">
                  <path d="M280 250 135 90M280 250 422 102M280 250 472 264M280 250 384 419M280 250 150 408M280 250 67 258" />
                </svg>
                <div className="px-map-center">
                  <Icon name="globe" size={38} />
                  <strong>{sector.center}</strong>
                  <span>YOUR WORLD, CONNECTED</span>
                </div>
                {sector.nodes.map((node, i) => (
                  <div className={"px-map-node px-map-node--" + i} key={node}>
                    <span className="px-map-dot" />
                    <span>{node}</span>
                    <small>0{i + 1}</small>
                  </div>
                ))}
                <div className="px-map-caption">
                  <span className="px-map-dot" /> EXPLORE A NICHE TO SEE ITS
                  CONNECTIONS
                </div>
              </div>
            </div>
            <div className="px-network-standards" data-reveal>
              <div>
                <span>
                  OUR QUALITY
                  <br />
                  STARTING POINT
                </span>
                <Icon name="shield" size={28} />
              </div>
              <div>
                <strong>
                  DR 20<span>+</span>
                </strong>
                <span>Publisher benchmark</span>
              </div>
              <div>
                <strong>
                  500<span>+</span>
                </strong>
                <span>Monthly visitors on most sites</span>
              </div>
              <div>
                <strong>Real.</strong>
                <span>Publishers. People. Conversations.</span>
              </div>
            </div>
          </div>
        </section>

        <section className="px-process">
          <div className="container px-process-layout">
            <div className="px-process-sticky">
              <span className="px-eyebrow">
                04 / FROM FIRST HELLO TO WHAT'S NEXT
              </span>
              <h2>
                Good things
                <br />
                don't happen
                <br />
                <span>by chance.</span>
              </h2>
              <p>
                Clear thinking. Considered steps.
                <br />A team that takes care of the details.
              </p>
              <div className="px-process-dial" aria-hidden="true">
                <span
                  className="px-dial-ring"
                  style={{ transform: "rotate(" + activeStep * 90 + "deg)" }}
                />
                <strong>
                  0{activeStep + 1}
                  <span>/ 04</span>
                </strong>
                <span>{steps[activeStep].label}</span>
              </div>
              <div
                className="px-process-nav"
                aria-label="Jump to a process step"
              >
                {steps.map((step, i) => (
                  <button
                    key={step.label}
                    aria-label={"Step " + (i + 1) + ": " + step.label}
                    aria-current={activeStep === i ? "step" : undefined}
                    onClick={() => {
                      setActiveStep(i);
                      stepRefs.current[i]?.scrollIntoView({
                        behavior: motion ? "smooth" : "instant",
                        block: "center",
                      });
                    }}
                    className={activeStep === i ? "is-active" : ""}
                  >
                    <span />
                    {step.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="px-process-cards">
              {steps.map((step, i) => (
                <article
                  id={"process-step-" + i}
                  ref={(el) => {
                    stepRefs.current[i] = el;
                  }}
                  data-step={i}
                  key={step.title}
                  className={
                    "px-process-card" + (activeStep === i ? " is-active" : "")
                  }
                >
                  <div className="px-process-card-head">
                    <span>
                      0{i + 1} / {step.label.toUpperCase()}
                    </span>
                    <Icon name={step.icon} size={26} />
                  </div>
                  <div className="px-step-drawing" aria-hidden="true">
                    {i === 0 ? (
                      <>
                        <div className="px-target-ring" />
                        <div className="px-target-ring" />
                        <div className="px-target-ring" />
                        <Icon name="search" size={42} />
                      </>
                    ) : i === 1 ? (
                      <>
                        <i />
                        <i />
                        <i />
                        <i />
                        <Icon name="globe" size={44} />
                      </>
                    ) : i === 2 ? (
                      <>
                        <div className="px-drawing-line" />
                        <div className="px-drawing-line" />
                        <div className="px-drawing-line" />
                        <Icon name="spark" size={45} />
                      </>
                    ) : (
                      <>
                        <div className="px-check-circle">
                          <Icon name="check" size={44} />
                        </div>
                        <span>READY FOR WHAT'S NEXT</span>
                      </>
                    )}
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                  <div className="px-step-tags">
                    {step.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-belief">
          <div className="container" data-reveal>
            <div className="px-belief-top">
              <span className="px-eyebrow">THE WAY WE SEE IT</span>
              <Icon name="spark" size={45} />
            </div>
            <h2>
              Less noise.
              <br />
              More <span>meaning.</span>
            </h2>
            <div className="px-belief-bottom">
              <span>THAT'S THE PROPAGE DIFFERENCE.</span>
              <p>
                Real relationships over shortcuts. Relevance over volume. And a
                long-term view of what your brand can become.
              </p>
              <Link
                href="/about"
                className="px-round-arrow"
                aria-label="Read about our approach"
              >
                ↗
              </Link>
            </div>
          </div>
        </section>

        <section className="px-faq">
          <div className="container px-faq-layout">
            <div data-reveal>
              <span className="px-eyebrow">05 / BEFORE WE BEGIN</span>
              <h2>
                A little clarity.
                <br />
                <span>A lot of possibility.</span>
              </h2>
              <div className="px-question-art" aria-hidden="true">
                <span>?</span>
                <i>LET'S TALK IT THROUGH</i>
              </div>
              <Link className="px-underlined-link" href="/contact">
                Ask us something else <Icon size={18} />
              </Link>
            </div>
            <div className="px-faq-list" data-reveal>
              {faqs.map((faq, i) => (
                <div
                  className={"px-faq-item" + (openFaq === i ? " is-open" : "")}
                  key={faq.q}
                >
                  <h3>
                    <button
                      aria-expanded={openFaq === i}
                      aria-controls={"px-answer-" + i}
                      id={"px-question-" + i}
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    >
                      <span>0{i + 1}</span>
                      <span>{faq.q}</span>
                      <span className="px-faq-plus" aria-hidden="true" />
                    </button>
                  </h3>
                  <div
                    className="px-faq-answer"
                    id={"px-answer-" + i}
                    role="region"
                    aria-labelledby={"px-question-" + i}
                    inert={openFaq !== i}
                    aria-hidden={openFaq !== i}
                  >
                    <div>
                      <p>{faq.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-finale">
          <div className="container">
            <div className="px-finale-top">
              <CtaEyebrow />
            </div>
            <div className="px-finale-link">
              <span>
                Ready for
                <br />
                <em>what's next?</em>
              </span>
            </div>
            <div className="px-finale-bottom">
              <p>A good conversation is a great place to start.</p>
              <Link
                href="/contact#contact-form"
                className="button button--white px-consultation-button"
              >
                Book a free consultation <Icon size={20} />
              </Link>
              <span>15–30 MIN · NO COMMITMENT</span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
