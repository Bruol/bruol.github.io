# bruol.me

Lorin Urbantat’s personal website, built with Astro and Tailwind CSS.

## Development

```sh
bun install
bun run dev
```

```sh
bun run build
bun run preview
```

The production site is generated into `dist/`.

## Projects

The 26 project posts live in `src/content/projects/`. Astro validates their metadata
through `src/content.config.ts` and generates `/projects/` and `/projects/<id>/`.
The index supports client-side search and topic filtering; all posts and links
remain available without JavaScript.

Each Markdown post has a title, description, category, role, sort order, technology
tags, optional period and index image, and resource links. Posts keep the copy brief and link to sources for more detail. Images live in
`public/projects/`.

See [project research notes](docs/projects-sources.md) for sources, inspected
repository revisions, image provenance, and editorial decisions.

The existing `/blog/` URL redirects to the complete project index, and
`/blog/<project>/` links redirect to their matching `/projects/<project>/` article.
`bun run build` verifies that every one of the 26 approved projects has an index
link, generated article, and compatible blog URL.
