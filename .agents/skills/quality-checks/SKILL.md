---
name: quality-checks
description: >
  When to run `npm run fix:all`, `npm run check:all`, `npx oxlint`, `npx oxfmt`, and
  `turbo` tasks in the Draft0 monorepo. Use when validating edits before a commit,
  CI parity, or choosing targeted lint/format vs full repo checks. Keywords: quality,
  lint, format, oxfmt, oxlint, verify.
---

# quality-checks

## Defaults

| Goal                             | Command                                                     |
| -------------------------------- | ----------------------------------------------------------- |
| Auto-fix what tools can          | `npm run fix:all`                                           |
| Verify without writing (CI-like) | `npm run check:all`                                         |
| Lint only some paths             | `npx oxlint <paths>` — add `--fix` if you intend to rewrite |
| Format only some paths           | `npx oxfmt <paths>` — add `--check` to verify only          |

Root scripts use `@draft0/oxlint` and `@draft0/oxfmt` from the workspace.

## When to use targets vs full repo

- **Tight loop** on a few files: `oxlint` / `oxfmt` on those paths, then `check:all` before push.
- **Cross-package** change: `npm run build` and `npm test` (or `npx turbo run` tasks) as appropriate.

## Turbo

- Prefer `npm run <script>` or `npx turbo run <task>` so caching and task order apply.

## Verification

At minimum before claiming green:

```bash
npm run check:all
```

Add `npm test` and package builds if you changed code those steps cover.

## Related skills

- `$code-style` — when you need the written TS/JS conventions, not just formatter output.
- `$package-changes` — if publishable packages changed.
- `$docs-app` — if only `apps/docs` changed, still run checks that the docs app’s build uses.
