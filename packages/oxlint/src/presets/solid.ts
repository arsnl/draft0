import type { DummyRuleMap, OxlintConfig } from "oxlint";

const rules: DummyRuleMap = {};

export const preset: OxlintConfig = {
  plugins: [],
  rules,
  ignorePatterns: ["**/routeTree.gen.ts"],
};
