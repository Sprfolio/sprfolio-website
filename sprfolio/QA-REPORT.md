# SPRFOLIO audit

All eight pages received source-level checks.

- about.html: PASS — local links/assets, IDs, headings, form labels, shared menu, font/theme inclusion, encoding
- contact.html: PASS — local links/assets, IDs, headings, form labels, shared menu, font/theme inclusion, encoding
- content-media.html: PASS — local links/assets, IDs, headings, form labels, shared menu, font/theme inclusion, encoding
- digital-products.html: PASS — local links/assets, IDs, headings, form labels, shared menu, font/theme inclusion, encoding
- index.html: PASS — local links/assets, IDs, headings, form labels, shared menu, font/theme inclusion, encoding
- publishing.html: PASS — local links/assets, IDs, headings, form labels, shared menu, font/theme inclusion, encoding
- services.html: PASS — local links/assets, IDs, headings, form labels, shared menu, font/theme inclusion, encoding
- work.html: PASS — local links/assets, IDs, headings, form labels, shared menu, font/theme inclusion, encoding

## Fixes
- Preserved full artwork on Work, Digital Products, and Content & Media with proportional images.
- Removed fixed minimum heights on Work cards; allowed text to determine height.
- Stacked About split sections earlier to avoid compressed timelines on tablets.
- Allowed product action rows, form actions, and section headings to wrap.
- Enabled native select arrows and 16px mobile form fields.
- Kept menu items from shrinking on short landscape screens; added initial inert state and close-on-desktop-resize behavior.
- Used compact header navigation through 900px to avoid crowding.
- Replaced ambiguous price symbols with “Price on request”.
- Removed template canonical/OG URLs and developer-facing placeholder prose.
- Kept validated contact form input instead of clearing unsent inquiries.

## Verification limits
No browser rendering or real-device verification was completed. The local-file browser policy previously blocked automation. Widths 320, 360, 390, 430, 600, 700, 760, 768, 820, 900, 901, 1024, 1280, 1440, and 1920px were reviewed against stylesheet breakpoints, not rendered screenshots. Cross-browser appearance remains unverified.

## Existing limitations
The contact form validates locally and does not send inquiries. All supplied social links are configured. Product buttons link to Contact; no checkout is configured.
