import type { OxlintRuleMeta } from "../common.ts";
import { getUsedRuleNames } from "./get-used-rule-names.ts";

/**
 * Metadata for the JavaScript rules.
 *
 * Only list the rules that are used in the configs.
 */
const JS_RULES_META = [
  {
    scope: "eslint_js",
    value: "no-restricted-syntax",
    category: "restriction",
    type_aware: false,
    fix: "none",
    default: false,
    docs_url: "https://eslint.org/docs/latest/rules/no-restricted-syntax",
    plugin: "eslint-js",
    name: "eslint-js/no-restricted-syntax",
    isBuiltIn: false,
    isCompatible: false,
    isUsed: false,
  },
  {
    scope: "eslint_js",
    value: "no-unreachable-loop",
    category: "correctness",
    type_aware: false,
    fix: "none",
    default: false,
    docs_url: "https://eslint.org/docs/latest/rules/no-unreachable-loop",
    plugin: "eslint-js",
    name: "eslint-js/no-unreachable-loop",
    isBuiltIn: false,
    isCompatible: false,
    isUsed: false,
  },
  {
    scope: "eslint_js",
    value: "one-var",
    category: "style",
    type_aware: false,
    fix: "fixable_fix",
    default: false,
    docs_url: "https://eslint.org/docs/latest/rules/one-var",
    plugin: "eslint-js",
    name: "eslint-js/one-var",
    isBuiltIn: false,
    isCompatible: false,
    isUsed: false,
  },
  {
    scope: "eslint_js",
    value: "prefer-arrow-callback",
    category: "style",
    type_aware: false,
    fix: "fixable_fix",
    default: false,
    docs_url: "https://eslint.org/docs/latest/rules/prefer-arrow-callback",
    plugin: "eslint-js",
    name: "eslint-js/prefer-arrow-callback",
    isBuiltIn: false,
    isCompatible: false,
    isUsed: false,
  },
] as const satisfies OxlintRuleMeta[];

/**
 * Get the JavaScript rules metadata.
 *
 * JavaScript rules are rules that are NOT part of the Oxlint core and are provided by third-party
 * JavaScript plugins. They are not listed in the Oxlint CLI rules output.
 *
 * @returns The JavaScript rules metadata.
 */
export const getJsRulesMeta = (): OxlintRuleMeta[] => {
  const usedRuleNames = getUsedRuleNames();

  return JS_RULES_META.map((rule) => ({ ...rule, isUsed: usedRuleNames.has(rule.name) }));
};
