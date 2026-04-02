import type { DummyRuleMap, OxlintConfig } from "oxlint";

export const rules = {
  // Disabled: TODO
  "typescript/adjacent-overload-signatures": ["off"],
  // Disabled: TODO
  "typescript/array-type": ["off"],
  "typescript/await-thenable": ["error"],
  "typescript/ban-ts-comment": ["error"],
  // Disabled: TODO
  "typescript/ban-tslint-comment": ["off"],
  // Disabled: TODO
  "typescript/ban-types": ["off"],
  // Disabled: TODO
  "typescript/class-literal-property-style": ["off"],
  // Disabled: TODO
  "typescript/consistent-generic-constructors": ["off"],
  // Disabled: TODO
  "typescript/consistent-indexed-object-style": ["off"],
  "typescript/consistent-return": [
    "error",
    {
      treatUndefinedAsUnspecified: true,
    },
  ],
  // Disabled: TODO
  "typescript/consistent-type-assertions": ["off"],
  // Disabled: TODO
  "typescript/consistent-type-definitions": ["off"],
  "typescript/consistent-type-exports": [
    "error",
    {
      fixMixedExportsWithInlineTypeSpecifier: false,
    },
  ],
  "typescript/consistent-type-imports": [
    "error",
    {
      fixStyle: "separate-type-imports",
      prefer: "type-imports",
    },
  ],
  "typescript/dot-notation": ["error"],
  // Disabled: TODO
  "typescript/explicit-function-return-type": ["off"],
  // Disabled: TODO
  "typescript/explicit-module-boundary-types": ["off"],
  "typescript/no-array-delete": ["error"],
  "typescript/no-base-to-string": ["error"],
  // Disabled: TODO
  "typescript/no-confusing-non-null-assertion": ["off"],
  // Disabled: TODO
  "typescript/no-confusing-void-expression": ["off"],
  // Disabled: TODO
  "typescript/no-deprecated": ["off"],
  "typescript/no-duplicate-enum-values": ["error"],
  "typescript/no-duplicate-type-constituents": ["error"],
  // Disabled: TODO
  "typescript/no-dynamic-delete": ["off"],
  // Disabled: TODO
  "typescript/no-empty-interface": ["off"],
  "typescript/no-empty-object-type": ["error"],
  "typescript/no-explicit-any": ["error"],
  "typescript/no-extra-non-null-assertion": ["error"],
  // Disabled: TODO
  "typescript/no-extraneous-class": ["off"],
  "typescript/no-floating-promises": ["error"],
  "typescript/no-for-in-array": ["error"],
  "typescript/no-implied-eval": ["error"],
  // Disabled: TODO
  "typescript/no-import-type-side-effects": ["off"],
  // Disabled: TODO
  "typescript/no-inferrable-types": ["off"],
  // Disabled: TODO
  "typescript/no-invalid-void-type": ["off"],
  "typescript/no-meaningless-void-operator": ["error"],
  "typescript/no-misused-new": ["error"],
  "typescript/no-misused-promises": ["error"],
  "typescript/no-misused-spread": ["error"],
  // Disabled: TODO
  "typescript/no-mixed-enums": ["off"],
  "typescript/no-namespace": ["error"],
  // Disabled: TODO
  "typescript/no-non-null-asserted-nullish-coalescing": ["off"],
  "typescript/no-non-null-asserted-optional-chain": ["error"],
  // Disabled: TODO
  "typescript/no-non-null-assertion": ["off"],
  "typescript/no-redundant-type-constituents": ["error"],
  "typescript/no-require-imports": ["error"],
  // Disabled: TODO
  "typescript/no-restricted-types": ["off"],
  "typescript/no-this-alias": ["error"],
  // Disabled: TODO
  "typescript/no-unnecessary-boolean-literal-compare": ["off"],
  // Disabled: TODO
  "typescript/no-unnecessary-condition": ["off"],
  "typescript/no-unnecessary-parameter-property-assignment": ["error"],
  // Disabled: TODO
  "typescript/no-unnecessary-qualifier": ["off"],
  // Disabled: TODO
  "typescript/no-unnecessary-template-expression": ["off"],
  // Disabled: TODO
  "typescript/no-unnecessary-type-arguments": ["off"],
  "typescript/no-unnecessary-type-assertion": ["error"],
  "typescript/no-unnecessary-type-constraint": ["error"],
  // Disabled: TODO
  "typescript/no-unnecessary-type-conversion": ["off"],
  // Disabled: TODO
  "typescript/no-unnecessary-type-parameters": ["off"],
  "typescript/no-unsafe-argument": ["error"],
  "typescript/no-unsafe-assignment": ["error"],
  "typescript/no-unsafe-call": ["error"],
  "typescript/no-unsafe-declaration-merging": ["error"],
  "typescript/no-unsafe-enum-comparison": ["error"],
  "typescript/no-unsafe-function-type": ["error"],
  "typescript/no-unsafe-member-access": ["error"],
  "typescript/no-unsafe-return": ["error"],
  // Disabled: TODO
  "typescript/no-unsafe-type-assertion": ["off"],
  "typescript/no-unsafe-unary-minus": ["error"],
  // Disabled: TODO
  "typescript/no-useless-default-assignment": ["off"],
  "typescript/no-useless-empty-export": ["error"],
  // Disabled: TODO
  "typescript/no-var-requires": ["off"],
  "typescript/no-wrapper-object-types": ["error"],
  // Disabled: TODO
  "typescript/non-nullable-type-assertion-style": ["off"],
  "typescript/only-throw-error": ["error"],
  // Disabled: TODO
  "typescript/parameter-properties": ["off"],
  "typescript/prefer-as-const": ["error"],
  // Disabled: TODO
  "typescript/prefer-enum-initializers": ["off"],
  // Disabled: TODO
  "typescript/prefer-find": ["off"],
  // Disabled: TODO
  "typescript/prefer-for-of": ["off"],
  // Disabled: TODO
  "typescript/prefer-function-type": ["off"],
  // Disabled: TODO
  "typescript/prefer-includes": ["off"],
  // Disabled: TODO
  "typescript/prefer-literal-enum-member": ["off"],
  "typescript/prefer-namespace-keyword": ["error"],
  // Disabled: TODO
  "typescript/prefer-nullish-coalescing": ["off"],
  "typescript/prefer-optional-chain": ["error"],
  "typescript/prefer-promise-reject-errors": ["error"],
  // Disabled: TODO
  "typescript/prefer-readonly-parameter-types": ["off"],
  // Disabled: TODO
  "typescript/prefer-readonly": ["off"],
  // Disabled: TODO
  "typescript/prefer-reduce-type-parameter": ["off"],
  // Disabled: TODO
  "typescript/prefer-regexp-exec": ["off"],
  // Disabled: TODO
  "typescript/prefer-return-this-type": ["off"],
  "typescript/prefer-string-starts-ends-with": ["error"],
  // Disabled: TODO
  "typescript/prefer-ts-expect-error": ["off"],
  // Disabled: TODO
  "typescript/promise-function-async": ["off"],
  // Disabled: TODO
  "typescript/related-getter-setter-pairs": ["off"],
  "typescript/require-array-sort-compare": ["error"],
  "typescript/require-await": ["error"],
  "typescript/restrict-plus-operands": ["error"],
  "typescript/restrict-template-expressions": ["error"],
  // Disabled: TODO
  "typescript/return-await": ["off"],
  // Disabled: TODO
  "typescript/strict-boolean-expressions": ["off"],
  // Disabled: TODO
  "typescript/strict-void-return": ["off"],
  // Disabled: TODO
  "typescript/switch-exhaustiveness-check": ["off"],
  "typescript/triple-slash-reference": ["error"],
  "typescript/unbound-method": ["error"],
  // Disabled: TODO
  "typescript/unified-signatures": ["off"],
  // Disabled: TODO
  "typescript/use-unknown-in-catch-callback-variable": ["off"],
} as const satisfies DummyRuleMap;

export const config = {
  plugins: ["typescript"],
  options: {
    typeAware: true,
    typeCheck: true,
  },
  rules,
} as const satisfies OxlintConfig;

export default config;
