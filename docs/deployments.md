# CI and deployments

GitHub Actions runs `bun install --frozen-lockfile` and `bun run build` on
pull requests and pushes to `main`. The `CI / Build Astro site` check uploads
the built `dist/` directory as the `site` artifact. Both workflows explicitly
install Node 22.12.0 and Bun 1.3.9.

## Netlify

The production site at https://bruol.me is hosted by the Netlify project
[`bruol`](https://app.netlify.com/projects/bruol), connected to this repository.
Netlify builds `main` for production. Enable Deploy Previews for pull requests
in the project's **Build & deploy → Continuous deployment** settings.

`netlify.toml` defines the build command, `dist/` publish directory, runtimes,
and frozen dependency installation. Deploy Preview and branch builds use
`DEPLOY_PRIME_URL` as Astro's site URL so generated social URLs point to
that deployment. The production build uses `https://bruol.me`.

For a pull request numbered N, the preview URL is
`https://deploy-preview-N--bruol.netlify.app`. Check the Netlify deploy state
and open the preview before merging; a successful GitHub CI build alone does
not establish that Netlify deployed it. Native Netlify previews require no
Netlify token in GitHub Actions.

## GitHub Pages

The `Deploy Astro site to GitHub Pages` workflow builds Astro and publishes
`dist/` on pushes to `main` or manual dispatch. In repository **Settings →
Pages → Build and deployment**, the source must be **GitHub Actions**.
The legacy branch-based source invokes Jekyll and fails on this Astro project.
GitHub Pages is a secondary deployment; PR previews run on Netlify.
