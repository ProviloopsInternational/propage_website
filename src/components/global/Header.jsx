"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

function MenuIcon({ open }) {
  return (
    <span className="menu-icon" aria-hidden="true">
      <span className={open ? "open" : ""} />
      <span className={open ? "open" : ""} />
      <span className={open ? "open" : ""} />
    </span>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const currentPath = usePathname() || "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        document.getElementById("mobile-menu-toggle")?.focus();
      }
    };
    if (open) document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <header
      className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}
    >
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="container nav-wrap">
        <Link
          className="brand header-brand"
          href="/"
          aria-label="Propage Digital home"
        >
          <Image
            src={
              scrolled
                ? "/assets/propage-logo-dark.png"
                : "/assets/propage-logo-white.png"
            }
            alt="Propage Digital"
            width={1409}
            height={213}
            className="brand-logo header-brand-logo"
            priority
          />
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? currentPath === "/"
                : currentPath === item.href ||
                  currentPath.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                className={active ? "nav-link active" : "nav-link"}
                href={item.href}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="nav-actions">
          <a className="nav-text-link" href="mailto:hello@propagedigital.com">
            hello@propagedigital.com
          </a>
          <Link className="button button--small button--dark" href="/contact">
            Start a project
            <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <button
          type="button"
          className="mobile-menu-button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          id="mobile-menu-toggle"
          onClick={() => setOpen((value) => !value)}
        >
          <MenuIcon open={open} />
        </button>
      </div>

      <div
        id="mobile-navigation"
        inert={!open}
        className={`mobile-menu ${open ? "mobile-menu--open" : ""}`}
      >
        <div className="container mobile-menu-inner">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
            >
              {item.label}
              <span>↗</span>
            </Link>
          ))}
          <Link
            className="button button--dark mobile-cta"
            href="/contact"
            onClick={() => setOpen(false)}
          >
            Start a project
          </Link>
        </div>
      </div>
    </header>
  );
}
