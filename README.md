# mohmed98-blog

Personal blog built with [Astro](https://astro.build), supporting both plain Markdown posts and interactive MDX tutorial posts with live React + [GSAP](https://gsap.com/) animations.

Forked from the great cassidoo's repo https://github.com/cassidoo/blahg

## Tech stack

- **Astro 6** — static site generator
- **MDX** — Markdown + JSX for interactive tutorial posts
- **React 19** — powers interactive components inside MDX posts
- **GSAP** — animation library used in live tutorial demos
- **Sitemap** — auto-generated from all posts

## Commands

Run from the root of the project:

| Command             | Action                                           |
| :------------------ | :----------------------------------------------- |
| `npm install`       | Install dependencies                             |
| `npm run dev`       | Start local dev server at `localhost:4321`       |
| `npm run build`     | Build production site to `./dist/`               |
| `npm run preview`   | Preview the production build locally             |

## Project structure

```
src/
  components/         Shared layout components (Header, Footer, etc.)
  layouts/            Page layouts (BlogPost.astro)
  pages/              Route pages (index, posts, tag/[tag], post/[slug])
  posts/              All blog posts — each post lives in its own folder
    my-post/
      index.md        Plain Markdown post
    my-tutorial/
      index.mdx       MDX post with live demos
      MyDemo.jsx      React component co-located with the post
      MyDemo.module.css
      screenshot.png  Images and assets live alongside the post
  style/              Global styles and fonts
```

## Writing a post

Each post lives in its own folder under `src/posts/`. The post content goes in `index.md` (Markdown) or `index.mdx` (MDX with interactive components).

### Markdown post (plain writing)

Create `src/posts/my-post/index.md`:

```md
---
layout: ../../layouts/BlogPost.astro
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

Create `src/posts/my-tutorial/index.mdx` with the same frontmatter, then import and embed React components inline:

```mdx
---
layout: ../../layouts/BlogPost.astro
title: My Tutorial
slug: my-tutorial
description: A tutorial with a live demo.
tags:
  - technical
added: 2026-06-01T10:00:00.000Z
---

import MyDemo from "./MyDemo.jsx";

## Introduction

Write your tutorial content here.

<MyDemo client:load />

Explanation continues after the demo.
```

The `client:load` directive tells Astro to hydrate the React component in the browser so animations and interactions work. Without it the component renders as static HTML only.

## Adding interactive components

Place React components and their CSS modules directly alongside the post they belong to. See [src/posts/gsap-intro/GsapDemo.jsx](src/posts/gsap-intro/GsapDemo.jsx) as a reference — it uses `useEffect` + GSAP to animate an element on mount.

For assets like images or SVGs used in a post, keep them in the same folder. In MDX you can import them directly:

```mdx
import screenshot from "./screenshot.png";

<img src={screenshot} alt="Demo screenshot" />
```

## Available tags

Add any string as a tag in frontmatter. Tag pages are generated automatically at `/tag/<name>`.

