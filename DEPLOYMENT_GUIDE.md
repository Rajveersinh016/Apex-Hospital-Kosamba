# Deployment Guide - Apex Hospital

This is a completely static frontend project (HTML, CSS, Vanilla JS), meaning it can be deployed quickly and cheaply on any standard web hosting provider or modern CDN.

## 1. Fast Modern Hosting (Recommended)
You can deploy this instantly on platforms like:
- **Vercel**
- **Netlify**
- **GitHub Pages**
- **Cloudflare Pages**

**Steps (Netlify/Vercel):**
1. Drag and drop the `apex-hospital-website` folder onto their dashboard.
2. Wait 30 seconds for the deployment.
3. Add your custom domain (e.g., `apexhospital.com`).

## 2. Shared Hosting (cPanel / HostGator / GoDaddy)
If the client is using traditional shared hosting:
1. Log into your hosting Control Panel (cPanel).
2. Go to **File Manager** -> `public_html`.
3. Upload the contents of the `apex-hospital-website` folder directly into `public_html`.
4. Ensure `index.html` is in the root of `public_html`.

## 3. SEO Post-Deployment Tasks
- Ensure `robots.txt` and `sitemap.xml` are accessible at the root.
- Update the `<url>` in `sitemap.xml` to match the real production domain.
- Verify the site in **Google Search Console** and submit the sitemap.

## 4. HTTPS / SSL
Since this is a hospital website, **SSL is mandatory** to establish trust.
Ensure your hosting provider automatically provisions a Let's Encrypt certificate, or force HTTPS using an `.htaccess` file if deploying on an Apache server.
