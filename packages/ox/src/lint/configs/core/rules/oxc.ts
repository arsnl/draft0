import type { DummyRuleMap, OxlintConfig } from "oxlint";

export const rules = {
  "oxc/approx-constant": ["error"],
  "oxc/bad-array-method-on-arguments": ["error"],
  "oxc/bad-bitwise-operator": ["error"],
  "oxc/bad-char-at-comparison": ["error"],
  "oxc/bad-comparison-sequence": ["error"],
  "oxc/bad-min-max-func": ["error"],
  "oxc/bad-object-literal-comparison": ["error"],
  "oxc/bad-replace-all-arg": ["error"],
  // Disabled: TODO
  "oxc/branches-sharing-code": ["off"],
  "oxc/const-comparisons": ["error"],
  "oxc/double-comparisons": ["error"],
  "oxc/erasing-op": ["error"],
  "oxc/misrefactored-assign-op": ["error"],
  "oxc/missing-throw": ["error"],
  // Disabled: TODO
  "oxc/no-accumulating-spread": ["off"],
  // Disabled: TODO
  "oxc/no-async-await": ["off"],
  // Disabled: TODO
  "oxc/no-async-endpoint-handlers": ["off"],
  // Disabled: TODO
  "oxc/no-barrel-file": ["off"],
  "oxc/no-const-enum": ["error"],
  // Disabled: TODO
  "oxc/no-map-spread": ["off"],
  // Disabled: TODO
  "oxc/no-optional-chaining": ["off"],
  // Disabled: TODO
  "oxc/no-rest-spread-properties": ["off"],
  // Disabled: TODO
  "oxc/no-this-in-exported-function": ["off"],
  "oxc/number-arg-out-of-range": ["error"],
  "oxc/only-used-in-recursion": ["error"],
  "oxc/uninvoked-array-callback": ["error"],
} as const satisfies DummyRuleMap;

export const config = {
  plugins: ["oxc"],
  rules,
} as const satisfies OxlintConfig;

export default config;
