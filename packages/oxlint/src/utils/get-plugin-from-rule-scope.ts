import type { KebabCase } from "type-fest";
import type { OxlintRuleScope } from "../common.ts";

/**
 * Get the plugin name from the rule scope.
 *
 * @param scope - The rule scope.
 *
 * @returns The plugin name.
 */
export const getPluginFromRuleScope = <T extends OxlintRuleScope>(scope: T) =>
  scope.replace("_", "-") as KebabCase<T>;
