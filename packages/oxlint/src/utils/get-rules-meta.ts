import type { OxlintRuleMeta } from "../common.ts";
import { getBuiltInRulesMeta } from "./get-built-in-rules-meta.ts";
import { getJsRulesMeta } from "./get-js-rules-meta.ts";

/**
 * Get the rules metadata.
 *
 * This function is a wrapper around `getBuiltInRulesMeta` and `getJsRulesMeta` to get all the rules
 * metadata.
 *
 * @returns The rules metadata.
 */
export const getRulesMeta = (): OxlintRuleMeta[] => [...getBuiltInRulesMeta(), ...getJsRulesMeta()];
