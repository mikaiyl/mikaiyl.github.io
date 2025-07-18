# Resume Site

A simple, ATS-compliant resume website built with HTML, TailwindCSS, and deployed to GitHub Pages.

## Setup

1. Install dependencies:
   ```sh
   pnpm install
   ```

2. Build Tailwind CSS:
   ```sh
   pnpm run build
   ```

3. Open `dist/index.html` in your browser to preview.

## Development

- Edit `src/input.css` for styles and `index.html` for content.
- Run the build command after making changes to update the output.

## Build

This project uses TailwindCSS CLI to process styles.

Add the following script to your `package.json`:

```json
"scripts": {
  "build": "tailwindcss-cli -i ./src/input.css -o ./dist/output.css --minify"
}
```

Then run:

```sh
pnpm run build
```

## Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Automatic Deployment

1. Push your changes to the `main` branch
2. GitHub Actions will automatically build and deploy your site
3. Your site will be available at `https://[username].github.io/[repository-name]/`

### Manual Setup (First Time)

1. In your GitHub repository, go to Settings → Pages
2. Under "Source", select "GitHub Actions"
3. The deployment workflow will run automatically on every push to `main`

### Local Testing

To test your site locally before deployment:

```sh
# Build the project
pnpm run build

# Preview the built site
pnpm run preview
```

The preview will be available at `http://localhost:4173/`

## License

MIT 