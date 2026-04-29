import type { OxlintConfig } from "oxlint";

/**
 * [Jest](https://jestjs.io/) preset for Oxlint.
 *
 * This preset is applied to files ending in `.test.ts` or `.spec.ts`.
 *
 * This preset depends on the `core` preset.
 */
export const preset: OxlintConfig = {
  overrides: [
    {
      files: ["**/*.{test,spec}.{js,jsx,ts,tsx,cjs,mjs,cts,mts}"],
      plugins: ["jest"],
      rules: {
        "eslint/no-empty-function": ["off"], // Disabled: Too strict; mock callbacks often need empty functions
        "jest/consistent-test-it": ["error"],
        "jest/expect-expect": ["error"],
        "jest/max-expects": ["error"],
        "jest/max-nested-describe": ["error"],
        "jest/no-alias-methods": ["error"],
        "jest/no-commented-out-tests": ["error"],
        "jest/no-conditional-expect": ["error"],
        "jest/no-conditional-in-test": ["off"], // Disabled: Too strict; mock factories use conditionals for path-based routing
        "jest/no-confusing-set-timeout": ["error"],
        "jest/no-deprecated-functions": ["error"],
        "jest/no-disabled-tests": ["error"],
        "jest/no-done-callback": ["error"],
        "jest/no-duplicate-hooks": ["error"],
        "jest/no-export": ["error"],
        "jest/no-focused-tests": ["error"],
        "jest/no-hooks": ["off"], // Disabled: Too strict universally; bun:test uses beforeEach hooks for mock.restore()
        "jest/no-identical-title": ["error"],
        "jest/no-interpolation-in-snapshots": ["error"],
        "jest/no-jasmine-globals": ["error"],
        "jest/no-large-snapshots": ["error"],
        "jest/no-mocks-import": ["error"],
        "jest/no-restricted-jest-methods": ["error"],
        "jest/no-restricted-matchers": ["error"],
        "jest/no-standalone-expect": ["error"],
        "jest/no-test-prefixes": ["error"],
        "jest/no-test-return-statement": ["error"],
        "jest/no-unneeded-async-expect-function": ["error"],
        "jest/no-untyped-mock-factory": ["error"],
        "jest/padding-around-after-all-blocks": ["error"],
        "jest/padding-around-test-blocks": ["error"],
        "jest/prefer-called-with": ["error"],
        "jest/prefer-comparison-matcher": ["error"],
        "jest/prefer-each": ["error"],
        "jest/prefer-ending-with-an-expect": [
          "error",
          { additionalTestBlockFunctions: ["each.test"] },
        ],
        "jest/prefer-equality-matcher": ["error"],
        "jest/prefer-expect-assertions": [
          "error",
          {
            onlyFunctionsWithAsyncKeyword: true,
            onlyFunctionsWithExpectInCallback: true,
            onlyFunctionsWithExpectInLoop: true,
          },
        ],
        "jest/prefer-expect-resolves": ["error"],
        "jest/prefer-hooks-in-order": ["error"],
        "jest/prefer-hooks-on-top": ["error"],
        "jest/prefer-importing-jest-globals": ["error"],
        "jest/prefer-jest-mocked": ["error"],
        "jest/prefer-lowercase-title": ["error"],
        "jest/prefer-mock-promise-shorthand": ["error"],
        "jest/prefer-mock-return-shorthand": ["error"],
        "jest/prefer-snapshot-hint": ["error", "always"],
        "jest/prefer-spy-on": ["error"],
        "jest/prefer-strict-equal": ["error"],
        "jest/prefer-to-be": ["error"],
        "jest/prefer-to-contain": ["error"],
        "jest/prefer-to-have-been-called-times": ["error"],
        "jest/prefer-to-have-been-called": ["error"],
        "jest/prefer-to-have-length": ["error"],
        "jest/prefer-todo": ["error"],
        "jest/require-hook": ["off"], // Disabled: Too strict universally; bun:test mock.module() must be called at top level
        "jest/require-to-throw-message": ["error"],
        "jest/require-top-level-describe": ["error"],
        "jest/valid-describe-callback": ["error"],
        "jest/valid-expect": ["error"],
        "jest/valid-expect-in-promise": ["error"],
        "jest/valid-title": ["error"],
        "promise/prefer-await-to-then": ["off"], // Disabled: Too strict; mock factories use Promise.resolve/reject
      },
    },
  ],
};
