# Raj Computer Website

Premium React + Vite + TypeScript business website for Raj Computer.

## Stack

- React Router for routing
- Tailwind CSS for styling
- Framer Motion for animations
- Lucide React for icons

## Data-driven setup

All editable business content is centralized in `src/data`:

- `src/data/business.ts` for company details
- `src/data/images.ts` for Google Drive image URLs
- `src/data/services.ts` for service cards and detail pages
- `src/data/testimonials.ts` for reviews
- `src/data/gallery.ts` for gallery entries
- `src/data/faqs.ts` for frequently asked questions

Replace only the URLs in `src/data/images.ts` with Google Drive links in the format `https://drive.google.com/uc?export=view&id=IMAGE_ID`.

## Scripts

- `npm run dev` to start the local dev server
- `npm run build` to create a production build
- `npm run lint` to run ESLint
- `npm run preview` to preview the production build

## Notes

- The app uses lazy-loaded route pages.
- The site is responsive and SEO-friendly.
- No local image imports are used anywhere in the app code.
