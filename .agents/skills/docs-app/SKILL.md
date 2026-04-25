---
name: docs-app
description: >
  Next.js App Router site under `apps/docs` (MDX, Server Components, metadata, client
  security, a11y). Use when editing routes, content, or components for draft0.dev, or
  when the user says "docs site", "documentation app", or "apps/docs". Not for generic
  Next.js questions outside this repo.
---

# docs-app

The documentation site is **`apps/docs`**: App Router, dogfoods Draft0 presets.

## Conventions (summary)

- **Server Components by default** — add `"use client"` only for state, effects, refs, event handlers, or browser-only APIs.
- **Styling / images** — follow project patterns; use `next/image` and the App Router metadata API (not `next/head`).
- **API truth** — when unsure, check `node_modules/next/dist/docs/` for Next API shapes; training data may be stale.
- **Changesets** — the docs app is ignored by the repo’s Changesets config, so **docs-only** app changes do **not** need a `changeset`. If you also change a **published package**, still add a changeset for that package.
- **Commits** — app code in `apps/docs` often uses types like `feat(docs):`, `fix(docs):`, `refactor(docs):` (not the `docs` type, which is for prose/docs content). See [`AGENTS.md`](../../../AGENTS.md) and `$commits-and-prs`.

## Web / client security

- No direct `document.cookie` assignment.
- With `target="_blank"`, add `rel="noopener"`.
- Avoid `dangerouslySetInnerHTML`; sanitize input if it is required.

[AGENTS.md](../../../AGENTS.md) still applies: no `eval`, `new Function`, or `javascript:` URLs, and treat external input with care (including fetch and env in client code where relevant).

## React and Next

- **App Router** — prefer Server Components; `"use client"` only when needed.
- **Components** — function components; hooks at top level; stable keys; React 19+ pass `ref` as a regular prop, not `forwardRef`. Do not define components inside other components.

## Accessibility

- Meaningful `alt` text on images.
- Correct heading hierarchy.
- `<label>` associated with form controls.
- Keyboard handlers paired with mouse handlers on interactive elements.
- Prefer semantic elements (`<button>`, `<nav>`, `<main>`) over `<div role="...">`.

(Also enforced by `jsx-a11y` in the app.)

## Workflow

1. Find the right route or content file under `apps/docs/`.
2. Keep components small; do not define components inside other components.

## Verification

```bash
# From repo root (workspace name is "docs" in apps/docs/package.json)
npm run build --workspace=docs
```

Or from `apps/docs/`: `npm run build` (Next.js production build).

## Related skills

- `$code-style` — general TypeScript/JS and structure outside Next-specific details.
- `$quality-checks` — repo-wide lint/format.
- `$package-changes` — if the change also ships a published package.
- `$commits-and-prs` — PR title and Conventional Commits for docs app changes.
