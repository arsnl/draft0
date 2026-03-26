import plugin from "eslint-plugin-unicorn";
import { type Linter } from "eslint";
import { definePluginConfig } from "../utils/define-plugin-config.js";

const rulesConfig = {
  "prefer-node-protocol": ["error"],
} as const satisfies Linter.RulesRecord;

export const { getRulesConfig, getConfig } = definePluginConfig({
  configName: "unicorn",
  defaultPluginName: "unicorn",
  rulesConfig,
  plugin,
});

export default {
  getRulesConfig,
  getConfig,
};
