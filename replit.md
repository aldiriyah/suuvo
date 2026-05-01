# Social Platform — Real Connections

A static Next.js landing page for a social platform emphasizing privacy, AI-powered features, and a creator-centric ecosystem.

## Architecture

- **Framework**: Next.js 15 (App Router, Static Export)
- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS v3 + Shadcn UI (Radix UI components)
- **Animations**: Framer Motion
- **No backend, no database** — fully static site

## Project Structure

```
src/
  app/
    layout.tsx         - Root layout with providers
    page.tsx           - Home page
    not-found.tsx      - 404 page
    globals.css        - Global styles + CSS variables
  components/
    providers.tsx      - TooltipProvider + Toaster wrapper
    ui/                - Shadcn UI components
  lib/
    utils.ts           - Tailwind utility helpers
  hooks/               - React hooks (use-toast, use-mobile)
  pages/
    WebsiteDesktop.tsx - Main landing page component
    sections/          - Landing page sections (Hero, Features, etc.)
public/
  figmaAssets/         - SVGs and images from Figma design
```

## Development

```bash
npm run dev    # Start dev server on port 5000
npm run build  # Build and export static files to /out
npm start      # Serve production build on port 5000
```

## Key Configuration

- `next.config.ts` — Static export (`output: "export"`), unoptimized images
- `tailwind.config.ts` — Tailwind configuration
- `components.json` — Shadcn UI configuration

## Deployment

- Target: static
- Build: `npm run build`
- Output directory: `out/`
