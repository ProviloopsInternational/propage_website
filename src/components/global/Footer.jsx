import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="footer-brand-block">
          <Link
            className="brand footer-brand"
            href="/"
            aria-label="Propage Digital home"
          >
            <Image
              src="/assets/propage-logo-dark.png"
              alt="Propage Digital"
              width={1409}
              height={213}
              className="brand-logo footer-brand-logo"
            />
          </Link>

          <p>
            Building authority through real connections and quality content.
          </p>

          <div className="footer-status">
            <span className="status-dot" />
            Available for new campaigns
          </div>
        </div>

        <div className="footer-column">
          <p className="footer-label">Company</p>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className="footer-column">
          <p className="footer-label">Services</p>
          <Link href="/services">All Services</Link>
          <Link href="/services/blogger-outreach">Guest Posting</Link>
          <Link href="/services/ultra-high-quality-backlinks">
            Premium Backlinks
          </Link>
          <Link href="/services#services-explorer">Link Insertion</Link>
        </div>

        <div className="footer-column">
          <p className="footer-label">Explore</p>
          <Link href="/services/blogger-outreach">Blogger Outreach</Link>
          <a href="mailto:hello@propagedigital.com">Email us</a>
        </div>

        <div className="footer-column footer-contact">
          <p className="footer-label">Contact</p>
          <a href="mailto:hello@propagedigital.com">hello@propagedigital.com</a>
          <a href="tel:+447466172010">+44 (746) 6172010</a>
          <span>Mon–Fri · 24/5 Support</span>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} Propage Digital. All rights reserved.
        </span>
        <div>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
      <div className="container footer-wordmark" aria-hidden="true">
        <svg viewBox="0 0 1200 200" fill="currentColor" focusable="false">
          <text x="0" y="185" textLength="1200" lengthAdjust="spacingAndGlyphs">
            PROPAGE
          </text>
        </svg>
      </div>
    </footer>
  );
}
