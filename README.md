# my MINK Landing Page

Production-ready landing page built with Next.js 14 (App Router) and Tailwind CSS.

## Features

- Clean, minimal design inspired by Zomato and HBCUMADE
- Fully responsive (mobile-first)
- SEO-friendly with proper metadata
- Fast performance with Next.js optimization
- Times New Roman typography (serif)
- Left-aligned content layout
- Full-width sections with elegant spacing

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Font**: Times New Roman (serif fallback)

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Pages

- `/` - Home landing page
- `/about` - About Us
- `/download` - Download page
- `/privacy` - Privacy Policy
- `/terms` - Terms of Use
- `/community-guidelines` - Community Guidelines
- `/refunds` - Refund Policy
- `/account-deletion` - Account Deletion Policy

## Project Structure

```
landing/
├── app/
│   ├── components/     # Reusable components
│   ├── about/          # About page
│   ├── download/       # Download page
│   ├── privacy/        # Privacy policy
│   ├── terms/          # Terms of use
│   ├── community-guidelines/  # Community guidelines
│   ├── refunds/        # Refund policy
│   ├── account-deletion/  # Account deletion policy
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── public/             # Static assets
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## Deployment

This project can be deployed on:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- Any platform supporting Next.js

## Color Scheme

Colors are imported from the Flutter app's `AppColors`:
- Primary Red: `rgb(210, 0, 1)`
- Primary Blue: `rgb(0, 117, 227)`
- Text colors: Black, Grey, Dark Grey
- Background: `rgb(250, 250, 250)`

## License

© 2026 my MINK. All rights reserved.

