import type { OxfmtConfig } from "oxfmt";
import { defaults } from "../defaults.ts";

/**
 * Define an Oxfmt configuration with Draft0 {@link defaults | defaults} applied first.
 *
 * Your options are shallow-merged on top, so top-level fields you set replace Draft0’s for that
 * key.
 *
 * If you prefer to compose with Oxfmt’s own helper, spread {@link defaults | defaults} into
 * [`defineConfig` from
 * `Oxfmt`](https://oxc.rs/docs/guide/usage/formatter/config.html#create-a-config-file).
 *
 * @example
 *   import { defineConfig } from "@draft0/oxfmt";
 *
 *   export default defineConfig();
 *
 * @example
 *   import { defineConfig } from "@draft0/oxfmt";
 *
 *   export default defineConfig({
 *     sortPackageJson: false,
 *   });
 *
 * @example
 *   import { defineConfig as defineOxfmtConfig } from "oxfmt";
 *   import { defaults } from "@draft0/oxfmt";
 *
 *   export default defineOxfmtConfig({
 *     ...defaults,
 *     printWidth: 80,
 *   });
 *
 * @param config - Partial Oxfmt options merged after Draft0 defaults (top-level shallow merge).
 *
 * @returns A complete Oxfmt configuration.
 */
export const defineConfig = (config: OxfmtConfig = {}): OxfmtConfig => ({
  ...defaults,
  ...config,
});
