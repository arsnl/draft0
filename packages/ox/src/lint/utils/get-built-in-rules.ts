import type { OxlintRule } from "../common.ts";
import { spawnSync } from "node:child_process";
import { getPluginFromRuleScope } from "../common.ts";

type OxlintCliRule = Omit<OxlintRule, "plugin" | "name" | "isBuiltIn" | "isCompatible">;

const isOxlintCliRule = (rule: unknown): rule is OxlintCliRule =>
  typeof rule === "object" &&
  rule !== null &&
  "scope" in rule &&
  "value" in rule &&
  "category" in rule &&
  "type_aware" in rule &&
  "fix" in rule &&
  "default" in rule &&
  "docs_url" in rule;

export const getBuiltInRules = (): OxlintRule[] => {
  const { stdout } = spawnSync("npx", ["oxlint", "--rules", "--format", "json"], {
    encoding: "utf8",
    maxBuffer: 50 * 1024 * 1024,
  });

  const parsed: unknown = JSON.parse(stdout);

  if (!Array.isArray(parsed)) {
    throw new Error("oxlint --rules output is not an array");
  }

  return parsed.filter(isOxlintCliRule).map((rule) => ({
    ...rule,
    plugin: getPluginFromRuleScope(rule.scope),
    name: `${getPluginFromRuleScope(rule.scope)}/${rule.value}`,
    isBuiltIn: true,
    isCompatible: false,
  }));
};
