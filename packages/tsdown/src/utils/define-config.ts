import type { UserConfig } from "tsdown";
import type { Draft0Options, Draft0TsdownConfig } from "../common.ts";

const resolveFromDraft0 = (draft0: Draft0Options = {}): UserConfig => {
  const { dts = true, dual = false, bundle = false } = draft0;

  return {
    entry: ["src/index.{js,jsx,ts,tsx,cjs,mjs,cts,mts}", "index.{js,jsx,ts,tsx,cjs,mjs,cts,mts}"],
    failOnWarn: true,
    dts,
    sourcemap: dts,
    format: dual ? ["esm", "cjs"] : "esm",
    fixedExtension: dual,
    unbundle: !bundle,
    ...(dts
      ? {
          attw: {
            level: "warn",
            profile: dual ? "node16" : "esm-only",
          },
        }
      : {}),
    publint: {
      level: "suggestion",
    },
  };
};

/**
 * Define a tsdown configuration.
 *
 * Resolves Draft0 high-level options (default `{ dts: true, dual: false, bundle: false }`) and
 * shallow-merges your native tsdown `config` on top, so explicit fields always win.
 *
 * On top of the native tsdown schema, the config accepts one extra field:
 *
 * - `draft0` - high-level toggles for declarations, output format strategy, and dependency bundling.
 *
 * See the [tsdown `UserConfig`](https://tsdown.dev/reference/api/Interface.UserConfig) reference
 * for the full set of build options.
 *
 * @example
 *   // Use Draft0 defaults.
 *   import { defineConfig } from "@draft0/tsdown";
 *
 *   export default defineConfig();
 *
 * @example
 *   // Use dual output and bundled dependencies.
 *   import { defineConfig } from "@draft0/tsdown";
 *
 *   export default defineConfig({
 *     draft0: {
 *       dual: true,
 *       bundle: true,
 *     },
 *   });
 *
 * @param config - Tsdown options merged after resolved Draft0 defaults.
 *
 * @returns The merged tsdown configuration.
 */
export const defineConfig = (config: Draft0TsdownConfig = {}): UserConfig => {
  const { draft0, ...self } = config;
  const resolvedConfig = resolveFromDraft0(draft0);

  return {
    ...resolvedConfig,
    ...self,
  };
};
