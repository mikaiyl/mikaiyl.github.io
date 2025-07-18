# Design Document

## Overview

This design outlines the architecture for an ATS-compliant resume website that will be deployed to GitHub Pages. The solution uses a minimal tech stack consisting of HTML, TailwindCSS, and a build process to generate optimized static assets. The design prioritizes ATS compatibility while maintaining visual appeal and professional presentation.

## Architecture

### Technology Stack
- **Frontend**: Static HTML with semantic markup
- **Styling**: TailwindCSS v4.x with utility-first approach
- **Build Tool**: Vite for development and production builds
- **Package Manager**: pnpm for dependency management
- **Deployment**: GitHub Pages with automated deployment via GitHub Actions
- **Development**: Hot reload development server with Vite

### Project Structure
```
resume/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment
├── .kiro/
│   └── specs/
│       └── ats-resume-site/    # Specification documents
├── src/
│   ├── input.css               # TailwindCSS source
│   └── output.css              # Generated CSS (gitignored)
├── dist/                       # Build output (gitignored)
├── docs/                       # ATS compliance documentation
├── index.html                  # Main resume page
├── package.json                # Dependencies and scripts
├── tailwind.config.js          # TailwindCSS configuration
├── postcss.config.js           # PostCSS configuration
└── vite.config.js              # Vite build configuration
```

## Components and Interfaces

### HTML Structure
The resume will use semantic HTML5 elements to ensure ATS compatibility:

- `<header>` - Contact information and name
- `<main>` - Primary content container
- `<section>` - Individual resume sections (Profile, Skills, Experience, etc.)
- `<h1>`, `<h2>` - Hierarchical headings for ATS parsing
- `<ul>`, `<li>` - Structured lists for skills and achievements
- `<time>` - Date ranges for employment and education

### CSS Architecture
TailwindCSS utility classes will be used with the following approach:

- **Typography**: ATS-friendly fonts (Arial, Calibri, sans-serif fallbacks)
- **Layout**: Flexbox and Grid for responsive design
- **Spacing**: Consistent margin and padding using Tailwind's spacing scale
- **Colors**: Professional color palette with high contrast ratios
- **Print Styles**: Optimized for both screen and print media

### Build System
Vite configuration will handle:

- **Development**: Hot reload server on localhost
- **Production**: Minified HTML, CSS, and asset optimization
- **CSS Processing**: TailwindCSS compilation with unused style purging
- **Asset Handling**: Optimization of any images or fonts

## Data Models

### Resume Content Structure
The resume content will be organized into the following sections:

```javascript
// Conceptual data structure (implemented directly in HTML)
{
  personalInfo: {
    name: "Full Name",
    location: "City, State",
    phone: "(555) 555-5555",
    email: "email@example.com",
    linkedin: "linkedin.com/in/profile", // optional
    website: "website.com" // optional
  },
  profile: "Professional summary with keywords",
  skills: [
    "Technical Skill 1",
    "Technical Skill 2",
    "Certification Name"
  ],
  experience: [
    {
      title: "Job Title",
      company: "Company Name",
      startDate: "MM/YYYY",
      endDate: "MM/YYYY", // or "Present"
      responsibilities: [
        "Achievement with metrics",
        "Responsibility with keywords"
      ]
    }
  ],
  education: [
    {
      degree: "Degree Type",
      institution: "School Name",
      graduationDate: "MM/YYYY"
    }
  ],
  projects: [
    {
      name: "Project Name",
      description: "Brief description with keywords"
    }
  ],
  certifications: [
    "Certification Name",
    "In Progress: Certification Name"
  ]
}
```

## Error Handling

### Build Process Error Handling
- **TailwindCSS Compilation Errors**: Clear error messages for invalid CSS
- **Vite Build Failures**: Detailed logging for debugging
- **Deployment Failures**: GitHub Actions error reporting

### Browser Compatibility
- **Fallback Fonts**: Multiple font families for cross-platform compatibility
- **CSS Fallbacks**: Progressive enhancement for older browsers
- **Print Compatibility**: Ensure proper rendering when printed

### ATS Compatibility Issues
- **Text Extraction**: Ensure all text is selectable and not embedded in images
- **Font Rendering**: Use web-safe fonts that render consistently
- **Structure Validation**: Regular testing with ATS parsing tools

## Testing Strategy

### ATS Compliance Testing
1. **Text Extraction Test**: Copy/paste resume content to verify all text is selectable
2. **Keyword Parsing**: Ensure industry keywords are used in proper context
3. **Section Recognition**: Verify standard section headings are properly identified
4. **Contact Information**: Confirm phone, email, and address are easily extractable

### Cross-Browser Testing
- **Desktop Browsers**: Chrome, Firefox, Safari, Edge
- **Mobile Browsers**: iOS Safari, Chrome Mobile
- **Print Testing**: Verify layout on standard letter-size paper

### Performance Testing
- **Page Load Speed**: Target under 2 seconds for initial load
- **Lighthouse Audit**: Achieve 90+ scores for Performance, Accessibility, SEO
- **Bundle Size**: Keep CSS under 50KB after minification

### Accessibility Testing
- **Screen Reader Compatibility**: Proper heading hierarchy and semantic markup
- **Color Contrast**: WCAG AA compliance for text readability
- **Keyboard Navigation**: Ensure all interactive elements are accessible

## Configuration Requirements

### TailwindCSS Configuration Updates
The current `tailwind.config.js` needs updates for v4 compatibility:

```javascript
// Updated configuration needed
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,css}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Arial', 'Calibri', 'Tahoma', 'Verdana', 'Georgia', 'sans-serif']
      },
      colors: {
        'resume': {
          'text': '#1f2937',
          'heading': '#111827',
          'accent': '#374151'
        }
      }
    }
  },
  plugins: []
}
```

### Vite Configuration
A `vite.config.js` file is needed for proper build configuration:

```javascript
// Required Vite configuration
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/resume/', // GitHub Pages repository name
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    minify: 'terser'
  },
  css: {
    postcss: './postcss.config.js'
  }
})
```

### GitHub Actions Deployment
A deployment workflow is needed at `.github/workflows/deploy.yml`:

```yaml
# Automated deployment configuration
name: Deploy to GitHub Pages
on:
  push:
    branches: [ main ]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: pnpm/action-setup@v2
        with:
          version: latest
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'pnpm'
      - run: pnpm install
      - run: pnpm build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## Design Decisions and Rationales

### Technology Choices
- **Vite over Webpack**: Faster development builds and simpler configuration
- **TailwindCSS v4**: Latest features and improved performance
- **pnpm over npm**: Faster installs and better disk space efficiency
- **Static HTML**: Maximum ATS compatibility without JavaScript dependencies

### Layout Decisions
- **Single Page Design**: All content on one page for easy ATS parsing
- **Centered Layout**: Professional appearance with max-width container
- **Hierarchical Typography**: Clear heading structure for content organization
- **Bullet Points**: Easy scanning for both humans and ATS systems

### Styling Approach
- **Utility-First CSS**: Rapid development and consistent design system
- **Mobile-First Responsive**: Ensures compatibility across all devices
- **Print Optimization**: Proper formatting when printed or saved as PDF
- **High Contrast**: Ensures readability and accessibility compliance