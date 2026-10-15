import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

// The user's approved selection, independent of the content collection loader.
const selected = [
  'cesbot', 'morph-tales', 'flateroo', 'electomate',
  'scion-test-environment', 'tldr', 'kubernetes-homelab', 'personal-website',
  'github-activity-digest', 'unikraft-raspberry-pi-5', 'cloudflare-smtp', 'short',
  'esp32-eink', 'drifa-poster', 'phone-message', 'thinking-outside-the-bias',
  'zinkbad-calendar', 'hci-prototype', 'bgp-routeviews', 'keyboard-sound-trigger',
  'mqtt-gas-counter', 'japanese-election-scraper', 'wifi-thermometer', 'cemets-app',
  'sql-ast-research', 'database-query-reduction',
];

const index = await readFile(new URL('../dist/projects/index.html', import.meta.url), 'utf8');
for (const slug of selected) {
  assert(index.includes(`href="/projects/${slug}/"`), `Missing project index link: ${slug}`);
  const page = await readFile(new URL(`../dist/projects/${slug}/index.html`, import.meta.url), 'utf8');
  assert(page.includes('class="project-prose"'), `Missing project article: ${slug}`);
  assert(!page.includes('cesbot.ces.ethz.ch'), `Private CesBot URL published in ${slug}`);
}
assert.equal((index.match(/data-category=/g) ?? []).length, selected.length, 'Project index must contain all 26 selected projects');
console.log(`Verified all ${selected.length} selected projects: index links and individual articles.`);
