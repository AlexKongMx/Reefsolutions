# QA and release review — 11 October 2026

## Passed locally

- Chromium desktop 1440×1000, tablet 820×1180, mobile 390×844 and narrow mobile 320×760.
- No horizontal overflow, missing images or uncaught JavaScript exceptions across these widths.
- Axe WCAG 2 A/AA and 2.1 AA scan: no automated violations on homepage at all four widths or on the four case-study pages, privacy, credits, thank-you and 404 at 320px. This is an automated scan, not a certification of full accessibility.
- Reviewed full-page desktop and mobile renders. Fixed low contrast in model card, service card links and client-strip caption.
- Mobile navigation opens, closes on selection and closes with Escape, returning focus to its toggle.
- Homepage internal destinations and section anchors resolve. Project/information pages have one H1 and no horizontal overflow.
- Form: required-field validation; encoded form name and fields; simulated server failure preserves data and enables retry; simulated success redirects to thank-you. No real test enquiry was sent.
- Real architecture photography, documented company project photography, clean local SVG branding. Hero resized/compressed; all site imagery is local, with no base64 or third-party font/runtime requests.
- Existing static Netlify architecture retained. No build or runtime dependencies added.

## Live checks still required

The existing Netlify site is `reef-solutions` (`69c17f33-569e-474e-b979-2e23247f7af9`). Git integration was confirmed on 11 October 2026: production deploy `6acbbbb44b7e81b348c0fe81` references the unchanged baseline commit `29b718b9ffd101470091cbfd9c7b056975915139` on `main`. PR #1 is ready for review; its redesign branch remains unmerged. Deploy Preview generation and live validation are being checked separately.

1. Enable a preview for this PR on the existing Netlify site, or upload `site/` as a draft deploy through an authorized Netlify session. Keep the published production deploy unchanged.
2. Confirm preview routing, response headers/CSP, assets and form detection (`energy-assessment`).
3. Send a clearly labelled test enquiry and verify Netlify storage and delivery to the owner-confirmed recipient. Preview form registration/notifications depend on Netlify settings; mocked tests do not prove delivery.
4. Check Safari/iOS and a physical Android device; local browser validation used Chromium only.
5. Complete `CONTENT-REVIEW.md` owner decisions before production.

Do not merge main or publish production without Alex's explicit approval.
