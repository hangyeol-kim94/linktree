# linktree

Personal Linktree-style link page — a single-page profile with styled link cards.

## Stack

- Next.js 15 (App Router), React 19, TypeScript 5
- CSS Modules (no Tailwind, no UI library)

## Key commands

```bash
npm run dev      # start dev server at http://localhost:3000
npm run build    # production build
npm start        # serve production build
```

## Editing content

- **Links & profile**: `src/data/links.ts` — edit `profile` (name/bio/avatar) and the `links` array
- Add a new link by appending a `LinkItem` entry; `iconVariant` controls button colour

## Environment variables

Copy `.env.local.example` to `.env.local` and fill in your GTM container ID:

```
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

## Project layout

```
src/
  app/          # Next.js App Router (layout, page, global CSS)
  components/   # LinkButton component + CSS Module
  data/         # links.ts — single source of truth for all link data
```

## 세션 시작 시 필수

새 세션 시작 시 `.claude-project/HANDOFF.md`를 반드시 읽어 이전 세션 컨텍스트를 파악한다.
