import './globals.css';
import Header from '@/components/global/Header';
import Footer from '@/components/global/Footer';
import Script from 'next/script';
import AnalyticsTracker from '@/lib/AnalyticsTracker';
import ScrollToTopButton from '../components/global/ScrollToTopButton';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" media="(prefers-color-scheme: light)" />
        <link rel="icon" href="/favicon.ico" media="(prefers-color-scheme: dark)" />
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
      {/* Use your own CSS (globals.css sets Arial/Helvetica already) */}
      <body className="min-h-dvh antialiased">
        <Header />
        <AnalyticsTracker />
        {children}
        <Footer />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
