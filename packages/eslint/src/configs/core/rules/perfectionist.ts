import { type Linter } from "eslint";
import plugin from "eslint-plugin-perfectionist";
import { defineConfig } from "eslint/config";

const rules = {
  "perfectionist/sort-array-includes": [
    "error",
    { type: "natural", order: "asc" },
  ],
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
  "perfectionist/sort-imports": [
    "error",
    {
      type: "natural",
      order: "asc",
      internalPattern: ["^~/.+", "^@/.+", "^#.+"],
    },
  ],

  "perfectionist/sort-maps": ["error", { type: "natural", order: "asc" }],
  "perfectionist/sort-named-exports": [
    "error",
    { type: "natural", order: "asc" },
  ],
  "perfectionist/sort-named-imports": [
    "error",
    { type: "natural", order: "asc" },
  ],
  "perfectionist/sort-sets": ["error", { type: "natural", order: "asc" }],
  "perfectionist/sort-switch-case": [
    "error",
    { type: "natural", order: "asc" },
  ],
  "perfectionist/sort-union-types": [
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
