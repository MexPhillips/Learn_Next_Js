# Learn Next.js Dashboard

A Next.js dashboard app aligned with the first five chapters of the [Next.js dashboard tutorial](https://nextjs.org/learn/dashboard-app).

## What this covers (chapters 1–5)

| Chapter | Topic | In this project |
|---------|--------|-----------------|
| 1 | Getting started | App Router project, `npm run dev` |
| 2 | CSS styling | Global CSS, `clsx` for active tab classes |
| 3 | Fonts | `next/font` Inter in root layout |
| 4 | Layouts & pages | Nested layout in `app/(acme)/layout.tsx` |
| 5 | Navigation | `Link` + `usePathname` tab navigation |

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — you are redirected to `/overview`.

## Routes

- `/` → redirects to `/overview`
- `/overview` — Overview
- `/team` — Team
- `/benefits` — Benefits
- `/careers` — Careers
- `/locations` — Locations

## Project structure

```
app/
  layout.tsx          # Root layout (font, global CSS)
  page.tsx            # Redirects / to /overview
  globals.css
  ui/
    fonts.ts          # next/font Inter
    tab-nav.tsx       # Client nav with Link + clsx
  (acme)/
    layout.tsx        # Shared dashboard shell (chapter 4)
    overview/page.tsx
    team/page.tsx
    ...
```

The `(acme)` folder is a [route group](https://nextjs.org/docs/app/building-your-application/routing/route-groups) — it shares a layout without changing URLs.
