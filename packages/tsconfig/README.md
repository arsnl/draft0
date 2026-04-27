# @draft0/tsconfig

Opinionated [TypeScript](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) configurations for [Draft0](https://github.com/arsnl/draft0) projects.

The shape follows the same [Total TypeScript](https://github.com/total-typescript/tsconfig) mental model (emit vs bundler, DOM vs no-DOM, app vs lib), with **eight** public project-shape entrypoints, Draft0 strictness, Node `>=24`, and optional framework layers. See the [cheat sheet](https://www.totaltypescript.com/tsconfig-cheat-sheet) for the mental model.

## Install

```sh
npm install -D @draft0/tsconfig typescript
```

`typescript` is a peer dependency. These presets require **`typescript` `>=6.0.0`**.

## Decision tree (project shape)

Answer these, then `extends` the matching preset (with or without `.json` in the import path, both are exported):

1. **Are you using `tsc` to emit JavaScript (and/or declarations from `tsc`)?** If yes, use a **`/tsc/...`** preset. If no — you use a bundler or other tool to compile — use a **`/bundler/...`** preset (Vite, webpack, Rspack, esbuild, tsdown, etc.).
2. **Does the code run in the browser (DOM)?** If yes, use **`/dom/...`**. If no (Node, workers without DOM, CLI), use **`/no-dom/...`**.
3. **App or library?** For **`/tsc/...`**, pick **`/app`** or **`/lib`** (they differ: `outDir`, `declaration`, etc.). If you use **TypeScript project references** with **`tsc -b`**, extend the matching **`/lib`** preset and set **`composite`**, **`references`**, and any **`declarationMap`** you need in your own `tsconfig` — we do not ship a separate `lib-monorepo` entrypoint. For **`/bundler/...`**, **`app`** and **`lib`** are [aliases as in @total-typescript/tsconfig](https://github.com/total-typescript/tsconfig): **`lib` extends the same `app` file** — typecheck only (`noEmit: true`) with **no** `tsc` emit options. Your bundler (or `tsdown`, etc.) is responsible for JS and, if you want, generated `.d.ts`.

**ECMAScript:** `base` sets **`target` `ES2025`**. DOM presets use **`lib` `["es2025", "dom"]`**. No-DOM presets use **`lib` `["es2025", "esnext"]`**. Override `lib` or `target` in your project if you need something different.

## TypeScript 6.0

These presets are aligned with [TypeScript 6.0](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-6-0.html) (see the [full release notes](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-6-0.html)).

- **`es2025` for `target` and `lib`** — TS 6.0 documents [`es2025` for `target` and `lib`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-6-0.html#es2025-option-for-target-and-lib) (e.g. `RegExp.escape`, built-ins moving from `esnext` into `es2025`). `base` uses **`ES2025`** for `target`; package `lib` arrays use **`es2025`** where listed.
- **Subpath imports `#/`** — Node can define `package.json` `imports` entries like `"#/*": "./dist/*"`. TypeScript resolves [`#/`-style subpath imports](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-6-0.html#subpath-imports-starting-with-) when **`moduleResolution`** is **`node16`/`nodenext`** or **`bundler`**. The `/tsc/*` and `/bundler/*` presets use **`NodeNext`** or **`bundler`** as appropriate, so this works without extra `compilerOptions`.
- **DOM `lib` —** In TS 6.0, [`dom` now includes what used to require `dom.iterable` / `dom.asynciterable`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-6-0.html#the-dom-lib-now-contains-domiterable-and-domasynciterable), so only **`dom`** (plus `es2025`) is listed in DOM presets.
- **`types` default** — [TS 6.0 defaults `types` to `[]`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-6-0.html#types-now-defaults-to). **No-DOM** presets set **`"types": ["node"]`** so `globals` and `@types/node` work without auto-loading every `@types` package. DOM-oriented apps that need extra globals (e.g. `vitest`) should add them in a local `tsconfig` (for example `compilerOptions.types`).
- **`noUncheckedSideEffectImports`** — TS 6.0 [defaults this to `true`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-6-0.html#simple-default-changes); it stays on in `base` so side-effect-only imports are checked. The [Next.js framework preset](./frameworks/nextjs.json) turns it **off** where the tool expects to parse many entry-side imports.
- **`rootDir`** — [TS 6.0 defaults `rootDir` to the config directory](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-6-0.html#rootdir-now-defaults-to). If you keep sources under `src/`, set **`rootDir`: `./src`** (and `include`) in your app so emit paths match your layout.

### `tsc` (emit with the TypeScript compiler)

| Preset      | `extends` value                   |
| ----------- | --------------------------------- |
| DOM, app    | `@draft0/tsconfig/tsc/dom/app`    |
| DOM, lib    | `@draft0/tsconfig/tsc/dom/lib`    |
| No DOM, app | `@draft0/tsconfig/tsc/no-dom/app` |
| No DOM, lib | `@draft0/tsconfig/tsc/no-dom/lib` |

Set `outDir` and `rootDir` in your app’s `tsconfig` if the defaults do not match your layout (libraries already default `outDir` where relevant).

### `bundler` (typecheck only — same as [Total TypeScript](https://github.com/total-typescript/tsconfig))

**`bundler/.../lib`** extends the matching **`app`** file (same as [Total TypeScript](https://github.com/total-typescript/tsconfig) — two “real” configs per **DOM** / **no-DOM** row). There are **no** `declaration`, `emitDeclarationOnly`, or `outDir` options here — those belong to **`/tsc/.../lib`** when you use `tsc` to emit.

| Name   | `extends` value (all typecheck-only)               |
| ------ | -------------------------------------------------- |
| DOM    | `@draft0/tsconfig/bundler/dom/app` or `.../lib`    |
| No DOM | `@draft0/tsconfig/bundler/no-dom/app` or `.../lib` |

## Shared strict baseline

All presets build on `base`, which is strict, targets **`ES2025`**, and enables [verbatim module syntax](https://www.typescriptlang.org/tsconfig/#verbatimModuleSyntax), `noUncheckedIndexedAccess`, and `exactOptionalPropertyTypes` unless a framework file opts out. Import `@draft0/tsconfig/base` if you need only that layer.

## Framework presets (apps)

Framework files live under `frameworks/` and **extend** one of the eight project-shape presets so we can add framework-specific `compilerOptions` later without a breaking rename.

**How we align with upstream:** Official starters often set `target`, `module`, or `lib` to older ECMAScript years. Draft0 keeps **`ES2025`** and the shared strict [`base`](./base.json) layer; framework presets add only **deltas** (JSX mode, TS server plugins, decorators, framework-specific `types`, etc.) that tools actually require. Anything layout-specific (`include` / `exclude` / `paths` / project `references`) stays in your app `tsconfig`. See [FRAMEWORKS.md](./FRAMEWORKS.md) for the per-framework audit and doc links.

- **Overlays with extra `compilerOptions`:** Next.js (`nextjs`), NestJS, Analog, Angular, Astro, Ember, Lit, Preact, Qwik, React Native, React Router, Remix, Solid, TanStack Start, Vue.
- **Documented compose-only (official config is generated elsewhere):** Nuxt (`.nuxt/tsconfig.json`), SvelteKit (`.svelte-kit/tsconfig.json`).
- **Inherits shape only (no extra `compilerOptions` in the preset file):** Svelte (Vite library/app).

Examples:

```jsonc
// Next.js App Router app
{
  "extends": "@draft0/tsconfig/frameworks/nextjs",
}
```

Aliases (same file as `frameworks/nextjs`): `@draft0/tsconfig/next`, `@draft0/tsconfig/nextjs` (see `package.json` `exports`). `.json` suffix is optional on import paths that resolve through the export map.

```jsonc
// NestJS app
{
  "extends": "@draft0/tsconfig/frameworks/nestjs",
}
```

Test runners (Jest, Vitest, Playwright) are not separate root presets: extend your app or library config and add `types` or `include` in your repo if needed (for example, `vitest/globals`).

## Documentation

- Full Draft0 usage: [docs.draft0.dev](https://docs.draft0.dev/)
- [Framework audit notes](./FRAMEWORKS.md)

## License

[MIT](./LICENSE)
