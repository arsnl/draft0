import type { OxlintConfig } from "oxlint";
import type { Draft0OxlintConfig } from "../common.ts";
import { presets } from "../presets/index.ts";
import { mergeConfigs } from "./merge-configs.ts";
import { resolvePresetDependencies } from "./resolve-preset-dependencies.ts";

/**
 * Define an Oxlint configuration.
 *
 * Composes the requested {@link presets} in order and merges your own options on top, so explicit
 * fields always win over presets. The merge is field-aware: object fields (`rules`, `settings`,
 * `env`, ...) are merged key-by-key, while array fields (`plugins`, `overrides`, `ignorePatterns`,
 * `extends`, ...) are concatenated and deduplicated where it makes sense.
 *
 * The opinionated `core` preset is always prepended, duplicate presets are deduplicated, and
 * dependencies for requested presets are auto-included.
 *
 * On top of the native Oxlint schema, the config accepts two extra fields:
 *
 * - `root` (default `true`) - Whether this is the root config. Some options (e.g. `options`) are only
 *   honored on the root config, so set this to `false` for nested configs.
 * - `presets` (default `[]`) - Additional presets to include. Available names: `angular`, `astro`,
 *   `jest`, `nestjs`, `next`, `playwright`, `qwik`, `reactRouter`, `react`, `remix`, `solid`,
 *   `svelte`, `vitest`, `vue`.
 *
 * See the [Oxlint configuration
 * reference](https://oxc.rs/docs/guide/usage/linter/config-file-reference) for the full set of
 * linter options.
 *
 * @example
 *   // Use the opinionated `core` preset as-is.
 *   import { defineConfig } from "@draft0/oxlint";
 *
 *   export default defineConfig();
 *
 * @example
 *   // Compose framework presets and override rules locally.
 *   import { defineConfig } from "@draft0/oxlint";
 *
 *   export default defineConfig({
 *     presets: ["next", "vitest"],
 *     rules: {
 *       "no-console": "error",
 *     },
 *   });
 *
 * @param config - Oxlint options merged after the resolved presets.
 *
 * @returns The merged Oxlint configuration.
 */
export const defineConfig = (config: Draft0OxlintConfig = {}): OxlintConfig => {
  const { root = true, presets: inputPresets = [], ...self } = config;

  const presetConfigs = [...resolvePresetDependencies(inputPresets)].map(
    (preset) => presets[preset],
  );

  return [...presetConfigs, self].reduce((acc, conf) => mergeConfigs(conf, acc, { root }), {});
};
