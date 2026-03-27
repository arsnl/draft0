import { type Linter } from "eslint";
import { type ESLintRules } from "eslint/rules";

import { type Prettify } from "./typescript.js";

type MutableTuple<T> = T extends readonly [...infer Items] ? Items : T;

type ExtendedCoreRuleName<CoreRules extends Partial<ESLintRules>> =
  keyof typeof ESLINT_CORE_RULES_EXTENDED_BY_TYPESCRIPT & keyof CoreRules;

type TypescriptRuleName<
  CoreRules extends Partial<ESLintRules>,
  PluginName extends string,
  RuleName extends ExtendedCoreRuleName<CoreRules> =
    ExtendedCoreRuleName<CoreRules>,
> = `${PluginName}/${(typeof ESLINT_CORE_RULES_EXTENDED_BY_TYPESCRIPT)[RuleName]["tsRuleName"]}`;

/**
 * ESLint core rules that are extended by [TypeScript ESLint plugin](https://typescript-eslint.io)
 *
 * Extension rules generally completely replace the ESLint core rule.
 * However, some extension rules may have extra options in their TypeScript ESLint implementation.
 */
export const ESLINT_CORE_RULES_EXTENDED_BY_TYPESCRIPT = {
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
 * Maps a subset of ESLint *core* rules to their TypeScript ESLint equivalents.
 *
 * For every core rule present in `coreRules` that exists in {@link ESLINT_CORE_RULES_EXTENDED_BY_TYPESCRIPT}:
 * - the core rule is set to `["off"]`
 * - the corresponding `pluginName/<tsRuleName>` rule is enabled with the core rule's config (unless overridden)
 *
 * This helper is useful when you already maintain a central "core rules" object and
 * want to produce a TypeScript ESLint `rules` object with correct `off`/override behavior.
 *
 * @param config.coreRules  - ESLint core rules. Only core rules listed in {@link ESLINT_CORE_RULES_EXTENDED_BY_TYPESCRIPT} are mapped; all other keys are ignored.
 * @param config.pluginName - The TypeScript ESLint plugin name used to build rule keys. Defaults to `"@typescript-eslint"`.
 * @param config.overrides - Optional per-rule overrides for the generated TypeScript ESLint rules. Keys must be `"<pluginName>/<ruleName>"` (for example `"@typescript-eslint/no-redeclare"`).
 * @returns A rules object (ready to be spread into a config's `rules`).
 *
 * @example
 * ```ts
 * // Default configuration: extension mapping only
 * import { mapTypescriptExtensionRules } from "@kit42/eslint";
 * import coreConfig from "./core.js";
 *
 * const coreRules = coreConfig.getRulesConfig();
 * const rules = mapTypescriptExtensionRules({ coreRules });
 * ```
 *
 * @example
 * ```ts
 * // Override one TypeScript ESLint rule (e.g. stricter or different options)
 * const rules = mapTypescriptExtensionRules({
 *   coreRules,
 *   overrides: {
 *     "@typescript-eslint/no-redeclare": [
 *       "error",
 *       { ignoreDeclarationMerge: true },
 *     ],
 *   },
 * });
 * ```
 *
 * @example
 * ```ts
 * // Use a different name for the TypeScript ESLint plugin and override a rule
 * const rules = mapTypescriptExtensionRules({
 *   coreRules,
 *   pluginName: "ts",
 *   overrides: {
 *     "ts/no-redeclare": ["error", { ignoreDeclarationMerge: true }],
 *   },
 * });
 * ```
 */
export const mapTypescriptExtensionRules = <
  CoreRules extends Partial<ESLintRules>,
  PluginName extends string = "@typescript-eslint",
  const ProvidedOverrides extends Partial<
    Record<TypescriptRuleName<CoreRules, PluginName>, Linter.RuleEntry>
  > = object,
>(config: {
  /**
   * ESLint core rules. Only core rules listed in {@link ESLINT_CORE_RULES_EXTENDED_BY_TYPESCRIPT} are mapped; all other keys are ignored.
   */
  coreRules: CoreRules;
  /**
   * The TypeScript ESLint plugin name used to build rule keys. Defaults to `"@typescript-eslint"`.
   */
  pluginName?: PluginName;
  /**
   * Optional per-rule overrides for the generated TypeScript ESLint rules. Keys must be `"<pluginName>/<ruleName>"` (for example `"@typescript-eslint/no-redeclare"`).
   */
  overrides?: Prettify<
    Partial<Record<TypescriptRuleName<CoreRules, PluginName>, Linter.RuleEntry>>
  > & {
    [K in keyof ProvidedOverrides as K extends TypescriptRuleName<
      CoreRules,
      PluginName
    >
      ? never
      : K]: never;
  } & ProvidedOverrides;
}) => {
  type ReturnedRules = Prettify<
    {
      [K in ExtendedCoreRuleName<CoreRules>]: ["off"];
    } & {
      [K in ExtendedCoreRuleName<CoreRules> as TypescriptRuleName<
        CoreRules,
        PluginName,
        K
      >]: TypescriptRuleName<
        CoreRules,
        PluginName,
        K
      > extends keyof ProvidedOverrides
        ? MutableTuple<
            NonNullable<
              ProvidedOverrides[TypescriptRuleName<CoreRules, PluginName, K>]
            >
          >
        : MutableTuple<CoreRules[K]>;
    }
  >;

  const overrides: Partial<ESLintRules> = config?.overrides ?? {};
  const pluginName = config?.pluginName ?? "@typescript-eslint";

  return Object.entries(ESLINT_CORE_RULES_EXTENDED_BY_TYPESCRIPT).reduce(
    (acc, [coreRuleName, { tsRuleName }]) => {
      const coreRuleEntry = config.coreRules[coreRuleName];
      const ruleName = `${pluginName}/${tsRuleName}`;
      const override = overrides[ruleName];

      const rule: Partial<ESLintRules> = coreRuleEntry
        ? {
            [coreRuleName]: ["off"],
            [ruleName]: override ?? coreRuleEntry,
          }
        : {};

      return { ...acc, ...rule };
    },
    {} as ReturnedRules,
  );
};
