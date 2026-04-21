# React & Next.js

## Next.js

- Uses the App Router. Before assuming API shapes, check the relevant guide in `node_modules/next/dist/docs/` — Next.js APIs move fast and your training data may be out of date.
- Use Server Components by default. Only add `"use client"` when you need state, effects, or browser APIs.
- Use `next/image` for images and the App Router metadata API (not `next/head`).
- The docs app is ignored by Changesets (`ignore: ["docs"]`) — docs-only changes don't need a changeset.

## React

- Function components only — no class components.
- Call hooks at the top level, never inside conditions or loops. Declare all dependencies in hook dependency arrays.
- Keys on iterated elements must be stable IDs, not array indices.
- React 19+: pass `ref` as a regular prop; don't use `forwardRef`.
- Don't define components inside other components.

## Accessibility

Enforced by `jsx-a11y`:

- Meaningful `alt` text on images.
- Correct heading hierarchy.
- `<label>` associated with form controls.
- Keyboard handlers paired with mouse handlers on interactive elements.
- Prefer semantic elements (`<button>`, `<nav>`, `<main>`) over `<div role="...">`.
