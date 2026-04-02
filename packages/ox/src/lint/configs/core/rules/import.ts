import type { DummyRuleMap, OxlintConfig } from "oxlint";

/*
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
  "import/consistent-type-specifier-style": ["error", "prefer-top-level"],
  "import/default": ["error"],
  "import/export": ["error"],
  // Disabled: TODO
  "import/exports-last": ["off"],
  "import/extensions": [
    "error",
    "always",
    {
      ignorePackages: true,
    },
  ],
  "import/first": ["error"],
  // Disabled: TODO
  "import/group-exports": ["off"],
  // Disabled: TODO
  "import/max-dependencies": ["off"],
  "import/named": ["error"],
  "import/namespace": ["error"],
  "import/no-absolute-path": ["error"],
  "import/no-amd": ["error"],
  // Disabled: TODO
  "import/no-anonymous-default-export": ["off"],
  // Disabled: TODO
  "import/no-commonjs": ["off"],
  "import/no-cycle": ["error"],
  // Disabled: TODO
  "import/no-default-export": ["off"],
  // Disabled: covered by eslint/no-duplicate-imports
  "import/no-duplicates": ["off"],
  "import/no-dynamic-require": ["error"],
  "import/no-empty-named-blocks": ["error"],
  "import/no-mutable-exports": ["error"],
  "import/no-named-as-default-member": ["error"],
  "import/no-named-as-default": ["error"],
  "import/no-named-default": ["error"],
  // Disabled: TODO
  "import/no-named-export": ["off"],
  "import/no-namespace": ["error"],
  // Disabled: TODO
  "import/no-nodejs-modules": ["off"],
  // Disabled: TODO
  "import/no-relative-parent-imports": ["off"],
  "import/no-self-import": ["error"],
  // Disabled: TODO
  "import/no-unassigned-import": ["off"],
  "import/no-webpack-loader-syntax": ["error"],
  // Disabled: TODO
  "import/prefer-default-export": ["off"],
  "import/unambiguous": ["error"],
} as const satisfies DummyRuleMap;

export const config = {
  plugins: ["import"],
  rules,
} as const satisfies OxlintConfig;

export default config;
