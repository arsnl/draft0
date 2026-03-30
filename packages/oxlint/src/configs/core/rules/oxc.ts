import { defineConfig, type DummyRuleMap } from "oxlint";

export const rules = {
  "oxc/bad-array-method-on-arguments": ["error"],
  "oxc/bad-char-at-comparison": ["error"],
  "oxc/bad-comparison-sequence": ["error"],
  "oxc/bad-min-max-func": ["error"],
  "oxc/bad-object-literal-comparison": ["error"],
  "oxc/bad-replace-all-arg": ["error"],
  "oxc/const-comparisons": ["error"],
  "oxc/double-comparisons": ["error"],
  "oxc/erasing-op": ["error"],
  "oxc/missing-throw": ["error"],
  "oxc/number-arg-out-of-range": ["error"],
  "oxc/only-used-in-recursion": ["error"],
  "oxc/uninvoked-array-callback": ["error"],
} as const satisfies DummyRuleMap;

export const config = defineConfig({
  plugins: ["oxc"],
  rules,
});

export default config;
