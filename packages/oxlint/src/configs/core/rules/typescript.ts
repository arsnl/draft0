import { type DummyRuleMap, type OxlintConfig } from "oxlint";

export const rules = {
  "typescript/await-thenable": ["error"],
  "typescript/ban-ts-comment": ["error"],
  "typescript/consistent-return": [
    "error",
    {
      treatUndefinedAsUnspecified: true,
    },
  ],
  "typescript/consistent-type-exports": [
    "error",
    {
      fixMixedExportsWithInlineTypeSpecifier: true,
    },
  ],
  "typescript/consistent-type-imports": [
    "error",
    {
      fixStyle: "inline-type-imports",
      prefer: "type-imports",
    },
  ],
  "typescript/dot-notation": ["error"],
  "typescript/no-array-delete": ["error"],
  "typescript/no-base-to-string": ["error"],
  "typescript/no-duplicate-enum-values": ["error"],
  "typescript/no-duplicate-type-constituents": ["error"],
  "typescript/no-empty-object-type": ["error"],
  "typescript/no-explicit-any": ["error"],
  "typescript/no-extra-non-null-assertion": ["error"],
  "typescript/no-floating-promises": ["error"],
  "typescript/no-for-in-array": ["error"],
  "typescript/no-implied-eval": ["error"],
  "typescript/no-meaningless-void-operator": ["error"],
  "typescript/no-misused-new": ["error"],
  "typescript/no-misused-promises": ["error"],
  "typescript/no-misused-spread": ["error"],
  "typescript/no-namespace": ["error"],
  "typescript/no-non-null-asserted-optional-chain": ["error"],
  "typescript/no-redundant-type-constituents": ["error"],
  "typescript/no-require-imports": ["error"],
  "typescript/no-this-alias": ["error"],
  "typescript/no-unnecessary-parameter-property-assignment": ["error"],
  "typescript/no-unnecessary-type-assertion": ["error"],
  "typescript/no-unnecessary-type-constraint": ["error"],
  "typescript/no-unsafe-argument": ["error"],
  "typescript/no-unsafe-assignment": ["error"],
  "typescript/no-unsafe-call": ["error"],
  "typescript/no-unsafe-declaration-merging": ["error"],
  "typescript/no-unsafe-enum-comparison": ["error"],
  "typescript/no-unsafe-function-type": ["error"],
  "typescript/no-unsafe-member-access": ["error"],
  "typescript/no-unsafe-return": ["error"],
  "typescript/no-unsafe-unary-minus": ["error"],
  "typescript/no-useless-empty-export": ["error"],
  "typescript/no-wrapper-object-types": ["error"],
  "typescript/only-throw-error": ["error"],
  "typescript/prefer-as-const": ["error"],
  "typescript/prefer-namespace-keyword": ["error"],
  "typescript/prefer-optional-chain": ["error"],
  "typescript/prefer-promise-reject-errors": ["error"],
  "typescript/prefer-string-starts-ends-with": ["error"],
  "typescript/require-array-sort-compare": ["error"],
  "typescript/require-await": ["error"],
  "typescript/restrict-plus-operands": ["error"],
  "typescript/restrict-template-expressions": ["error"],
  "typescript/triple-slash-reference": ["error"],
  "typescript/unbound-method": ["error"],
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
