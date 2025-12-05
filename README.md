# Adnan Yonathan - Portfolio

A modern, professional landing page built with Next.js 14, showcasing entrepreneurial ventures, app development projects, and expertise.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Features

- **Modern Design**: Clean, professional dark theme with purple/indigo gradient accents
- **Responsive**: Mobile-first design that works on all devices
- **Animations**: Smooth scroll reveals, animated counters, and micro-interactions
- **Performance**: Optimized with Next.js for fast loading and SEO

## Sections

- **Hero**: Eye-catching introduction with animated stats
- **About**: Personal story and skill highlights
- **Projects**: Featured projects (Delta AI, No-Code Academy, SaaS portfolio)
- **Ventures**: Overview of business initiatives
- **Contact**: Call-to-action with social links

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Development

Open [http://localhost:3000](http://localhost:3000) to view the site in development mode.

## Project Structure

```
├── app/
│   ├── globals.css      # Global styles and Tailwind
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Home page
├── components/
│   ├── Navigation.tsx   # Nav bar with mobile menu
│   ├── Hero.tsx         # Hero section with stats
│   ├── About.tsx        # About section
│   ├── Projects.tsx     # Projects showcase
│   ├── Ventures.tsx     # Ventures grid
│   ├── Contact.tsx      # Contact CTA and socials
│   ├── Footer.tsx       # Footer
│   └── AnimatedCounter.tsx
├── public/              # Static assets
├── tailwind.config.ts   # Tailwind configuration
└── package.json
```

## Customization

- **Colors**: Edit theme in `tailwind.config.ts`
- **Content**: Update text in component files
- **Social Links**: Replace URLs in `Contact.tsx`

## Deployment

Deploy easily to Vercel:

```bash
npx vercel
```

Or build and deploy to any static hosting:

```bash
npm run build
npm run start
```

## License

MIT License - Feel free to use and modify for personal or commercial use.
