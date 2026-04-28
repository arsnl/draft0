import type { OxfmtConfig } from "oxfmt";

/**
 * Draft0 baseline [Oxfmt](https://oxc.rs/docs/guide/usage/formatter) settings (JSDoc, import sort,
 * `sortPackageJson`). Applied by `defineConfig` from `@draft0/oxfmt`, or spread into
 * [`defineConfig` from
 * `Oxfmt`](https://oxc.rs/docs/guide/usage/formatter/config.html#create-a-config-file).
 */
export const defaults: OxfmtConfig = {
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
