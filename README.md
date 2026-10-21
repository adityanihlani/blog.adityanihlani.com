# blog.adityanihlani.com

Astro static site. Posts are Markdown files in `src/content/posts/`.

```md
---
title: Post title
description: Optional one-line summary
date: 2026-10-22
kind: how-to        # or: article (default)
draft: true         # optional; drafts show in `npm run dev` only
---

Body in Markdown.
```

- `npm run dev` — local preview
- `npm run build` — output to `dist/`

`noindex` (in `src/layouts/Base.astro`) and the blocking `public/robots.txt` are
deliberate until real content ships — remove both then.
