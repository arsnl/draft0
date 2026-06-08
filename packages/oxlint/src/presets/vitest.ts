import type { OxlintConfig } from "oxlint";

/**
 * [Vitest](https://vitest.dev/) preset for Oxlint.
 *
 * This preset is applied to files ending in `.test.ts` or `.spec.ts`.
 *
 * This preset depends on the `core` preset.
 */
export const preset: OxlintConfig = {
  overrides: [
    {
      files: ["**/*.{test,spec}.{js,jsx,ts,tsx,cjs,mjs,cts,mts}"],
      plugins: ["vitest"],
      rules: {
        "eslint/no-empty-function": ["off"], // Disabled: Too strict; mock callbacks often need empty functions
        "promise/prefer-await-to-then": ["off"], // Disabled: Too strict; mock factories use Promise.resolve/reject
        "vitest/consistent-each-for": ["error"],
        "vitest/consistent-test-filename": ["error"],
        "vitest/consistent-test-it": ["error"],
        "vitest/consistent-vitest-vi": ["error"],
        "vitest/expect-expect": ["error"],
        "vitest/hoisted-apis-on-top": ["error"],
        "vitest/max-expects": ["error"],
        "vitest/max-nested-describe": ["error"],
        "vitest/no-alias-methods": ["error"],
        "vitest/no-commented-out-tests": ["error"],
        "vitest/no-conditional-expect": ["error"],
        "vitest/no-conditional-in-test": ["off"],
        "vitest/no-conditional-tests": ["error"],
        "vitest/no-disabled-tests": ["error"],
        "vitest/no-duplicate-hooks": ["error"],
        "vitest/no-focused-tests": ["error"],
        "vitest/no-hooks": ["off"],
        "vitest/no-identical-title": ["error"],
        "vitest/no-import-node-test": ["error"],
        "vitest/no-importing-vitest-globals": ["off"], // Disabled: Conflicts with vitest/prefer-importing-vitest-globals — both rules enforce opposite styles
        "vitest/no-interpolation-in-snapshots": ["error"],
        "vitest/no-large-snapshots": ["error"],
        "vitest/no-mocks-import": ["error"],
        "vitest/no-restricted-matchers": ["error"],
        "vitest/no-restricted-vi-methods": ["error"],
        "vitest/no-standalone-expect": ["error"],
        "vitest/no-test-prefixes": ["error"],
        "vitest/no-test-return-statement": ["error"],
        "vitest/no-unneeded-async-expect-function": ["error"],
        "vitest/padding-around-after-all-blocks": ["error"],
        "vitest/prefer-called-exactly-once-with": ["error"],
        "vitest/prefer-called-once": ["off"], // Disabled: Conflicts with vitest/prefer-called-times — both rules enforce opposite styles
        "vitest/prefer-called-times": ["error"],
        "vitest/prefer-called-with": ["error"],
        "vitest/prefer-comparison-matcher": ["error"],
        "vitest/prefer-describe-function-title": ["error"],
        "vitest/prefer-each": ["error"],
        "vitest/prefer-equality-matcher": ["error"],
        "vitest/prefer-expect-assertions": [
          "error",
          {
            onlyFunctionsWithAsyncKeyword: true,
            onlyFunctionsWithExpectInCallback: true,
            onlyFunctionsWithExpectInLoop: true,
          },
        ],
        "vitest/prefer-expect-resolves": ["error"],
        "vitest/prefer-expect-type-of": ["error"],
        "vitest/prefer-hooks-in-order": ["error"],
        "vitest/prefer-hooks-on-top": ["error"],
        "vitest/prefer-import-in-mock": ["error"],
        "vitest/prefer-importing-vitest-globals": ["error"],
        "vitest/prefer-lowercase-title": ["error"],
        "vitest/prefer-mock-promise-shorthand": ["error"],
        "vitest/prefer-mock-return-shorthand": ["error"],
        "vitest/prefer-snapshot-hint": ["error", "always"],
        "vitest/prefer-spy-on": ["error"],
        "vitest/prefer-strict-boolean-matchers": ["error"],
        "vitest/prefer-strict-equal": ["error"],
        "vitest/prefer-to-be-falsy": ["off"], // Disabled: Conflicts with vitest/prefer-strict-boolean-matchers — both rules enforce opposite styles
        "vitest/prefer-to-be-object": ["error"],
        "vitest/prefer-to-be-truthy": ["off"], // Disabled: Conflicts with vitest/prefer-strict-boolean-matchers — both rules enforce opposite styles
        "vitest/prefer-to-be": ["error"],
        "vitest/prefer-to-contain": ["error"],
        "vitest/prefer-to-have-been-called-times": ["error"],
        "vitest/prefer-to-have-length": ["error"],
        "vitest/prefer-todo": ["error"],
        "vitest/require-awaited-expect-poll": ["error"],
        "vitest/require-hook": ["off"],
        "vitest/require-local-test-context-for-concurrent-snapshots": ["error"],
        "vitest/require-mock-type-parameters": ["error"],
        "vitest/require-test-timeout": ["off"], // Disabled: Too verbose; use default timeout or overrides per test if needed
        "vitest/require-to-throw-message": ["error"],
        "vitest/require-top-level-describe": ["error"],
        "vitest/valid-describe-callback": ["error"],
        "vitest/valid-expect-in-promise": ["error"],
        "vitest/valid-expect": ["error"],
        "vitest/valid-title": ["error", { ignoreTypeOfDescribeName: true }],
        "vitest/warn-todo": ["error"],
      },
    },
  ],
};
