import type { SnakeCase } from "type-fest";
import type { OxlintPlugin } from "../common.ts";

/**
 * Get the rule scope from the plugin name.
 *
 * @param plugin - The plugin name.
 *
 * @returns The rule scope.
 */
export const getRuleScopeFromPlugin = <T extends OxlintPlugin>(plugin: T) =>
  plugin.replace("-", "_") as SnakeCase<T>;
