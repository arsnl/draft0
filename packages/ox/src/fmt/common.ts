import type { OxfmtConfig } from "oxfmt";

/**
 * Default configuration for Oxfmt.
 *
 * This is the configuration that is used if no configuration is provided to the `defineConfig`
 * function.
 *
 * @see https://oxc.rs/docs/guide/usage/formatter/config-file-reference
 */
export const DEFAULT_OXFMT_CONFIG = {
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
} as const satisfies OxfmtConfig;
