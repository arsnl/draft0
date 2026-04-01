import type { DummyRuleMap, OxlintConfig } from "oxlint";
import { rules as jestRules } from "./jest.ts";

export const rules = {
  // Disabled: mock callbacks often need empty functions
  "no-empty-function": ["off"],
  // Disabled: mock factories use Promise.resolve/reject (conflicts with require-await)
  "promise/prefer-await-to-then": ["off"],
  // Disabled: conflicts with vitest/prefer-called-times — both rules enforce opposite styles
  "vitest/prefer-called-once": ["off"],

  // TODO: Write a getCompatibleRules function to cover this kind of scenario.
  // Compatible with Jest rules
  "vitest/expect-expect": jestRules["jest/expect-expect"],
  "vitest/no-alias-methods": jestRules["jest/no-alias-methods"],
  "vitest/no-commented-out-tests": jestRules["jest/no-commented-out-tests"],
  "vitest/no-conditional-expect": jestRules["jest/no-conditional-expect"],
  "vitest/no-disabled-tests": jestRules["jest/no-disabled-tests"],
  "vitest/no-duplicate-hooks": jestRules["jest/no-duplicate-hooks"],
  "vitest/no-focused-tests": jestRules["jest/no-focused-tests"],
  "vitest/no-identical-title": jestRules["jest/no-identical-title"],
  "vitest/no-interpolation-in-snapshots":
    jestRules["jest/no-interpolation-in-snapshots"],
  "vitest/no-large-snapshots": jestRules["jest/no-large-snapshots"],
  "vitest/no-mocks-import": jestRules["jest/no-mocks-import"],
  "vitest/no-restricted-matchers": jestRules["jest/no-restricted-matchers"],
  "vitest/no-standalone-expect": jestRules["jest/no-standalone-expect"],
  "vitest/no-test-prefixes": jestRules["jest/no-test-prefixes"],
  "vitest/no-test-return-statement": jestRules["jest/no-test-return-statement"],
  "vitest/prefer-called-with": jestRules["jest/prefer-called-with"],
  "vitest/prefer-comparison-matcher":
    jestRules["jest/prefer-comparison-matcher"],
  "vitest/prefer-each": jestRules["jest/prefer-each"],
  "vitest/prefer-equality-matcher": jestRules["jest/prefer-equality-matcher"],
  "vitest/prefer-expect-resolves": jestRules["jest/prefer-expect-resolves"],
  "vitest/prefer-hooks-in-order": jestRules["jest/prefer-hooks-in-order"],
  "vitest/prefer-hooks-on-top": jestRules["jest/prefer-hooks-on-top"],
  "vitest/prefer-lowercase-title": jestRules["jest/prefer-lowercase-title"],
  "vitest/prefer-mock-promise-shorthand":
    jestRules["jest/prefer-mock-promise-shorthand"],
  "vitest/prefer-spy-on": jestRules["jest/prefer-spy-on"],
  "vitest/prefer-strict-equal": jestRules["jest/prefer-strict-equal"],
  "vitest/prefer-to-be": jestRules["jest/prefer-to-be"],
  "vitest/prefer-to-contain": jestRules["jest/prefer-to-contain"],
  "vitest/prefer-to-have-length": jestRules["jest/prefer-to-have-length"],
  "vitest/prefer-todo": jestRules["jest/prefer-todo"],
  "vitest/require-to-throw-message": jestRules["jest/require-to-throw-message"],
  "vitest/require-top-level-describe":
    jestRules["jest/require-top-level-describe"],
  "vitest/valid-describe-callback": jestRules["jest/valid-describe-callback"],
  "vitest/valid-expect": jestRules["jest/valid-expect"],
  "vitest/valid-title": jestRules["jest/valid-title"],

  "vitest/consistent-each-for": ["error"],
  "vitest/consistent-test-filename": ["error"],
  "vitest/consistent-vitest-vi": ["error"],
  "vitest/hoisted-apis-on-top": ["error"],
  "vitest/no-conditional-tests": ["error"],
  "vitest/no-import-node-test": ["error"],
  "vitest/no-importing-vitest-globals": ["error"],
  "vitest/no-restricted-vi-methods": ["error"],
  "vitest/prefer-called-exactly-once-with": ["error"],
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
