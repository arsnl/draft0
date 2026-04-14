import type { OxlintConfig } from "oxlint";

/**
 * Get the names all the rules that are referenced in an Oxlint config.
 *
 * A rule is referenced if the linter configuration names that rule at least once, anywhere it would
 * normally appear in config. It does not matter what level the rule is set to. If the rule is
 * present as "error", "warn", or even "off", it is still referenced, because it is explicitly
 * mentioned.
 *
 * @param config - The Oxlint config.
 *
 * @returns A set of the names of all the rules that are referenced in the config.
 */
export const getConfigReferencedRuleNames = (config: OxlintConfig) => {
  const rootRules = Object.keys(config.rules ?? {});
  const overrideRules =
    config.overrides?.map((override) => Object.keys(override.rules ?? {})) ?? [];

  return new Set([rootRules, ...overrideRules].flat());
};
