import type { OxlintConfig } from "oxlint";

/**
 * Get the names all the rules that are used in an Oxlint config.
 *
 * If a rule is in the set, it means that it is used in the config, it doesn't mean that it is
 * enabled in the config.
 *
 * @param config - The Oxlint config.
 *
 * @returns A set of the names of all the rules that are used in the config.
 */
export const getConfigUsedRuleNames = (config: OxlintConfig) => {
  const rootRules = Object.keys(config.rules ?? {});
  const overrideRules =
    config.overrides?.map((override) => Object.keys(override.rules ?? {})) ?? [];

  return new Set([rootRules, ...overrideRules].flat());
};
