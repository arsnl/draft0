import type { DummyRuleMap, OxlintConfig } from "oxlint";

const rules = {} as const satisfies DummyRuleMap;

export const config = {
  plugins: [],
  rules,
  overrides: [
    {
      files: ["**/routeTree.gen.ts"],
      rules: {
        // Disabled: TODO
        "unicorn/filename-case": ["off"],
        // Disabled: TODO
        "unicorn/no-abusive-eslint-disable": ["off"],
      },
    },
  ],
} as const satisfies OxlintConfig;

export default config;
