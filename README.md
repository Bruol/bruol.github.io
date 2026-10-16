# Personal website

Lorin Urbantat’s personal website, built with Astro and Tailwind CSS.

```sh
bun install --frozen-lockfile
bun run dev
bun run build
```

Use Node 22.12+ and Bun 1.3.9. The static build is written to `dist/`.

Six font comparisons use the selected version 8 layout: name above the portrait, with profile text beside it.

| Route | Font |
| --- | --- |
| `/1/` | Original (Arial) |
| `/2/` | Melloida |
| `/3/` | Reflow Sans |
| `/4/` | Molend |
| `/5/` | Karia |
| `/6/` | Science Gothic |

`/` keeps the original font. All versions share content, layout, and type sizes.
The uploaded portrait is shown in color at each numbered route; append `/bw/`
(for example `/1/bw/`) for black and white. Font links preserve the photo choice.
The comparison navigation uses Arial so the font names remain easy to scan.

Profile content: `src/data/site.js`. Font choices: `src/data/fonts.js`.
Layout: `src/components/BrutalistHome.astro`. Styles: `src/styles/global.css`.
The supplied font files and accompanying license/readme files are in `public/fonts/`.
Melloida, Reflow Sans, Molend, and Karia are personal-use fonts; Science Gothic
uses the SIL Open Font License. The bundled files retain their original contents.

Legacy Hugo files remain in `content/`, `layouts/`, and `static/`. Astro uses
`src/` and `public/`.
