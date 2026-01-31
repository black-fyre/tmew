# TMOL 2.0 - The More Excellent Way Conference Website

A modern, highly engaging promotional website for "The More Excellent Way 2026" student learning conference at the University of Ibadan.

## Features

- ✨ Modern, trendy design with smooth scroll animations
- 🎨 Gradient overlays using brand colors
- 📱 Mobile-first responsive design
- 🌙 Dark mode support
- 🎯 Parallax effects and micro-interactions
- ⏱️ Live countdown timer to event
- 📊 Animated counters for statistics
- 🖼️ Bento-box style image gallery
- 🎭 Card-based layouts with hover effects
- ♿ Accessibility-focused with ARIA labels
- 🚀 Optimized for performance with Next.js 14

## Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Playfair Display, Poppins)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Customizing Content

All website content is centralized in `lib/content.ts` for easy updates. Simply edit the values in this file to update:

- Event details (dates, venue, theme)
- About section content
- Learning points
- Event highlights
- Team information
- Testimonials
- Footer information
- Images (update URLs to your own)

### Updating Images

Replace placeholder images in `lib/content.ts`:

```typescript
export const images = {
  hero: {
    background: "YOUR_IMAGE_URL",
  },
  about: {
    main: "YOUR_IMAGE_URL",
  },
  // ... etc
};
```

You can use:
- Unsplash URLs
- Your own hosted images
- Local images in the `public` folder

### Updating Colors

Brand colors are defined in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    orange: "#ea4a16",
    purple: "#424690",
  },
  secondary: {
    lavender: "#c0ccfe",
    peach: "#feebea",
  },
},
```

## Project Structure

```
tmew/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── Navigation.tsx      # Sticky nav with dark mode
│   ├── Footer.tsx          # Footer with social links
│   └── sections/
│       ├── Hero.tsx        # Hero section
│       ├── About.tsx       # About TMEW
│       ├── Learn.tsx       # What You'll Learn
│       ├── Experience.tsx  # Event Experience
│       ├── Vision.tsx      # Vision & Impact
│       ├── Team.tsx        # Founders/Team
│       ├── Outcomes.tsx    # Transformation outcomes
│       └── CTA.tsx         # Call to action
├── lib/
│   └── content.ts          # All website content
└── tailwind.config.ts      # Tailwind configuration
```

## Sections Overview

1. **Hero** - Full-screen animated gradient with event details
2. **About** - Two-column layout introducing TMEW
3. **Learn** - Grid of 7 learning points with icons
4. **Experience** - Bento-box gallery and event highlights
5. **Vision** - Impact section with animated counters
6. **Team** - Founders with hover effects
7. **Outcomes** - Before/after transformation visualization
8. **CTA** - Registration with countdown timer
9. **Footer** - Social links and contact info

## Animations

The site includes various animations powered by Framer Motion:

- Fade in on scroll
- Slide in from sides
- Scale and rotate effects
- Gradient animations
- Number counter animations
- Parallax scrolling
- Hover effects

## Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus visible states
- Alt text for images
- Screen reader friendly

## SEO

- Meta tags configured in `app/layout.tsx`
- Open Graph support
- Twitter Card support
- Semantic HTML for better indexing

## Performance

- Next.js Image component for optimized images
- Code splitting with Next.js App Router
- CSS optimized with Tailwind
- Minimal JavaScript bundle

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

This project is licensed under the ISC License.

## Support

For issues or questions, please contact the TMEW team at hello@tmew.ng

---

Built with ❤️ for students at the University of Ibadan
