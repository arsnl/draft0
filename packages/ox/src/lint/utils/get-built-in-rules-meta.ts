import type { OxlintPlugin, OxlintRuleMeta } from "../common.ts";
import { spawnSync } from "node:child_process";
import { COMPATIBLE_RULES, getRuleScopeFromPlugin } from "../common.ts";
import { getPluginFromRuleScope } from "../common.ts";
import { getUsedRuleNames } from "./get-used-rule-names.ts";

type OxlintCliRuleMeta = Omit<OxlintRuleMeta, "plugin" | "name" | "isBuiltIn" | "isCompatible">;

const isOxlintCliRuleMeta = (rule: unknown): rule is OxlintCliRuleMeta =>
  typeof rule === "object" &&
  rule !== null &&
  "scope" in rule &&
  "value" in rule &&
  "category" in rule &&
  "type_aware" in rule &&
  "fix" in rule &&
  "default" in rule &&
  "docs_url" in rule;

/**
 * Get the built-in rules metadata.
 *
 * Built-in rules are rules that are part of the oxlint core and are not third-party JavaScript
 * plugins.
 *
 * @returns The built-in rules metadata.
 */
export const getBuiltInRulesMeta = (): OxlintRuleMeta[] => {
  const usedRuleNames = getUsedRuleNames();

  const { stdout } = spawnSync("npx", ["oxlint", "--rules", "--format", "json"], {
    encoding: "utf8",
    maxBuffer: 50 * 1024 * 1024,
  });

  const parsed: unknown = JSON.parse(stdout);

  if (!Array.isArray(parsed)) {
    throw new Error("oxlint --rules output is not an array");
  }

  const sourceRules = parsed.filter(isOxlintCliRuleMeta).map((rule) => {
    const plugin = getPluginFromRuleScope(rule.scope);
    const name = `${plugin}/${rule.value}`;

    return {
      ...rule,
      plugin,
      name,
      isBuiltIn: true,
      isCompatible: false,
      isUsed: usedRuleNames.has(name),
    };
  });

  const compatibleRules = Object.entries(COMPATIBLE_RULES).map(
    ([compatibleRuleName, sourceRuleName]) => {
      const sourceRule = sourceRules.find(({ name }) => name === sourceRuleName);
      const plugin = compatibleRuleName.split("/")[0] as OxlintPlugin | undefined;

      if (!sourceRule) {
        throw new Error(
          `Source rule ${sourceRuleName} not found from oxlint CLI rules while getting compatible rule ${compatibleRuleName}`,
        );
      }

      if (!plugin) {
        throw new Error(`Compatible rule ${compatibleRuleName} name has no plugin prefix`);
      }

      const name = `${plugin}/${sourceRule.value}`;

      return {
        ...sourceRule,
        scope: getRuleScopeFromPlugin(plugin),
        plugin,
        name,
        isBuiltIn: false,
        isCompatible: true,
        isUsed: usedRuleNames.has(name),
      };
    },
  );

  return [...sourceRules, ...compatibleRules];
};
