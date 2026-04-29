import type { OxlintConfig } from "oxlint";
import type { Draft0OxlintConfig } from "../common.ts";
import { preset as cjsPreset } from "../presets/cjs.ts";
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
 * On top of the native Oxlint schema, the config accepts one Draft0 namespace field:
 *
 * - `draft0` - optional `{ nested, esm, presets }` wrapper.
 *
 *   - `nested` (default `false`) - Whether this is a nested config. When `true`, root-only options
 *     (e.g. `options`) are not merged.
 *   - `esm` (default `true`) - Whether the project uses ESM. Set this to `false` for CommonJS projects
 *     so ESM-only rules are disabled and Node globals are enabled.
 *   - `presets` (default `[]`) - Additional presets to include. Available names: `analog`, `angular`,
 *     `astro`, `core`, `ember`, `jest`, `jsx`, `lit`, `nestjs`, `nextjs`, `nuxt`, `playwright`,
 *     `preact`, `qwik`, `reactNative`, `reactRouter`, `react`, `remix`, `solid`, `svelteKit`,
 *     `svelte`, `tanstackStart`, `vitest`, `vue`
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
 *     draft0: {
 *       presets: ["nextjs", "vitest"],
 *     },
 *     rules: {
 *       "no-console": "error",
 *     },
 *   });
 *
 * @example
 *   // Use the preset in a CommonJS project.
 *   import { defineConfig } from "@draft0/oxlint";
 *
 *   export default defineConfig({
 *     draft0: {
 *       esm: false,
 *     },
 *   });
 *
 * @param config - Oxlint options merged after the resolved presets.
 *
 * @returns The merged Oxlint configuration.
 */
export const defineConfig = (config: Draft0OxlintConfig = {}): OxlintConfig => {
  const { draft0 = {}, ...self } = config;
  const { nested = false, esm = true, presets: inputPresets = [] } = draft0;

  const presetConfigs = [...resolvePresetDependencies(inputPresets)].map(
    (preset) => presets[preset],
  );

  if (!esm) {
    presetConfigs.push(cjsPreset);
  }

  return [...presetConfigs, self].reduce((acc, conf) => mergeConfigs(conf, acc, { nested }), {});
};
