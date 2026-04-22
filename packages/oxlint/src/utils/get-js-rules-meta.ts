import type { OxlintRuleMeta } from "../common.ts";
import { getReferencedRuleNames } from "./get-referenced-rule-names.ts";

/**
 * Metadata for the JavaScript rules.
 *
 * Only list the rules that are used in the configs.
 */
const JS_RULES_META: OxlintRuleMeta[] = [
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
    builtIn: false,
    compatible: false,
    referenced: false,
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
    builtIn: false,
    compatible: false,
    referenced: false,
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
    builtIn: false,
    compatible: false,
    referenced: false,
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
    builtIn: false,
    compatible: false,
    referenced: false,
  },
];

/**
 * Get the JavaScript rules metadata.
 *
 * JavaScript rules are rules that are NOT part of the Oxlint core and are provided by third-party
 * JavaScript plugins. They are not listed in the Oxlint CLI rules output.
 *
 * @returns The JavaScript rules metadata.
 */
export const getJsRulesMeta = (): OxlintRuleMeta[] => {
  const referencedRuleNames = getReferencedRuleNames();

  return JS_RULES_META.map((rule) => ({ ...rule, referenced: referencedRuleNames.has(rule.name) }));
};
