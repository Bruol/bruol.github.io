# CI and Cloudflare deployments

Astro builds a static site served by the `bruol-website` Cloudflare Worker.
`wrangler.jsonc` configures the account, `dist/` assets, previews, and HTML 404
handling. Wrangler is pinned in `package.json` and `bun.lock`.

Production endpoint: https://bruol-website.cloudflare-nq3v1.workers.dev.

## Connect Cloudflare's GitHub app

Open the Worker's **Settings → Builds → Connect** in the Cloudflare dashboard.
Authorize the Cloudflare Workers & Pages GitHub app for `Bruol/bruol.github.io`,
then connect that repository to the existing `bruol-website` Worker.

Use these build settings:

| Setting | Value |
| --- | --- |
| Production branch | `main` |
| Root directory | `/` (repository root) |
| Build command | `bun install --frozen-lockfile && bun run build` |
| Deploy command | `bunx --no-install wrangler deploy` |
| Preview command | `bunx --no-install wrangler preview` |
| Preview builds | Enabled |
| Build variable `NODE_VERSION` | `22.12.0` |
| Build variable `BUN_VERSION` | `1.3.9` |

Allow Cloudflare to generate and manage its build token. GitHub Actions does not
need `CLOUDFLARE_API_TOKEN` or `CLOUDFLARE_ACCOUNT_ID`. Cloudflare builds `main`
for production and other branches as previews, and reports results on GitHub.

The GitHub app connection and build settings must be saved in Cloudflare;
committing this repository's configuration does not establish that connection.
After connecting, trigger a build from this PR's branch to verify previews,
then verify the production build after merge.

## GitHub Actions

GitHub Actions installs Node 22.12.0 and Bun 1.3.9, installs from the frozen
lockfile, builds Astro, validates the Wrangler configuration with a dry run,
and uploads `dist/` as the `site` artifact. This runs on PRs, pushes to `main`,
and manual dispatch without Cloudflare credentials. Deployment belongs to
Cloudflare Workers Builds through the GitHub app.

## Local deployment

Run `bun install --frozen-lockfile`, `bunx wrangler login`, then `bun run deploy`
to build and publish production. To build a native preview locally, run
`bun run build && bunx wrangler preview`.

Production uses `https://bruol.me` as Astro's site URL. `wrangler.jsonc` declares
`bruol.me` as a Worker custom domain so deployments preserve the domain binding.

The initial attachment is pending removal or replacement of the existing web
DNS record for `bruol.me`. Cloudflare returns error 100117 while that externally
managed record exists. Wrangler OAuth does not have DNS edit permission; complete
the domain attachment in the dashboard under **Settings → Domains & Routes**,
or remove only the conflicting A/AAAA/CNAME record through DNS settings before
redeploying. Leave mail and other unrelated DNS records intact.

The existing `netlify.toml` is retained during the cutover; attaching the domain
does not disable Netlify's GitHub integration.

Cloudflare documentation: [GitHub integration](https://developers.cloudflare.com/workers/ci-cd/builds/git-integration/github-integration/)
and [build configuration](https://developers.cloudflare.com/workers/ci-cd/builds/configuration/).
