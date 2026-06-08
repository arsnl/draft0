# @draft0/oxlint

**Skip setup, start shipping.**

`@draft0/oxlint` is part of Draft0, an opinionated, zero-configuration toolkit for modern TypeScript projects.

This package provides an [Oxlint](https://oxc.rs/docs/guide/usage/linter) preset so you can get strict, framework-aware linting defaults out of the box and focus on shipping features.

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

## Options

### `presets`

`defineConfig` starts with Draft0's opinionated `core` preset. Add the presets that match your stack with `draft0.presets`, and Draft0 will pull in the pieces those presets need.

```ts
import { defineConfig } from "@draft0/oxlint";

export default defineConfig({
  draft0: {
    presets: ["nextjs", "vitest"],
  },
});
```

For example, `nextjs` includes `react`, and `react` includes `jsx`, so `draft0.presets: ["nextjs"]` produces a config built from `core`, `jsx`, `react`, and `nextjs` in that order. Repeated presets are ignored, and your local config is applied last so explicit overrides still win.

Available presets: `core`, `jsx`, `analog`, `angular`, `astro`, `ember`, `lit`, `nestjs`, `nextjs`, `nuxt`, `preact`, `qwik`, `react`, `reactNative`, `reactRouter`, `remix`, `solid`, `svelte`, `svelteKit`, `tanstackStart`, `vue`, `jest`, `playwright`, `vitest`

### `nested`

Oxlint supports per-directory configs: it lints each file using the **nearest** `oxlint.config.ts` (or `.oxlintrc.json`) walking up from that file. Configs are **not** merged automatically across directories - see [Nested configuration files](https://oxc.rs/docs/guide/usage/linter/nested-config).

A few top-level Oxlint settings are root-only. In particular, `options.typeAware` and `options.typeCheck` make Oxlint **error** if they appear in a nested config. Since `@draft0/oxlint`'s `core` preset turns those on, a per-package config built from the preset would otherwise fail to lint.

Set `draft0.nested: true` in any package-level config so the root-only `options` are stripped from the result. Leave it off (the default) for your repo's root `oxlint.config.ts`.

```ts
// packages/web/oxlint.config.ts
import { defineConfig } from "@draft0/oxlint";

export default defineConfig({
  draft0: {
    nested: true,
    presets: ["nextjs"],
  },
  rules: {
    "eslint/no-console": ["off"],
  },
});
```

### `esm`

`draft0.esm` controls whether ESM-first rules are enabled. It defaults to `true`. Set it to `false` for CommonJS projects to apply CommonJS-oriented overrides.

```ts
import { defineConfig } from "@draft0/oxlint";

export default defineConfig({
  draft0: {
    esm: false,
  },
});
```

## Merge priority

The config object you pass to `defineConfig(...)` is treated as your local ("self") config and is applied last. That means your explicit fields always override preset defaults.

```ts
import { defineConfig } from "@draft0/oxlint";

export default defineConfig({
  draft0: {
    presets: ["nextjs"],
  },
  rules: {
    // Overrides rule level from presets
    "eslint/no-console": ["error"],
  },
});
```

## Documentation

Full documentation: [draft0.dev](https://draft0.dev/).
