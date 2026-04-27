# @draft0/tsconfig

Opinionated [TypeScript](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) configurations for [Draft0](https://github.com/arsnl/draft0) projects.

The shape follows the [Total TypeScript](https://github.com/total-typescript/tsconfig) decision tree (same 12 “project shape” entrypoints) with Draft0 strictness, Node `>=24`, and optional framework layers. See the [cheat sheet](https://www.totaltypescript.com/tsconfig-cheat-sheet) for the mental model.

## Install

```sh
npm install -D @draft0/tsconfig typescript
```

`typescript` is a peer dependency. These presets require **`typescript` `>=6.0.0`**.

## Decision tree (project shape)

Answer these, then `extends` the matching preset (with or without `.json` in the import path, both are exported):

1. **Are you using `tsc` to emit JavaScript?** If yes, use a **`/tsc/...`** preset. If no, use a **`/bundler/...`** preset (Vite, webpack, Rspack, esbuild, etc.).
2. **Does the code run in the browser (DOM)?** If yes, use **`/dom/...`**. If no (Node, workers without DOM, CLI), use **`/no-dom/...`**.
3. **App, package library, or monorepo package?** Use **`/app`**, **`/lib`**, or **`/lib-monorepo`**. Presets under `lib` / `lib-monorepo` that emit set `outDir: "dist"` and use `emitDeclarationOnly` for bundler builds.

**ECMAScript:** `base` sets **`target` `ES2025`**. DOM presets use `lib` **`es2025`** plus `dom` / `dom.iterable`. No-DOM presets use `lib` **`es2025`** and **`esnext`** for current standard-library typings. Override `lib` or `target` in your project if you need something different.

### `tsc` (emit with the TypeScript compiler)

| Preset                 | `extends` value                            |
| ---------------------- | ------------------------------------------ |
| DOM, app               | `@draft0/tsconfig/tsc/dom/app`             |
| DOM, lib               | `@draft0/tsconfig/tsc/dom/lib`             |
| DOM, lib (monorepo)    | `@draft0/tsconfig/tsc/dom/lib-monorepo`    |
| No DOM, app            | `@draft0/tsconfig/tsc/no-dom/app`          |
| No DOM, lib            | `@draft0/tsconfig/tsc/no-dom/lib`          |
| No DOM, lib (monorepo) | `@draft0/tsconfig/tsc/no-dom/lib-monorepo` |

Set `outDir` and `rootDir` in your app’s `tsconfig` if the defaults do not match your layout (libraries already default `outDir` where relevant).

### `bundler` (typecheck / declarations only, bundler compiles)

| Preset                            | `extends` value                                |
| --------------------------------- | ---------------------------------------------- |
| DOM, app (typecheck only)         | `@draft0/tsconfig/bundler/dom/app`             |
| DOM, lib (`.d.ts` emit)           | `@draft0/tsconfig/bundler/dom/lib`             |
| DOM, lib, monorepo (composite)    | `@draft0/tsconfig/bundler/dom/lib-monorepo`    |
| No DOM, app (typecheck only)      | `@draft0/tsconfig/bundler/no-dom/app`          |
| No DOM, lib (`.d.ts` emit)        | `@draft0/tsconfig/bundler/no-dom/lib`          |
| No DOM, lib, monorepo (composite) | `@draft0/tsconfig/bundler/no-dom/lib-monorepo` |

## Shared strict baseline

All presets build on `base`, which is strict, targets **`ES2025`**, and enables [verbatim module syntax](https://www.typescriptlang.org/tsconfig/#verbatimModuleSyntax), `noUncheckedIndexedAccess`, and `exactOptionalPropertyTypes` unless a framework file opts out. Import `@draft0/tsconfig/base` if you need only that layer.

## Framework presets (apps)

Framework files live under `frameworks/` and **extend** one of the 12 project-shape presets so we can add framework-specific `compilerOptions` later without a breaking rename.

- **Real overlays today:** `next` / `nextjs` (Next.js), `nestjs` (Nest).
- **Placeholders** (same as `bundler/dom/app` for now, audited in [FRAMEWORKS.md](./FRAMEWORKS.md): Analog, Angular, Astro, Ember, Nuxt, Qwik, React Native, React Router, Remix, Svelte, SvelteKit, TanStack Start, Vue, Lit, Preact, Solid.

Examples:

```jsonc
// Next.js App Router app
{
  "extends": "@draft0/tsconfig/frameworks/next",
}
```

Aliases: `@draft0/tsconfig/next`, `@draft0/tsconfig/nextjs`, and `.json` variants re-export the same file.

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
