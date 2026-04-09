import type { OxfmtConfig } from "oxfmt";

import { defineConfig as defineOxfmtConfig } from "oxfmt";

export const config = {
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
      { newlinesBetween: true },
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

export const defineConfig = (oxfmtConfig?: OxfmtConfig) =>
  defineOxfmtConfig({ ...config, ...oxfmtConfig });
