import type { OxlintConfig, RuleCategories } from "oxlint";
import type { Simplify, SnakeCase } from "type-fest";
import type { PresetName } from "./presets/index.ts";

export type OxlintPlugin =
  | "eslint-js"
  | "jsx-a11y"
  | "react-perf"
  | "eslint"
  | "import"
  | "jest"
  | "jsdoc"
  | "nextjs"
  | "node"
  | "oxc"
  | "promise"
  | "react"
  | "typescript"
  | "unicorn"
  | "vitest"
  | "vue";

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
  /** Like `plugin`, but in snake_case instead of kebab-case. e.g. `react_perf` */
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

export type Draft0OxlintConfig = Simplify<
  {
    /**
     * Whether the config is the root config.
     *
     * @default true
     */
    root?: boolean;
    /**
     * Whether the config is for ESM modules.
     *
     * @default true
     */
    esm?: boolean;
    /**
     * The framework/library presets to use.
     *
     * @default [ ]
     */
    presets?: PresetName[];
  } & OxlintConfig
>;
