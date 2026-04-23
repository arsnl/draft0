import type { OxfmtConfig } from "oxfmt";

export const preset: OxfmtConfig = {
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
};
