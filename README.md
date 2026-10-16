# Personal website

Lorin Urbantat’s personal website, built with Astro and Tailwind CSS.

```sh
bun install --frozen-lockfile
bun run dev
bun run build
```

Use Node 22.12+ and Bun 1.3.9. The static build is written to `dist/`.

The homepage uses Arial, with the name above the portrait and profile text beside
it. The portrait is black and white, with color revealed around the cursor using a
Gaussian mask (σ = 105px). Color is strongest at the cursor and decays outward;
it fades naturally as the cursor moves past the image edges. Touch devices and
browsers without JavaScript retain the monochrome portrait.

Profile content: `src/data/site.js`. Layout: `src/components/BrutalistHome.astro`.
Styles: `src/styles/global.css`. The ETH Zurich logo is an inline SVG in
`src/components/EthLogo.astro`.

Legacy Hugo files remain in `content/`, `layouts/`, and `static/`. Astro uses
`src/` and `public/`.

## Projects

All 26 selected projects live in `src/content/projects/`. The homepage continues
into a project list in `src/components/ProjectList.astro`; rows reveal on scroll.
All links remain available without JavaScript, with reduced motion, and by keyboard.
Individual articles live at `/projects/<id>/`. `/projects/` and `/blog/` redirect
to the homepage list; legacy `/blog/<id>/` routes redirect to the matching article.

`bun run build` checks all 26 homepage links, articles, and legacy routes.
Images live in `public/projects/`. See [research notes](docs/projects-sources.md)
for sources and image provenance.
