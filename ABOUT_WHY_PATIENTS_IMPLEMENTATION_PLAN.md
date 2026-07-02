# About Page — “Why Patients Choose Shanti EyeTech” Implementation Plan

## 1. Objective

Create the “Why Patients Choose Shanti EyeTech” section immediately after the About banner/hero and reproduce the supplied Figma design as closely as possible across desktop and responsive widths.

The implementation must:

- Render directly after the About banner.
- Match the Figma’s warm off-white section background, centered heading group, eight-benefit grid, icon scale, typography, spacing, and faint dotted world-map treatment.
- Preserve the exact supplied benefit copy.
- Reuse the eight existing icon assets in `public/assets/why-patients/`.
- Be responsive at `1200px`, `992px`, `768px`, `576px`, and `390px`.
- Avoid changing or breaking the existing homepage Benefits section.
- Respect reduced-motion preferences.

## 2. Current Repository State

### About-page render order

`src/pagecomponent/About/index.jsx` already renders:

1. `Hero`
2. `WhyPatients`
3. `AboutText`
4. Remaining About sections

No page-order change is required. The new UI belongs inside the existing `WhyPatients` slot.

### Empty target component

`src/component/About/WhyPatients/index.jsx` currently returns `null`. This will become the complete About-specific section component.

### Existing reusable content

The eight benefit titles and descriptions already exist in `src/pagecomponent/Home/homeData.js` under `benefits`:

1. Doctor-led eye care
2. Advanced technology
3. Patient-friendly environment
4. Personalised Attention
5. Affordable solutions
6. Central Indore location
7. Trained paramedical staff
8. Comprehensive services

The matching icons already exist as:

- `public/assets/why-patients/1.png`
- `public/assets/why-patients/2.png`
- `public/assets/why-patients/3.png`
- `public/assets/why-patients/4.png`
- `public/assets/why-patients/5.png`
- `public/assets/why-patients/6.png`
- `public/assets/why-patients/7.png`
- `public/assets/why-patients/8.png`

### Existing related implementation

The homepage contains a similar `BenefitsSection` in `src/pagecomponent/Home/index.jsx`, with styles in `src/style/globals.css` under `.benefits-*`.

This implementation is useful as a behavioral reference, but the About section should use dedicated `.about-why-*` class names. Reusing `.benefits-*` directly would couple the About design to the homepage and make pixel-level tuning risky.

## 3. Figma Design Breakdown

### Section shell

- Full-width warm off-white background, visually close to `#f5f1ed`/`#f4f0ec`.
- No visible card or outer border.
- Desktop section height approximately `590px` to `620px`, depending on viewport scaling.
- Generous top and bottom whitespace.
- Content centered in a wide desktop container.
- The banner above and the next About section below should meet this section cleanly without accidental margins.

### Heading group

- Small centered white pill: `Benefits`.
- Main heading: `Why Patients Choose Shanti EyeTech`.
- Supporting copy on two centered lines:
  - `Eight reasons why families across Indore`
  - `choose us for their eye care.`
- Heading group must remain visually compact and centered.

### Benefits grid

Desktop layout:

- Four equal columns.
- Two rows.
- Eight centered items.
- Icons sit above the titles.
- Titles use a stronger black/dark weight.
- Descriptions use smaller muted text and a constrained line width.
- Row two aligns consistently beneath row one.

### Dotted background graphic

The Figma shows a very faint dotted world-map/halftone shape behind the benefit grid.

Implementation approach:

1. First search the repository for an existing exact map/halftone asset.
2. If no exact reusable asset exists, create the effect as a section pseudo-element using a low-opacity radial-dot pattern plus CSS masking/positioning.
3. Keep it decorative with `pointer-events: none` and no accessibility announcement.
4. Ensure the dots never reduce text contrast.
5. Scale or reposition the graphic at each breakpoint rather than allowing it to crop unpredictably.

## 4. Planned File Changes

### A. `src/component/About/WhyPatients/index.jsx`

Implement these component responsibilities:

- Import `Image` from `next/image` for optimized icons.
- Import `motion` from `framer-motion` only if entrance animation is retained.
- Import shared animation constants from `src/pagecomponent/About/aboutData.js`.
- Import the benefit data from a single source of truth.
- Render semantic structure:
  - `<section>` with `aria-labelledby`.
  - Heading group with badge, `<h2>`, and paragraph.
  - List/grid for eight benefits.
  - Each benefit item containing its decorative icon, `<h3>`, and description.
- Use stable title-based keys.
- Give decorative icon images `alt=""`.
- Use `sizes` appropriate for the small icon assets.
- Keep animations subtle and disabled by the existing reduced-motion CSS.

Suggested structure:

```text
section.about-why-section
└── div.about-why-inner
    ├── header.about-why-heading
    │   ├── span.about-why-badge
    │   ├── h2#about-why-title
    │   └── p.about-why-subtitle
    └── ul.about-why-grid
        └── li.about-why-item × 8
            ├── span.about-why-icon
            │   └── Image
            ├── h3
            └── p
```

### B. `src/pagecomponent/About/aboutData.js`

Add an About-specific exported `whyPatientsContent` object or `whyPatientsBenefits` array.

Preferred approach:

- Move or copy the exact eight entries into About data only if the About page may diverge from the homepage later.
- If copy must remain globally identical, extract the shared array into a neutral constants file and import it from both pages.
- Do not duplicate slightly different spellings or punctuation.

Proposed data shape:

```js
export const whyPatientsContent = {
  badge: "Benefits",
  title: "Why Patients Choose Shanti EyeTech",
  description: [
    "Eight reasons why families across Indore",
    "choose us for their eye care."
  ],
  items: [
    { title, description, image: "/assets/why-patients/1.png" }
  ]
};
```

### C. `src/style/about.css`

Add a dedicated About Why Patients block using only `.about-why-*` selectors.

The CSS will define:

- Section background and vertical spacing.
- Desktop max-width container.
- Heading, badge, and subtitle typography.
- Four-column/two-row grid.
- Exact icon dimensions and spacing.
- Benefit title/description widths and line heights.
- Decorative dotted-map layer.
- Explicit breakpoint blocks for all requested widths.
- Reduced-motion-safe behavior.

Do not modify the existing homepage `.benefits-*` rules unless testing reveals a shared global collision.

### D. `src/pagecomponent/About/index.jsx`

No expected structural edit because `<WhyPatients />` is already immediately after `<Hero />`.

Only change this file if an ID or wrapper is required after implementation. Preserve the current section order.

## 5. Desktop Base Specification

Use the desktop/Figma composition as the base style above `1200px`.

Recommended initial values to tune against the rendered screenshot:

| Element | Desktop target |
|---|---:|
| Section padding | `82px 0 104px` |
| Inner width | `min(1500px, calc(100% - 96px))` |
| Badge height | approximately `28px` |
| Badge horizontal padding | `16px–20px` |
| Heading top gap | `20px–24px` |
| Heading size | approximately `42px–46px` |
| Heading line-height | approximately `1.1` |
| Subtitle top gap | `14px–18px` |
| Subtitle size | approximately `17px–18px` |
| Heading-to-grid gap | approximately `54px–62px` |
| Grid columns | `repeat(4, minmax(0, 1fr))` |
| Grid row gap | approximately `64px–72px` |
| Icon visual size | native `46px–58px`, normalized in a `60px` box |
| Icon-to-title gap | approximately `16px–20px` |
| Item title size | approximately `18px–20px` |
| Description size | approximately `14px–15px` |
| Description width | approximately `210px–240px` |

These values are starting targets. Final values must be adjusted from a browser screenshot at a `1920px` viewport, not accepted solely because they look plausible in CSS.

## 6. Responsive Strategy

### Breakpoint: `1200px`

Goal: preserve the desktop four-column composition while reducing horizontal density.

- Reduce the inner side gutters to approximately `40px–48px`.
- Keep four columns if each item still has at least `220px` usable width.
- Reduce heading and grid gaps slightly.
- Reduce title and description sizes only if wrapping differs materially from Figma.
- Reposition/scale the dotted map to remain centered behind both rows.

### Breakpoint: `992px`

Goal: transition cleanly from desktop to tablet.

- Change to a two-column grid with four rows.
- Set a controlled maximum width so items do not stretch excessively.
- Use larger row gaps than column gaps.
- Keep icons and text centered.
- Keep the heading paragraph to two lines where possible.
- Reduce decorative-map opacity and resize it to cover the taller grid.

Suggested grid:

```css
grid-template-columns: repeat(2, minmax(0, 1fr));
```

### Breakpoint: `768px`

Goal: compact tablet layout without crowding.

- Retain two columns.
- Reduce section padding.
- Reduce main heading to approximately `34px–38px`.
- Reduce icon boxes slightly.
- Limit item descriptions to a readable width around `200px`.
- Increase horizontal safety gutters to prevent text touching viewport edges.
- Verify no horizontal overflow at exactly `768px`.

### Breakpoint: `576px`

Goal: mobile layout with strong readability.

Preferred layout:

- Use two compact columns only if title wrapping remains readable.
- Otherwise switch to one column before content becomes cramped.
- Recommended: two columns from `576px` down to just above `390px`, with carefully reduced typography and spacing.
- Hide or greatly fade the dotted map if it creates visual noise.
- Keep heading and subtitle centered.
- Ensure each tap/reading region has enough separation even though items are not interactive.

### Breakpoint: `390px`

Goal: exact narrow-mobile safety.

- Switch to a single-column list for clarity.
- Use full-width items with a constrained inner text width.
- Reduce section side padding to approximately `16px`.
- Main heading approximately `30px–32px`.
- Subtitle approximately `14px–15px`.
- Maintain clear vertical rhythm between all eight items.
- Disable or simplify the decorative map.
- Verify no clipping, overflow, or awkward one-word title lines.

## 7. Typography Plan

The Figma screenshot indicates a clean sans-serif treatment for this section, unlike the Playfair Display hero title.

Implementation steps:

1. Inspect Figma typography panels for the badge, section heading, benefit titles, and descriptions if exact font values are available.
2. Use the project’s existing sans-serif stack if the Figma font matches it.
3. If the Figma identifies a Google font not already loaded, use `next/font/google` in the section/component rather than a remote CSS `@import`.
4. Apply font weight, size, line-height, and letter spacing independently for:
   - Badge
   - Main heading
   - Subtitle
   - Benefit titles
   - Benefit descriptions
5. Avoid inheriting the banner’s Playfair Display or Intel One Mono variables into this section.

## 8. Image and Icon Plan

- Use the eight PNG icons already in `public/assets/why-patients/`.
- Use `next/image` with explicit width/height based on each source file’s native dimensions.
- Normalize visual alignment through a fixed icon wrapper instead of distorting every asset to an identical square.
- Preserve aspect ratio with `object-fit: contain`.
- Do not add artificial colored circles because the Figma displays black icon artwork directly on the section background.
- Keep all icons decorative (`alt=""`) because the adjacent title conveys the meaning.

## 9. Animation Plan

Use animation only if it does not interfere with pixel comparison:

- Heading group: subtle fade/up reveal.
- Benefit items: staggered fade/up by row and column.
- No continuous floating, rotation, or hover motion.
- No animation that changes final dimensions or alignment.
- Honor `prefers-reduced-motion: reduce` through the existing global rule.

## 10. Accessibility Requirements

- Use one `<h2>` for the section title.
- Associate the `<section>` with the heading using `aria-labelledby`.
- Render the benefits as a semantic `<ul>` and `<li>` collection.
- Use sufficient contrast for muted descriptions.
- Decorative icons and map graphics must not be announced.
- Do not insert manual `<br>` elements into mobile item titles; allow natural wrapping.
- Keep DOM reading order identical to the visual order.

## 11. Verification Plan

### Build and code checks

- Run `npm run build`.
- Confirm there are no new lint errors.
- Treat existing unrelated `<img>` warnings separately from this implementation.
- Confirm all eight icon requests resolve successfully.

### Visual verification viewports

Capture and compare the About page at:

- `1920px` — primary Figma desktop comparison
- `1200px`
- `992px`
- `768px`
- `576px`
- `390px`

At each width verify:

- The section starts immediately after the banner.
- Badge, heading, and subtitle are centered.
- All eight items are present and ordered correctly.
- Grid columns change at the planned breakpoints.
- Icon dimensions remain proportional.
- Text wrapping is intentional and consistent.
- The dotted background does not obscure content.
- There is no horizontal scrolling.
- The next About section begins with the correct spacing.

### Pixel-tuning order

Tune in this order to avoid rework:

1. Section height and vertical padding
2. Container width
3. Heading group position and typography
4. Grid column/row placement
5. Icon size and baseline alignment
6. Item title and description wrapping
7. Dotted map size, opacity, and position
8. Responsive overrides
9. Animation timing

## 12. Implementation Stop Rules

The section is complete when:

- Desktop composition closely matches the supplied Figma at `1920px`.
- Requested breakpoints render without overflow or collisions.
- All eight items use the exact copy and correct icon.
- The homepage Benefits section is unchanged.
- `npm run build` succeeds with no new errors.
- Any remaining differences are documented as source-image/font limitations rather than silently ignored.

## 13. Expected Files Changed During Implementation

```text
src/component/About/WhyPatients/index.jsx
src/pagecomponent/About/aboutData.js
src/style/about.css
```

Potentially, only if shared data extraction is chosen:

```text
src/constant/whyPatientsContent.js
src/pagecomponent/Home/homeData.js
src/pagecomponent/Home/index.jsx
```

The shared-data extraction should only be performed if it reduces duplication without changing existing homepage output.
