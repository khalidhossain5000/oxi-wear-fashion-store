# Nokshi

A modern, fully responsive e-commerce storefront built with Next.js. Nokshi focuses on clean UI, smooth micro-interactions, and a professional shopping experience — from product discovery to cart management — entirely on the frontend.

![Next.js](https://img.shields.io/badge/Next.js-16.2.10-black?logo=next.js)
![React](https://img.shields.io/badge/React-19.2.4-149eca?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8?logo=tailwindcss)
![License](https://img.shields.io/badge/license-MIT-green)

---

## Overview

Nokshi is a client-side e-commerce experience — no backend, no database. Product data is stored locally, and the cart is persisted via **localStorage**, making it fast, dependency-free, and easy to deploy anywhere static or serverless hosting is available.

The project emphasizes:

- Clean, editorial-style UI with a warm neutral palette and a teal accent
- Smooth, purposeful motion (not decorative noise) using Framer Motion
- Fully responsive layouts across mobile, tablet, and desktop
- Accessible, semantic markup with sensible hover/focus states
- Light and dark mode support

---

## Getting Started

### Prerequisites

- Node.js 18.18 or later
- npm, yarn, or pnpm

### Installation

```bash
git clone https://github.com/khalidhossain5000/nokshi-fashion.git
cd nokshi-fashion
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm run start
```

### Deployment

The project is configured for zero-config deployment on [Vercel](https://vercel.com):

```bash
vercel
```

---

## Features

- **Product Browsing** — featured product carousel, category-based listings, product detail views
- **Cart Management** — add/remove items, adjust quantity, persisted in `localStorage` so the cart survives page reloads
- **Dynamic Shipping Calculation** — ৳60 shipping inside Dhaka, ৳120 outside Dhaka, calculated live in the cart summary
- **Dark Mode** — theme toggle powered by `next-themes`, following the CSS variable design system below
- **Toast Notifications** — cart actions (add, remove, update) confirmed via `sonner` toasts
- **Interactive Carousel** — Swiper-powered featured products section with custom arrow navigation (no dots), responsive slide counts, and hover-reveal product details on desktop
- **Star Ratings** — lightweight, dependency-free star rating display for product cards
- **Reusable UI Primitives** — built on `shadcn` components and `class-variance-authority` for consistent, composable styling

---

## Tech Stack

| Category | Technology |
|---|---|
| Framework | [Next.js](https://nextjs.org) 16 (App Router) |
| UI Library | [React](https://react.dev) 19 |
| Styling | [Tailwind CSS](https://tailwindcss.com) 4 |
| Animation | [Motion](https://motion.dev) (Framer Motion) |
| Carousel | [Swiper](https://swiperjs.com) |
| Icons | [lucide-react](https://lucide.dev), [react-icons](https://react-icons.github.io/react-icons) |
| Theming | [next-themes](https://github.com/pacocoursey/next-themes) |
| Components | [shadcn/ui](https://ui.shadcn.com), [Base UI](https://base-ui.com) |
| Notifications | [sonner](https://sonner.emilkowal.ski) |
| Utilities | `clsx`, `tailwind-merge`, `class-variance-authority`, `tw-animate-css` |
| Deployment | [Vercel](https://vercel.com) |

---

## Data & State

This is a **frontend-only** project:

- Product data is stored in a static local data file (`data/productsData.js`) — no external API or database.
- Cart state is managed via a custom `useCart` hook, backed by the browser's `localStorage`, so items persist across sessions without any server involvement.
- There is no authentication or order-processing backend; this project is focused entirely on UI/UX and frontend architecture.

---

## Design System

Nokshi uses a CSS custom-property–based design system for consistent theming across light and dark mode.

### Light Mode

| Variable | Value | Usage |
|---|---|---|
| `--background` | `#faf7f2` | Page background |
| `--foreground` | `#ffffff` | Card / surface background |
| `--muted-surface` | `#f3eee7` | Secondary surfaces |
| `--text` | `#141414` | Primary text |
| `--muted-text` | `#6b6b6b` | Secondary text |
| `--primary` | `#111111` | Primary buttons, high-emphasis UI |
| `--accent` | `#0f766e` | Links, highlights, active states |
| `--accent-soft` | `#ccfbf1` | Accent backgrounds, badges |
| `--border` | `#e7ded3` | Borders, dividers |

### Dark Mode

| Variable | Value | Usage |
|---|---|---|
| `--background` | `#0b0b0b` | Page background |
| `--foreground` | `#121212` | Card / surface background |
| `--muted-surface` | `#1a1a1a` | Secondary surfaces |
| `--text` | `#f5f5f5` | Primary text |
| `--muted-text` | `#a3a3a3` | Secondary text |
| `--primary` | `#f5f5f5` | Primary buttons, high-emphasis UI |
| `--accent` | `#2dd4bf` | Links, highlights, active states |
| `--accent-soft` | `#134e4a` | Accent backgrounds, badges |
| `--border` | `#2a2a2a` | Borders, dividers |

Typography follows a minimal, professional scale with consistent tracking on labels/categories (uppercase, letter-spaced) and standard weight hierarchy for headings vs. body text.

---

## Project Structure

```
nokshi/
├── app/
│   ├── favicon.ico
│   ├── apple-icon.png
│   ├── layout.js
│   └── (routes)/
│       ├── page.js              # Home
│       ├── products/
│       └── cart/
├── components/
│   ├── home/
│   │   ├── FeaturedProduct.jsx
│   │   ├── FeaturedCard.jsx
│   │   └── WhyChooseUs.jsx
│   ├── cart/
│   │   └── CartPage.jsx
│   ├── shared/
│   │ 
│   │  
│   │   
│   │      
│   └── ui/                      # shadcn primitives
├── hooks/
│   └── useCart.js            
├── data/
│   └── productsData.js
├── lib/
│   └── localStorage.js
└── public/
```

---

## Shipping Logic

Cart shipping is calculated based on delivery location:

| Location | Shipping Fee |
|---|---|
| Inside Dhaka | ৳60 |
| Outside Dhaka | ৳120 |

This is handled client-side in the cart summary and updates the order total in real time as the user toggles their delivery location.

---

## Roadmap

- [ ] Product filtering and search
- [ ] Wishlist functionality
- [ ] Order summary / checkout UI (frontend only)
- [ ] Product reviews section
- [ ] SEO metadata per product page

---

## License

This project is licensed under the MIT License.

---

## Author

Built by **Md Khalid Hossain**