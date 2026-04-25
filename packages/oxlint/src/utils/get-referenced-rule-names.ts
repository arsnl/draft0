import { presets } from "../presets/index.ts";

/**
 * Get the names of all the rules that are referenced in any of the presets.
 *
 * A rule is referenced if the linter preset names that rule at least once, anywhere it would
 * normally appear in preset config. It does not matter what level the rule is set to. If the rule
 * is present as "error", "warn", or even "off", it is still referenced, because it is explicitly
 * mentioned.
 *
 * @returns A set of the names of all the rules that are referenced in any of the presets.
 */
export const getReferencedRuleNames = (): Set<string> =>
  new Set(
    Object.values(presets).flatMap((preset) => {
      const rootRules = Object.keys(preset.rules ?? {});
      const overrideRules =
        preset.overrides?.map((override) => Object.keys(override.rules ?? {})) ?? [];

      return [rootRules, ...overrideRules].flat();
    }),
  );
