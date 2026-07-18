# Treatment Responsive Slider And Review Spacing Changes

## Scope

This note documents the responsive changes made for the treatment page carousel sections, especially:

- Benefits of Early Pediatric Eye Care carousel
- Client Testimonials / review carousel spacing
- How the 1.5 item slider is made to keep the active card fully visible on the left

## Files Changed

1. `src/component/Treatments/Common/TreatmentBenefitsCarousel/index.jsx`
2. `src/component/Treatments/Common/TreatmentBenefitsCarousel/styles.module.css`
3. `src/component/About/Testimonials/styles.module.css`

## Benefits Carousel: Responsive React Slick Setup

### File

`src/component/Treatments/Common/TreatmentBenefitsCarousel/index.jsx`

### Important code locations

- `useMediaQuery` helper: line 24
- Mobile/tablet slider enable check: line 62
- `sliderSettings`: line 79
- `768px` responsive setting: line 96
- `576px` responsive setting: line 106
- Mobile slider render wrapper: line 155
- Slick component render: line 156
- External custom arrows: lines 170-171

### What changed

The desktop carousel remains the original custom `framer-motion` three-card layout.

For `992px` and below, the component switches to `react-slick` using:

```jsx
const useSlider = useMediaQuery("(max-width: 992px)");
```

That condition decides whether to render:

```jsx
<div className={styles.mobileSliderWrap}>
  <Slider ref={sliderRef} className={styles.mobileSlider} {...sliderSettings}>
    ...cards
  </Slider>
</div>
```

The responsive behavior is controlled inside `sliderSettings`:

```jsx
slidesToShow: 2,
slidesToScroll: 1,
infinite: true,
autoplay: true,
autoplaySpeed: 2400,
adaptiveHeight: false,
centerMode: false,
variableWidth: false,
```

Breakpoints:

```jsx
breakpoint: 768,
settings: {
  slidesToShow: 1,
  variableWidth: true,
  centerMode: false,
}
```

This creates the 1.5 card view between `768px` and `576px`.

```jsx
breakpoint: 576,
settings: {
  slidesToShow: 1,
  variableWidth: false,
  centerMode: false,
}
```

This creates the single full-card mobile view below `576px`.

## How Active Card Is Set To Left

### File

`src/component/Treatments/Common/TreatmentBenefitsCarousel/styles.module.css`

### Important code locations

- Base mobile slider wrapper: line 177
- Base slide item: line 185
- `992px` slick activation: line 269
- `768px` active-left / 1.5-card layout: lines 377-405
- `576px` single-card reset: lines 449-463

The key part is the `768px` media block.

```css
.mobileSliderWrap {
  padding: 0 0 0 22px;
  overflow: hidden;
}
```

The left padding gives the active card a fixed starting position from the left side.

```css
.mobileSlideItem {
  width: calc((100vw - 60px) * 0.6667);
  max-width: 470px;
  min-width: 360px;
  padding: 0 18px 0 0;
  display: flex;
  height: 100%;
}
```

This makes each slide about two-thirds of the viewport width. Because the wrapper clips overflow, one full active card appears on the left and only part of the next card appears on the right.

```css
.mobileSlider :global(.slick-list) {
  margin: 0;
  padding: 0 !important;
  overflow: visible;
}

.mobileSlider :global(.slick-track) {
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
}
```

`centerMode` is disabled in JS, and `justify-content: flex-start` keeps Slick's track aligned from the left. This is why the active card does not sit centered or fully on the right.

At `576px` and below, variable width is removed and the slide width resets:

```css
.mobileSlideItem {
  width: auto;
  max-width: none;
  min-width: 0;
  padding: 0;
}
```

So the mobile layout becomes one full card per slide.

## Benefits Carousel Equal Height

The slider uses:

```jsx
adaptiveHeight: false
```

And CSS stretches Slick items:

```css
.mobileSlider :global(.slick-track) {
  display: flex;
  align-items: stretch;
}

.mobileSlider :global(.slick-slide) {
  display: flex;
  height: auto;
}

.mobileSlider :global(.slick-slide > div) {
  display: flex;
  width: 100%;
  height: 100%;
}

.mobileCard {
  height: 100%;
}
```

This keeps cards visually equal height in responsive slider mode.

## Benefits Carousel Arrow Sizes

The arrow buttons were increased at responsive breakpoints:

- `992px`: `56px`
- `768px`: `50px`
- `576px`: `46px`
- `430px`: `44px`
- `390px`: `42px`

These are in `src/component/Treatments/Common/TreatmentBenefitsCarousel/styles.module.css` under `.mobileSliderWrap .navButton` inside each media query.

## Review / Testimonial Card Gap Fix

### File

`src/component/About/Testimonials/styles.module.css`

### Important code locations

- Final spacing override starts: line 908
- Slide box sizing: line 909
- `1400px` gap: line 913
- `1200px` gap: line 920
- `992px` gap: line 927
- `768px` gap: line 934
- `576px` gap: line 941
- `430px` gap: line 948
- `390px` gap: line 955

### What changed

A final override block was added at the bottom of the stylesheet so it wins over older duplicated responsive rules.

```css
.aboutTestimonialSlide {
  box-sizing: border-box;
}
```

This makes slide padding calculate consistently inside Slick.

Responsive card-to-card spacing is controlled by left/right padding on `.aboutTestimonialSlide`:

```css
@media (max-width: 1400px) {
  .aboutTestimonialSlide {
    padding-left: 28px;
    padding-right: 28px;
  }
}

@media (max-width: 1200px) {
  .aboutTestimonialSlide {
    padding-left: 22px;
    padding-right: 22px;
  }
}

@media (max-width: 992px) {
  .aboutTestimonialSlide {
    padding-left: 16px;
    padding-right: 16px;
  }
}

@media (max-width: 768px) {
  .aboutTestimonialSlide {
    padding-left: 12px !important;
    padding-right: 12px !important;
  }
}

@media (max-width: 576px) {
  .aboutTestimonialSlide {
    padding-left: 10px !important;
    padding-right: 10px !important;
  }
}

@media (max-width: 430px) {
  .aboutTestimonialSlide {
    padding-left: 9px !important;
    padding-right: 9px !important;
  }
}

@media (max-width: 390px) {
  .aboutTestimonialSlide {
    padding-left: 8px !important;
    padding-right: 8px !important;
  }
}
```

This fixes inconsistent card-to-card spacing in the review section without changing the desktop design structure.

## Build Verification

Ran:

```bash
npm run build
```

Result: build passed.

Remaining warnings are unrelated existing Next.js `<img>` warnings in:

- `src/common/Footer/index.jsx`
- `src/pagecomponent/Home/index.jsx`
