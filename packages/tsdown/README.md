# @draft0/tsdown

**Skip setup, start shipping.**

> ⚠️ This package is in beta preview and its API is subject to change.

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

## Options

### `dts`

`draft0.dts` controls whether TypeScript declaration files are emitted. It defaults to `true`, which is the right choice for most published libraries because consumers and tooling expect bundled type definitions.

Set `dts: false` when you're building an executable or bundle where declaration output is unnecessary.

```ts
import { defineConfig } from "@draft0/tsdown";

export default defineConfig({
  draft0: {
    dts: false,
  },
});
```

### `dual`

`draft0.dual` controls output module formats. It defaults to `false`, so Draft0 generates ESM output only.

Set `dual: true` when you need both ESM and CommonJS artifacts for mixed consumer environments.

```ts
import { defineConfig } from "@draft0/tsdown";

export default defineConfig({
  draft0: {
    dual: true,
  },
});
```

### `bundle`

`draft0.bundle` controls dependency bundling strategy. It defaults to `false`, so dependencies from `node_modules` stay external.

Set `bundle: true` for CLI-style builds or single-file distribution workflows where you want dependencies included in the output.

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

Full documentation: [draft0.dev](https://draft0.dev/).
