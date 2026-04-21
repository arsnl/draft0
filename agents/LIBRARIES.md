# Publishable libraries (`packages/*`)

Packages are published to npm under `@draft0/*` or `draft0` (for the CLI) and must stay lean.

- **Node target**: `>=22.18`. Use platform features directly (e.g. `node:fs/promises`); no polyfills.
- **Bundled with `tsdown`**. The publishable output lives in `dist/` — never hand-edit it.
- **Public API**: export only what consumers need from the package entries.
- **No side effects on import**. Packages must be tree-shakeable.
- **Dependencies**: prefer `peerDependencies` for host tools (e.g. `oxlint`, `oxfmt`, `typescript`) so consumers pin their own version. Pin exact versions of build tooling in `devDependencies`.
- **Docs**: update the package `README.md` when the public API changes.
- **Changesets**: any user-facing change to a package requires a changeset (`npx changeset`).
