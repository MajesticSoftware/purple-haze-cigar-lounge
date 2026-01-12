# Purple Haze Mobile Cigar Lounge

A premium Three.js website for Purple Haze Mobile Cigar Lounge - a luxury mobile cigar experience service.

## Features

- **Immersive 3D Experience**: Purple smoke particles and floating gold sparkles using Three.js and React Three Fiber
- **Modern Design**: Dark theme with purple and gold accents for a luxury feel
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: Framer Motion powered scroll animations and transitions
- **Contact Form**: Email-based contact form for booking inquiries

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **3D Graphics**: Three.js, React Three Fiber, Drei
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Deployment**: Vercel-ready

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
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Build for Production

```bash
npm run build
npm start
```

## Deployment to Vercel

This project is configured for easy deployment to Vercel:

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import the project in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build settings
4. Deploy!

Or use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## Project Structure

```
/app
  /layout.tsx      # Root layout with metadata
  /page.tsx        # Main page component
  /globals.css     # Global styles and Tailwind
/components
  /Scene3D.tsx     # Three.js 3D scene with smoke effects
  /Navigation.tsx  # Responsive navigation bar
  /Hero.tsx        # Hero section with CTA
  /About.tsx       # About section with stats
  /Services.tsx    # Services grid
  /Experience.tsx  # Experience highlights
  /Contact.tsx     # Contact form
  /Footer.tsx      # Footer component
```

## Contact

Purple Haze Mobile Cigar Lounge
- Email: phazecigars2024@protonmail.com
- Phone: (443) 406-6816

## License

Private - All rights reserved.
