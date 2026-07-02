# About Page Responsive Implementation Plan

## Goal
Create a fully responsive About page using consistent media queries at `1200px`, `992px`, `768px`, `576px`, and `390px` across every About section. Use browser-agent verification at each breakpoint to compare the implemented UI against the Figma layout and catch spacing, overlap, clipping, and typography issues.

## Current About Page Sections
The About page renders these sections from `src/pagecomponent/About/index.jsx`:

1. `Hero`
2. `WhyPatients`
3. `AboutText`
4. `KnowYourDoctor`
5. `Testimonials`
6. `FAQ`
7. `AboutCTA`

Primary responsive CSS lives in `src/style/about.css`.

## Current Breakpoint Gap
Several sections already use the requested breakpoints, but the file also contains older responsive rules at `1100px`, `760px`, and `480px`. The implementation should normalize the About page responsive system to:

- `1200px`
- `992px`
- `768px`
- `576px`
- `390px`

Existing non-standard breakpoints should be migrated or removed only after their behavior is represented in the new breakpoint set.

## Browser-Agent Verification Workflow
Use the running local site at `http://localhost:3000/about`.

Recommended browser-agent commands:

```bash
agent-browser open http://localhost:3000/about
agent-browser wait --load networkidle
agent-browser screenshot --full about-desktop.png
```

For each viewport width, capture a screenshot and inspect the full page:

```bash
agent-browser viewport 1200 900
agent-browser open http://localhost:3000/about
agent-browser wait --load networkidle
agent-browser screenshot --full about-1200.png

agent-browser viewport 992 900
agent-browser screenshot --full about-992.png

agent-browser viewport 768 900
agent-browser screenshot --full about-768.png

agent-browser viewport 576 900
agent-browser screenshot --full about-576.png

agent-browser viewport 390 844
agent-browser screenshot --full about-390.png
```

If `agent-browser viewport` is unavailable in this environment, use the equivalent browser resize command supported by the installed browser-agent version, or run the same checks manually in the browser devtools device toolbar.

## Section-by-Section Plan

### 1. Hero / Banner
Files:

- `src/component/About/Hero/index.jsx`
- `src/style/about.css`

Implementation tasks:

- Preserve the Figma desktop composition: logo/nav at top, content on the left, doctor/background image on the right, stat cards over the lower image area.
- Make the left content and right image area end at the same visual height.
- At `1200px`, reduce heading size and keep image/card alignment without covering the title.
- At `992px`, shift to a tighter two-column layout or begin stacking if the image overlaps text.
- At `768px`, stack the content above the image area and keep the stat cards readable.
- At `576px`, reduce logo/nav scale, button size, image height, and stat card typography.
- At `390px`, use a compact single-column hero with no horizontal overflow.

Acceptance checks:

- Title is never hidden by the doctor image.
- Doctor/background image does not crop awkwardly.
- Stat cards remain visible, readable, and glassmorphic.
- No horizontal page scroll.

### 2. Why Patients
Files:

- `src/component/About/WhyPatients/index.jsx`
- `src/style/about.css`

Implementation tasks:

- Keep the centered heading and benefit grid aligned with Figma.
- Confirm existing `1200/992/768/576/390` rules cover all card sizes, icons, and spacing.
- At tablet/mobile widths, ensure cards wrap predictably and do not overlap the section artwork.

Acceptance checks:

- Grid items are readable at all requested widths.
- Section background artwork stays decorative and does not cover text.
- Card spacing remains consistent.

### 3. About Text
Files:

- `src/component/About/AboutText/index.jsx`
- `src/style/about.css`

Implementation tasks:

- Normalize any responsive rules to the requested breakpoint set.
- Keep text blocks readable with comfortable max-widths.
- Reduce large vertical padding on smaller devices.

Acceptance checks:

- Text does not become too wide on tablet.
- Text does not feel cramped on mobile.
- Section transitions cleanly into the next section.

### 4. Know Your Doctor
Files:

- `src/component/About/KnowYourDoctor/index.jsx`
- `src/style/about.css`

Implementation tasks:

- Preserve desktop image/card composition.
- At `1200px` and `992px`, reduce card widths and adjust grid gaps.
- At `768px`, move to a stacked layout.
- At `576px` and `390px`, ensure doctor image, credential cards, and CTA button fit without overlap.

Acceptance checks:

- Doctor image is not clipped badly.
- Info cards remain readable.
- CTA button stays visible and aligned.

### 5. Testimonials
Files:

- `src/component/About/Testimonials/index.jsx`
- `src/style/about.css`

Implementation tasks:

- Replace older `992/576`-only tuning with complete rules for `1200/992/768/576/390`.
- Verify carousel card width, rotations, slide padding, and heading sizing at every breakpoint.
- Ensure cards do not overflow the viewport on `390px`.

Acceptance checks:

- Carousel remains usable on touch devices.
- No card is clipped horizontally.
- Heading and cards keep Figma spacing.

### 6. FAQ
Files:

- `src/component/About/FAQ/index.jsx`
- `src/style/about.css`

Implementation tasks:

- Keep the two-column FAQ layout on desktop.
- At `992px`, stack callout and FAQ list cleanly.
- At `768px`, reduce heading and question row heights.
- At `576px` and `390px`, keep accordion buttons easy to tap and prevent text overflow.

Acceptance checks:

- Accordion remains accessible and tappable.
- Background image does not overpower the FAQ content.
- Expanded answers do not create layout jumps that hide following content.

### 7. About CTA
Files:

- `src/component/About/CTA/index.jsx`
- `src/style/about.css`

Implementation tasks:

- Add a `768px` rule because the CTA currently uses `1200`, `992`, `576`, `390`, plus an older `480px` rule.
- Replace `480px` with `576px` and `390px` behavior.
- Ensure floating `cta_image1.png` and `cta_image2.png` remain visible after `top: -85px` and do not clip at small widths.
- Keep headline gradient and button centered.

Acceptance checks:

- CTA images are visible above the panel at desktop/tablet.
- CTA text does not overlap images.
- Button remains centered and tappable.
- No horizontal overflow.

## Implementation Order

1. Start local dev server if needed: `npm run dev -- -p 3000`.
2. Capture current screenshots at `1200`, `992`, `768`, `576`, and `390`.
3. Normalize hero breakpoints first because it has the largest visual impact.
4. Normalize CTA breakpoints second because it has recent custom positioning.
5. Normalize Testimonials and Know Your Doctor.
6. Verify Why Patients, About Text, and FAQ against the requested breakpoint set.
7. Run browser-agent screenshots again at every width.
8. Run `npm run build`.
9. Fix any regressions found in screenshots or build output.

## Final Verification Checklist

- `npm run build` passes.
- `/about` loads successfully.
- Screenshots captured at `1200`, `992`, `768`, `576`, and `390`.
- No horizontal scrolling at any breakpoint.
- No text overlap or clipping.
- Images do not hide section titles.
- Buttons remain tappable and visually aligned.
- Glassmorphism cards keep consistent blur, border, and shadow.
- All sections transition cleanly into the next section.