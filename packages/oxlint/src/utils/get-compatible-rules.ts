import type { DummyRule, DummyRuleMap } from "oxlint";
import type { OxlintPlugin } from "../common.ts";

/**
 * Map of compatible rules where the key is the compatible rule and the value is the source rule.
 *
 * A **compatible rule** is a rule that shares the same name and functionality as a source rule, but
 * has a different prefix. For example, `jest/no-alias-methods` and `vitest/no-alias-methods`.
 *
 * A **source rule** is the rule that is listed in the Oxlint CLI and documentation. In the
 * documentation, they have a section that explains with which other rules it is compatible.
 */
export const COMPATIBLE_RULES: Record<string, string> = {
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
  "vitest/valid-expect-in-promise": "jest/valid-expect-in-promise",
  "vitest/valid-expect": "jest/valid-expect",
  "vitest/valid-title": "jest/valid-title",
};

/**
 * Get the compatible rules configuration from the source rules configuration.
 *
 * Compatible rules are rules that share the same name, functionality and configuration, but have a
 * different prefix than the source rules configuration. For example, `jest/no-alias-methods`
 * (source rule) and `vitest/no-alias-methods` (compatible rule).
 *
 * @example
 *   ```ts
 *   const vitestCompatibleRules = getCompatibleRules({ sourceRules: jestRules, compatiblePlugin: "vitest" });
 *   ```;
 *
 * @param config - The configuration object.
 * @param config.sourceRules - The source rules configuration.
 * @param config.compatiblePlugin - The compatible plugin name.
 *
 * @returns The compatible rules.
 */
export const getCompatibleRules = ({
  sourceRules,
  compatiblePlugin,
}: {
  sourceRules: DummyRuleMap;
  compatiblePlugin: OxlintPlugin;
}): DummyRuleMap => {
  const compatibleRules = Object.fromEntries(
    Object.entries(COMPATIBLE_RULES)
      .filter(
        ([compatibleRuleName, sourceRuleName]) =>
          compatibleRuleName.startsWith(compatiblePlugin) && sourceRuleName in sourceRules,
      )
      .map(([compatibleRuleName, sourceRuleName]) => [
        compatibleRuleName,
        sourceRules[sourceRuleName],
      ])
      .filter((entry): entry is [string, DummyRule] => entry[1] !== undefined),
  );

  return compatibleRules;
};
