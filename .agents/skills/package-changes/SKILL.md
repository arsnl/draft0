---
name: package-changes
description: >
  Workflows for published `@draft0/*` packages under `packages/*`: public API, README,
  `peerDependencies`, `tsdown` output, and Changesets. Use when adding or changing
  `packages/oxlint`, `packages/oxfmt`, `packages/tsdown`, `packages/tsconfig`, the CLI
  package, running `npx changeset`, or anything that affects npm consumers.
---

# package-changes

Use this skill when a change is **user-facing** for npm consumers of `@draft0/*` or the `draft0` CLI.

## Before you edit

1. Read the target package’s `package.json` (exports, `peerDependencies`, `engines`).
2. Skim the package `README.md` for documented behavior you might change.
3. Confirm you are not hand-editing `dist/` — it is build output from `tsdown`.

## Checklist

- [ ] **Public API** — only export what consumers need; avoid import side effects; keep tree-shaking friendly.
- [ ] **Node** — follow each package’s stated Node target (repo packages often use `>= 24` where specified).
- [ ] **Peers** — prefer `peerDependencies` for `oxlint`, `oxfmt`, `typescript` (and similar host tools) so apps pin versions.
- [ ] **Build** — `npm run build` (or the package’s documented script) produces valid `dist/`.
- [ ] **README** — update when behavior or usage changes.
- [ ] **Changeset** — run `npx changeset`, pick affected package(s) and the right bump (`patch` / `minor` / `major` for breaking changes).

## Breaking changes

- Mark Conventional Commits with `!` and a `BREAKING CHANGE:` footer (see skill `$commits-and-prs`).
- Use a **major** changeset when the break affects a published package.

## Verification

```bash
# From repo root; adjust to the package
npm run build
npm run test
npm run check:all
```

## Related skills

- `$commits-and-prs` — Conventional Commits, PR title, and `BREAKING CHANGE` footers.
- `$quality-checks` — lint/format commands.
- `$authoring-skills` — if you are documenting a new recurring workflow as a skill.
