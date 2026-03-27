import { defineConfig } from "eslint/config";
import plugin from "eslint-plugin-unicorn";
import { type Linter } from "eslint";

export const rules = {
  "unicorn/prefer-node-protocol": ["error"],
} as const satisfies Linter.RulesRecord;

export const config = defineConfig({
  name: "kit42/core/unicorn",
  plugins: { unicorn: plugin },
  rules,
});

export default config;
