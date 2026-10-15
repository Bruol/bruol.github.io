# Personal website

Lorin Urbantat’s personal website, built with Astro and Tailwind CSS.

```sh
bun install --frozen-lockfile
bun run dev
bun run build
```

Use Node 22.12+ and Bun 1.3.9. The static build is written to `dist/`.

Five minimal black-and-white design studies are available:

| Route | Design | Palette |
| --- | --- | --- |
| `/1/` | Centered profile | Black on white |
| `/2/` | Compact horizontal profile | White on black |
| `/3/` | Bold, open layout | Black on white |
| `/4/` | Monospace centered profile | White on black |
| `/5/` | Photographic profile | Black on white |

`/` uses the first design. Every study includes navigation to all five versions.
Palettes are fixed, independent of system preferences or saved theme settings.

Edit profile information and destinations in `src/data/site.js`, layout markup in
`src/components/BrutalistHome.astro`, and styles in `src/styles/global.css`.
`src/pages/[version].astro` generates the five routes at build time. Existing
writing and CV URLs remain available.

Legacy Hugo files remain in `content/`, `layouts/`, and `static/`. Astro uses
`src/` and `public/`.
