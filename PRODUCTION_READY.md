# Production Launch Checklist

Before making the Apex Hospital website live, verify the following:

## Client Information Verification [PENDING]
- [ ] Replace `[CONTENT REQUIRED FROM CLIENT]` in `config/site-config.js` and `index.html` with the actual hospital phone numbers.
- [ ] Replace `[CONTENT REQUIRED FROM CLIENT]` with the actual WhatsApp number.
- [ ] Replace `[CONTENT REQUIRED FROM CLIENT]` with the official email address.
- [ ] Verify the exact working hours/OPD timings and update the Contact section.
- [ ] Verify if "Surgery" and "Orthopaedics" departments are accurate. (Currently marked as placeholders).
- [ ] Receive real photographs of the hospital (Reception, Exterior, Doctors) and replace the generated placeholder images in `assets/images/`.

## Quality Assurance
- [x] Responsive layout verified across mobile, tablet, and desktop viewports.
- [x] Google Maps iframe correctly points to the client's location.
- [x] Gallery lightbox is functional.
- [x] Smooth scrolling navigation works correctly.
- [x] Buttons have adequate hover states.

## SEO & Accessibility
- [x] `title` and `meta description` are updated for the hospital.
- [x] Semantic HTML headings (`h1`, `h2`, `h3`) are properly structured.
- [x] `sitemap.xml` generated.
- [x] `robots.txt` configured to allow crawling.
- [x] Open Graph tags added for social sharing.
- [x] Alt text applied to all images.

## Performance
- [x] Static HTML/CSS/JS with no heavy frameworks.
- [x] Images loaded with `loading="lazy"`.
- [x] No render-blocking heavy external fonts/scripts.

## Original Project Integrity
- [x] Ensure that absolutely NO modifications were made to the original "The Final Touch" project folder. This project is 100% independent.
