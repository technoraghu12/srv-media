Accessibility & Conversion Summary

What I changed to meet the guidelines:
- Removed Bootstrap CSS/JS includes to use custom CSS only (kept Owl Carousel and Swiper).
- Replaced a few layout classes with a lightweight responsive grid in `styles.css` (simple `.row` and `.col-*`).
- Added a Skip link (`.skip-link`) and set the `lang` attribute on `<html>`.
- Replaced Bootstrap tabs with an accessible tablist (role=tablist, role=tab, role=tabpanel) with keyboard support in `js/custom.js`.
- Added ARIA roles and labels to carousels (`role="region" aria-label=...`) and keyboard handlers and pause-on-focus/hover behavior.
- Made the hero "marquee" pauseable via a visible control (play/pause) and pause-on-hover/focus. Also added `prefers-reduced-motion` support.
- Added meaningful `alt` attributes to images, and marked decorative images with `alt="" aria-hidden="true"`.
- Improved Swiper config to enable a11y and keyboard interaction.
- Stopped autoplay if the user prefers reduced motion (JS check using `matchMedia`).

Notes & Recommended QA steps:
1. Run the site in latest Chrome, Firefox, Safari, and Edge on desktop & mobile to verify layout and sliders.
2. Use Lighthouse / axe DevTools in Chrome to scan for remaining accessibility issues.
3. Test keyboard navigation: Tab through header, skip link, tablist, carousels (use arrow keys to move slides), and ensure focus states are visible.
4. Test `prefers-reduced-motion` by setting it in OS preferences and confirm all motion/autoplay is disabled.
5. Validate HTML/CSS (W3C validator) and fix remaining structural warnings.

Files touched:
- `index.html` (removed Bootstrap, added skip link, ARIA, alt tags, accessible tabs, hero controls)
- `styles.css` (responsive grid, skip-link styles, pause rules, hero control styles, reduced-motion handling)
- `js/custom.js` (carousel accessibility: pause on focus/hover, keyboard support, tablist keyboard behavior, Swiper a11y, prefers-reduced-motion stop)

If you'd like, I can:
- Run an automated axe scan and return a short report (requires a headless browser environment).
- Convert all class names to strict BEM naming.
- Add unit/integration tests for accessibility behaviors (e.g., keyboard interactions).

