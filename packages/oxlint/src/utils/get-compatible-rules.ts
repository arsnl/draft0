import type { DummyRuleMap } from "oxlint";
import { COMPATIBLE_RULES } from "../common.ts";

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
