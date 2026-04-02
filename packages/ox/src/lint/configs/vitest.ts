import type { DummyRuleMap, OxlintConfig } from "oxlint";
import { getCompatibleRules } from "../utils/get-compatible-rules.ts";
import { config as jestConfig } from "./jest.ts";

const compatibleJestRules = getCompatibleRules({
  source: jestConfig.overrides[0].rules,
  sourcePrefix: "jest/",
  targetPrefix: "vitest/",
  rules: [
    "expect-expect",
    "no-alias-methods",
    "no-commented-out-tests",
    "no-conditional-expect",
    "no-disabled-tests",
    "no-duplicate-hooks",
    "no-focused-tests",
    "no-identical-title",
    "no-interpolation-in-snapshots",
    "no-large-snapshots",
    "no-mocks-import",
    "no-restricted-matchers",
    "no-standalone-expect",
    "no-test-prefixes",
    "no-test-return-statement",
    "prefer-called-with",
    "prefer-comparison-matcher",
    "prefer-each",
    "prefer-equality-matcher",
    "prefer-expect-resolves",
    "prefer-hooks-in-order",
    "prefer-hooks-on-top",
    "prefer-lowercase-title",
    "prefer-mock-promise-shorthand",
    "prefer-spy-on",
    "prefer-strict-equal",
    "prefer-to-be",
    "prefer-to-contain",
    "prefer-to-have-length",
    "prefer-todo",
    "require-to-throw-message",
    "require-top-level-describe",
    "valid-describe-callback",
    "valid-expect",
    "valid-title",
  ],
});

const rules = {
  // Disabled: mock callbacks often need empty functions
  "eslint/no-empty-function": ["off"],
  // Disabled: mock factories use Promise.resolve/reject (conflicts with require-await)
  "promise/prefer-await-to-then": ["off"],
  "vitest/consistent-each-for": ["error"],
  "vitest/consistent-test-filename": ["error"],
  "vitest/consistent-vitest-vi": ["error"],
  "vitest/hoisted-apis-on-top": ["error"],
  "vitest/no-conditional-tests": ["error"],
  "vitest/no-import-node-test": ["error"],
  "vitest/no-importing-vitest-globals": ["error"],
  "vitest/no-restricted-vi-methods": ["error"],
  "vitest/prefer-called-exactly-once-with": ["error"],
  // Disabled: conflicts with vitest/prefer-called-times — both rules enforce opposite styles
  "vitest/prefer-called-once": ["off"],
  "vitest/prefer-called-times": ["error"],
  "vitest/prefer-describe-function-title": ["error"],
  "vitest/prefer-expect-type-of": ["error"],
  "vitest/prefer-import-in-mock": ["error"],
  "vitest/prefer-strict-boolean-matchers": ["error"],
  "vitest/prefer-to-be-falsy": ["error"],
  "vitest/prefer-to-be-object": ["error"],
  "vitest/prefer-to-be-truthy": ["error"],
  "vitest/require-awaited-expect-poll": ["error"],
  "vitest/require-local-test-context-for-concurrent-snapshots": ["error"],
  "vitest/require-mock-type-parameters": ["error"],
  "vitest/require-test-timeout": ["error"],
  "vitest/warn-todo": ["error"],
  ...compatibleJestRules,
} as const satisfies DummyRuleMap;

export const config = {
  overrides: [
    {
      files: [
        "**/*.{test,spec}.{js,jsx,cjs,mjs,ts,tsx}",
        "**/__tests__/**/*.{js,jsx,cjs,mjs,ts,tsx}",
      ],
      plugins: ["vitest"],
      rules,
    },
  ],
} as const satisfies OxlintConfig;

export default config;
