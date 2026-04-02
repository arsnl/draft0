import type { DummyRuleMap, OxlintConfig } from "oxlint";

export const rules = {
  // Disabled: TODO
  "promise/always-return": ["off"],
  "promise/avoid-new": ["error"],
  // Disabled: TODO
  "promise/catch-or-return": ["off"],
  // Disabled: TODO
  "promise/no-callback-in-promise": ["off"],
  "promise/no-multiple-resolved": ["error"],
  "promise/no-nesting": ["error"],
  "promise/no-new-statics": ["error"],
  "promise/no-promise-in-callback": ["error"],
  "promise/no-return-in-finally": ["error"],
  "promise/no-return-wrap": ["error"],
  "promise/param-names": ["error"],
  "promise/prefer-await-to-callbacks": ["error"],
  "promise/prefer-await-to-then": [
    "error",
    {
      strict: true,
    },
  ],
  "promise/prefer-catch": ["error"],
  "promise/spec-only": ["error"],
  "promise/valid-params": ["error"],
} as const satisfies DummyRuleMap;

export const config = {
  plugins: ["promise"],
  rules,
} as const satisfies OxlintConfig;

export default config;
