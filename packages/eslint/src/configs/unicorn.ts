import plugin from "eslint-plugin-unicorn";
import { type Linter } from "eslint";
import { definePluginConfig } from "../utils/define-plugin-config.js";

const rules = {
  "prefer-node-protocol": ["error"],
} as const satisfies Linter.RulesRecord;

export const { getRules, getConfig, getDefaultPluginName } = definePluginConfig(
  {
    configName: "unicorn",
    defaultPluginName: "unicorn",
    rules,
    plugin,
  },
);

export default {
  getRules,
  getConfig,
  getDefaultPluginName,
};
