import type { UserConfig } from "tsdown";
import type { Simplify } from "type-fest";

export type Draft0ConfigOptions = {
  /**
   * Emit TypeScript declaration files.
   *
   * @default true
   */
  dts?: boolean;
  /**
   * Generate dual ESM and CJS output.
   *
   * @default false
   */
  dual?: boolean;
  /**
   * Bundle dependencies from node_modules.
   *
   * @default false
   */
  bundle?: boolean;
};

export type Draft0TSDownConfig = Simplify<
  {
    /**
     * Draft0 high-level options used to derive a TSDown base config.
     *
     * @default { dts: true, dual: false, bundle: false }
     */
    draft0?: Draft0ConfigOptions;
  } & UserConfig
>;
