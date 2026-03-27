import plugin from "eslint-plugin-perfectionist";
import { defineConfig } from "eslint/config";
import { type Linter } from "eslint";

const rules = {
  "perfectionist/sort-array-includes": [
    "error",
    { type: "natural", order: "asc" },
  ],
  "perfectionist/sort-classes": ["error", { type: "natural", order: "asc" }],
  "perfectionist/sort-decorators": ["error", { type: "natural", order: "asc" }],
  "perfectionist/sort-enums": ["error", { type: "natural", order: "asc" }],
  "perfectionist/sort-export-attributes": [
    "error",
    { type: "natural", order: "asc" },
  ],
  "perfectionist/sort-exports": ["error", { type: "natural", order: "asc" }],
  "perfectionist/sort-heritage-clauses": [
    "error",
    { type: "natural", order: "asc" },
  ],
  "perfectionist/sort-import-attributes": [
    "error",
    { type: "natural", order: "asc" },
  ],
  "perfectionist/sort-imports": ["error", { type: "natural", order: "asc" }],
  "perfectionist/sort-interfaces": ["error", { type: "natural", order: "asc" }],
  "perfectionist/sort-intersection-types": [
    "error",
    { type: "natural", order: "asc" },
  ],
  "perfectionist/sort-jsx-props": ["error", { type: "natural", order: "asc" }],
  "perfectionist/sort-maps": ["error", { type: "natural", order: "asc" }],
  "perfectionist/sort-modules": ["error", { type: "natural", order: "asc" }],
  "perfectionist/sort-named-exports": [
    "error",
    { type: "natural", order: "asc" },
  ],
  "perfectionist/sort-named-imports": [
    "error",
    { type: "natural", order: "asc" },
  ],
  "perfectionist/sort-object-types": [
    "error",
    { type: "natural", order: "asc" },
  ],
  "perfectionist/sort-objects": ["error", { type: "natural", order: "asc" }],
  "perfectionist/sort-sets": ["error", { type: "natural", order: "asc" }],
  "perfectionist/sort-switch-case": [
    "error",
    { type: "natural", order: "asc" },
  ],
  "perfectionist/sort-union-types": [
    "error",
    { type: "natural", order: "asc" },
  ],
  "perfectionist/sort-variable-declarations": [
    "error",
    { type: "natural", order: "asc" },
  ],
} as const satisfies Linter.RulesRecord;

export const config = defineConfig({
  name: "kit42/core/perfectionist",
  plugins: { perfectionist: plugin },
  rules,
});

export default config;
