import type { OxlintConfig } from "oxlint";

// TODO: Check to split react preset and JSX presets, so we can depend on the JSX preset here.

/**
 * [Solid](https://solidjs.com/) preset for Oxlint.
 *
 * This preset is currently a stub for future implementation.
 *
 * This preset depends on the `core` preset.
 */
export const preset: OxlintConfig = {
  plugins: [],
  rules: {},
  ignorePatterns: ["**/routeTree.gen.ts"],
};
