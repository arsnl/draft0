import type { DummyRuleMap } from "oxlint";

type StripPrefix<T extends string, P extends string> = T extends `${P}${infer Rest}` ? Rest : never;

/**
 * Get the compatible rules from the source rules to the target rules.
 *
 * Compatible rules are rules that share the same name and functionality, but have a different
 * prefix. For example, `jest/no-alias-methods` and `vitest/no-alias-methods`.
 *
 * @example
 *   ```ts
 *   const compatibleRules = getCompatibleRules({
 *     source: jestRules,
 *     sourcePrefix: "jest/",
 *     targetPrefix: "vitest/",
 *     rules: ["no-alias-methods", "no-commented-out-tests"],
 *   });
 *   ```;
 *
 * @param config - The configuration object.
 * @param config.source - The source rules.
 * @param config.sourcePrefix - The prefix of the source rules.
 * @param config.targetPrefix - The prefix of the target rules.
 * @param config.rules - The rules, without prefixes, to get the compatible rules for.
 *
 * @returns The compatible rules.
 */
export const getCompatibleRules = <
  Source extends DummyRuleMap,
  SourcePrefix extends string = "",
  TargetPrefix extends string = "",
  Rules extends StripPrefix<Extract<keyof Source, string>, SourcePrefix>[] = [],
>({
  source,
  sourcePrefix,
  targetPrefix,
  rules,
}: {
  source: Source;
  sourcePrefix?: SourcePrefix;
  targetPrefix?: TargetPrefix;
  rules: Rules;
}) => {
  const entries = rules.flatMap((rule) => {
    const ruleEntry = source[`${sourcePrefix ?? ""}${rule}`];
    if (!ruleEntry) {
      return [];
    }
    return [[`${targetPrefix ?? ""}${rule}`, ruleEntry]];
  });

  // oxlint-disable-next-line typescript/no-unsafe-type-assertion -- Object.fromEntries cannot express this mapped, per-rule return type.
  return Object.fromEntries(entries) as {
    [K in Rules[number] as `${TargetPrefix}${Extract<K, string>}`]: Source[`${SourcePrefix}${K}`];
  };
};
