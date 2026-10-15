# Project research notes

Researched on 2026-10-15. The public articles live in `src/content/projects/`.
All 26 entries marked `include: true` in the supplied selection are included; excluded projects have no standalone posts.

## Source hierarchy

- Public repository code and reports support technical descriptions. A fork or upstream project is identified as such rather than attributed wholesale to Lorin.
- `public/other/cv.pdf` supports roles, dates, Morph Tales analytics responsibilities, and the CesBot 1,000-user milestone. That milestone is not described as a live count.
- The SCION and Unikraft PDFs already in `public/other/` were read for implementation and evaluation details. SCION's bibliography also identifies the separate `Bruol/traffic_gen` repository.
- The Thinking Outside the Bias repository includes the linked paper, experiment outputs, and pipeline image.
- ETH's Morph Tales page supplies the installation context; the CV supplies individual contribution.
- Flateroo's live public interface was inspected at `https://flateroo.com/`. Local application and transcoding code corroborate the stack and media pipeline.
- Electomate's current page at `https://opendemocracy.ai/electomate` was read in the browser (the text fetcher could not access it). Its present-day features are distinguished from Lorin's 2024 involvement.
- Local CesBot, CEMETS, SQL fuzzer, and SQL reducer source and reports were reviewed. No private repository links, credentials, or internal service addresses are published. SQL benchmark results are scoped to the supplied evaluation targets and corpus.

## Deliberate corrections and boundaries

- TLDR's current README documents retirement of the old Fly.io app. The post links the live `https://tldr.bruol.me/` archive and explains both deployments.
- The GitHub activity script collects JSON; it does not automatically write the README digest.
- ESP32 e-ink is vendor-demo-based bring-up, not an original display-driver claim.
- The gas counter publishes pulses; persistent accumulation and volume calibration happen elsewhere.
- The Wi-Fi thermometer README says 16x2 while the source constructs a 20x4 LCD; the article records that discrepancy.
- HCI code credits Fabius Grünhagen. The post describes collaborative participation rather than sole code authorship.

## Image provenance

- CesBot: real shared-browser captures after the user signed in. The chat screenshot excludes the account sidebar. The citation capture shows the source viewer, with the account area covered by the modal. The private application URL is absent from published content.
- Flateroo: supplied English App Store screenshots, resized and encoded as JPEG for web delivery.
- CEMETS: supplied local application screen montage.
- Phone Message, Drifa, and Thinking Outside the Bias: images from their respective public repositories.

## Public repository revisions inspected

| Repository | Commit |
| --- | --- |
| `BGP-Project` | `4a7a32cf28d63c97e888f6af16e4c9e7a8d1e78e` |
| `ThinkOutsideTheBias` | `6aa1a8e9444cffb1a9d246aa05b8492dbb6bebe0` |
| `bruol` | `d224ad57f2a39593ce01e438ef4deaffdf965b74` |
| `cloudflare-smtp` | `39b6e3eee8c139496323f6406349d7651c94d26a` |
| `drifa-poster` | `ae59d647f21f07297b79fd57c54a0df1aa975e9e` |
| `eink` | `36f13de823fee4b7dada179ada08785c82f0cba5` |
| `hifi-prototype` | `7f8ccab5ed037dc00b81f88e0d3998e71202298d` |
| `kubernetes-cluster` | `2c8fbdd5ba8f084b79d56c54384b1e6a4ef9801f` |
| `mqtt-gas-counter` | `4c2efd545109420fae3d12bb98f6e1d688c5818e` |
| `phoneMessage` | `735213fd62285991c3f88d28dc4b3751e05d5084` |
| `scrape_wiki_ja_election_data` | `7326734fc15129bd39697783f1010e468ae4a49e` |
| `seed-emulator` | `61acdf4c9699b25b06843ec4aad747108b05924e` |
| `soundtriggerer` | `11725f6ecc2269ad602c92eec86f6db95598bbe7` |
| `tldr-queens_of_the_dragathon` | `41b2d141532e67d460d8527af14955ddffd748fc` |
| `traffic_gen` | `3c9d39762a438b9e55a4f96caf3b2344a714757f` |
| `unikraft` | `675bc31fd02fae440fa8c8469fe6113d0c6116e2` |
| `url-shortener-cf` | `f044831f45f059dba983874185d7a1d43050cfca` |
| `wifi_thermometer` | `202cc914f554a63f7eeb39227a3db03f11f2367c` |
| `zinkbad_calendar` | `07d8c533bbf1d94cb4e3dd974e2dea1e7466259d` |
