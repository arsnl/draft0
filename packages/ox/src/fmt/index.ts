import type { OxfmtConfig } from "oxfmt";
import { defineConfig as defineOxfmtConfig } from "oxfmt";

export const config = {
  sortImports: {
    newlinesBetween: false,
    internalPattern: ["~/", "@/", "#"],
    groups: [
      "type",
      "builtin",
      "external",
      ["internal", "subpath"],
      ["parent", "sibling", "index"],
      "style",
      "unknown",
    ],
  },
  sortPackageJson: true,
} as const satisfies OxfmtConfig;

export const defineConfig = (oxfmtConfig?: OxfmtConfig) =>
  defineOxfmtConfig({ ...config, ...oxfmtConfig });
