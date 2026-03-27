import { parser, plugin } from "typescript-eslint";
import { type Linter } from "eslint";
import { defineConfig } from "eslint/config";
import { mapTypescriptExtensionRules } from "../../../utils/map-typescript-extension-rules.js";
import { rules as eslintRules } from "./eslint.js";

/**
 * Recommended type-checked rules from the TypeScript ESLint plugin.
 * @see https://typescript-eslint.io/users/configs/#recommended-type-checked
 */
export const recommendedTypeCheckedRules = {
  "@typescript-eslint/await-thenable": ["error"],
  "@typescript-eslint/ban-ts-comment": ["error"],
  "@typescript-eslint/no-array-constructor": ["error"],
  "@typescript-eslint/no-array-delete": ["error"],
  "@typescript-eslint/no-base-to-string": ["error"],
  "@typescript-eslint/no-duplicate-enum-values": ["error"],
  "@typescript-eslint/no-duplicate-type-constituents": ["error"],
  "@typescript-eslint/no-empty-object-type": ["error"],
  "@typescript-eslint/no-explicit-any": ["error"],
  "@typescript-eslint/no-extra-non-null-assertion": ["error"],
  "@typescript-eslint/no-floating-promises": ["error"],
  "@typescript-eslint/no-for-in-array": ["error"],
  "@typescript-eslint/no-implied-eval": ["error"],
  "@typescript-eslint/no-misused-new": ["error"],
  "@typescript-eslint/no-misused-promises": ["error"],
  "@typescript-eslint/no-namespace": ["error"],
  "@typescript-eslint/no-non-null-asserted-optional-chain": ["error"],
  "@typescript-eslint/no-redundant-type-constituents": ["error"],
  "@typescript-eslint/no-require-imports": ["error"],
  "@typescript-eslint/no-this-alias": ["error"],
  "@typescript-eslint/no-unnecessary-type-assertion": ["error"],
  "@typescript-eslint/no-unnecessary-type-constraint": ["error"],
  "@typescript-eslint/no-unsafe-argument": ["error"],
  "@typescript-eslint/no-unsafe-assignment": ["error"],
  "@typescript-eslint/no-unsafe-call": ["error"],
  "@typescript-eslint/no-unsafe-declaration-merging": ["error"],
  "@typescript-eslint/no-unsafe-enum-comparison": ["error"],
  "@typescript-eslint/no-unsafe-function-type": ["error"],
  "@typescript-eslint/no-unsafe-member-access": ["error"],
  "@typescript-eslint/no-unsafe-return": ["error"],
  "@typescript-eslint/no-unsafe-unary-minus": ["error"],
  "@typescript-eslint/no-unused-expressions": ["error"],
  "@typescript-eslint/no-unused-vars": ["error"],
  "@typescript-eslint/no-wrapper-object-types": ["error"],
  "@typescript-eslint/only-throw-error": ["error"],
  "@typescript-eslint/prefer-as-const": ["error"],
  "@typescript-eslint/prefer-namespace-keyword": ["error"],
  "@typescript-eslint/prefer-promise-reject-errors": ["error"],
  "@typescript-eslint/require-await": ["error"],
  "@typescript-eslint/restrict-plus-operands": ["error"],
  "@typescript-eslint/restrict-template-expressions": ["error"],
  "@typescript-eslint/triple-slash-reference": ["error"],
  "@typescript-eslint/unbound-method": ["error"],
} as const satisfies Record<string, Linter.RuleEntry>;

export const extensionRules = mapTypescriptExtensionRules({
  coreRules: eslintRules,
  overrides: {
    "@typescript-eslint/no-redeclare": [
      eslintRules["no-redeclare"][0],
      { ignoreDeclarationMerge: true },
    ],
  },
});

export const rules = {
  ...recommendedTypeCheckedRules,
  ...extensionRules,
  camelcase: ["off"], // Disabled to use @typescript-eslint/naming-convention
  "@typescript-eslint/naming-convention": [
    "error",
    {
      selector: "import",
      format: ["camelCase", "PascalCase"],
      leadingUnderscore: "allow",
    },
    {
      selector: "variable",
      format: ["camelCase", "UPPER_CASE"],
      leadingUnderscore: "allow",
    },
    {
      selector: "variable",
      types: ["function"],
      format: ["camelCase", "PascalCase"],
      leadingUnderscore: "allow",
    },
    {
      selector: "function",
      format: ["camelCase", "PascalCase"],
      leadingUnderscore: "allow",
    },
    {
      selector: "typeLike",
      format: ["PascalCase"],
    },
  ],
} as const satisfies Linter.RulesRecord;

export const config = defineConfig({
  name: "kit42/core/typescript",
  plugins: { "@typescript-eslint": plugin },
  rules,
  files: ["**/*.{mts,cts,ts,tsx}"],
  languageOptions: {
    parser,
    parserOptions: {
      projectService: true,
      warnOnUnsupportedTypeScriptVersion: true,
    },
  },
});

export default config;
