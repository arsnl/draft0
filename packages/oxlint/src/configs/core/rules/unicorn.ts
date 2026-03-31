import type { DummyRuleMap, OxlintConfig } from "oxlint";

export const rules = {
  "unicorn/no-await-in-promise-methods": ["error"],
  "unicorn/no-empty-file": ["error"],
  "unicorn/no-invalid-fetch-options": ["error"],
  "unicorn/no-invalid-remove-event-listener": ["error"],
  "unicorn/no-new-array": ["error"],
  "unicorn/no-single-promise-in-promise-methods": ["error"],
  "unicorn/no-thenable": ["error"],
  "unicorn/no-unnecessary-await": ["error"],
  "unicorn/no-useless-fallback-in-spread": ["error"],
  "unicorn/no-useless-length-check": ["error"],
  "unicorn/no-useless-spread": ["error"],
  "unicorn/no-useless-undefined": ["error"],
  "unicorn/prefer-node-protocol": ["error"],
  "unicorn/prefer-number-properties": [
    "error",
    {
      checkInfinity: true,
      checkNaN: true,
    },
  ],
  "unicorn/prefer-set-size": ["error"],
} as const satisfies DummyRuleMap;

export const config = {
  plugins: ["unicorn"],
  rules,
} as const satisfies OxlintConfig;

export default config;
