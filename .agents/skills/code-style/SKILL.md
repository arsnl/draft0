---
name: code-style
description: >
  TypeScript and JavaScript conventions for this repo (type safety, ESM, async, errors,
  file layout, performance) when oxlint/oxfmt do not cover a judgment call. Use when
  editing `packages/*` or `apps/*` source, refactoring style, or resolving merge conflicts
  in application code. Keywords: ESM, async, for-of, non-null, unknown, import type.
---

# code-style

**Defaults:** [AGENTS.md](../../../AGENTS.md) tells you to run `fix` and `check` and trust **@draft0/oxlint** / **@draft0/oxfmt**. This skill fills gaps when the linter is silent or you need a written rule.

## Type safety and explicitness

- No `any` in production code — use `unknown` and narrow. Test files may use `any` for small mocks.
- No non-null assertions (`!`); use guards and checks.
- Always `await` or explicitly handle returned promises; no guards for cases the type system already rules out.
- `import type { ... }` as a separate statement; `value as T`, never `<T>value`.
- `as const` and string-literal unions over `enum` unless an enum is required; initialize every enum member.
- Exhaustive `switch` on unions, or a deliberate `default`.
- In `catch`, use `unknown` and narrow.

## Modern JavaScript / TypeScript

- ESM only: `import` / `export`, no `require`. Use `node:` for built-ins (`node:fs`, not `fs`).
- Prefer TypeScript. The supported Node version in this repo runs TypeScript natively (no `ts-node`, `tsx`, or `node` type-stripping flags for normal work).
- `const` by default, `let` when reassigning, never `var`.
- Prefer array methods; `for...in` and `for...of` are banned — use `Object.keys` / `values` / `entries` for objects.
- No `i++` / `i--` — use `i += 1` / `i -= 1`.
- Template literals, `===` / `!==`, `?.`, `??`, `globalThis`.
- `kebab-case` filenames unless a framework requires otherwise. Local imports include the extension (e.g. `./foo.ts`); package imports do not.

## Async and promises

- `async` / `await` over `.then()` chains. No `new Promise` executors except to wrap callback APIs. Never an async function as a Promise executor.
- Do not `await` in a loop — use `Promise.all` / `Promise.allSettled` for parallel work. Mark a function `async` only if it `await`s; return promises with `async` when appropriate. `return await` only inside `try` / `catch`.

## Error handling and debugging

- Throw `Error` with clear messages; extend `Error` for custom types; preserve `cause` on rethrow.
- No `console.log`, `debugger`, or `alert` in committed code; `console.warn` / `console.error` when intentional.

## Code organization

- Named exports; default exports only for framework requirements (e.g. Next.js pages, configs). No shadowing, no reassigning parameters (except mutating `acc` / `ctx` / `req` / `res` properties as existing code does). No import cycles, self-imports, or duplicate imports. JSDoc only when it adds non-obvious intent.

## Performance

- Hoist regexes; prefer specific imports; `Set` / `Map` for hot paths; `structuredClone` over ad-hoc deep clones. Do not micro-optimize without measurement.

## Related skills

- `$quality-checks` — running oxlint/oxfmt and turbo tasks.
- `$docs-app` — React, Next.js App Router, and client-side concerns under `apps/docs`.
