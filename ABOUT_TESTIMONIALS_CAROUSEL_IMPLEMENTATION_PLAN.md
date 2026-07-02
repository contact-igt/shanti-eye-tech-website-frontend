# About Page — Pinned Testimonials Carousel Implementation Plan

## 1. Objective

Create the testimonial section shown in the supplied Figma immediately after the About page’s “Know Your Doctor” section.

The finished section must:

- Match the Figma’s centered editorial heading and pinned-paper testimonial cards.
- Use `react-slick` version `0.30.3`.
- Autoplay continuously and loop infinitely.
- Use the supplied pin images:
  - `/assets/about/testimonial_pin1.png`
  - `/assets/about/testimonial_pin2.png`
  - `/assets/about/testimonial_pin3.png`
  - `/assets/about/testimonial_pin4.png`
- Preserve the intentional card rotations and staggered vertical positions.
- Show partial cards at the left and right viewport edges on large screens.
- Be responsive at `1200px`, `992px`, `768px`, `576px`, and `390px`.
- Respect reduced-motion preferences and remain keyboard/touch accessible.
- Avoid changing the existing homepage testimonial design.

## 2. Current Repository State

### About-page order

`src/pagecomponent/About/index.jsx` already renders the correct sequence:

1. `Hero`
2. `WhyPatients`
3. `AboutText`
4. `KnowYourDoctor`
5. `Testimonials`
6. `FAQ`

The testimonial component is therefore already positioned immediately after “Know Your Doctor.” No page-order change should be needed.

### Empty target component

`src/component/About/Testimonials/index.jsx` currently returns `null` and will become the complete carousel implementation.

### Existing assets

The required pin PNGs are already available:

```text
public/assets/about/testimonial_pin1.png  167 × 333
public/assets/about/testimonial_pin2.png  141 × 331
public/assets/about/testimonial_pin3.png  188 × 220
public/assets/about/testimonial_pin4.png  232 × 359
```

The PNG canvases are taller than the visible pin heads and contain transparent space/shadow. They should be rendered with `object-fit: contain` and positioned absolutely over each card rather than used as ordinary inline images.

### Existing testimonial implementation

The homepage includes a separate static testimonial grid in:

- `src/pagecomponent/Home/index.jsx`
- `src/pagecomponent/Home/homeData.js`
- `src/style/globals.css` under `.testimonials-*`

That implementation should not be reused directly because this About design has different content, typography, card geometry, pin artwork, rotations, and carousel behavior.

The About section will use dedicated `.about-testimonials-*` selectors to avoid collisions.

### Package state

Neither `react-slick` nor `slick-carousel` is currently installed.

## 3. Required Dependencies

Install the exact requested React Slick version and its CSS peer package:

```bash
npm install react-slick@0.30.3 slick-carousel
```

Expected `package.json` additions:

```json
{
  "dependencies": {
    "react-slick": "^0.30.3",
    "slick-carousel": "^1.8.1"
  }
}
```

If strict version locking is preferred, use `"0.30.3"` for `react-slick` rather than a caret range.

## 4. Slick CSS Integration

This repository uses the Next.js Pages Router. Slick’s global CSS should be imported from `src/pages/_app.jsx`, alongside the existing global stylesheet:

```js
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/style/globals.css";
```

Importing these files in `_app.jsx` avoids Next.js global-CSS import restrictions.

Most default Slick dots/arrows will be disabled, so About-specific CSS in `src/style/about.css` will override only the track, list, slide spacing, transitions, and overflow behavior required by the Figma.

## 5. Data Model

Add an About-specific export to `src/pagecomponent/About/aboutData.js`.

Suggested structure:

```js
export const aboutTestimonialsContent = {
  badge: "Client Testimonials",
  title: ["You’re Not Alone,", "Hear From Others Like You"],
  items: [
    {
      id: "emily-carson",
      name: "Emily Carson",
      quote: "...",
      pin: "/assets/about/testimonial_pin1.png",
      rotation: -4.5,
      offset: 12
    }
  ]
};
```

Each testimonial should include:

- Stable unique `id`
- Patient/client name
- Quote
- Pin image path
- Desktop card rotation
- Optional vertical offset
- Optional accent color matching the pin/name treatment

Use at least six unique testimonials so the infinite carousel does not visibly repeat adjacent cards at desktop widths. React Slick will create its own cloned slides for looping; do not manually duplicate data solely to simulate infinity.

## 6. Figma Content Plan

Use the visible Figma copy as the initial content source:

### Emily Carson

> Therapy changed my life. After years of hiding my anxiety, I finally opened up — and I’m so grateful I did. My counselor was incredibly kind and supportive.

### Marcus Lane

> The online sessions made it so easy to get help without stepping out of my comfort zone. I felt just as connected and cared for.

### Hannah Mitchell

> After losing my father, I struggled deeply. My grief therapist helped me find space for the pain, without letting it define me.

### Daniel Rivera

> I was going through a very difficult breakup, and counseling gave me the tools to heal. I felt safe, heard, and respected from day one.

The site is an eye-care website, while the supplied Figma testimonial copy describes therapy. During implementation, preserve the Figma wording unless the user provides Shanti EyeTech-specific replacement testimonials. Additional slides can use existing eye-care testimonials from `src/pagecomponent/Home/homeData.js` if more unique items are needed for smooth looping, but they should be adapted to the same card format.

## 7. Component Architecture

### File

`src/component/About/Testimonials/index.jsx`

### Internal components

Keep private presentational helpers in the same file:

```text
Testimonials
├── TestimonialCard
└── Slider
```

### Suggested semantic structure

```text
section.about-testimonials-section
└── div.about-testimonials-heading
    ├── span.about-testimonials-badge
    └── h2#about-testimonials-title
        ├── line 1
        └── line 2
└── div.about-testimonials-carousel
    └── Slider
        └── article.about-testimonial-card × N
            ├── Image.about-testimonial-pin
            ├── p.about-testimonial-name
            └── blockquote/about-testimonial-quote
```

### Accessibility

- Give the section `aria-labelledby="about-testimonials-title"`.
- Render each testimonial as an `<article>`.
- Use `<blockquote>` for the quote.
- Use a `<cite>` or clearly associated name element.
- Pin images are decorative and must use `alt=""`.
- Keep keyboard navigation enabled even though visible arrow buttons are disabled.
- Add a clear focus style to the active/focused slide if Slick makes it keyboard-focusable.
- Pause autoplay while the user hovers or focuses the carousel.

## 8. React Slick Configuration

Use one centralized settings object in the component.

Recommended desktop configuration:

```js
const sliderSettings = {
  arrows: false,
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2600,
  speed: 850,
  cssEase: "cubic-bezier(0.22, 1, 0.36, 1)",
  slidesToShow: 4,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "7vw",
  pauseOnHover: true,
  pauseOnFocus: true,
  swipeToSlide: true,
  draggable: true,
  touchThreshold: 8,
  accessibility: true,
  responsive: []
};
```

### Why `centerMode`

The Figma displays clipped/partial testimonial cards at both viewport edges. Slick’s `centerMode` and `centerPadding` reproduce that composition while retaining normal slide calculations and autoplay.

### Autoplay behavior

- Autoplay on initial render.
- Loop infinitely.
- Pause on hover.
- Pause when keyboard focus enters the slider.
- Resume when interaction ends.
- Do not use extremely fast continuous marquee movement; the Figma reads as individual cards and should remain readable.

### Reduced motion

Use `useReducedMotion()` from Framer Motion or a client-side media query to change settings when `prefers-reduced-motion: reduce` is enabled:

- `autoplay: false`
- `speed: 0` or a very short non-animated transition

Do not rely only on CSS because Slick’s autoplay timer is JavaScript-driven.

## 9. Card Design Specification

### Base card

- Warm white/paper background near `#fffefd`.
- No strong border.
- Very soft shadow or no visible shadow, matching the Figma’s paper-on-canvas appearance.
- Slightly rounded corners, approximately `14px–18px`.
- Desktop card width approximately `300px–330px`.
- Desktop card height approximately `300px–340px`.
- Generous top padding to leave visual room for the pin.
- Name near the upper-left in a small coral/orange accent.
- Quote below, using the heading/editorial serif font.

### Card rotation

The Figma uses alternating rotations, for example:

```js
[-5, 4, -5, 7, -4, 5]
```

Apply rotation to a child wrapper inside each Slick slide, not to `.slick-slide` itself. Rotating Slick’s structural slide node can interfere with width calculations and clipping.

### Vertical staggering

Apply small alternating top offsets to the card wrapper, for example:

```js
[0, 20, -6, 18, 0, 12]
```

Reserve enough carousel vertical padding so tilted corners and pin shadows are never clipped.

### Pin placement

- Use `next/image` for all pins.
- Position each pin absolutely above the card’s top edge.
- Size the displayed visible pin around `42px–58px` while accounting for transparent canvas space.
- Use per-pin modifier classes because each PNG has different intrinsic dimensions and transparent padding.
- Keep `pointer-events: none` and `user-select: none`.
- Assign pin artwork cyclically if there are more than four testimonials.

### Typography

The Figma uses a serif/editorial font for the heading and quote. Use `Playfair Display` through `next/font/google` unless Figma inspection identifies another exact font.

Suggested typography targets:

| Element | Desktop target |
|---|---:|
| Badge | Inter 500, `12px` |
| Heading | Playfair Display 400, `52px–58px`, tight line-height |
| Name | Inter 500, `13px–14px`, coral accent |
| Quote | Playfair Display 400/500, `18px–21px`, `1.25–1.35` line-height |

## 10. Section Layout Specification

### Desktop

- Full-width warm off-white/very light cream background.
- Approximately `760px–820px` tall depending on card scale.
- Centered heading group in the upper portion.
- Badge above heading.
- Two-line title:
  - `You’re Not Alone,`
  - `Hear From Others Like You`
- Carousel begins approximately `50px–70px` below the title.
- Slick viewport extends across the full browser width rather than being constrained to the heading container.
- Use `overflow: hidden` on the section to crop outer slides naturally.

## 11. Responsive Carousel Plan

### Above `1200px`

- `slidesToShow: 4`
- `centerMode: true`
- `centerPadding: 7vw–10vw`
- Cards around `300px–330px` wide
- Preserve full rotation and stagger offsets

### `1200px`

- `slidesToShow: 3`
- `centerPadding: 6vw`
- Reduce card width and heading size slightly
- Keep autoplay and partial edge cards

### `992px`

- `slidesToShow: 3`
- `centerPadding: 30px–45px`
- Reduce rotations to approximately 70% of desktop values
- Reduce card height only if all quote text remains visible

### `768px`

- `slidesToShow: 2`
- `centerPadding: 34px`
- Keep touch dragging/swiping enabled
- Reduce heading to approximately `42px`
- Limit rotations to approximately `±3deg`

### `576px`

- `slidesToShow: 1`
- `centerMode: true`
- `centerPadding: 54px–64px` so neighboring cards remain visible
- Card width approximately `78vw–82vw`
- Reduce vertical stagger
- Keep quote text readable without truncation

### `390px`

- `slidesToShow: 1`
- `centerPadding: 28px–34px`
- Card width approximately `calc(100vw - 64px)`
- Heading approximately `34px–36px`
- Keep pin within section bounds
- Remove or minimize rotation if it causes horizontal clipping
- Verify there is no page-level horizontal scroll

## 12. CSS Plan

### File

`src/style/about.css`

### New selector namespace

Use only dedicated classes:

```text
.about-testimonials-section
.about-testimonials-heading
.about-testimonials-badge
.about-testimonials-carousel
.about-testimonial-slide
.about-testimonial-card
.about-testimonial-pin
.about-testimonial-name
.about-testimonial-quote
```

Also scope Slick overrides beneath `.about-testimonials-carousel`:

```css
.about-testimonials-carousel .slick-list {}
.about-testimonials-carousel .slick-track {}
.about-testimonials-carousel .slick-slide {}
.about-testimonials-carousel .slick-slide > div {}
```

Do not globally style `.slick-slide`, `.slick-list`, or `.slick-track`, because future sliders may require different behavior.

### Important Slick spacing rule

Use horizontal padding on a slide-inner wrapper rather than margins on `.slick-slide`. Slick includes slide widths in its transform calculations; direct margins can create track drift and uneven center positioning.

## 13. Files to Change

Expected implementation files:

```text
package.json
package-lock.json
src/pages/_app.jsx
src/component/About/Testimonials/index.jsx
src/pagecomponent/About/aboutData.js
src/style/about.css
```

No edit should be needed in `src/pagecomponent/About/index.jsx` because `<Testimonials />` is already after `<KnowYourDoctor />`.

## 14. Implementation Sequence

1. Install `react-slick@0.30.3` and `slick-carousel`.
2. Import Slick global CSS in `src/pages/_app.jsx`.
3. Add About-specific testimonial heading and slide data to `aboutData.js`.
4. Implement `Testimonials/index.jsx` using `Slider` from `react-slick`.
5. Map the four pin PNGs to cards.
6. Add About-specific section/card/Slick styles to `about.css`.
7. Add breakpoint-specific Slick settings and matching CSS.
8. Add reduced-motion autoplay handling.
9. Run the React best-practices check for semantic structure, image optimization, keys, and accessibility.
10. Build and visually verify all requested widths.

## 15. Verification Plan

### Dependency verification

```bash
npm ls react-slick slick-carousel
```

Confirm:

```text
react-slick@0.30.3
slick-carousel@1.8.1
```

### Build verification

```bash
npm run build
```

The build must complete without new errors. Existing unrelated image warnings should be reported separately.

### Functional verification

Verify that:

- Autoplay starts automatically.
- Slides advance one at a time.
- The carousel loops without a visible empty gap.
- Hover pauses autoplay.
- Keyboard focus pauses autoplay.
- Swipe/drag works on touch and desktop.
- Card rotations do not cause clipping.
- Every pin image loads.
- No duplicate React keys occur because of Slick clones.
- Reduced-motion mode disables autoplay.

### Visual viewport verification

Capture and compare at:

- `1920px`
- `1200px`
- `992px`
- `768px`
- `576px`
- `390px`

At each viewport verify:

- The section begins directly after Know Your Doctor.
- Badge and title are centered.
- Card rotation and vertical staggering match the Figma.
- Partial cards appear at the edges where planned.
- Pin heads sit naturally over the cards.
- Quotes never overflow or become clipped.
- The carousel does not introduce page-level horizontal scrolling.
- The following FAQ section begins cleanly after the carousel.

## 16. Completion Criteria

The implementation is complete when:

- `react-slick@0.30.3` is installed and confirmed.
- The section matches the supplied pinned-paper Figma composition at desktop size.
- Autoplay, infinite looping, hover/focus pause, drag, and touch swipe work correctly.
- All four supplied pin images are used.
- Responsive behavior is correct at every requested breakpoint.
- Reduced-motion users do not receive autoplay.
- The existing homepage testimonials remain visually and functionally unchanged.
- `npm run build` succeeds with no new implementation errors.
