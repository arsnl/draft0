---
name: commits-and-prs
description: >
  Conventional Commits, PR title rules, scopes, and breaking-change footers for Draft0.
  Use when writing commit messages, opening or editing a PR, or choosing a type/scope
  for squash-merge. Keywords: PR title, feat, fix, scope, BREAKING CHANGE, changeset.
---

# commits-and-prs

Draft0 uses [Conventional Commits 1.0.0](https://www.conventionalcommits.org/en/v1.0.0/): `<type>(<optional scope>): <description>`.

The repository **squash-merges** — the **PR title** is what lands on `main`, so it must follow this format.

**Versioning** is driven by [Changesets](https://github.com/changesets/changesets), not by commit type alone. For published packages, use `npx changeset` when the change is user-facing (see [`CONTRIBUTING.md`](../../../CONTRIBUTING.md) and `$package-changes`).

## Types

`feat`, `fix`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`, `docs`.

- **`docs`** — documentation _content_ only (prose, JSDoc, README, docs-site copy).
- **Code in `apps/docs`** — often `feat(docs):`, `fix(docs):`, `refactor(docs):`, etc. (the type is the change; the scope is where it lives).

## Scopes

Use the package or app folder name **without** the `@draft0/` prefix (e.g. `oxlint`, `docs`, `tsdown`).

- **Packages** under `packages/`: e.g. `oxlint`, `oxfmt`, `tsdown`, `tsconfig`.
- **Apps** under `apps/`: e.g. `docs`.
- **Cross-cutting:** `deps` (dependency bumps), `release` (changesets and publish flow).

Omit the scope for workspace-wide changes (root config, root scripts, agent docs).

Prefer one scope per commit; split work that naturally spans several packages.

## Description and body

- Short subject, imperative mood: `add`, not `added` or `adds` (ideally about 50 characters or less).
- Add a body or footers only when you must explain _why_ and the title is not enough.

## Breaking changes

- Use `!` in the type/scope, e.g. `feat(oxlint)!: ...`
- Add a `BREAKING CHANGE:` footer describing the break.
- For published packages, add a **major** changeset when the break affects consumers (see `$package-changes`).

## Examples

```text
feat(tsdown): support multiple entry points
fix(oxlint): honor `.ts` extensions on type-only imports
docs(oxfmt): document the `experimentalSort` option
feat(docs): add search to the preset listing page
ci(release): fail snapshot workflow when no package is selected
chore(deps): bump turbo to 2.9.6
```

## Related skills

- `$package-changes` — changesets and published package impact.
