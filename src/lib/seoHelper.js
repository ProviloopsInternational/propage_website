 import { seoDefaults } from './seoBase';

export const createMetadata = ({ title, description, url }) => ({
  title,
  description,
  openGraph: {
    title,
    description,
    url,
    images: [seoDefaults.image],
    type: seoDefaults.type,
  },
  twitter: {
    card: seoDefaults.twitterCard,
    title,
    description,
    images: [seoDefaults.image],
  },
});
