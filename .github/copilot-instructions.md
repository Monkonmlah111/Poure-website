# Copilot Instructions for Poure-website

## Project Overview
This is a static portfolio website for Monkonmlah Darlington Poure, built with HTML, CSS, and JavaScript. The site showcases skills, services, portfolio, blog, testimonials, and contact information. All assets are located in the `assets/` directory.

## Architecture & Structure
- **Single-page application**: All content is in `index.html`, organized into sections (`home`, `about`, `skills`, `services`, `portfolio`, `blog`, `testimonial`, `contact`).
- **Assets**: Images, CSS, JS, and PDF files are under `assets/`.
- **No build system**: No frameworks, package managers, or build scripts. All files are static and loaded directly.
- **No backend**: The contact form is currently non-functional; integration with Formspree or similar is recommended for submissions.

## Key Conventions
- **Section IDs**: Navigation and internal links use section IDs (e.g., `#about`, `#portfolio`).
- **Class naming**: Follows BEM-like patterns (e.g., `home__container`, `portfolio__content`).
- **Swiper.js**: Used for portfolio and testimonial carousels. See `assets/js/swiper-bundle.min.js` and related CSS.
- **Main JS**: All custom interactivity is in `assets/js/main.js`.
- **Accessibility**: Some improvements needed (e.g., add `alt` text, labels for form fields).

## Developer Workflows
- **Edit HTML/CSS/JS directly**: No compilation or build steps required.
- **Preview**: Open `index.html` in a browser to view changes.
- **Image optimization**: Place optimized images in `assets/img/`.
- **PDFs**: Place downloadable CVs in `assets/pdf/`.

## Patterns & Examples
- **Adding a new section**: Use the existing section structure in `index.html` and follow the BEM class naming.
- **Adding a blog post**: Duplicate an `<article class="blog__card">` block in the blog section.
- **Adding testimonials**: Duplicate a `.testimonial__content` block in the testimonial section.
- **Adding portfolio items**: Duplicate a `.portfolio__content` block in the portfolio section.

## Integration Points
- **Swiper.js**: For carousels, initialize in `main.js` and use the provided HTML structure.
- **Contact form**: To enable submissions, set the form `action` to a service endpoint and add `name` attributes to inputs.

## External Dependencies
- **Unicons**: Icon font loaded via CDN.
- **Swiper.js**: Carousel library loaded from local assets.

## Example File References
- `index.html`: Main content and structure
- `assets/css/styles.css`: Custom styles
- `assets/js/main.js`: Custom scripts
- `assets/js/swiper-bundle.min.js`: Swiper carousel
- `assets/img/`: Images
- `assets/pdf/`: CVs

---

For improvements, see the contact form, accessibility, and spelling/grammar in `index.html`. For new features, follow the section and class patterns above.
