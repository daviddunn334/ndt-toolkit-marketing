# NDT Toolkit Marketing Site

This is the marketing/landing page for NDT Toolkit, built with React, TypeScript, Vite, and Tailwind CSS.

Hosted at: **https://ndt-toolkit.com**

## Tech Stack

- **React 18** with TypeScript
- **Vite** for blazing fast builds
- **Tailwind CSS** for styling
- **Firebase Hosting** for deployment

## Development

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

## Deployment

This site automatically deploys to Firebase Hosting when you push to the `main` branch.

The GitHub Actions workflow will:
1. Install dependencies
2. Build the site
3. Deploy to Firebase Hosting at ndt-toolkit.com

## Firebase Configuration

- **Project**: ndt-toolkit
- **Hosting Target**: marketing (ndt-toolkit-marketing)
- **Build Output**: dist/

## Links

- **Marketing Site**: https://ndt-toolkit.com
- **Main App**: https://app.ndt-toolkit.com
- **Main App Repo**: https://github.com/daviddunn334/ndt-toolkit
