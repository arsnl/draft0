# @draft0/tsconfig

**Skip setup, start shipping.**

`@draft0/tsconfig` is part of Draft0, an opinionated, zero-configuration toolkit for modern TypeScript projects. This package provides ready-to-use [TypeScript `tsconfig`](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) presets so you can use strict, modern defaults immediately and focus on your code.

Use it as an `extends` layer in your project `tsconfig.json`, then add your own `include`, `exclude`, aliases, and output-specific overrides.

## Install

```sh
npm install -D @draft0/tsconfig typescript
```

> Requirements: `TypeScript >= 6.0.0`, `Node.js >= 24`

## Pick a preset in 30 seconds

### 1) Choose runtime path

- **TypeScript compiles your final JavaScript** → use `tsc/...`
- **A bundler or framework handles build output** → use `bundler/...`

### 2) Choose environment

- **DOM available** (browser apps) → `.../dom/...`
- **No DOM** (Node, CLI, server runtime) → `.../no-dom/...`

### 3) Choose output type

- **Application code** → `.../.../app`
- **Library code** → `.../.../lib`

**Examples:**

- Browser app using `tsc`: `@draft0/tsconfig/tsc/dom/app`
- Node service using `tsc`: `@draft0/tsconfig/tsc/no-dom/app`
- Browser app with bundler: `@draft0/tsconfig/bundler/dom/app`

## Framework presets

If you use one of these frameworks, start from its dedicated preset and only add project-specific fields:

| Framework                                                 | Preset                                       |
| --------------------------------------------------------- | -------------------------------------------- |
| [Analog](https://analogjs.org/)                           | `@draft0/tsconfig/frameworks/analog`         |
| [Angular](https://angular.dev/)                           | `@draft0/tsconfig/frameworks/angular`        |
| [Astro](https://astro.build/)                             | `@draft0/tsconfig/frameworks/astro`          |
| [Ember](https://emberjs.com/)                             | `@draft0/tsconfig/frameworks/ember`          |
| [Lit](https://lit.dev/)                                   | `@draft0/tsconfig/frameworks/lit`            |
| [NestJS](https://nestjs.com/)                             | `@draft0/tsconfig/frameworks/nestjs`         |
| [Next.js](https://nextjs.org/)                            | `@draft0/tsconfig/frameworks/nextjs`         |
| [Nuxt](https://nuxt.com/)                                 | `@draft0/tsconfig/frameworks/nuxt`           |
| [Preact](https://preactjs.com/)                           | `@draft0/tsconfig/frameworks/preact`         |
| [Qwik](https://qwik.dev/)                                 | `@draft0/tsconfig/frameworks/qwik`           |
| [React Native](https://reactnative.dev/)                  | `@draft0/tsconfig/frameworks/react-native`   |
| [React Router](https://reactrouter.com/) (framework mode) | `@draft0/tsconfig/frameworks/react-router`   |
| [Remix](https://remix.run/)                               | `@draft0/tsconfig/frameworks/remix`          |
| [Solid](https://www.solidjs.com/)                         | `@draft0/tsconfig/frameworks/solid`          |
| [Svelte](https://svelte.dev/)                             | `@draft0/tsconfig/frameworks/svelte`         |
| [SvelteKit](https://kit.svelte.dev/)                      | `@draft0/tsconfig/frameworks/svelte-kit`     |
| [TanStack Start](https://tanstack.com/start/)             | `@draft0/tsconfig/frameworks/tanstack-start` |
| [Vue](https://vuejs.org/)                                 | `@draft0/tsconfig/frameworks/vue`            |

> Some frameworks also generate their own `tsconfig` (for example Nuxt and SvelteKit). In those cases, follow the framework’s docs for merge order so generated path aliases stay intact.

## Examples

Add `include` and `exclude` yourself to fit your repo layout.

### Next.js app

```jsonc
{
  "extends": "@draft0/tsconfig/frameworks/nextjs",
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"],
    },
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", "**/*.mts", ".next/types/**/*.ts"],
  "exclude": ["node_modules"],
}
```

### NestJS API (src-based project)

```jsonc
{
  "extends": "@draft0/tsconfig/frameworks/nestjs",
  "compilerOptions": {
    "rootDir": "./src",
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"],
}
```

### Vite-style frontend (no framework preset)

```jsonc
{
  "extends": "@draft0/tsconfig/bundler/dom/app",
  "include": ["src/**/*.ts", "src/**/*.tsx", "src/**/*.vue"],
  "exclude": ["node_modules", "dist"],
}
```

## Shared base only

All presets inherit from a strict [base](./src/base.json) config (ES2025 target, strict mode, stronger module/type-checking defaults). If you only want those defaults, use:

```jsonc
{
  "extends": "@draft0/tsconfig/base",
}
```
