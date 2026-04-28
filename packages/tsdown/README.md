# @draft0/tsdown

Opinionated [tsdown](https://tsdown.dev) config helper for modern libraries and CLIs.

Sensible defaults for ESM-first output, declaration emit, dependency strategy, and package quality checks so you can ship without hand-tuning every bundler flag.

## Install

```sh
npm install -D @draft0/tsdown tsdown
```

> Requirements: `Node.js >= 24`. If TypeScript is used, `TypeScript >= 6` is recommended.

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
