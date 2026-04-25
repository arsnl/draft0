---
name: testing
description: >
  Unit tests (Vitest) and E2E tests (Playwright): file layout, assertions, async tests,
  mocks, and hygiene. Use when adding or changing `*.test.*`, `*.spec.*`, `e2e/`, or
  `tests/e2e/`, or when the user asks about tests, coverage, or mocks.
---

# testing

- **Unit:** [Vitest](https://vitest.dev). Colocate: `foo.ts` with `foo.test.ts` or `foo.spec.ts`. Check for an existing test file before creating a new one.
- **E2E:** [Playwright](https://playwright.dev). Keep under the app or package `e2e/` or `tests/e2e/` so Vitest does not pick them up.

## Conventions

- Write assertions inside `it()` or `test()` only — not at the `describe` level.
- Use `async` / `await` in async tests; do not use `done` callbacks.
- Never commit `.only` or `.skip`.
- Keep `describe` nesting shallow.
- Aim for good coverage of the code you add or change.
- Run tests locally before claiming they pass.

## Mocking

- Keep mocks small — stub only what the code under test reads.
- Use `any` in tests if it keeps a cast small.
- Mock imported modules at the top; set per-test behavior inside `it` / `test`.
- Reset mocks between tests with `beforeEach` / `afterEach`.
- Empty function bodies are fine in mocks.

## Broader process

For branching, PRs, and releases, see [`CONTRIBUTING.md`](../../../CONTRIBUTING.md).

## Related skills

- `$quality-checks` — lint and format before you push.
- `$package-changes` — if a change to a test reflects a public API change in a published package.
