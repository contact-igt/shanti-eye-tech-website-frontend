# Navbar Treatment Dropdown Implementation Plan

## Goal

Update the navbar treatment dropdown behavior across the site without changing the existing navbar layout. The dropdown should use the same SVG chevron icon style as the cataract treatment page and should show these five treatment links:

- Cataract: `/treatments/catract`
- LASIK: `/treatments/lasik`
- Pediatric Eye Care: `/treatments/pediatric-eye-care`
- Glaucoma: `/treatments/glaucoma`
- Retina: `/treatments/retina`

## Source Checked

- Cataract treatment hero dropdown:
  - `src/component/Treatments/Catract/Hero/index.jsx`
  - `src/component/Treatments/Catract/Hero/styles.module.css`
- Common treatment hero dropdown used by active treatment pages:
  - `src/component/Treatments/Common/TreatmentHero/index.jsx`
  - `src/component/Treatments/Common/TreatmentHero/styles.module.css`
- Home page hero navbar:
  - `src/pagecomponent/Home/index.jsx`
  - `src/pagecomponent/Home/styles.module.css`
- About page hero navbar:
  - `src/component/About/Hero/index.jsx`
  - `src/component/About/Hero/styles.module.css`
- Global mobile header used by layout:
  - `src/common/Header/index.jsx`
  - `src/common/Header/styles.module.css`
- Contact and thank-you page hero navbars:
  - `src/component/Contact/Hero/index.jsx`
  - `src/component/Contact/Hero/styles.module.css`
  - `src/component/ThankYou/Hero/index.jsx`

## Implementation Steps

1. Keep the navbar layout unchanged.
2. Use the cataract/common treatment dropdown SVG chevron path for dropdown triggers.
3. Normalize the treatment dropdown link list to include Cataract, LASIK, Pediatric Eye Care, Glaucoma, and Retina.
4. Update the home page treatment dropdown to show all five links and replace the text triangle with the SVG chevron.
5. Update the common treatment hero dropdown used by Cataract, LASIK, Pediatric Eye Care, Glaucoma, and Retina pages.
6. Update the about page hero dropdown list to include all five treatment pages.
7. Update the global mobile header drawer so the treatment links are grouped under one Treatment dropdown instead of separate top-level treatment links.
8. Update contact and thank-you page hero navbars to use the same treatment dropdown behavior.
9. Run `npm run build` to verify the changes.

## Expected Result

- Home, About, Contact, Thank You, and all treatment pages expose one Treatment/Treatments dropdown in the navbar.
- The dropdown icon matches the cataract treatment page SVG chevron.
- The dropdown includes all five treatment pages:
  - Cataract
  - LASIK
  - Pediatric Eye Care
  - Glaucoma
  - Retina
- No navbar layout changes are introduced beyond the dropdown contents and icon.

