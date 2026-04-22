# @draft0/tsconfig

Opinionated TypeScript configurations for modern projects.

Strict by default, targeting the current TypeScript and Node — no legacy flags, no surprises.

## Install

```sh
npm install -D @draft0/tsconfig typescript
```

## Usage

```jsonc
// tsconfig.json
{
  "extends": "@draft0/tsconfig/base.json",
}
```

Framework-specific configs are available (e.g. `@draft0/tsconfig/nextjs.json`, `@draft0/tsconfig/nestjs.json`).

## Documentation

Full config list and options: [docs.draft0.dev](https://docs.draft0.dev/).

## License

[MIT](./LICENSE)
