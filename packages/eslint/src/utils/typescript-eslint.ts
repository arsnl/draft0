import { type Linter } from "eslint";
import { type ESLintRules } from "eslint/rules";
import { type Prettify } from "./typescript.js";

/**
 * Recommended type-checked rules for TypeScript ESLint plugin
 * @see https://typescript-eslint.io/users/configs/#recommended-type-checked
 */
export const TYPESCRIPT_ESLINT_RECOMMENDED_RULES = {
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

/**
 * ESLint rules that are extended by [TypeScript ESLint plugin](https://typescript-eslint.io)
 *
 * Extension rules generally completely replace the base rule from ESLint core.
 * However, some extension rules may have extra options in their TypeScript implementation.
 */
export const ESLINT_RULES_EXTENDED_BY_TYPESCRIPT = {
  "class-methods-use-this": {
    tsRuleName: "class-methods-use-this",
  },
  "consistent-return": {
    tsRuleName: "consistent-return",
  },
  "default-param-last": {
    tsRuleName: "default-param-last",
  },
  "dot-notation": {
    tsRuleName: "dot-notation",
  },
  "init-declarations": {
    tsRuleName: "init-declarations",
  },
  "max-params": {
    tsRuleName: "max-params",
  },
  "no-array-constructor": {
    tsRuleName: "no-array-constructor",
  },
  "no-dupe-class-members": {
    tsRuleName: "no-dupe-class-members",
  },
  "no-empty-function": {
    tsRuleName: "no-empty-function",
  },
  "no-implied-eval": {
    tsRuleName: "no-implied-eval",
  },
  "no-invalid-this": {
    tsRuleName: "no-invalid-this",
  },
  "no-loop-func": {
    tsRuleName: "no-loop-func",
  },
  "no-loss-of-precision": {
    tsRuleName: "no-loss-of-precision",
  },
  "no-magic-numbers": {
    tsRuleName: "no-magic-numbers",
  },
  "no-new-func": {
    tsRuleName: "no-implied-eval",
  },
  "no-redeclare": {
    tsRuleName: "no-redeclare",
  },
  "no-restricted-imports": {
    tsRuleName: "no-restricted-imports",
  },
  "no-return-await": {
    tsRuleName: "return-await",
  },
  "no-shadow": {
    tsRuleName: "no-shadow",
  },
  "no-throw-literal": {
    tsRuleName: "only-throw-error",
  },
  "no-unused-expressions": {
    tsRuleName: "no-unused-expressions",
  },
  "no-unused-private-class-members": {
    tsRuleName: "no-unused-private-class-members",
  },
  "no-unused-vars": {
    tsRuleName: "no-unused-vars",
  },
  "no-use-before-define": {
    tsRuleName: "no-use-before-define",
  },
  "no-useless-constructor": {
    tsRuleName: "no-useless-constructor",
  },
  "prefer-destructuring": {
    tsRuleName: "prefer-destructuring",
  },
  "prefer-promise-reject-errors": {
    tsRuleName: "prefer-promise-reject-errors",
  },
  "require-await": {
    tsRuleName: "require-await",
  },
} as const satisfies Record<string, { tsRuleName?: string }>;

/**
 * Builds a rules object for a TypeScript ESLint config by:
 *
 * 1. **Mapping extension rules**: For each base ESLint rule that has a
 *    @typescript-eslint equivalent (see `ESLINT_RULES_EXTENDED_BY_TYPESCRIPT`),
 *    turns the core rule off and enables the corresponding @typescript-eslint
 *    rule with the same config (or your override).
 *
 * 2. **Recommended type-checked rules**: By default, merges in the recommended
 *    type-checked rules from the TypeScript ESLint plugin
 *    (`TYPESCRIPT_ESLINT_RECOMMENDED_RULES`). Use `useRecommendedRules: false`
 *    to only apply the extension mapping.
 *
 * @param rules - Your base ESLint rules (e.g. from a shared JS config). Only
 *   rules that have a TypeScript extension are processed; others are ignored.
 * @param config - Optional. Configuration for the returned rules.
 * @param config.overrides - Map of `@typescript-eslint/<rule-name>` to config.
 *   Use to change severity or options for specific TS rules without changing
 *   the base rule object. If omitted for a rule, the value from `rules` (or
 *   the recommended default) is used.
 * @param config.tsPluginName - Plugin name for the TypeScript rules (default:
 *   `"@typescript-eslint"`). Use if you use a different plugin name.
 * @param config.useRecommendedRules - If `true` (default), includes recommended
 *   type-checked rules. If `false`, only the extension-rule mapping is applied.
 * @returns A rules object ready to spread into your TypeScript config (core
 *   rules off where extended, @typescript-eslint rules on).
 *
 * @example
 * // Full TS config: extension mapping + recommended type-checked rules
 * const tsRules = getTypescriptEslintRules(baseJsRules);
 * const baseTsConfig = { rules: { ...tsRules } };
 *
 * @example
 * // Override one TS rule (e.g. stricter or different options)
 * getTypescriptEslintRules(baseJsRules, {
 *   overrides: {
 *     "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
 *   },
 * });
 *
 * @example
 * // Extension mapping only, no recommended type-checked rules
 * getTypescriptEslintRules(baseJsRules, { useRecommendedRules: false });
 *
 * @example
 * // Different TypeScript plugin and override
 * getTypescriptEslintRules(baseJsRules, {
 *   tsPluginName: "ts",
 *   overrides: {
 *     "ts/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
 *   },
 * });
 */
export const getTypescriptEslintRules = <
  Rules extends Partial<ESLintRules>,
  ESLintRuleName extends keyof typeof ESLINT_RULES_EXTENDED_BY_TYPESCRIPT &
    keyof Rules,
  Overrides extends Prettify<
    {
      [K in ESLintRuleName as `${TsPluginName}/${(typeof ESLINT_RULES_EXTENDED_BY_TYPESCRIPT)[K]["tsRuleName"]}`]?: Linter.RuleEntry;
    } & (UseRecommendedRules extends true
      ? {
          [K in keyof typeof TYPESCRIPT_ESLINT_RECOMMENDED_RULES as `${TsPluginName}/${K}`]?: Linter.RuleEntry;
        }
      : {})
  >,
  TsPluginName extends string = "@typescript-eslint",
  UseRecommendedRules extends boolean = true,
>(
  rules: Rules,
  config?: {
    overrides?: Overrides;
    tsPluginName?: TsPluginName;
    useRecommendedRules?: UseRecommendedRules;
  },
) => {
  type ReturnType = Prettify<
    (UseRecommendedRules extends true
      ? {
          [K in keyof typeof TYPESCRIPT_ESLINT_RECOMMENDED_RULES as `${TsPluginName}/${K}`]: Linter.RuleEntry;
        }
      : {}) & {
      [K in ESLintRuleName]: ["off"];
    } & {
      [K in ESLintRuleName as `${TsPluginName}/${(typeof ESLINT_RULES_EXTENDED_BY_TYPESCRIPT)[K]["tsRuleName"]}`]: Linter.RuleEntry;
    }
  >;

  const overrides = config?.overrides;
  const tsPluginName = config?.tsPluginName ?? "@typescript-eslint";

  const extendedRules = Object.entries(
    ESLINT_RULES_EXTENDED_BY_TYPESCRIPT,
  ).reduce((acc, [eslintRuleName, { tsRuleName }]) => {
    const eslintRuleEntry = rules[eslintRuleName];
    const override = (overrides as Partial<ESLintRules>)?.[
      `${tsPluginName}/${tsRuleName}`
    ];

    const rule: Partial<ESLintRules> = eslintRuleEntry
      ? {
          [eslintRuleName]: ["off"],
          [`${tsPluginName}/${tsRuleName}`]: override ?? eslintRuleEntry,
        }
      : {};

    return { ...acc, ...rule };
  }, {} as ReturnType);

  const recommendedRules = config?.useRecommendedRules
    ? Object.entries(TYPESCRIPT_ESLINT_RECOMMENDED_RULES).reduce(
        (acc, [ruleName, ruleEntry]) => {
          const override = (overrides as Partial<ESLintRules>)?.[
            `${tsPluginName}/${ruleName}`
          ];
          return {
            ...acc,
            [`${tsPluginName}/${ruleName}`]: override ?? ruleEntry,
          };
        },
        {} as ReturnType,
      )
    : {};

  return { ...recommendedRules, ...extendedRules };
};
