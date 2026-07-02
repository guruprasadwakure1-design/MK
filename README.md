# Engineering Innovation Leader Portfolio

Modern responsive portfolio built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, and Lucide React.

## Features

- Apple-inspired engineering/R&D design language
- Dark/light mode with system preference
- Sticky navigation, scroll progress, back-to-top, custom desktop cursor
- Pages for home, about, experience, projects, patents, research, blog, resume, contact, and 404
- SEO metadata, Open Graph, robots, sitemap generation
- Placeholder content centralized in `data/site.ts`
- Markdown blog content folder in `content/blog`

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
```

## Customization

- Replace profile, projects, skills, patents, awards, and research in `data/site.ts`.
- Replace `public/resume.pdf` and `public/technical-portfolio.pdf` with real PDFs.
- Add blog posts to `content/blog`.
- Update `https://example.com` in `app/sitemap.ts` and `app/robots.ts`.
