# jenish201.github.io

Personal portfolio of Jenish Dobariya — a custom Jekyll site (no theme gem) deployed to GitHub Pages by `.github/workflows/pages-deploy.yml`.

## Adding a project

Create `_posts/YYYY-MM-DD-Slug.md`. The front matter drives the cards, index and case-study page:

```yaml
---
title: "Project name"
date: 2024-08-31 06:10:00 -0500
discipline: Data engineering        # shown as the category label
summary: >-
  One or two sentences for cards and the case-study intro.
stack: [Python, pandas, PostgreSQL]
visual: pipeline                    # pipeline | graph | diffusion | index | scatter | stream | face | edge
featured: true                      # featured projects appear in the homepage bento
repo: https://github.com/Jenish201/your-repo
metric: ["0.96", "SVC accuracy"]    # optional headline number on the case study
---
```

The body is regular Markdown. Keep `featured: true` on an even number of posts (4 works best) so the bento grid stays balanced.

## Structure

- `index.html`, `about.html`, `404.html` — pages
- `_layouts/default.html` — shell (nav, footer, meta); `_layouts/project.html` — case study
- `_includes/visuals/*.svg` — generated project illustrations, picked by `visual`
- `assets/css/site.css`, `assets/js/site.js` — all styling and interaction, no build step

## Local preview

```sh
bundle install
bundle exec jekyll serve
```
