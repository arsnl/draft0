import type { DummyRuleMap, OxlintConfig } from "oxlint";

const rules = {} as const satisfies DummyRuleMap;

export const config = {
  plugins: [],
  rules,
} as const satisfies OxlintConfig;

export default config;
