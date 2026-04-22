import type { UserConfig } from "tsdown";
import type { Draft0TSDownConfig } from "../common.ts";
import { presets } from "../presets/index.ts";

/**
 * Define a tsdown configuration.
 *
 * Resolves the selected {@link presets | preset} (default `"recommended"`) and shallow-merges your
 * `config` on top, so explicit fields always win over the preset's values.
 *
 * On top of the native tsdown schema, the config accepts one extra field:
 *
 * - `preset` (default `"recommended"`) - Built-in preset to start from. Available names:
 *   `recommended`.
 *
 * See the [tsdown `UserConfig`](https://tsdown.dev/reference/api/Interface.UserConfig) reference
 * for the full set of build options.
 *
 * @example
 *   // Use the defaults from the "recommended" preset as-is.
 *   import { defineConfig } from "@draft0/tsdown";
 *
 *   export default defineConfig();
 *
 * @example
 *   // Start from "recommended" and override individual options.
 *   import { defineConfig } from "@draft0/tsdown";
 *
 *   export default defineConfig({
 *     entry: ["src/index.ts"],
 *   });
 *
 * @param config - Tsdown options merged after the resolved preset.
 *
 * @returns The merged tsdown configuration.
 */
export const defineConfig = (config: Draft0TSDownConfig = {}): UserConfig => {
  const { preset = "recommended", ...self } = config;
  const presetConfig = presets[preset];

  return {
    ...presetConfig,
    ...self,
  };
};
