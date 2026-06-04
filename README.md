# mohmed98-blog

Personal blog built with [Astro](https://astro.build), supporting both plain Markdown posts and interactive MDX tutorial posts with live React + [GSAP](https://gsap.com/) animations.

## Tech stack

- **Astro 4** — static site generator
- **MDX** — Markdown + JSX for interactive tutorial posts
- **React 19** — powers interactive components inside MDX posts
- **GSAP** — animation library used in live tutorial demos
- **Sitemap + RSS** — auto-generated from all posts

## Commands

Run from the root of the project:

| Command             | Action                                           |
| :------------------ | :----------------------------------------------- |
| `npm install`       | Install dependencies                             |
| `npm run dev`       | Start local dev server at `localhost:4321`       |
| `npm run build`     | Build production site to `./dist/`               |
| `npm run preview`   | Preview the production build locally             |

## Writing a post

### Markdown post (plain writing)

Create a `.md` file in `src/posts/` with this frontmatter:

```md
---
layout: ../layouts/BlogPost.astro
title: My Post Title
slug: my-post-title
description: A short summary of the post.
tags:
  - personal
added: 2026-06-01T10:00:00.000Z
---

Your content here.
```

### MDX tutorial post (with live demos)

Create a `.mdx` file in `src/posts/` with the same frontmatter, then import and embed React components inline:

```mdx
---
layout: ../layouts/BlogPost.astro
title: My Tutorial
slug: my-tutorial
description: A tutorial with a live demo.
tags:
  - technical
added: 2026-06-01T10:00:00.000Z
---

import MyDemo from "../components/MyDemo.jsx";

## Introduction

Write your tutorial content here.

<MyDemo client:load />

Explanation continues after the demo.
```

The `client:load` directive tells Astro to hydrate the React component in the browser so animations and interactions work. Without it the component renders as static HTML only.

## Adding interactive components

Place React components in `src/components/` as `.jsx` files. See [src/components/GsapDemo.jsx](src/components/GsapDemo.jsx) as a reference — it uses `useEffect` + GSAP to animate an element on mount.

## Available tags

Add any string as a tag in frontmatter. Tag pages are generated automatically at `/tag/<name>`.

