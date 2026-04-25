# Draft0 — Agent development guide

> **Claude users:** The repository root `CLAUDE.md` points here. This file is the main always-loaded context for working in the repo.

Draft0 is an opinionated, zero-config preset toolkit for modern TypeScript: a monorepo that publishes `@draft0/*` packages and a Next.js documentation site at `apps/docs`. **@draft0/oxlint** and **@draft0/oxfmt** are the first line of code style — run them before hand-editing large style churn.

## Codebase structure

| Path                | Purpose                                              |
| ------------------- | ---------------------------------------------------- |
| `apps/docs`         | Next.js (App Router) documentation site (draft0.dev) |
| `packages/oxlint`   | `@draft0/oxlint`                                     |
| `packages/oxfmt`    | `@draft0/oxfmt`                                      |
| `packages/tsdown`   | `@draft0/tsdown`                                     |
| `packages/tsconfig` | `@draft0/tsconfig`                                   |
| `.changeset/`       | Pending release notes (Changesets)                   |
| `turbo.json`        | Turborepo pipeline                                   |
| `CONTRIBUTING.md`   | Changesets, PRs, release automation                  |

Subprojects may ship their own `AGENTS.md` — the closest file wins.

## Quick commands

- **Install:** `npm install`
- **Auto-fix (lint + format):** `npm run fix:all`
- **Verify (lint + format check):** `npm run check:all`
- **Lint paths:** `npx oxlint <paths>` (add `--fix` when appropriate)
- **Format paths:** `npx oxfmt <paths>` (add `--check` to verify only)

Use `npm run ...` or `npx turbo run ...` for workspace tasks so Turborepo caching and task order are preserved.

## Tooling

- **Package manager:** `npm@11.7.0` (enforced via `packageManager` in `package.json`).
- **Node (repo):** `>= 24` — do not switch this repo to `pnpm`, `yarn`, or `bun`.
- Published packages may document a different supported Node range in their own `package.json` — follow that for package-specific code.

## Core principles

Write code that is **type-safe, explicit, modern, maintainable, and easy to delete**. Favor clarity over cleverness. When **oxlint** or **oxfmt** flags something, **trust the rule name and its documentation** over human prose.

Reserve human judgment for what linters cannot see: business logic, public API design, error messages, security boundaries, and performance backed by measurement.

## Linter and written conventions

- Run **`npm run fix:all`** and **`npm run check:all`** on your changes before you rely on manual formatting.
- For TypeScript and JavaScript rules when the tool is quiet or you need a checklist, use skill **`$code-style`**.

## Security (all code)

- Never use `eval`, `new Function`, or `javascript:` URLs.
- Validate and narrow **untrusted** input at system boundaries (HTTP responses, CLI args, environment variables, user-controlled files). Treat **published** package **APIs and metadata** as user-facing.
- For browser DOM, cookies, and inline HTML in the docs app, use skill **`$docs-app`**.

## Documentation site (`apps/docs`)

The docs app lives at **`apps/docs`**. It uses the Next.js App Router, Server Components by default, and the usual Draft0 presets. For routes, RSC vs client, a11y, and client-side security, use skill **`$docs-app`**. Docs-only app changes are ignored by this repo’s Changesets config, so they do **not** need a changeset (unless you also change a published package — see `$package-changes`).

## Testing

**Vitest** (unit) and **Playwright** (E2E) — layout, async tests, mocks, and hygiene: skill **`$testing`**.

## Publishable packages (`packages/*`)

Do **not** hand-edit `dist/`. **Any user-facing** change to a **published** `@draft0/*` package needs **`npx changeset`**. For peers, `tsdown`, and release checks, use skill **`$package-changes`**.

## Commits and pull requests

The repo **squash-merges** — the **PR title** must follow **Conventional Commits** (see [`CONTRIBUTING.md`](CONTRIBUTING.md)). Full type, scope, and **breaking** rules: skill **`$commits-and-prs`**.

## Contributing

Releases, changesets, and PR flow: [`CONTRIBUTING.md`](CONTRIBUTING.md).

## Context-efficient work

- Prefer `grep` / targeted reads over loading huge files; avoid re-reading unchanged regions.
- Do not read generated trees (`node_modules/`, `dist/`, `.next/`) for application logic; search if needed.
- After edits, one verification pass (`check:all`, tests) rather than re-running the same check without new changes.
- For large logs: capture once, then analyze the file (per Next.js / CI triage pattern).

## Specialized skills

Deeper, task-specific workflows live under [`.agents/skills/`](.agents/skills/). Use when the scenario matches; each skill has a `description` in frontmatter for discovery.

| Reference           | When                                                                             |
| ------------------- | -------------------------------------------------------------------------------- |
| `$code-style`       | TypeScript/JS style, async, and structure when the linter is not the full answer |
| `$testing`          | Unit or E2E tests, Vitest, Playwright, mocks                                     |
| `$commits-and-prs`  | Conventional Commits, scopes, PR titles, breaking changes                        |
| `$package-changes`  | Published `packages/*`, `README`, peers, `tsdown`, changesets                    |
| `$docs-app`         | `apps/docs` (Next.js docs site)                                                  |
| `$quality-checks`   | `fix:all`, `check:all`, `oxlint`, `oxfmt`, turbo                                 |
| `$authoring-skills` | Adding or editing skills in `.agents/skills/`                                    |
