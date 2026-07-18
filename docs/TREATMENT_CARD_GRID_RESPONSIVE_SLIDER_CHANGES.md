# Treatment Card Grid Responsive Slider Changes

## Section

This document covers the responsive changes made to the treatment options card grid section:

- Component: `src/component/Treatments/Common/TreatmentCardGrid/index.jsx`
- Styles: `src/component/Treatments/Common/TreatmentCardGrid/styles.module.css`

This is the section with cards such as `Comprehensive Eye Exams`, `Vision Therapy`, and `Myopia Management`.

## Main Behavior

Desktop view remains as the existing card grid. The slider is only used below `992px`.

- Above `992px`: normal 3-column grid.
- `992px` to `768px`: slick slider with 2 cards visible.
- `768px` to `576px`: reference-style slider with one full active card on the left and the next card partially visible on the right.
- Below `576px`: single full card slider.

## React Slick Setup

In `TreatmentCardGrid/index.jsx`, `react-slick` was added and the grid conditionally switches to slider mode using a media query.

Key logic:

```jsx
const useSlider = useMediaQuery("(max-width: 992px)");
```

When `useSlider` is true, cards render inside:

```jsx
<div className={styles.sliderWrap}>
  <Slider className={styles.slider} {...sliderSettings}>
    {content.cards.map((card) => (
      <div key={card.title} className={styles.slideItem}>
        <TreatmentOptionCard card={card} />
      </div>
    ))}
  </Slider>
</div>
```

When `useSlider` is false, the original desktop grid is rendered.

## Slider Settings

The slider uses autoplay, dots, arrows, and infinite loop:

```jsx
const sliderSettings = {
  dots: true,
  arrows: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2400,
  speed: 450,
  slidesToShow: 2,
  slidesToScroll: 1,
  swipeToSlide: true,
  pauseOnHover: false,
  pauseOnFocus: false,
  adaptiveHeight: false,
  centerMode: false,
  variableWidth: false,
  prevArrow: <SliderArrow direction="prev" />,
  nextArrow: <SliderArrow direction="next" />,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        variableWidth: true,
        infinite: true,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        variableWidth: false,
        infinite: true,
      },
    },
  ],
};
```

## How Active Card Is Set To Left

The active-left behavior is handled in the `768px` breakpoint.

Instead of using `slidesToShow: 1.5`, the slider uses:

```jsx
slidesToShow: 1,
variableWidth: true,
centerMode: false,
```

Then CSS controls the actual slide width:

```css
@media (max-width: 768px) {
  .slideItem {
    width: calc((100vw - 60px) * 0.6667);
    max-width: 470px;
    min-width: 360px;
    padding: 0 18px 0 0;
    display: flex;
    height: 100%;
  }

  .slider :global(.slick-list) {
    margin: 0;
    padding: 0 !important;
    overflow: visible;
  }

  .slider :global(.slick-track) {
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
  }
}
```

Why this works:

- `centerMode: false` stops slick from centering the active slide.
- `variableWidth: true` allows each slide to use the CSS width from `.slideItem`.
- `.slick-list { margin: 0; padding: 0 !important; }` removes left offset.
- `.slick-track { justify-content: flex-start; }` keeps the active slide pinned to the left.
- `.slideItem` width is about two-thirds of the viewport, so the active card is full on the left and the next card peeks on the right.
- Right-only padding (`padding: 0 18px 0 0`) creates spacing between the active card and the visible part of the next card without showing previous-card space on the left.

## Equal Height Cards

The card height issue was fixed by stretching the slick track and slide wrappers.

In `styles.module.css`:

```css
.slider :global(.slick-track) {
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
}

.slider :global(.slick-slide) {
  display: flex;
  height: auto;
}

.slider :global(.slick-slide > div) {
  display: flex;
  height: 100%;
}
```

For the `768px` to `576px` range, the card and image area were stabilized:

```css
.slider .card {
  width: 100%;
  height: 100%;
  min-height: 426px;
}

.slider .cardImageWrapper {
  aspect-ratio: auto;
  height: clamp(230px, 38vw, 290px);
  flex: 0 0 auto;
}

.slider .cardContent {
  flex: 1 1 auto;
}
```

Below `576px`, this fixed tablet sizing is reset for the single-card mobile view:

```css
@media (max-width: 576px) {
  .slideItem {
    width: auto;
    max-width: none;
    min-width: 0;
    padding: 0;
  }

  .slider .card {
    min-height: 0;
  }

  .slider .cardImageWrapper {
    aspect-ratio: 16 / 10;
    height: auto;
  }
}
```

## Arrow Styling

Custom arrow buttons were added through `SliderArrow` in `index.jsx`.

The arrow style follows the existing website treatment benefits carousel style:

```css
.sliderArrow {
  position: absolute;
  top: 46%;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: rgba(239, 249, 250, 0.96);
  border: 2px solid rgba(255, 255, 255, 0.96);
  box-shadow: 0 8px 22px rgba(38, 55, 70, 0.12);
  display: flex !important;
  visibility: visible !important;
  opacity: 1 !important;
  color: #263746;
}
```

Slick hidden or disabled arrow states are overridden so arrows always display:

```css
.sliderArrow:global(.slick-disabled),
.sliderArrow:global(.slick-hidden) {
  display: flex !important;
  visibility: visible !important;
  opacity: 1 !important;
  pointer-events: auto;
}
```

## Dot Styling

Dots use the website theme aqua color:

```css
.slider :global(.slick-dots li button) {
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: rgba(0, 191, 255, 0.28);
}

.slider :global(.slick-dots li.slick-active button) {
  width: 22px;
  background: #00bfff;
}
```

## Verification

Build command used:

```bash
npm run build
```

Result: build passed.

Existing unrelated warnings remain for `<img>` usage in:

- `src/common/Footer/index.jsx`
- `src/pagecomponent/Home/index.jsx`
