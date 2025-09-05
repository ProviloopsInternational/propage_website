// src/theme/theme.js
const theme = {
  colors: {
    // Brand gradient (purple → blue)
    primary: '#6D28D9',           // vivid purple
    primaryLight: '#7C3AED',      // lighter purple
    primaryDark: '#1E40AF',       // deep blue for hovers
    backgroundGradient:
      'linear-gradient(120deg, #6D28D9 0%, #4338CA 35%, #2563EB 100%)',

    // Text (on dark/gradient)
    textWhite: '#FFFFFF',
    textDark: '#0B1221',
    textGray: '#CBD5E1',          // muted text on dark bg

    // Surfaces (frosted white cards over gradient)
    surface: 'rgba(255,255,255,0.08)',
    surfaceBorder: 'rgba(255,255,255,0.12)',

    // CTA / accents (yellow/orange)
    accent: '#F59E0B',            // button background
    accentDark: '#D97706',        // button hover
    accentText: '#111827',

    // Fallback page background (behind sections)
    background: '#0F172A'
  },
  radii: { sm: '8px', md: '12px', lg: '16px', xl: '24px' },
  shadows: {
    soft: '0 10px 30px rgba(2, 6, 23, 0.15)',
    glow: '0 0 0 6px rgba(99, 102, 241, 0.25)'
  }
};

export default theme;
