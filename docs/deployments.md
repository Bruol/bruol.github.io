# CI and Cloudflare deployments

The static Astro site deploys to Cloudflare Pages through Wrangler. The project
name is `bruol-website`, configured in `wrangler.jsonc` and the CI workflow's
`CLOUDFLARE_PAGES_PROJECT` environment variable. Change both if using another name.

## One-time setup

1. Run `bun install --frozen-lockfile` and `bunx wrangler login`.
2. Run `bunx wrangler pages project create bruol-website --production-branch main`.
3. Add repository Actions secrets `CLOUDFLARE_ACCOUNT_ID` and
   `CLOUDFLARE_API_TOKEN`. The token needs **Account → Cloudflare Pages → Edit**
   permission for the target account. Keep credentials out of committed files.

## Deploy locally

Run `bun run deploy -- --branch main` to build and upload production. For a
manual preview, run:

```sh
bun run build -- --site https://manual.bruol-website.pages.dev
bunx wrangler pages deploy dist --branch manual
```

## GitHub Actions

The CI workflow installs Node 22.12.0 and Bun 1.3.9, installs dependencies with
the frozen lockfile, builds Astro, and uploads `dist/` as the `site` artifact.
Wrangler is pinned in `package.json` and `bun.lock`.

- Pushes to `main` deploy to `https://bruol-website.pages.dev`.
- Same-repository PRs deploy to `https://pr-N.bruol-website.pages.dev`, where N
  is the PR number. Generated social URLs point to that preview host.
- Fork PRs run the build without access to deployment credentials.
- Manual workflow dispatch on `main` builds and deploys production; dispatch
  on other branches builds only.

After each upload, CI checks the deployment URL and adds it to the run summary.
Create the Pages project and Actions secrets before running deployment jobs.

## Custom domain

The production build keeps `https://bruol.me` as Astro's site URL. Once the Pages
deployment is verified, add `bruol.me` through the Pages project's **Custom
domains** settings and follow Cloudflare's DNS instructions. The domain currently
serves Netlify until that cutover; `netlify.toml` is retained for that existing
deployment. Switching the domain does not disable Netlify's GitHub integration.
