import { type Linter } from "eslint";
import plugin from "eslint-plugin-compat";
import { defineConfig } from "eslint/config";

const rules = {
  "compat/compat": ["warn"],
} as const satisfies Linter.RulesRecord;

export const config = defineConfig({
  name: "kit42/core/compat",
  plugins: { compat: plugin },
  rules,
});

export default config;
