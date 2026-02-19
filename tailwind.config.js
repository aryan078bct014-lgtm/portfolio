/** @type {import('tailwindcss').Config} */

/**
 * TAILWIND CONFIG — Single Source of Truth
 * ─────────────────────────────────────────
 * All colors, fonts, and spacing live here.
 * Components import their own CSS file which uses these token names directly.
 *
 * COLOR TOKENS (used in CSS files as: bg-page, text-body, border-line, etc.)
 *   bg-page       →  the main page background (light: off-white, dark: deep navy)
 *   bg-surface    →  elevated surface / card background
 *   text-body     →  primary readable text
 *   text-muted    →  secondary / label / caption text
 *   border-line   →  all borders and dividers
 *   accent        →  blue accent for active states, links
 *   accent-hover  →  darker shade of accent on hover
 *
 * FONT TOKENS
 *   font-heading  →  Cormorant Garamond (display serif for h1–h3)
 *   font-body     →  DM Sans (clean readable sans-serif)
 *   font-code     →  DM Mono (numbers, tags, labels)
 */

export default {
  darkMode: 'class',   // dark mode toggled by adding class="dark" on <html>
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],

  theme: {
    extend: {

      // ── FONTS ──────────────────────────────────────────────────────────────
      fontFamily: {
        heading: ['"Cormorant Garamond"', 'serif'],
        body:    ['"DM Sans"', 'sans-serif'],
        code:    ['"DM Mono"', 'monospace'],
      },

      // ── COLORS ─────────────────────────────────────────────────────────────
      // Each token points to a CSS variable defined in globals.css.
      // The CSS variable switches value when .dark is on <html>.
      // This means you write  bg-page  once and it works in both themes.
      colors: {
        page:    'rgb(var(--page)    / <alpha-value>)',
        surface: 'rgb(var(--surface) / <alpha-value>)',
        body:    'rgb(var(--body)    / <alpha-value>)',
        muted:   'rgb(var(--muted)   / <alpha-value>)',
        line:    'rgb(var(--line)    / <alpha-value>)',
        accent:  'rgb(var(--accent)  / <alpha-value>)',
        'accent-hover': 'rgb(var(--accent-hover) / <alpha-value>)',
      },

      // ── ANIMATIONS ─────────────────────────────────────────────────────────
      animation: {
        'rise':    'rise    0.7s ease forwards',
        'fade-in': 'fadeIn  0.5s ease forwards',
      },
      keyframes: {
        rise: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)'    },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
      },
    },
  },

  plugins: [],
};
