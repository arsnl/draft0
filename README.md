# Draft0

**Skip setup, start shipping.**

Draft0 is an opinionated, zero-configuration toolkit for modern TypeScript projects. Pick the preset you need, drop it into your project, and get back to shipping.

## Why Draft0?

Every new TypeScript project starts with the same ritual: wire up a linter, a formatter, a TypeScript config, a bundler, decide on rules, copy fragments from your last repo, tweak until it _feels_ right, then repeat on the next project.

Draft0 replaces that ritual with a set of presets that are already wired up the way a modern TypeScript project should be. You install one package, extend it, and you're done.

- **Zero-config by design.** Sensible defaults, strict where it matters, out of your way where it doesn't.
- **Highly opinionated.** Fewer knobs, more ship time. One good default beats ten reasonable ones.
- **Type-safe first.** Every preset is built around TypeScript as the source of truth.
- **Composable.** Use one preset, or use them all. They're independent packages.
- **Monorepo friendly.** Share a single set of presets across every app and package in your workspace.

## Packages

Draft0 is a growing ecosystem. The current presets are:

| Package                                 | What it is       | npm                                                                                                         |
| --------------------------------------- | ---------------- | ----------------------------------------------------------------------------------------------------------- |
| [`@draft0/oxlint`](packages/oxlint)     | Oxlint presets   | [![npm](https://img.shields.io/npm/v/@draft0/oxlint.svg)](https://www.npmjs.com/package/@draft0/oxlint)     |
| [`@draft0/oxfmt`](packages/oxfmt)       | Oxfmt defaults   | [![npm](https://img.shields.io/npm/v/@draft0/oxfmt.svg)](https://www.npmjs.com/package/@draft0/oxfmt)       |
| [`@draft0/tsdown`](packages/tsdown)     | tsdown presets   | [![npm](https://img.shields.io/npm/v/@draft0/tsdown.svg)](https://www.npmjs.com/package/@draft0/tsdown)     |
| [`@draft0/tsconfig`](packages/tsconfig) | tsconfig presets | [![npm](https://img.shields.io/npm/v/@draft0/tsconfig.svg)](https://www.npmjs.com/package/@draft0/tsconfig) |

More presets, tools, and starters will land here over time. Each package ships independently, so you only pull in what you use.

## Philosophy

Draft0 is not a framework. It doesn't tell you what to build — it removes the setup you didn't want to think about in the first place.

- **Defaults over options.** Configuration is a liability. The fewer decisions you have to make at the start of a project, the faster you reach something real.
- **One way to do it.** Every preset picks a lane so your team doesn't have to argue about style, rules, or build settings.
- **Modern stack, no legacy baggage.** Draft0 targets current Node, current TypeScript, current tooling. It doesn't try to please every setup — just good ones.
- **Small surface area.** Each package does one thing. If it grows beyond that, it becomes a new package.

## Contributing

Contributions are welcome. See [`CONTRIBUTING.md`](CONTRIBUTING.md) for local setup, changeset workflow, and release automation.

## License

[MIT](LICENSE)
