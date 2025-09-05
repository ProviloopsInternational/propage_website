import './globals.css';
import Header from '@/components/global/Header';
import { Inter } from 'next/font/google';
import Footer from '@/components/global/Footer';
import Script from 'next/script';
import AnalyticsTracker from '@/lib/AnalyticsTracker';
import ScrollToTopButton from '../components/global/ScrollToTopButton';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon_dark.png" media="(prefers-color-scheme: light)" />
        <link rel="icon" href="/favicon_light.png" media="(prefers-color-scheme: dark)" />
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
      <body className={inter.className}>
        <Header />
        <AnalyticsTracker />
        {children}
        <Footer />
        <ScrollToTopButton/>
      </body>
    </html>
  );
}
