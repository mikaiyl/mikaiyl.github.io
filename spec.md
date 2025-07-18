# Resume Site Specification

## Overview
This project is a personal resume website designed for deployment on GitHub Pages. The site will be built using simple HTML and CSS, with TailwindCSS for utility-first styling. A build step will be used to process TailwindCSS and produce the final static artifact. The site must be ATS (Applicant Tracking System) compliant to ensure resumes can be parsed by automated systems.

## Goals
- **Simplicity:** Use only HTML and CSS (no JavaScript unless absolutely necessary).
- **TailwindCSS:** Use TailwindCSS for styling, with a build step to generate the final CSS.
- **ATS Compliance:** Ensure the resume content is structured and formatted for maximum compatibility with ATS software.
- **Accessibility:** Follow accessibility best practices (semantic HTML, proper contrast, alt text, etc.).
- **Responsive Design:** The site must be mobile-friendly and look good on all devices.
- **Easy Deployment:** The build process should output static files suitable for GitHub Pages.

## Stack
- **HTML5** for markup
- **TailwindCSS** for styling (processed via build step)
- **No frameworks** (e.g., React, Vue, Angular)
- **No client-side JavaScript** (unless required for accessibility)
- **Build Tool:** Use a simple build tool (e.g., npm scripts, Tailwind CLI, or a minimal bundler)

## Structure
- **Single Page:** All resume content on a single HTML page (index.html)
- **Sections:**
  - Header (Name, Title, Contact Info)
  - Summary/Profile
  - Skills
  - Experience
  - Education
  - Projects (optional)
  - Certifications (optional)
  - Footer (links, copyright)

## ATS Compliance Guidelines
- Use semantic HTML elements (e.g., `<header>`, `<section>`, `<h1>`, `<h2>`, `<ul>`, `<li>`, `<p>`)
- Avoid using tables for layout
- Do not use images or icons for critical information (text only for names, titles, etc.)
- Ensure all text is selectable and copyable
- Use standard section headings ("Experience", "Education", etc.)
- Avoid custom fonts that may not render correctly
- No hidden text or content

## Accessibility
- Use proper heading hierarchy
- Provide alt text for any images (if used)
- Ensure sufficient color contrast
- Use ARIA labels if necessary

## Build & Deployment
- Use TailwindCSS CLI or PostCSS to process CSS
- Output final static files to a `dist/` or `build/` directory
- Ensure the output is ready for GitHub Pages (i.e., index.html at the root of the output directory)
- Provide instructions for local development and deployment

## Deliverables
- `index.html` (main resume page)
- `tailwind.config.js` (Tailwind configuration)
- `postcss.config.js` (if needed)
- `package.json` (build scripts and dependencies)
- `README.md` (project overview and deployment instructions)
- `dist/` or `build/` directory with production-ready files

## Non-Goals
- No dynamic content or client-side interactivity
- No backend or server-side code
- No use of JavaScript frameworks

---

This specification should be referenced for all future changes to ensure consistency and compliance with the project goals.
