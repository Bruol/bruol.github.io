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
