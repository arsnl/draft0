# @draft0/oxlint

**Skip setup, start shipping.**

`@draft0/oxlint` is part of Draft0, an opinionated, zero-configuration toolkit for modern TypeScript projects. This package provides an [Oxlint](https://oxc.rs/docs/guide/usage/linter) preset so you can get strict, framework-aware linting defaults out of the box and focus on shipping features.

## Install

```sh
npm install -D @draft0/oxlint oxlint
```

## Usage

```ts
// oxlint.config.ts
import { defineConfig } from "@draft0/oxlint";

export default defineConfig();
```

Frameworks and tooling are opt-in via presets:

```ts
import { defineConfig } from "@draft0/oxlint";

export default defineConfig({
  presets: ["nextjs", "vitest"],
});
```

## Presets

`defineConfig` always includes the opinionated `core` preset, then composes only the presets you request.

Available presets are:

- Core and language: `core`, `jsx`.
- Frameworks and runtimes: `analog`, `angular`, `astro`, `ember`, `lit`, `nestjs`, `nextjs`, `nuxt`, `preact`, `qwik`, `react`, `reactNative`, `reactRouter`, `remix`, `solid`, `svelte`, `svelteKit`, `tanstackStart`, `vue`.
- Testing: `jest`, `playwright`, `vitest`.

Preset composition is safe by default:

- **Auto-dependencies included**: dependencies are resolved automatically (for example, `nextjs` includes `react`, and `react` includes `jsx`).
- **Deduplication built in**: repeated presets are ignored, so `["nextjs", "react", "react"]` still produces a clean, non-duplicated config. From our example, `["nextjs", "react", "react"]` will produce `["core", "jsx", "react", "nextjs"]`.
- **Order-safe overrides**: presets are merged first, then your local config is applied.

## Merge priority (`self` wins)

The config object you pass to `defineConfig(...)` is treated as your local ("self") config and is applied last. That means your explicit fields always override preset defaults.

```ts
import { defineConfig } from "@draft0/oxlint";

export default defineConfig({
  presets: ["nextjs"],
  rules: {
    // Overrides rule level from presets
    "eslint/no-console": ["error"],
  },
});
```

## Monorepos and `root`

`root` defaults to `true`, so you do not need to set it explicitly for your top-level config. Setting `root: true` can still make intent clearer when documenting monorepo config structure.

Use `root: false` for nested package-level configs.

### Root config (repo)

```ts
// oxlint.config.ts (at monorepo root)
import { defineConfig } from "@draft0/oxlint";

export default defineConfig({
  root: true,
  presets: ["vitest"],
});
```

### Package config (nested)

```ts
// packages/web/oxlint.config.ts
import { defineConfig } from "@draft0/oxlint";

export default defineConfig({
  root: false,
  presets: ["nextjs"],
  rules: {
    "eslint/no-console": ["off"],
  },
});
```

When `root` is `false`, root-only `options` are not applied. This keeps nested configs focused on local rules and preset composition.

## Documentation

Full documentation: [docs.draft0.dev](https://docs.draft0.dev/).
