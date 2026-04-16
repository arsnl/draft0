import type { OxfmtConfig as OxfmtConfigBase } from "oxfmt";
import type { Simplify } from "type-fest";

/**
 * Presets for Oxfmt.
 *
 * @see https://oxc.rs/docs/guide/usage/formatter/config-file-reference for more information about
 * the configuration options.
 */
export const presets = {
  default: {
    jsdoc: {
      separateReturnsFromParam: true,
    },
    sortImports: {
      newlinesBetween: false,
      internalPattern: ["~/", "@/", "#"],
      groups: [
        "type-builtin",
        "type-external",
        "type-internal",
        "type-subpath",
        "type-parent",
        "type-sibling",
        "type-index",
        "builtin",
        "external",
        "internal",
        "subpath",
        "parent",
        "sibling",
        "index",
        "style",
        "unknown",
      ],
    },
    sortPackageJson: true,
  },
} as const satisfies Record<string, OxfmtConfigBase>;

export type Preset = typeof presets;

export type PresetName = keyof Preset;

export type OxfmtConfig = Simplify<
  {
    /**
     * The Oxfmt preset to use.
     *
     * @default "default"
     */
    preset?: PresetName;
  } & OxfmtConfigBase
>;
