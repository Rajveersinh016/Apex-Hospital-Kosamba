# Apex Hospital - Multispeciality Healthcare Website

## Project Overview
This project is a modern, professional, and fully responsive static website designed for **Apex Hospital**, a multispeciality healthcare facility located in Kosamba, Gujarat. It provides comprehensive information about hospital services, facilities, emergency contact numbers, and appointment bookings.

## Technology Stack
- **HTML5:** Semantic HTML for structure and accessibility.
- **CSS3:** Custom CSS variables (`var()`) for a highly maintainable design system. Flexbox and CSS Grid for layout.
- **Vanilla JavaScript:** For interactive features like the mobile menu, smooth scrolling, lightbox gallery, and scroll reveal animations without heavy frameworks.

## Folder Structure
```
apex-hospital-website/
├── assets/
│   ├── icons/            # SVGs and Favicons
│   └── images/           # Hospital photography and placeholders
├── config/
│   └── site-config.js    # Centralized client configuration data
├── css/
│   └── hospital.css      # Main stylesheet with CSS variables
├── js/
│   └── hospital.js       # Core interactivity and logic
├── index.html            # Main Entry Page
├── robots.txt            # SEO Crawler Instructions
├── sitemap.xml           # SEO Sitemap
├── README.md             # This file
├── DEPLOYMENT_GUIDE.md   # Hosting instructions
└── PRODUCTION_READY.md   # Final pre-launch checklist
```

## Local Setup
This is a static website and doesn't require complex build steps.
1. Clone or download the repository.
2. Open `index.html` directly in any modern browser.
3. For the best experience (especially for local assets fetching), serve it via a local web server (e.g., VS Code Live Server, or Python `python -m http.server`).

## Configuration
Client-specific details (Phone, WhatsApp, Address, Social Links) are centralized in `config/site-config.js` to make future edits extremely easy without touching HTML. You can expand the JavaScript integration to inject these into the DOM dynamically.

## Customization
- **Colors:** Open `css/hospital.css` and modify the `:root` variables (e.g., `--primary-color`).
- **Images:** Replace the `.jpg` files in `assets/images/`.
- **Content:** Edit the HTML structure in `index.html`.

## Known Limitations
- The appointment booking form is not connected to a backend. Currently, the buttons scroll to the contact section or launch WhatsApp/Dialer.
- Real doctor profiles are omitted until verified client data is provided.
