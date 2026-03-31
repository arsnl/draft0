import type { DummyRuleMap, OxlintConfig } from "oxlint";

/**
 * Unsupported rules
 *
 * As of 2026-03-30, the following rules are not supported by oxlint yet:
 * - import/newline-after-import
 * - import/no-extraneous-dependencies
 * - import/no-useless-path-segments
 *
 * Check updates at https://github.com/oxc-project/oxc/issues/1117 and https://oxc.rs/docs/guide/usage/linter/rules
 */
export const rules = {
  "import/default": ["error"],
  "import/export": ["error"],
  "import/extensions": [
    "error",
    "always",
    {
      ignorePackages: true,
    },
  ],
  "import/first": ["error"],
  "import/named": ["error"],
  "import/namespace": ["error"],
  "import/no-absolute-path": ["error"],
  "import/no-amd": ["error"],
  "import/no-cycle": ["error"],
  // Covered by eslint/no-duplicate-imports
  "import/no-duplicates": ["off"],
  "import/no-dynamic-require": ["error"],
  "import/no-empty-named-blocks": ["error"],
  "import/no-mutable-exports": ["error"],
  "import/no-named-as-default": ["error"],
  "import/no-named-as-default-member": ["error"],
  "import/no-named-default": ["error"],
  "import/no-namespace": ["error"],
  "import/no-self-import": ["error"],
  "import/no-webpack-loader-syntax": ["error"],
  "import/unambiguous": ["error"],
} as const satisfies DummyRuleMap;

export const config = {
  plugins: ["import"],
  rules,
} as const satisfies OxlintConfig;

export default config;
