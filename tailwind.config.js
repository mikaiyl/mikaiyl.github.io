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
      },
      // Accessibility: Ensure sufficient spacing for touch targets
      spacing: {
        'touch': '44px' // Minimum touch target size
      }
    }
  },
  // Performance optimization: Disable only truly unused features
  corePlugins: {
    // Disable advanced visual effects not needed for resume
    animation: false,
    backdropBlur: false,
    backdropBrightness: false,
    backdropContrast: false,
    backdropGrayscale: false,
    backdropHueRotate: false,
    backdropInvert: false,
    backdropOpacity: false,
    backdropSaturate: false,
    backdropSepia: false,
    blur: false,
    brightness: false,
    contrast: false,
    dropShadow: false,
    grayscale: false,
    hueRotate: false,
    invert: false,
    saturate: false,
    sepia: false,
    filter: false,
    backdropFilter: false,
    // Disable advanced layout features not used
    columns: false,
    breakAfter: false,
    breakBefore: false,
    breakInside: false,
    snapAlign: false,
    snapStop: false,
    snapType: false,
    // Disable SVG-specific utilities
    fill: false,
    stroke: false,
    strokeWidth: false
  },
  plugins: []
}
