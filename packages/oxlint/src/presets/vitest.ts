import type { DummyRuleMap, OxlintConfig } from "oxlint";
import { getCompatibleRules } from "../utils/get-compatible-rules.ts";
import { preset as jestPreset } from "./jest.ts";

const vitestCompatibleRules: DummyRuleMap = getCompatibleRules({
  /* v8 ignore next -- @preserve */
  sourceRules: jestPreset.overrides?.[0]?.rules ?? {},
  compatiblePlugin: "vitest",
});

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
        "vitest/consistent-vitest-vi": ["error"],
        "vitest/hoisted-apis-on-top": ["error"],
        "vitest/no-conditional-tests": ["error"],
        "vitest/no-import-node-test": ["error"],
        "vitest/no-importing-vitest-globals": ["off"], // Disabled: Conflicts with vitest/prefer-importing-vitest-globals — both rules enforce opposite styles
        "vitest/prefer-called-exactly-once-with": ["error"],
        "vitest/prefer-called-once": ["off"], // Disabled: Conflicts with vitest/prefer-called-times — both rules enforce opposite styles
        "vitest/prefer-called-times": ["error"],
        "vitest/prefer-describe-function-title": ["error"],
        "vitest/prefer-expect-assertions": [
          "error",
          {
            onlyFunctionsWithAsyncKeyword: true,
            onlyFunctionsWithExpectInCallback: true,
            onlyFunctionsWithExpectInLoop: true,
          },
        ],
        "vitest/prefer-expect-type-of": ["error"],
        "vitest/prefer-import-in-mock": ["error"],
        "vitest/prefer-importing-vitest-globals": ["error"],
        "vitest/prefer-strict-boolean-matchers": ["error"],
        "vitest/prefer-to-be-falsy": ["off"], // Disabled: Conflicts with vitest/prefer-strict-boolean-matchers — both rules enforce opposite styles
        "vitest/prefer-to-be-object": ["error"],
        "vitest/prefer-to-be-truthy": ["off"], // Disabled: Conflicts with vitest/prefer-strict-boolean-matchers — both rules enforce opposite styles
        "vitest/require-awaited-expect-poll": ["error"],
        "vitest/require-local-test-context-for-concurrent-snapshots": ["error"],
        "vitest/require-mock-type-parameters": ["error"],
        "vitest/require-test-timeout": ["off"], // Disabled: Too verbose; use default timeout or overrides per test if needed
        "vitest/valid-title": ["error", { ignoreTypeOfDescribeName: true }],
        "vitest/warn-todo": ["error"],
        ...vitestCompatibleRules,
      },
    },
  ],
};
