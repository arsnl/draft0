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
import { getConfigUsedRuleNames } from "./get-config-used-rule-names.ts";

/**
 * Get the names of all the rules that are used in any of the configs.
 *
 * If a rule is in the set, it means that it is used in the configs, it doesn't mean that it is
 * enabled in any of the configs.
 *
 * @returns A set of the names of all the rules that are used in any of the configs.
 */
export const getUsedRuleNames = (): Set<string> =>
  new Set([
    ...getConfigUsedRuleNames(angularConfig),
    ...getConfigUsedRuleNames(astroConfig),
    ...getConfigUsedRuleNames(coreConfig),
    ...getConfigUsedRuleNames(jestConfig),
    ...getConfigUsedRuleNames(nestjsConfig),
    ...getConfigUsedRuleNames(nextConfig),
    ...getConfigUsedRuleNames(qwikConfig),
    ...getConfigUsedRuleNames(reactConfig),
    ...getConfigUsedRuleNames(remixConfig),
    ...getConfigUsedRuleNames(solidConfig),
    ...getConfigUsedRuleNames(svelteConfig),
    ...getConfigUsedRuleNames(vitestConfig),
    ...getConfigUsedRuleNames(vueConfig),
  ]);
