import { config as angularConfig } from "../configs/angular.ts";
import { config as astroConfig } from "../configs/astro.ts";
import { config as coreConfig } from "../configs/core.ts";
import { config as jestConfig } from "../configs/jest.ts";
import { config as nestjsConfig } from "../configs/nestjs.ts";
import { config as nextConfig } from "../configs/next.ts";
import { config as qwikConfig } from "../configs/qwik.ts";
import { config as reactConfig } from "../configs/react.ts";
import { config as remixConfig } from "../configs/remix.ts";
import { config as solidConfig } from "../configs/solid.ts";
import { config as svelteConfig } from "../configs/svelte.ts";
import { config as vitestConfig } from "../configs/vitest.ts";
import { config as vueConfig } from "../configs/vue.ts";
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
    ...getConfigReferencedRuleNames(angularConfig),
    ...getConfigReferencedRuleNames(astroConfig),
    ...getConfigReferencedRuleNames(coreConfig),
    ...getConfigReferencedRuleNames(jestConfig),
    ...getConfigReferencedRuleNames(nestjsConfig),
    ...getConfigReferencedRuleNames(nextConfig),
    ...getConfigReferencedRuleNames(qwikConfig),
    ...getConfigReferencedRuleNames(reactConfig),
    ...getConfigReferencedRuleNames(remixConfig),
    ...getConfigReferencedRuleNames(solidConfig),
    ...getConfigReferencedRuleNames(svelteConfig),
    ...getConfigReferencedRuleNames(vitestConfig),
    ...getConfigReferencedRuleNames(vueConfig),
  ]);
