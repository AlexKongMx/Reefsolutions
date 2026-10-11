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

## Live preview validation

- Preview: https://deploy-preview-1--reef-solutions.netlify.app
- Verified deploy `6acbc3c2c3af3500080c3c2d`, commit `276f903e464c6bdaa1f015c017465c0a09950f46`, context `deploy-preview`, PR #1.
- Git integration confirmed. Production remains baseline commit `29b718b9ffd101470091cbfd9c7b056975915139` on `main`; the redesign is unmerged.
- Live Chromium desktop (1440px) and mobile (390px) renders reviewed: no horizontal overflow, missing images or uncaught JavaScript errors.
- Four project pages, privacy, credits and thank-you return successful responses. A nonexistent URL correctly returns the custom 404 page.
- Security/CSP headers applied; Netlify adds `X-Robots-Tag: noindex` to the preview.
- Netlify detected `energy-assessment` with all nine fields and honeypot. A clearly labelled QA-only submission at 17:14:52 UTC on 11 October 2026 returned HTTP 200; the connector confirmed submission count increased from 0 to 1. No customer follow-up is required for that test.

## Before production

1. Confirm notification recipient and verify delivery to their inbox; Netlify storage is verified, email notification delivery is not.
2. Complete `CONTENT-REVIEW.md` owner decisions.
3. Check Safari/iOS and a physical Android device; browser validation used Chromium.

Do not merge main or publish production without Alex's explicit approval.
