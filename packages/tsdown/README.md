# @draft0/tsdown

**Skip setup, start shipping.**

`@draft0/tsdown` is part of Draft0, an opinionated, zero-configuration toolkit for modern TypeScript projects.

This package provides a [tsdown](https://tsdown.dev) config helper with sensible defaults for ESM-first output, declaration emit, dependency strategy, and package quality checks so you can publish libraries and CLIs without hand-tuning every bundler flag.

## Install

```sh
npm install -D @draft0/tsdown tsdown
```

## Usage

```ts
// tsdown.config.ts
import { defineConfig } from "@draft0/tsdown";

export default defineConfig();
```

## Draft0 options

`defineConfig` accepts a `draft0` object with high-level toggles:

- `dts` (default `true`) - emit TypeScript declaration files
- `dual` (default `false`) - generate dual ESM + CJS output
- `bundle` (default `false`) - bundle dependencies from `node_modules`

## Examples

### Defaults (dts + ESM-only, external dependencies)

```ts
import { defineConfig } from "@draft0/tsdown";

export default defineConfig();
```

### Dual output (ESM + CJS)

```ts
import { defineConfig } from "@draft0/tsdown";

export default defineConfig({
  draft0: {
    dual: true,
  },
});
```

### Bundled CLI-style build

```ts
import { defineConfig } from "@draft0/tsdown";

export default defineConfig({
  draft0: {
    bundle: true,
    dts: false,
  },
  entry: ["src/cli.ts"],
});
```

## Documentation

Full documentation: [docs.draft0.dev](https://docs.draft0.dev/).
