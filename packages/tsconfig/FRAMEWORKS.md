# Framework presets (audit)

Framework entries under `frameworks/` extend one of the [eight project-shape presets](README.md) so we can add framework-specific `compilerOptions` later without changing the public decision tree.

Candidates align with [`@draft0/oxlint`](../oxlint/src/presets/index.ts) framework names. Test tools (Jest, Vitest, Playwright) are not root `tsconfig` presets. Plain UI libraries (JSX, React, Vue, Svelte) are usually covered by `bundler/dom/*` plus framework docs, not a separate `@draft0/tsconfig` entry unless the framework owns the app scaffold.

| Preset file      | Default extends   | Audit notes                                                                                                        | Status                |
| ---------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------ | --------------------- |
| `analog`         | `bundler/dom/app` | Analog (Angular + Vite); official starter follows Vite/Angular style.                                              | Placeholder           |
| `angular`        | `bundler/dom/app` | Angular CLI generates app tsconfig; full schema often uses path mappings and `strictTemplates` via `angular.json`. | Placeholder           |
| `astro`          | `bundler/dom/app` | `astro` CLI generates tsconfig with `moduleResolution: bundler` / Vite-oriented settings.                          | Placeholder           |
| `ember`          | `bundler/dom/app` | Ember app blueprint ships a root tsconfig extending recommended bases.                                             | Placeholder           |
| `nestjs`         | `tsc/no-dom/app`  | Official Nest CLI uses `module`/`moduleResolution` common to Node, decorators, `emitDecoratorMetadata`.            | Overlay (decorators)  |
| `next`           | `bundler/dom/app` | `create-next-app` uses Next plugin, `jsx: preserve`, `moduleResolution: bundler`, `noEmit`, `.next/types`.         | Overlay (Next plugin) |
| `nuxt`           | `bundler/dom/app` | Nuxt generates layer-aware config and often Nuxt’s generated types path.                                           | Placeholder           |
| `qwik`           | `bundler/dom/app` | Qwik starters use Vite; tsconfig is Vite/bundler-oriented.                                                         | Placeholder           |
| `react-native`   | `bundler/dom/app` | React Native and Expo templates use Metro-friendly resolution; may need `react-native` types/aliases in app.       | Placeholder           |
| `react-router`   | `bundler/dom/app` | React Router framework mode (v7) uses Vite-based templates with bundler settings.                                  | Placeholder           |
| `remix`          | `bundler/dom/app` | Classic Remix + Vite templates use `moduleResolution: bundler` and bundler `module` patterns.                      | Placeholder           |
| `svelte`         | `bundler/dom/app` | Svelte (Vite) library/app starters use bundler resolution.                                                         | Placeholder           |
| `svelte-kit`     | `bundler/dom/app` | SvelteKit generates `svelte.config` + tsconfig with `$lib` et al.                                                  | Placeholder           |
| `tanstack-start` | `bundler/dom/app` | TanStack Start uses Vite; tsconfig follows bundler app shape.                                                      | Placeholder           |
| `vue`            | `bundler/dom/app` | Vite + Vue templates use `jsx` / Vue compiler options in extending configs.                                        | Placeholder           |
| `lit`            | `bundler/dom/app` | Vite or web-dev-server starters; no single global preset beyond bundler app.                                       | Placeholder           |
| `preact`         | `bundler/dom/app` | Same as React-oriented bundler apps.                                                                               | Placeholder           |
| `solid`          | `bundler/dom/app` | Vite + Solid templates use bundler + JSX preserve patterns.                                                        | Placeholder           |

**Maintenance:** When adding real compiler options for a framework, keep `extends` pointed at the correct project-shape preset, copy only the delta from that framework’s official init template, and link the upstream file in this file or the README (JSON does not support comments). Re-check [TypeScript release notes](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-6-0.html) when bumping the supported compiler (e.g. `moduleResolution`, `types`, DOM `lib`).
