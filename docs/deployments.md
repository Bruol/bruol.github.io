# CI and Cloudflare deployments

Astro builds a static site that Wrangler uploads to Cloudflare Workers static
assets. `wrangler.jsonc` configures the `bruol-website` Worker, account, static
output directory, preview URLs, and HTML 404 handling. Wrangler is pinned in
`package.json` and `bun.lock`.

## Credentials

For local deployment, run `bun install --frozen-lockfile` and `bunx wrangler login`.
For GitHub Actions, configure repository secrets:

- `CLOUDFLARE_ACCOUNT_ID`: the account ID from `bunx wrangler whoami`.
- `CLOUDFLARE_API_TOKEN`: an API token with **Account → Workers Scripts → Edit**
  permission for that account. OAuth browser login credentials are temporary and
  are not used for CI. Keep credentials out of committed files.

## Local deployment

Run `bun run deploy` to build and publish production. The default endpoint is
https://bruol-website.cloudflare-nq3v1.workers.dev.

To create a preview without changing production:

```sh
bun run build -- --site https://manual-bruol-website.cloudflare-nq3v1.workers.dev
bunx wrangler versions upload --preview-alias manual
```

## GitHub Actions

The CI workflow uses Node 22.12.0 and Bun 1.3.9, installs from the frozen lockfile,
builds Astro, and uploads `dist/` as the `site` artifact. The deployment job
uses that artifact, uploads it with Wrangler, checks the public URL, and writes
the URL into the run summary.

- Pushes to `main` deploy production with `wrangler deploy`.
- Same-repository PRs upload a version with alias `pr-N`, without promoting it
  to production. The preview is at
  `https://pr-N-bruol-website.cloudflare-nq3v1.workers.dev`.
- Fork PRs run build checks without deployment credentials.
- Manual workflow dispatch deploys production only when run on `main`.

PR builds generate social URLs for their preview host. Production uses
`https://bruol.me` as Astro's site URL. If renaming the Worker or changing the
account's workers.dev subdomain, update `wrangler.jsonc` and the corresponding
workflow environment values and URLs above.

## Custom domain

The domain `bruol.me` continues to serve Netlify until its DNS is switched.
After verifying the Worker, attach the domain under the Worker's **Settings →
Domains & Routes**. The existing `netlify.toml` is retained during the cutover;
changing the domain does not disable Netlify's GitHub integration.
