import { preset as angularPreset } from "../presets/angular.ts";
import { preset as astroPreset } from "../presets/astro.ts";
import { preset as corePreset } from "../presets/core.ts";
import { preset as jestPreset } from "../presets/jest.ts";
import { preset as nestjsPreset } from "../presets/nestjs.ts";
import { preset as nextPreset } from "../presets/next.ts";
import { preset as qwikPreset } from "../presets/qwik.ts";
import { preset as reactPreset } from "../presets/react.ts";
import { preset as remixPreset } from "../presets/remix.ts";
import { preset as solidPreset } from "../presets/solid.ts";
import { preset as sveltePreset } from "../presets/svelte.ts";
import { preset as vitestPreset } from "../presets/vitest.ts";
import { preset as vuePreset } from "../presets/vue.ts";
import { getConfigReferencedRuleNames } from "./get-config-referenced-rule-names.ts";

/**
 * Get the names of all the rules that are referenced in any of the configs.
 *
 * A rule is referenced if the linter configuration names that rule at least once, anywhere it would
 * normally appear in config. It does not matter what level the rule is set to. If the rule is
 * present as "error", "warn", or even "off", it is still referenced, because it is explicitly
 * mentioned.
 *
 * @returns A set of the names of all the rules that are referenced in any of the configs.
 */
export const getReferencedRuleNames = (): Set<string> =>
  new Set([
    ...getConfigReferencedRuleNames(angularPreset),
    ...getConfigReferencedRuleNames(astroPreset),
    ...getConfigReferencedRuleNames(corePreset),
    ...getConfigReferencedRuleNames(jestPreset),
    ...getConfigReferencedRuleNames(nestjsPreset),
    ...getConfigReferencedRuleNames(nextPreset),
    ...getConfigReferencedRuleNames(qwikPreset),
    ...getConfigReferencedRuleNames(reactPreset),
    ...getConfigReferencedRuleNames(remixPreset),
    ...getConfigReferencedRuleNames(solidPreset),
    ...getConfigReferencedRuleNames(sveltePreset),
    ...getConfigReferencedRuleNames(vitestPreset),
    ...getConfigReferencedRuleNames(vuePreset),
  ]);
