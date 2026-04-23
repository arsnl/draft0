import type { DummyRuleMap, OxlintConfig } from "oxlint";
import { getCompatibleRules } from "../utils/get-compatible-rules.ts";
import { preset as jestPreset } from "./jest.ts";

export const vitestCompatibleRules: DummyRuleMap = getCompatibleRules({
  sourceRules: jestPreset.overrides?.[0]?.rules ?? {},
  compatiblePlugin: "vitest",
});

const rules: DummyRuleMap = {
  "eslint/no-empty-function": ["off"], // Disabled: Too strict; mock callbacks often need empty functions
  "promise/prefer-await-to-then": ["off"], // Disabled: Too strict; mock factories use Promise.resolve/reject
  "vitest/consistent-each-for": ["error"],
  "vitest/consistent-test-filename": ["error"],
  "vitest/consistent-vitest-vi": ["error"],
  "vitest/hoisted-apis-on-top": ["error"],
  "vitest/no-conditional-tests": ["error"],
  "vitest/no-import-node-test": ["error"],
  "vitest/no-importing-vitest-globals": ["error"],
  "vitest/prefer-called-exactly-once-with": ["error"],
  "vitest/prefer-called-once": ["off"], // Disabled: Conflicts with vitest/prefer-called-times — both rules enforce opposite styles
  "vitest/prefer-called-times": ["error"],
  "vitest/prefer-describe-function-title": ["error"],
  "vitest/prefer-expect-type-of": ["error"],
  "vitest/prefer-import-in-mock": ["error"],
  "vitest/prefer-importing-vitest-globals": ["error"],
  "vitest/prefer-strict-boolean-matchers": ["error"],
  "vitest/prefer-to-be-falsy": ["error"],
  "vitest/prefer-to-be-object": ["error"],
  "vitest/prefer-to-be-truthy": ["error"],
  "vitest/require-awaited-expect-poll": ["error"],
  "vitest/require-local-test-context-for-concurrent-snapshots": ["error"],
  "vitest/require-mock-type-parameters": ["error"],
  "vitest/require-test-timeout": ["error"],
  "vitest/warn-todo": ["error"],
  ...vitestCompatibleRules,
};

export const preset: OxlintConfig = {
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
};
