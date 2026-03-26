import { parser, plugin } from "typescript-eslint";
import { type Linter } from "eslint";
import { mapTypescriptExtensionRules } from "../utils/map-typescript-extension-rules.js";
import { definePluginConfig } from "../utils/define-plugin-config.js";
import coreConfig from "./core.js";

/**
 * Recommended type-checked rules from the TypeScript ESLint plugin.
 * @see https://typescript-eslint.io/users/configs/#recommended-type-checked
 */
export const recommendedTypeCheckedRules = {
  "await-thenable": ["error"],
  "ban-ts-comment": ["error"],
  "no-array-constructor": ["error"],
  "no-array-delete": ["error"],
  "no-base-to-string": ["error"],
  "no-duplicate-enum-values": ["error"],
  "no-duplicate-type-constituents": ["error"],
  "no-empty-object-type": ["error"],
  "no-explicit-any": ["error"],
  "no-extra-non-null-assertion": ["error"],
  "no-floating-promises": ["error"],
  "no-for-in-array": ["error"],
  "no-implied-eval": ["error"],
  "no-misused-new": ["error"],
  "no-misused-promises": ["error"],
  "no-namespace": ["error"],
  "no-non-null-asserted-optional-chain": ["error"],
  "no-redundant-type-constituents": ["error"],
  "no-require-imports": ["error"],
  "no-this-alias": ["error"],
  "no-unnecessary-type-assertion": ["error"],
  "no-unnecessary-type-constraint": ["error"],
  "no-unsafe-argument": ["error"],
  "no-unsafe-assignment": ["error"],
  "no-unsafe-call": ["error"],
  "no-unsafe-declaration-merging": ["error"],
  "no-unsafe-enum-comparison": ["error"],
  "no-unsafe-function-type": ["error"],
  "no-unsafe-member-access": ["error"],
  "no-unsafe-return": ["error"],
  "no-unsafe-unary-minus": ["error"],
  "no-unused-expressions": ["error"],
  "no-unused-vars": ["error"],
  "no-wrapper-object-types": ["error"],
  "only-throw-error": ["error"],
  "prefer-as-const": ["error"],
  "prefer-namespace-keyword": ["error"],
  "prefer-promise-reject-errors": ["error"],
  "require-await": ["error"],
  "restrict-plus-operands": ["error"],
  "restrict-template-expressions": ["error"],
  "triple-slash-reference": ["error"],
  "unbound-method": ["error"],
} as const satisfies Record<string, Linter.RuleEntry>;

const coreRules = coreConfig.getRules();

const extensionRules = mapTypescriptExtensionRules({
  coreRules,
  overrides: {
    "@typescript-eslint/no-redeclare": [
      coreRules["no-redeclare"][0],
      { ignoreDeclarationMerge: true },
    ],
  },
});

const extraRulesConfig = {
  ...extensionRules,
  camelcase: ["off"], // Disabled to use @typescript-eslint/naming-convention
} as const satisfies Linter.RulesRecord;

const rules = {
  ...recommendedTypeCheckedRules,
  "naming-convention": [
    "error",
    {
      selector: "default",
      format: ["camelCase"],
      leadingUnderscore: "allow",
    },
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

export const { getRules, getConfig, getDefaultPluginName } = definePluginConfig(
  {
    configName: "typescript",
    defaultPluginName: "@typescript-eslint",
    rules,
    plugin,
    extraConfig: {
      files: ["**/*.{mts,cts,ts,tsx}"],
      languageOptions: {
        parser,
        parserOptions: {
          projectService: true,
          warnOnUnsupportedTypeScriptVersion: true,
        },
      },
      rules: extraRulesConfig,
    },
  },
);

export default {
  getRules,
  getConfig,
  getDefaultPluginName,
};
