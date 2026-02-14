/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Legacy NDT colors (keeping for compatibility)
        'ndt-purple': '#6C5BFF',
        'ndt-green': '#00E5A8',
        'ndt-pink': '#FE637E',
        'ndt-yellow': '#F8B800',
        'ndt-teal': '#2A9D8F',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        ndttoolkit: {
          "primary": "#6C5BFF",           // Primary Accent (Main Action)
          "primary-content": "#FFFFFF",   // White text on primary
          "secondary": "#00E5A8",         // Secondary Accent (Success/Confirmation)
          "secondary-content": "#1E232A",
          "accent": "#FE637E",            // Accessory Accent (Alerts/Emphasis)
          "accent-content": "#FFFFFF",
          "neutral": "#2A313B",           // Card/Panel Surface
          "neutral-content": "#EDF9FF",
          "base-100": "#1E232A",          // Main Background
          "base-200": "#242A33",          // Slightly Elevated Surface
          "base-300": "#2A313B",          // Card/Panel Surface
          "base-content": "#EDF9FF",      // Primary Text
          "info": "#6C5BFF",
          "success": "#00E5A8",
          "warning": "#F8B800",           // Yellow Accent
          "error": "#FE637E",
        },
      },
    ],
    darkTheme: "ndttoolkit",
    base: true,
    styled: true,
    utils: true,
  },
}
