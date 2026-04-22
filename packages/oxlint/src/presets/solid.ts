import type { DummyRuleMap, OxlintConfig } from "oxlint";

const rules = {} as const satisfies DummyRuleMap;

export const preset = {
  plugins: [],
  rules,
  ignorePatterns: ["**/routeTree.gen.ts"],
} as const satisfies OxlintConfig;
