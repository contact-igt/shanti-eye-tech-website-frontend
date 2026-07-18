# About Page Responsive Media Query Arrangement Plan

## Goal

Arrange the About page responsive CSS so every section follows one clean mobile-down breakpoint order:

1. `@media (max-width: 1400px)`
2. `@media (max-width: 1200px)`
3. `@media (max-width: 992px)`
4. `@media (max-width: 768px)`
5. `@media (max-width: 576px)`
6. `@media (max-width: 390px)`

This plan is only for arranging the existing responsive code. It should not change the current design values, selectors, JSX structure, images, content, or component behavior.

## Source Checked

About page render order:

- `src/pagecomponent/About/index.jsx`

About page section CSS files:

- `src/component/About/Hero/styles.module.css`
- `src/component/About/WhyPatients/styles.module.css`
- `src/component/About/AboutText/styles.module.css`
- `src/component/About/KnowYourDoctor/styles.module.css`
- `src/component/About/Testimonials/styles.module.css`
- `src/component/About/FAQ/styles.module.css`
- `src/component/About/CTA/styles.module.css`

## Current Issue

The About section CSS files contain responsive blocks in mixed positions. Some responsive rules are already near the upper responsive area, while more duplicate breakpoint blocks are placed later at the bottom of the same file.

Examples found:

- `Hero/styles.module.css` has several older/custom blocks such as `1500px`, `1100px`, and `760px`, followed later by canonical `1200px`, `992px`, `768px`, `576px`, and `390px` blocks, plus extra duplicate `576px`, `390px`, and `760px` blocks near the bottom.
- `WhyPatients/styles.module.css` has canonical breakpoints, then another set of `992px`, `768px`, `576px`, `390px`, then another `1200px` through `390px` group, plus extra small-screen blocks near the bottom.
- `AboutText/styles.module.css`, `KnowYourDoctor/styles.module.css`, `Testimonials/styles.module.css`, `FAQ/styles.module.css`, and `CTA/styles.module.css` also have repeated breakpoint groups.
- `CTA/styles.module.css` includes a `480px` block that should be reviewed and merged into either `576px` or `390px` if the same selector/property behavior can be preserved.

Because CSS media queries cascade by file order, the duplicated bottom blocks can override earlier top responsive rules. The correction should keep the same declarations but place them under the correct breakpoint group.

## Required Arrangement Rule

For each About section CSS file:

1. Keep all default desktop/base styles first.
2. Move all responsive media queries after the base styles.
3. Use this exact descending max-width order:
   - `1400px`
   - `1200px`
   - `992px`
   - `768px`
   - `576px`
   - `390px`
4. Put every duplicate responsive declaration into its matching breakpoint group.
5. Preserve declaration order inside the same breakpoint when two existing rules target the same selector and property, so the current cascade result does not change.
6. Do not delete a duplicate declaration unless it is exactly repeated and removing it produces the same computed CSS.
7. Avoid introducing new breakpoints unless the existing section already requires one and it cannot be safely merged.

## Section-by-Section Plan

### 1. Hero

File:

- `src/component/About/Hero/styles.module.css`

Plan:

- Add or normalize a `1400px` group at the top of the responsive area.
- Move current `1200px`, `992px`, `768px`, `576px`, and `390px` rules into one ordered responsive section.
- Review existing `1500px`, `1100px`, and `760px` blocks:
  - Move `1500px` behavior into `1400px` only if it is intended for the requested top breakpoint.
  - Move `1100px` behavior into `1200px` or `992px` depending on the selector purpose.
  - Move `760px` behavior into `768px`.
- Merge bottom duplicate `576px` and `390px` blocks into the main `576px` and `390px` groups.
- Keep navbar, banner, image, dropdown, button, and mobile menu behavior unchanged.

### 2. Why Patients

File:

- `src/component/About/WhyPatients/styles.module.css`

Plan:

- Keep base section, heading, cards, grid, and background styles first.
- Create one ordered responsive section from `1400px` down to `390px`.
- Move repeated lower blocks into the matching breakpoint:
  - Existing duplicate `992px` rules into the main `992px` group.
  - Existing duplicate `768px` rules into the main `768px` group.
  - Existing duplicate `576px` rules into the main `576px` group.
  - Existing duplicate `390px` rules into the main `390px` group.
- Preserve card width, icon size, background size, and mobile spacing values.

### 3. About Text

File:

- `src/component/About/AboutText/styles.module.css`

Plan:

- Keep default About text layout styles first.
- Add a `1400px` media group if any existing large-screen adjustment belongs there.
- Consolidate the repeated `1200px`, `992px`, `768px`, `576px`, and `390px` groups.
- Move all bottom responsive declarations into the matching top breakpoint group.
- Preserve heading, paragraph, spacing, and section width values.

### 4. Know Your Doctor

File:

- `src/component/About/KnowYourDoctor/styles.module.css`

Plan:

- Keep base doctor section layout and image/content styles first.
- Create one ordered responsive section:
  - `1400px`
  - `1200px`
  - `992px`
  - `768px`
  - `576px`
  - `390px`
- Merge duplicate `1200px`, `992px`, `768px`, `576px`, and `390px` blocks currently lower in the file.
- Preserve the desktop two-column layout, mobile stacked layout, stat cards, dropdown/button sizing, and image wrapper sizing.

### 5. Testimonials

File:

- `src/component/About/Testimonials/styles.module.css`

Plan:

- Keep base testimonial, slider, card, quote, and decorative pin styles first.
- Consolidate duplicate responsive groups into the requested breakpoint order.
- Keep `@media (prefers-reduced-motion: reduce)` separate from width breakpoints because it is not a layout breakpoint.
- Preserve Swiper/card sizing and the responsive breakpoint behavior already defined in `src/component/About/Testimonials/index.jsx`.

### 6. FAQ

File:

- `src/component/About/FAQ/styles.module.css`

Plan:

- Keep base FAQ section, wrapper, accordion, image/background, and typography styles first.
- Merge duplicate `1200px`, `992px`, `768px`, `576px`, and `390px` groups into one ordered responsive section.
- Add `1400px` only if there is an existing large-screen rule that belongs in that range.
- Preserve accordion spacing, icon alignment, section background, and mobile text sizing.

### 7. CTA

File:

- `src/component/About/CTA/styles.module.css`

Plan:

- Keep base CTA section, background image, content, buttons, and decorative image styles first.
- Consolidate repeated `1200px`, `992px`, `768px`, `576px`, and `390px` blocks.
- Review the existing `480px` block:
  - If the same result can be kept at `576px`, merge it into `576px`.
  - If it is specifically for very narrow devices, merge it into `390px`.
  - If neither merge is safe, leave a small comment explaining why `480px` remains.
- Preserve image positions, CTA button layout, and mobile stacking.

## Implementation Steps

1. Open each About section `styles.module.css` file.
2. Mark all existing responsive blocks by breakpoint.
3. Create one final responsive area after base styles in this order:
   - `@media (max-width: 1400px)`
   - `@media (max-width: 1200px)`
   - `@media (max-width: 992px)`
   - `@media (max-width: 768px)`
   - `@media (max-width: 576px)`
   - `@media (max-width: 390px)`
4. Move declarations from collapsed/bottom duplicate blocks into the correct breakpoint group.
5. Within each breakpoint, keep selector order as close as possible to current cascade order.
6. Compare before/after CSS carefully to confirm no selector or declaration was lost.
7. Run a production build after the arrangement.
8. Check the About page manually at these viewport widths:
   - `1440px`
   - `1366px`
   - `1200px`
   - `992px`
   - `768px`
   - `576px`
   - `390px`
   - `360px`

## Validation Checklist

- About page still renders all sections in the same order.
- No JSX files are changed.
- No design values are intentionally changed.
- No responsive declarations remain duplicated at the bottom outside the canonical breakpoint order.
- All section CSS files use the same breakpoint order.
- `760px` rules are moved into `768px` where safe.
- `1100px` rules are moved into `1200px` or `992px` based on current cascade needs.
- `480px` rules in CTA are reviewed and merged if safe.
- `prefers-reduced-motion` remains separate.
- Build passes with `npm run build`.

## Expected Result

The About page CSS remains visually the same, but every section has a clean, predictable responsive structure. The media queries are arranged from larger screens to smaller screens, duplicate collapsed responsive code is placed into the correct breakpoint, and future responsive corrections can be made section by section without bottom-of-file overrides causing confusion.
