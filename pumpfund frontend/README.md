# PumpFunds Landing Page

A high-conversion, dark-themed landing page for PumpFunds - a Solana memecoin copy-funds app that enables automatic wallet mirroring with sub-second latency.

## Features

- 🎨 **Dark UI with Neon Accents** - #0B0B0F background, #39FF14 neon green, professional dark theme
- ⚡ **Fast & Responsive** - Built with Next.js 14 and optimized for performance
- 📊 **Interactive Charts** - SVG-based charts with placeholder data
- 🎯 **High Conversion** - Prominent CTAs, clear value props, frictionless waitlist signup
- 📱 **Mobile-First** - Fully responsive design
- ♿ **Accessible** - Focus states, reduced motion support, semantic HTML
- ✨ **Micro-interactions** - Hover effects, scale transforms, smooth animations

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Typography:** Space Grotesk, IBM Plex Mono, Inter
- **Icons:** Lucide React
- **Animations:** Framer Motion, CSS transitions

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

### Build for Production

```bash
npm run build
npm start
```

## Page Sections

1. **Hero** - Main headline, CTAs, trending gauge, ROI sparkline
2. **How It Works** - 3-step process with icons
3. **Live Stats** - Metrics tiles and interactive charts
4. **Funds Showcase** - 4 curated copy-fund cards with risk levels
5. **Case Study** - 7-day pilot backtest results table
6. **Feature Grid** - 6 key features with icons
7. **Waitlist Form** - Email capture with validation
8. **FAQ** - 6 common questions with accordion
9. **Footer** - Social links and legal disclaimers

## Customization

### Colors

Edit `tailwind.config.js` to customize the color palette:

```js
colors: {
  background: '#0B0B0F',
  surface: '#111216',
  neon: '#39FF14',
  secondary: '#00E5A8',
  text: '#E8E8EA',
  dimtext: '#9EA3AA',
  border: '#1A1B21',
}
```

### Content

All copy is inline in the components. Edit component files in `/components` to update text, metrics, or data.

### Fonts

Fonts are loaded via Google Fonts in `app/layout.tsx`. Current fonts:
- Space Grotesk (headings)
- IBM Plex Mono (numbers/code)
- Inter (body)

## Features Checklist

- ✅ Sticky navbar with scroll effect
- ✅ Inline waitlist email capture
- ✅ Demo modal showing trade timeline
- ✅ Animated counters and charts
- ✅ Hover glows and micro-interactions
- ✅ Mobile hamburger menu
- ✅ LocalStorage for waitlist state
- ✅ Success state after signup
- ✅ Noise texture background
- ✅ Smooth scroll anchors
- ✅ Focus outlines for accessibility

## Notes

- All data (charts, metrics, backtests) is **placeholder/dummy data**
- No backend integration - waitlist saves to localStorage
- SEO meta tags included for social sharing
- Educational content with risk disclaimers throughout

## License

Proprietary - PumpFunds 2024
