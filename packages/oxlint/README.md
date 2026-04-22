# @draft0/oxlint

Opinionated [Oxlint](https://oxc.rs/docs/guide/usage/linter) preset for modern TypeScript projects.

Skip the config ritual and get a strict, framework-aware lint setup out of the box.

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
  presets: ["next", "vitest"],
});
```

## Documentation

Full preset list, options, and recipes: [docs.draft0.dev](https://docs.draft0.dev/).

## License

[MIT](./LICENSE)
