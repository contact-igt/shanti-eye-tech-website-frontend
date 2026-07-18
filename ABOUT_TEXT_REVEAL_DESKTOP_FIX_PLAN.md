# About Text Reveal Desktop Fix Plan

## Issue Summary

On the About page, the `AboutText` section text reveal behaves differently between desktop and mobile.

- Desktop/local: the paragraph can appear fully revealed instead of revealing progressively word by word.
- Mobile/live: the reveal behavior appears correct.

The affected section is the large intro paragraph beginning:

> Welcome to Shanti EyeTech, where "Shanti" signifies peace...

## Source Files Checked

1. `src/pagecomponent/About/index.jsx`
   - Renders the About page section order.
   - `AboutText` is placed after `Hero` and `WhyPatients`.

2. `src/component/About/AboutText/index.jsx`
   - Owns the scroll-driven word reveal logic.
   - Uses Framer Motion:
     - `useScroll`
     - `useSpring`
     - `useTransform`
   - Current scroll progress config:

```jsx
const { scrollYProgress } = useScroll({
  target: sectionRef,
  offset: ["start 92%", "end 42%"]
});
```

3. `src/component/About/AboutText/styles.module.css`
   - Owns sticky behavior, section height, and responsive behavior.
   - Desktop reveal setup:

```css
.aboutIntroductionSection {
  min-height: 172vh;
  padding: 42px 0 54vh;
  overflow: visible;
}

.aboutIntroductionInner {
  position: sticky;
  top: 104px;
}
```

   - Later overrides tighten the same section:

```css
.aboutIntroductionSection {
  min-height: 118vh;
  padding-bottom: 16vh;
}

@media (max-width: 1400px) {
  .aboutIntroductionSection {
    min-height: 112vh;
    padding-bottom: 12vh;
  }
}

@media (max-width: 1200px) {
  .aboutIntroductionSection {
    min-height: 108vh;
    padding-bottom: 10vh;
  }
}
```

## Root Cause

The desktop scroll-reveal section was originally designed with a tall scroll area (`172vh` plus `54vh` bottom padding), then later spacing overrides reduced it to around `118vh`.

Because `useScroll` maps reveal progress from `start 92%` to `end 42%`, reducing the section height makes the animation range too short on desktop. The result is that scroll progress can reach the later reveal state too quickly, making the full text appear revealed.

Mobile avoids this because the CSS intentionally disables the sticky scroll area at smaller breakpoints:

```css
@media (max-width: 768px) {
  .aboutIntroductionSection {
    min-height: auto;
    padding: 70px 0 86px;
    overflow: hidden;
  }

  .aboutIntroductionInner {
    position: relative;
    top: auto;
  }
}
```

So mobile is using normal flow and does not depend on the same desktop sticky scroll distance.

## Implementation Plan

### 1. Preserve Mobile Behavior

Do not change mobile rules under:

- `@media (max-width: 992px)`
- `@media (max-width: 768px)`
- `@media (max-width: 576px)`
- `@media (max-width: 390px)`

The user confirmed mobile/live behavior is correct, so the fix should target desktop only.

### 2. Restore Enough Desktop Scroll Distance

Update only desktop/tablet-large section height rules in:

`src/component/About/AboutText/styles.module.css`

Recommended final desktop sizing:

```css
.aboutIntroductionSection {
  min-height: 150vh;
  padding-bottom: 34vh;
}

@media (max-width: 1400px) {
  .aboutIntroductionSection {
    min-height: 140vh;
    padding-bottom: 28vh;
  }
}

@media (max-width: 1200px) {
  .aboutIntroductionSection {
    min-height: 132vh;
    padding-bottom: 22vh;
  }
}
```

This gives desktop enough scroll distance for the word reveal while still keeping the section tighter than the original `172vh`.

### 3. Adjust Desktop Scroll Offset Only If Needed

If restoring section height is not enough, tune the Framer Motion scroll offset in:

`src/component/About/AboutText/index.jsx`

Current:

```jsx
offset: ["start 92%", "end 42%"]
```

Possible desktop-safe adjustment:

```jsx
offset: ["start 86%", "end 28%"]
```

This delays full completion so the text does not reach the fully revealed state too early.

Avoid changing this unless CSS-only spacing still feels too fast.

### 4. Optional Desktop/Mobile Offset Split

If desktop and mobile need separate behavior later, add a media-query check in `AboutText/index.jsx` and use different offsets:

- Desktop sticky reveal: `["start 86%", "end 28%"]`
- Mobile normal reveal: keep current behavior or bypass scroll reveal if preferred

This is optional and should only be done if a CSS-only fix does not match the live mobile behavior.

## Acceptance Criteria

1. Desktop About page does not show the entire intro paragraph fully revealed immediately.
2. Text reveals progressively while scrolling through the AboutText section.
3. Mobile behavior remains unchanged.
4. No layout overlap with the next `KnowYourDoctor` section.
5. Production build passes with no new errors.

## Verification Steps

1. Run:

```bash
npm run build
```

2. Test locally:

```bash
npm run dev
```

3. Open:

```text
http://localhost:3000/about
```

4. Check desktop viewport around `1440px` width:
   - Scroll from `WhyPatients` into `AboutText`.
   - Confirm words reveal progressively instead of appearing fully black at once.

5. Check mobile viewport around `390px` width:
   - Confirm the live/mobile behavior remains the same.

## Recommended Fix Scope

Start with CSS only:

`src/component/About/AboutText/styles.module.css`

Only move to JS offset changes if desktop reveal still completes too early after restoring the desktop scroll distance.
