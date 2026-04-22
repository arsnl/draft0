# Code style

Write code that is type-safe, explicit, modern, and easy to delete. Favor clarity over cleverness. `@draft0/oxlint` and `@draft0/oxfmt` catch most issues automatically — see the root `AGENTS.md` for the commands. When the linter flags something, trust its rule name and docs over this file.

## Type safety

- No `any`. Prefer `unknown` when the type is genuinely unknown. (Test files may use `any` for minimal mocks.)
- No non-null assertions (`!`). Narrow with guards or explicit checks instead.
- Always `await` or explicitly handle returned promises.
- Don't guard against cases the compiler already rules out.
- Write `import type { ... }` as a separate statement; same for type re-exports.
- Use `value as T`, never `<T>value`.
- Use `as const` for literal/immutable values. Prefer `as const` unions or string-literal types over `enum`; if you must use an enum, initialize every member.
- Make `switch` over a union exhaustive — handle every variant or add a `default`.
- In catches, type the error as `unknown` and narrow from there.

## Modern JavaScript / TypeScript

- ESM only. Use `import`/`export`, never `require`. Use the `node:` protocol for built-ins (`node:fs`, not `fs`).
- `const` by default; `let` only when reassignment is needed; never `var`.
- **Iteration**: prefer array methods (`.map`, `.filter`, `.forEach`, `.find`, `.some`, `.flatMap`). `for...in` and `for...of` are banned. For objects, go through `Object.keys/values/entries(...)`.
- No `i++` / `i--`. Use `i += 1`.
- Template literals, not string concatenation.
- Use optional chaining (`?.`) and nullish coalescing (`??`) where they apply.
- Destructure objects and arrays when it improves readability.
- Prefer `Number.isNaN`, `Number.isFinite`, `Number.parseInt` over the globals.
- Prefer `startsWith` / `endsWith` / `includes` over `indexOf` comparisons.
- Always `===` / `!==`, never `==` / `!=`.
- Use `globalThis`, not `window` / `self` / `global`.
- Filenames use `kebab-case` unless a framework requires otherwise (e.g. Next.js route segments).
- Local imports include the file extension (e.g. `./foo.ts`); package imports do not.

## Async & promises

- Use `async`/`await`. No `.then()` chains, and no callback-style APIs when an async alternative exists.
- Don't create `new Promise(...)` executors unless wrapping a callback API. Never use an async function as a Promise executor.
- Don't `await` inside a loop — use `Promise.all` / `Promise.allSettled` for parallel work.
- Mark a function `async` only when it actually awaits. Functions that return a promise should be `async`.
- Use `return await` only inside `try`/`catch`.

## Error handling

- Throw `Error` instances with descriptive messages. Extend `Error` properly when defining custom errors.
- Keep `console.log`, `debugger`, and `alert` out of committed code. `console.warn` / `console.error` are fine where appropriate.
- When rethrowing, preserve `cause`.
- Prefer early returns over deeply nested conditionals.

## Code organization

- Named exports preferred; default exports are reserved for framework-required files (Next.js pages, config files).
- Don't shadow variables. Don't reassign parameters — common accumulator names (`acc`, `ctx`, `req`, `res`) may mutate their properties.
- No import cycles, self-imports, or duplicate imports.
- Write JSDoc only when it adds intent the code can't convey. TypeScript already provides the types — don't duplicate them in JSDoc.

## Security

- Never use `eval`, `new Function`, or `javascript:` URLs.
- Never assign `document.cookie` directly.
- With `target="_blank"`, add `rel="noopener"`.
- Avoid `dangerouslySetInnerHTML`; sanitize if unavoidable.
- Validate and narrow external input at the boundary (fetch responses, CLI args, env vars).

## Performance

- Lift regexes out of loops to module scope.
- Prefer specific imports over namespace imports.
- Use `Set` / `Map` lookups for hot paths.
- Prefer `structuredClone` over hand-rolled deep clones.

## When the linter can't help

Reserve human judgment for things the linter can't see: business logic correctness, API design, error messages, documentation quality, and performance trade-offs backed by measurements.
