import type { OxfmtConfig } from "oxfmt";
import type { Draft0OxfmtConfig } from "../common.ts";
import { presets } from "../presets/index.ts";

/**
 * Define an Oxfmt configuration.
 *
 * Resolves the selected {@link presets | preset} (default `"recommended"`) and shallow-merges your
 * `config` on top, so explicit fields always win over the preset's values.
 *
 * On top of the native Oxfmt schema, the config accepts one extra field:
 *
 * - `preset` (default `"recommended"`) - Built-in preset to start from. Available names:
 *   `recommended`.
 *
 * See the [Oxfmt configuration
 * reference](https://oxc.rs/docs/guide/usage/formatter/config-file-reference) for the full set of
 * formatter options.
 *
 * @example
 *   // Use the defaults from the "recommended" preset as-is.
 *   import { defineConfig } from "@draft0/oxfmt";
 *
 *   export default defineConfig();
 *
 * @example
 *   // Start from "recommended" and override individual options.
 *   import { defineConfig } from "@draft0/oxfmt";
 *
 *   export default defineConfig({
 *     sortPackageJson: false,
 *   });
 *
 * @param config - Oxfmt options merged after the resolved preset.
 *
 * @returns The merged Oxfmt configuration.
 */
export const defineConfig = (config: Draft0OxfmtConfig = {}): OxfmtConfig => {
  const { preset = "recommended", ...self } = config;
  const presetConfig = presets[preset];

  return {
    ...presetConfig,
    ...self,
  };
};
