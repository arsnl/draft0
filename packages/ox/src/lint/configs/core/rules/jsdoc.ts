import type { DummyRuleMap, OxlintConfig } from "oxlint";

export const rules = {
  "jsdoc/check-access": ["error"],
  "jsdoc/check-property-names": ["error"],
  "jsdoc/check-tag-names": ["error"],
  "jsdoc/empty-tags": ["error"],
  "jsdoc/implements-on-classes": ["error"],
  "jsdoc/no-defaults": ["error"],
  "jsdoc/require-param-description": ["error"],
  "jsdoc/require-param-name": ["error"],
  // Disabled: TODO
  "jsdoc/require-param-type": ["off"],
  "jsdoc/require-param": ["error"],
  "jsdoc/require-property-description": ["error"],
  "jsdoc/require-property-name": ["error"],
  // Disabled: TODO
  "jsdoc/require-property-type": ["off"],
  "jsdoc/require-property": ["error"],
  "jsdoc/require-returns-description": ["error"],
  // Disabled: TODO
  "jsdoc/require-returns-type": ["off"],
  "jsdoc/require-returns": ["error"],
  "jsdoc/require-yields": ["error"],
} as const satisfies DummyRuleMap;

export const config = {
  plugins: ["jsdoc"],
  rules,
} as const satisfies OxlintConfig;

export default config;
