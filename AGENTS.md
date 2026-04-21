# Draft0

Draft0 is an opinionated, zero-config preset toolkit for modern TypeScript — a monorepo that publishes `@draft0/*` packages and a Next.js documentation site. It dogfoods its own presets, so code style is enforced by `@draft0/oxlint` and `@draft0/oxfmt`.

## Essentials

- Package manager: `npm@11.7.0` (enforced via `packageManager`). Node `>=22.18`. Don't switch to `bun`, `pnpm`, or `yarn`.
- Install: `npm install`.
- Auto-fix everything: `npm run fix:all`.
- Verify before pushing: `npm run check:all`.
- Target specific files (faster during iteration): `npx oxlint <paths>` (add `--fix`) and `npx oxfmt <paths>` (add `--check` to verify without rewriting).

Tasks run through npm workspaces + Turborepo — invoke them via `npm run ...` or `npx turbo run ...` so caching and dependency order hold.

## More context, when you need it

- Code style (TypeScript, async, errors, security, performance): [`agents/CODE-STYLE.md`](agents/CODE-STYLE.md)
- Testing (Vitest + Playwright): [`agents/TESTING.md`](agents/TESTING.md)
- React & Next.js (for `apps/docs`): [`agents/REACT.md`](agents/REACT.md)
- Publishable libraries (`packages/*`): [`agents/LIBRARIES.md`](agents/LIBRARIES.md)
- Commit style: [`agents/COMMIT.md`](agents/COMMIT.md)
- Changesets, PRs, releases: [`CONTRIBUTING.md`](CONTRIBUTING.md)

Subprojects may ship their own `AGENTS.md` — the closest file wins.
