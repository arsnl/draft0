import type { DummyRuleMap } from "oxlint";
import { COMPATIBLE_RULES } from "../common.ts";

/**
 * Get the compatible rules from the source rules.
 *
 * Compatible rules are rules that share the same name and functionality, but have a different
 * prefix than the source rules. For example, `jest/no-alias-methods` (source rule) and
 * `vitest/no-alias-methods` (compatible rule).
 *
 * @example
 *   ```ts
 *   const jestCompatibleRules = getCompatibleRules(jestRules);
 *   ```;
 *
 * @param config - The configuration object.
 * @param config.sourceRules - The source rules.
 * @param config.compatiblePlugin - The compatible plugin.
 *
 * @returns The compatible rules.
 */
export const getCompatibleRules = <
  SourceRules extends DummyRuleMap,
  CompatiblePlugin extends string,
>({
  sourceRules,
  compatiblePlugin,
}: {
  sourceRules: SourceRules;
  compatiblePlugin: CompatiblePlugin;
}) => {
  const compatibleRules = Object.fromEntries(
    Object.entries(COMPATIBLE_RULES)
      .filter(
        ([compatibleRuleName, sourceRuleName]) =>
          compatibleRuleName.startsWith(compatiblePlugin) && sourceRuleName in sourceRules,
      )
      .map(([compatibleRuleName, sourceRuleName]) => [
        compatibleRuleName,
        sourceRules[sourceRuleName],
      ]),
  );

  return compatibleRules as {
    [K in keyof typeof COMPATIBLE_RULES as K extends `${CompatiblePlugin}/${string}`
      ? (typeof COMPATIBLE_RULES)[K] extends keyof SourceRules
        ? K
        : never
      : never]: SourceRules[(typeof COMPATIBLE_RULES)[K]];
  };
};
