import type { UserConfig } from "tsdown";
import type { Simplify } from "type-fest";

/**
 * Presets for TSDown.
 *
 * @see https://tsdown.dev/reference/api/Interface.UserConfig for more information about the
 * configuration options.
 */
export const presets = {
  default: {
    entry: ["src/**/*.ts", "!src/**/*.test.ts"],
    dts: true,
    // To make sure the output files have the .js and .d.ts extension.
    fixedExtension: false,
    deps: {
      skipNodeModulesBundle: true,
    },
    attw: {
      profile: "esm-only",
      level: "error",
    },
    publint: {
      level: "error",
    },
  },
} as const satisfies Record<string, UserConfig>;

export type Presets = typeof presets;

export type PresetName = keyof Presets;

export type TSDownConfig = Simplify<
  {
    /**
     * The TSDown preset to use.
     *
     * @default "default"
     */
    preset?: PresetName;
  } & UserConfig
>;
