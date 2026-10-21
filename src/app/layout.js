// Stylesheet order mirrors the design reference's cascade.
import "@/styles/premium-home.css";
import "./globals.css";
import "@/styles/shared.css";
import "@/styles/home-hero.css";
import "@/styles/home-sections.css";
import "@/styles/shared-footer-responsive.css";
import "@/styles/about.css";
import "@/styles/services.css";
import "@/styles/guest-posting.css";
import "@/styles/high-quality-backlinks.css";
import "@/styles/contact.css";
import "@/styles/privacy.css";
import "@/styles/corporate.css";
import "@/styles/redesign.css";
import Script from "next/script";
import AnalyticsTracker from "@/lib/AnalyticsTracker";
import ScrollToTopButton from "../components/global/ScrollToTopButton";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/favicon.ico"
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="icon"
          href="/favicon.ico"
          media="(prefers-color-scheme: dark)"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />

        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=yahan"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'yahan');
            `,
          }}
        />
      </head>
      {/* Header and Footer render inside each page's .site-shell, as the design's page-scoped styles expect */}
      <body className="min-h-dvh antialiased">
        <AnalyticsTracker />
        {children}
        <ScrollToTopButton />
      </body>
    </html>
  );
}
