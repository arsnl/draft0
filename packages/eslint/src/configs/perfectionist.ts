import plugin from "eslint-plugin-perfectionist";
import { type Linter } from "eslint";
import { definePluginConfig } from "../utils/define-plugin-config.js";

const rulesConfig = {
  "sort-array-includes": ["error", { type: "natural", order: "asc" }],
  "sort-classes": ["error", { type: "natural", order: "asc" }],
  "sort-decorators": ["error", { type: "natural", order: "asc" }],
  "sort-enums": ["error", { type: "natural", order: "asc" }],
  "sort-export-attributes": ["error", { type: "natural", order: "asc" }],
  "sort-exports": ["error", { type: "natural", order: "asc" }],
  "sort-heritage-clauses": ["error", { type: "natural", order: "asc" }],
  "sort-import-attributes": ["error", { type: "natural", order: "asc" }],
  "sort-imports": ["error", { type: "natural", order: "asc" }],
  "sort-interfaces": ["error", { type: "natural", order: "asc" }],
  "sort-intersection-types": ["error", { type: "natural", order: "asc" }],
  "sort-jsx-props": ["error", { type: "natural", order: "asc" }],
  "sort-maps": ["error", { type: "natural", order: "asc" }],
  "sort-modules": ["error", { type: "natural", order: "asc" }],
  "sort-named-exports": ["error", { type: "natural", order: "asc" }],
  "sort-named-imports": ["error", { type: "natural", order: "asc" }],
  "sort-object-types": ["error", { type: "natural", order: "asc" }],
  "sort-objects": ["error", { type: "natural", order: "asc" }],
  "sort-sets": ["error", { type: "natural", order: "asc" }],
  "sort-switch-case": ["error", { type: "natural", order: "asc" }],
  "sort-union-types": ["error", { type: "natural", order: "asc" }],
  "sort-variable-declarations": ["error", { type: "natural", order: "asc" }],
} as const satisfies Linter.RulesRecord;

export const { getRulesConfig, getConfig } = definePluginConfig({
  configName: "perfectionist",
  defaultPluginName: "perfectionist",
  rulesConfig,
  plugin,
});

export default {
  getRulesConfig,
  getConfig,
};
