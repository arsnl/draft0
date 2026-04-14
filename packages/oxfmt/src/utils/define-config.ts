import type { OxfmtConfig } from "oxfmt";
import type { Merge, ReadonlyDeep, SimplifyDeep } from "type-fest";
import { defineConfig as defineOxfmtConfig } from "oxfmt";
import { DEFAULT_OXFMT_CONFIG } from "../common.ts";

/**
 * Define an Oxfmt configuration with type inference.
 *
 * This function is a wrapper around the defineConfig function from the oxfmt package, with a more
 * generous {@link DEFAULT_OXFMT_CONFIG | default configuration} that enables more features by
 * default so you don't have to specify everything.
 *
 * Check out the [Oxfmt configuration
 * reference](https://oxc.rs/docs/guide/usage/formatter/config-file-reference) for more information
 * about the configuration options.
 *
 * @param oxfmtConfig - The Oxfmt configuration to merge with the default configuration
 *
 * @returns The Oxfmt configuration.
 */
export const defineConfig = <T extends OxfmtConfig = Record<never, never>>(oxfmtConfig?: T) =>
  defineOxfmtConfig({ ...DEFAULT_OXFMT_CONFIG, ...oxfmtConfig }) as SimplifyDeep<
    Merge<typeof DEFAULT_OXFMT_CONFIG, ReadonlyDeep<T>>
  >;
