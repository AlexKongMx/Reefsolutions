# REEF Solutions

Static website for REEF Solutions, Malaysia. Existing production baseline: `main`, commit `29b718b`. Redesign: `redesign/reef-brand-integration`.

## Run

```sh
python3 -m http.server 8080 --directory site
```

No build step or runtime dependencies. HTML, CSS, small progressive-enhancement JavaScript, local WebP photography and SVG branding. Edit `site/index.html`, `site/styles.css`, `site/app.js`. Optional `scripts/build-pages.py` regenerates project and information pages using the homepage header/footer. `scripts/build-brand.cjs` regenerates branding with Sharp (development only).

## Deployment

Existing Netlify project: `reef-solutions` (`69c17f33-569e-474e-b979-2e23247f7af9`). Publish directory `site`. No build command. Production: `https://reefsolutions.co`.

Deploy this branch as draft/preview only. Alex must approve production. `.netlify/` is ignored. If connecting Git continuous deployment, prevent automatic production publication while integration is under review.

## Enquiries

Static `energy-assessment` form uses Netlify Forms. Detection must be enabled and registration verified after deploy. Native HTML POST works without JavaScript; enhancement adds pending state, timeout, failure messaging and duplicate-submit prevention. Success navigation occurs only after an accepted response.

Verify a test submission in Netlify after deployment, including spam and notifications to the confirmed recipient. Mocked tests prove UI/transport behavior, not Netlify storage or email delivery.

## Review

`docs/CONTENT-REVIEW.md`: evidence and owner decisions. `docs/ASSETS.md`: provenance. `docs/QA.md`: validation and blockers. Screenshots are kept outside the published `site` directory.
