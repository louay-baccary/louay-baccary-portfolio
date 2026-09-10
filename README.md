# Louay Baccary: Personal Site

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)

The source for [my portfolio](https://louay-baccary.vercel.app):
a résumé, project archive, and reading list, built with
[Next.js](https://nextjs.org/), [React](https://react.dev/),
[TypeScript](https://www.typescriptlang.org/), and
[Tailwind CSS](https://tailwindcss.com/).

**[Visit the live site →](https://louay-baccary.vercel.app)**

## Credit

This site is built on top of [mldangelo/personal-site](https://github.com/mldangelo/personal-site)
by Michael D'Angelo (MIT licensed), an excellent, actively maintained Next.js
portfolio template. I forked its design system, page architecture, and test
suite, then rebranded and rebuilt the content, projects, and pages around my
own work. See the [License](#license) section for the full attribution.

## What is here

- **Résumé** with real work history, skills, and certifications, plus a
  downloadable PDF.
- **Projects**, production platforms I've built and shipped, with live demo
  videos where available.
- **Books**, what I'm reading and have read, with notes and takeaways per
  book.
- A responsive light/dark design system built from semantic CSS tokens.
- A statically exported Next.js 16 site, tested end to end (components,
  content, metadata, and the final static export).

## Get started

With [nvm](https://github.com/nvm-sh/nvm) installed:

```bash
git clone https://github.com/louay-baccary/louay-baccary-portfolio.git
cd louay-baccary-portfolio
nvm install
npm ci
npm run dev
```

If you use another version manager, choose a release accepted by `engines.node`
in `package.json`.

## Commands

```bash
npm run dev             # Start the development server
npm run format          # Format with Prettier and Biome
npm run lint            # Run Biome checks
npm run type-check      # Run TypeScript
npm test                # Run Vitest
npm run build           # Build the production static export
npm run verify-export   # Inspect the generated HTML and XML
npm run og              # Regenerate the share card
npm run og:check        # Verify the committed share card is current
```

## Deploy

Deployed on [Vercel](https://vercel.com), which builds this static export
automatically on push to `main`.

## License

[MIT](./LICENSE). Original template and architecture by
[Michael D'Angelo](https://github.com/mldangelo) (see
[mldangelo/personal-site](https://github.com/mldangelo/personal-site)),
used and adapted with thanks. Content, projects, and copy on top of that
template are mine.
