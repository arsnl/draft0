# Draft0 Code Standards

This project uses **Draft0**, an opinionated, zero-config preset toolkit for modern TypeScript. It is a monorepo that publishes `@draft0/*` packages and a Next.js documentation site.

Draft0 dogfoods its own tooling: code style is enforced by `@draft0/oxlint` and `@draft0/oxfmt`. Most formatting and common code quality issues are automatically fixable, so prefer running the local tools instead of hand-editing style churn.

## Quick Reference

- **Install dependencies**: `npm install`
- **Fix all supported issues**: `npm run fix:all`
- **Verify before pushing**: `npm run check:all`
- **Lint specific files**: `npx oxlint <paths>` (add `--fix` to rewrite fixable issues)
- **Format specific files**: `npx oxfmt <paths>` (add `--check` to verify without rewriting)

Use `npm run ...` or `npx turbo run ...` for workspace tasks so Turborepo caching and package dependency order are preserved.

## Tooling Requirements

- Package manager: `npm@11.7.0`, enforced through `packageManager`.
- Local Node runtime: `>=24`; Node 24 supports TypeScript natively and without flags.
- Do not switch this repo to `bun`, `pnpm`, or `yarn`.
- Published packages may target a lower supported Node range where their package guidance says so.

Subprojects may ship their own `AGENTS.md`. When multiple agent instruction files apply, the closest file wins.

---

## Core Principles

Write code that is **type-safe, explicit, modern, maintainable, and easy to delete**. Favor clarity over cleverness and preserve the shape of the existing codebase.

Automated tools catch most style issues. Spend human judgment on the parts tools cannot reliably validate:

1. Business logic correctness
2. API design and public contract clarity
3. Error messages and user-facing behavior
4. Documentation quality
5. Security boundaries and input validation
6. Performance trade-offs backed by measurements

When oxlint or oxfmt flags something, trust the rule name and docs over prose in this file.

---

## Type Safety and Explicitness

- Do not use `any` in production code. Prefer `unknown` when a value is genuinely unknown, then narrow it before use.
- Test files may use `any` when it keeps small mocks simple.
- Do not use non-null assertions (`!`). Narrow with guards or explicit checks instead.
- Always `await` promises or explicitly handle returned promises.
- Do not add guards for cases the compiler already rules out.
- Write `import type { ... }` as a separate statement; do the same for type re-exports.
- Use `value as T`, never `<T>value`.
- Use `as const` for literal and immutable values.
- Prefer `as const` unions or string-literal types over `enum`; if an enum is necessary, initialize every member.
- Make `switch` statements over unions exhaustive by handling every variant or adding a deliberate `default`.
- In `catch` blocks, type the error as `unknown` and narrow from there.

---

## Modern JavaScript and TypeScript

- Use ESM only: `import` / `export`, never `require`.
- Use the `node:` protocol for built-ins, such as `node:fs`, not `fs`.
- Use `const` by default; use `let` only when reassignment is needed; never use `var`.
- Prefer array methods such as `.map`, `.filter`, `.forEach`, `.find`, `.some`, and `.flatMap`.
- `for...in` and `for...of` are banned. For objects, go through `Object.keys`, `Object.values`, or `Object.entries`.
- Do not use `i++` or `i--`; use `i += 1` or `i -= 1`.
- Prefer template literals over string concatenation.
- Use optional chaining (`?.`) and nullish coalescing (`??`) where they apply.
- Destructure objects and arrays when it improves readability.
- Prefer `Number.isNaN`, `Number.isFinite`, and `Number.parseInt` over the global functions.
- Prefer `startsWith`, `endsWith`, and `includes` over `indexOf` comparisons.
- Always use `===` and `!==`, never `==` or `!=`.
- Use `globalThis`, not `window`, `self`, or `global`.
- Use `kebab-case` filenames unless a framework requires another convention.
- Local imports include the file extension, for example `./foo.ts`; package imports do not.

---

## Async and Promises

- Use `async` / `await` rather than `.then()` chains.
- Prefer async APIs over callback-style APIs when the platform provides them.
- Do not create `new Promise(...)` executors unless wrapping a callback API.
- Never use an async function as a Promise executor.
- Do not `await` inside a loop. Use `Promise.all` or `Promise.allSettled` for parallel work.
- Mark a function `async` only when it actually awaits.
- Functions that return a promise should be `async`.
- Use `return await` only inside `try` / `catch`.

---

## Error Handling and Debugging

- Throw `Error` instances with descriptive messages.
- Extend `Error` properly when defining custom errors.
- Preserve `cause` when rethrowing.
- Do not catch errors just to rethrow them unchanged.
- Prefer early returns over deeply nested conditionals.
- Keep `console.log`, `debugger`, and `alert` out of committed code.
- `console.warn` and `console.error` are fine where they are intentional and useful.

---

## Code Organization

- Prefer named exports.
- Use default exports only when a framework requires them, such as Next.js pages or config files.
- Do not shadow variables.
- Do not reassign parameters. Common accumulator names such as `acc`, `ctx`, `req`, and `res` may mutate their properties.
- Avoid import cycles, self-imports, and duplicate imports.
- Keep functions focused and readable.
- Extract complex conditions into well-named booleans when it makes intent clearer.
- Avoid nested ternaries when a simple conditional is easier to read.
- Write JSDoc only when it adds intent the code cannot convey. Do not duplicate TypeScript types in comments.

---

## Security

- Never use `eval`, `new Function`, or `javascript:` URLs.
- Never assign `document.cookie` directly.
- With `target="_blank"`, add `rel="noopener"`.
- Avoid `dangerouslySetInnerHTML`; sanitize input if it is unavoidable.
- Validate and narrow external input at boundaries, including fetch responses, CLI args, and environment variables.
- Treat generated config, package metadata, and published package surfaces as user-facing when they can affect consumers.

---

## Performance

- Lift regexes out of loops to module scope.
- Prefer specific imports over namespace imports.
- Use `Set` and `Map` lookups for hot paths.
- Prefer `structuredClone` over hand-rolled deep clones.
- Do not optimize by guesswork. Measure or keep the simpler implementation.

---

## React and Next.js

The docs app lives under `apps/docs` and uses Next.js App Router.

### Next.js

- Before assuming API shapes, check the relevant guide in `node_modules/next/dist/docs/`. Next.js APIs move quickly, and training data may be stale.
- Use Server Components by default.
- Add `"use client"` only when state, effects, refs, event handlers, or browser APIs are required.
- Use `next/image` for images.
- Use the App Router metadata API, not `next/head`.
- The docs app is ignored by Changesets (`ignore: ["docs"]`), so docs-only changes do not need a changeset.

### React

- Use function components only; no class components.
- Call hooks at the top level, never inside conditions or loops.
- Declare all dependencies in hook dependency arrays.
- Keys on iterated elements must be stable IDs, not array indices.
- React 19+: pass `ref` as a regular prop; do not use `forwardRef`.
- Do not define components inside other components.

### Accessibility

Accessibility is enforced by `jsx-a11y`, but still design for it deliberately:

- Provide meaningful `alt` text on images.
- Preserve correct heading hierarchy.
- Associate `<label>` elements with form controls.
- Pair keyboard handlers with mouse handlers on interactive elements.
- Prefer semantic elements such as `<button>`, `<nav>`, and `<main>` over `<div role="...">`.

---

## Testing

Draft0 uses **Vitest** for unit tests and **Playwright** for end-to-end tests.

- Place unit tests next to the source file: `foo.ts` to `foo.test.ts` or `foo.spec.ts`.
- Check whether a test file already exists before creating a new one.
- Keep E2E specs under the app or package `e2e/` folder, or under `tests/e2e/`, so Vitest does not pick them up.
- Write assertions inside `it()` or `test()` blocks, never at the `describe` level.
- Use `async` / `await` in async tests; do not use `done` callbacks.
- Never commit `.only` or `.skip`.
- Keep `describe` nesting shallow.
- Aim for full coverage of the code you add or change.
- Always run the tests locally before claiming they pass.

### Mocking

- Keep mocks minimal. Stub only what the code under test actually reads.
- Use type casts with `any` in test files when it keeps a mock small.
- Mock imported modules at the top of the test file.
- Set per-test behavior inside `it()` or `test()`.
- Reset mocks between tests with `beforeEach` or `afterEach`.
- Empty function bodies are fine in mocks.

---

## Publishable Libraries

Packages under `packages/*` are published to npm under `@draft0/*` or `draft0` for the CLI, and must stay lean.

- Package Node target: `>=22.18`. Use platform features directly, such as `node:fs/promises`; do not add polyfills.
- Packages are bundled with `tsdown`.
- Publishable output lives in `dist/`; never hand-edit it.
- Export only what consumers need from package entry points.
- Do not add side effects on import; packages should remain tree-shakeable.
- Prefer `peerDependencies` for host tools such as `oxlint`, `oxfmt`, and `typescript` so consumers pin their own versions.
- Pin exact versions of build tooling in `devDependencies`.
- Update the package `README.md` when the public API changes.
- Any user-facing change to a published package requires `npx changeset`.

---

## Commits and Pull Requests

Follow [Conventional Commits 1.0.0](https://www.conventionalcommits.org/en/v1.0.0/): `<type>(<optional scope>): <description>`.

Draft0 squash-merges, so the **PR title** is what lands on `main`. The PR title must match the Conventional Commit format.

Commit types do not drive versioning; Changesets does. Run `npx changeset` whenever you change a published `@draft0/*` package, regardless of commit type.

### Types

Use `feat`, `fix`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`, or `docs`.

Use `docs` for documentation content only: prose, JSDoc, README files, and docs-site pages. Code changes under `apps/docs` use `feat(docs)`, `fix(docs)`, `refactor(docs)`, and so on. The type describes the change; the scope describes where.

### Scopes

The scope is the package or app folder name without the `@draft0/` prefix:

- Packages under `packages/`: `oxlint`, `oxfmt`, `tsdown`, `tsconfig`, and any folder added later.
- Apps under `apps/`: `docs`.
- Cross-cutting work: `deps` for dependency bumps, `release` for changesets and publishing flow.

Omit the scope for workspace-wide changes such as root config, agent docs, and root scripts. Prefer one scope per commit; split changes that naturally span several packages.

### Description, Body, and Footers

Keep the description short, ideally max 50 characters, and use the imperative mood: `add`, not `added` or `adds`.

Avoid adding a body and footers unless they explain why the change is needed and the description cannot carry that on its own.

### Breaking Changes

Mark breaking changes with `!` and describe the break in a footer. Bump the changeset to `major` when the break affects a published package.

```text
feat(oxlint)!: remove the deprecated `nextjs` preset

BREAKING CHANGE: migrate to the combined `react` preset.
```

### Examples

```text
feat(tsdown): support multiple entry points
fix(oxlint): honor `.ts` extensions on type-only imports
docs(oxfmt): document the `experimentalSort` option
feat(docs): add search to the preset listing page
ci(release): fail snapshot workflow when no package is selected
chore(deps): bump turbo to 2.9.6
```

---

## Contributing

Changesets, PRs, and releases are documented in [`CONTRIBUTING.md`](CONTRIBUTING.md).
