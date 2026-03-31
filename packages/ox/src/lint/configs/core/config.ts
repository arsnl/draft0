import type { OxlintConfig } from "oxlint";
import { config as eslintJsConfig } from "./rules/eslint-js.ts";
import { config as eslintConfig } from "./rules/eslint.ts";
import { config as importConfig } from "./rules/import.ts";
import { config as oxcConfig } from "./rules/oxc.ts";
import { config as typeScriptConfig } from "./rules/typescript.ts";
import { config as unicornConfig } from "./rules/unicorn.ts";

export const config = {
  extends: [
    eslintConfig,
    eslintJsConfig,
    typeScriptConfig,
    unicornConfig,
    oxcConfig,
    importConfig,
  ],
  /* disable all categories so that we can enable them selectively */
  categories: {
    correctness: "off",
    nursery: "off",
    pedantic: "off",
    perf: "off",
    restriction: "off",
    style: "off",
    suspicious: "off",
  },
  env: {
    browser: true,
  },
  options: {
    reportUnusedDisableDirectives: "warn",
  },
} as const satisfies OxlintConfig;

export default config;
