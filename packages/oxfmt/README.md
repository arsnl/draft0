# @draft0/oxfmt

**Skip setup, start shipping.**

`@draft0/oxfmt` is part of Draft0, an opinionated, zero-configuration toolkit for modern TypeScript projects.

This package provides an [Oxfmt](https://oxc.rs/docs/guide/usage/formatter) helper with shared formatting defaults (JSDoc, import sorting, package.json sorting, and related options) so you can rely on consistent style without assembling every knob yourself.

## Install

```sh
npm install -D @draft0/oxfmt oxfmt
```

## Usage

```ts
// oxfmt.config.ts
import { defineConfig } from "@draft0/oxfmt";

export default defineConfig();
```

## Merge priority

`defineConfig(...)` merges your config after the bundled Draft0 defaults (`defaults`). The merge is shallow at the top level: any object you supply for nested fields (such as `jsdoc` or `sortImports`) replaces the entire corresponding object from defaults, so overrides are explicit rather than deeply merged field by field.

```ts
import { defineConfig } from "@draft0/oxfmt";

export default defineConfig({
  sortPackageJson: false,
});
```

## Compose with upstream `defineConfig`

If you prefer to start from [`defineConfig` in `oxfmt`](https://oxc.rs/docs/guide/usage/formatter/config.html#create-a-config-file), spread Draft0’s baseline and add your overrides:

```ts
import { defineConfig } from "oxfmt";
import { defaults } from "@draft0/oxfmt";

export default defineConfig({
  ...defaults,
  sortPackageJson: false,
});
```

## Documentation

Full documentation: [docs.draft0.dev](https://docs.draft0.dev/).
