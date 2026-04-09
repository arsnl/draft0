import type { RuleCategories } from "oxlint";
import type { KebabCase, SnakeCase } from "type-fest";

export type OxlintPlugin = keyof typeof PLUGINS;

export type OxlintRuleScope = SnakeCase<OxlintPlugin>;

export type OxlintRuleCategory = {
  [K in keyof Required<RuleCategories>]: K;
}[keyof RuleCategories];

export type OxlintRuleMeta = {
  /**
   * Name of the plugin that the rule belongs to. Also used as the prefix for the rule name. e.g.
   * `react-perf`
   */
  plugin: OxlintPlugin;
  /**
   * Like `plugin`, but in snake_case instead of kebab-case. This is the value returned by the
   * Oxlint CLI and then transformed to `plugin` by `getPluginFromRuleScope`. e.g. `react_perf`
   */
  scope: OxlintRuleScope;
  /** The full name of the rule including the plugin prefix. e.g. `react-perf/jsx-no-jsx-as-prop` */
  name: string;
  /** The name of the rule without the plugin prefix. e.g. `jsx-no-jsx-as-prop` */
  value: string;
  /**
   * The category represents the type of intent or purpose of the rule. e.g. `style`. There is a
   * special category `nursery` which is used for rules that are experimental and may be modified in
   * the future.
   */
  category: OxlintRuleCategory;
  /**
   * Whether the rule is type-aware. Type-aware rules are rules that require type information to be
   * used. Those rules need the option `typeAware` to be enabled in the Oxlint config to be used
   * correctly.
   */
  type_aware: boolean;
  /**
   * The fix type represents the kind of fix, if any, that the rule can apply. If there is no fix,
   * the value is `none` and if a fix will be available in the future, the value is `pending`.
   */
  fix:
    | "conditional_dangerous_fix_or_suggestion"
    | "conditional_dangerous_fix"
    | "conditional_fix"
    | "conditional_safe_fix_or_suggestion"
    | "conditional_suggestion"
    | "fixable_dangerous_fix_or_suggestion"
    | "fixable_dangerous_fix"
    | "fixable_dangerous_suggestion"
    | "fixable_fix"
    | "fixable_safe_fix_or_suggestion"
    | "fixable_suggestion"
    | "none"
    | "pending";
  /**
   * Whether the rule is enabled by default in the Oxlint default config. We disable all rules by
   * default, to have a complete control over which rules are enabled, but we then to make sure the
   * default rules are enabled to follow the Oxlint recommendations.
   */
  default: boolean;
  /** The URL to the rule's documentation. */
  docs_url: string;

  /**
   * Whether the rule is built in to Oxlint. Built-in rules are rules that are part of the Oxlint
   * core and are not third-party JavaScript plugins.
   */
  builtIn: boolean;
  /**
   * Whether the rule is a compatible rule. A rule is compatible if it shares the same name and
   * functionality, but has a different prefix. Compatible don't show up in the list of rules from
   * the CLI, but can be used in the config. e.g. `vitest/no-alias-methods` (compatible rule) and
   * `jest/no-alias-methods` (source rule).
   */
  compatible: boolean;
  /**
   * Whether the rule is referenced in any of the configs.
   *
   * A rule is referenced if the linter configuration names that rule at least once, anywhere it
   * would normally appear in config. It does not matter what level the rule is set to. If the rule
   * is present as "error", "warn", or even "off", it is still referenced, because it is explicitly
   * mentioned.
   */
  referenced: boolean;
};

/**
 * Map of plugins where the key is the plugin name and the value is whether the plugin is built in
 * to Oxlint (true) or a third-party JavaScript plugin (false).
 */
export const PLUGINS = {
  "eslint-js": false,
  "jsx-a11y": true,
  "react-perf": true,
  eslint: true,
  import: true,
  jest: true,
  jsdoc: true,
  nextjs: true,
  node: true,
  oxc: true,
  promise: true,
  react: true,
  typescript: true,
  unicorn: true,
  vitest: true,
  vue: true,
} as const satisfies Record<string, boolean>;

export const getPluginFromRuleScope = <T extends OxlintRuleScope>(scope: T) =>
  scope.replace("_", "-") as KebabCase<T>;

export const getRuleScopeFromPlugin = <T extends OxlintPlugin>(plugin: T) =>
  plugin.replace("-", "_") as SnakeCase<T>;

/**
 * Map of compatible rules where the key is the compatible rule and the value is the rule source.
 *
 * A **source rule** is the rule that is listed in the Oxlint CLI and documentation. In the
 * documentation, they have a section that explains with which other rules it is compatible.
 *
 * A **compatible rule** is a rule that shares the same name and functionality as a source rule, but
 * has a different prefix. For example, `jest/no-alias-methods` and `vitest/no-alias-methods`.
 */
export const COMPATIBLE_RULES = {
  "vitest/consistent-test-it": "jest/consistent-test-it",
  "vitest/expect-expect": "jest/expect-expect",
  "vitest/max-expects": "jest/max-expects",
  "vitest/max-nested-describe": "jest/max-nested-describe",
  "vitest/no-alias-methods": "jest/no-alias-methods",
  "vitest/no-commented-out-tests": "jest/no-commented-out-tests",
  "vitest/no-conditional-expect": "jest/no-conditional-expect",
  "vitest/no-conditional-in-test": "jest/no-conditional-in-test",
  "vitest/no-disabled-tests": "jest/no-disabled-tests",
  "vitest/no-duplicate-hooks": "jest/no-duplicate-hooks",
  "vitest/no-focused-tests": "jest/no-focused-tests",
  "vitest/no-hooks": "jest/no-hooks",
  "vitest/no-identical-title": "jest/no-identical-title",
  "vitest/no-interpolation-in-snapshots": "jest/no-interpolation-in-snapshots",
  "vitest/no-large-snapshots": "jest/no-large-snapshots",
  "vitest/no-mocks-import": "jest/no-mocks-import",
  "vitest/no-restricted-matchers": "jest/no-restricted-matchers",
  "vitest/no-restricted-vi-methods": "jest/no-restricted-jest-methods",
  "vitest/no-standalone-expect": "jest/no-standalone-expect",
  "vitest/no-test-prefixes": "jest/no-test-prefixes",
  "vitest/no-test-return-statement": "jest/no-test-return-statement",
  "vitest/no-unneeded-async-expect-function": "jest/no-unneeded-async-expect-function",
  "vitest/prefer-called-with": "jest/prefer-called-with",
  "vitest/prefer-comparison-matcher": "jest/prefer-comparison-matcher",
  "vitest/prefer-each": "jest/prefer-each",
  "vitest/prefer-equality-matcher": "jest/prefer-equality-matcher",
  "vitest/prefer-expect-resolves": "jest/prefer-expect-resolves",
  "vitest/prefer-hooks-in-order": "jest/prefer-hooks-in-order",
  "vitest/prefer-hooks-on-top": "jest/prefer-hooks-on-top",
  "vitest/prefer-lowercase-title": "jest/prefer-lowercase-title",
  "vitest/prefer-mock-promise-shorthand": "jest/prefer-mock-promise-shorthand",
  "vitest/prefer-mock-return-shorthand": "jest/prefer-mock-return-shorthand",
  "vitest/prefer-snapshot-hint": "jest/prefer-snapshot-hint",
  "vitest/prefer-spy-on": "jest/prefer-spy-on",
  "vitest/prefer-strict-equal": "jest/prefer-strict-equal",
  "vitest/prefer-to-be": "jest/prefer-to-be",
  "vitest/prefer-to-contain": "jest/prefer-to-contain",
  "vitest/prefer-to-have-been-called-times": "jest/prefer-to-have-been-called-times",
  "vitest/prefer-to-have-length": "jest/prefer-to-have-length",
  "vitest/prefer-todo": "jest/prefer-todo",
  "vitest/require-hook": "jest/require-hook",
  "vitest/require-to-throw-message": "jest/require-to-throw-message",
  "vitest/require-top-level-describe": "jest/require-top-level-describe",
  "vitest/valid-describe-callback": "jest/valid-describe-callback",
  "vitest/valid-expect": "jest/valid-expect",
  "vitest/valid-title": "jest/valid-title",
} as const satisfies Record<string, string>;
