import type { DummyRuleMap, OxlintConfig } from "oxlint";

export const rules = {
  "eslint-js/no-restricted-exports": [
    "error",
    {
      restrictedNamedExports: ["default"],
    },
  ],
  "eslint-js/no-restricted-syntax": [
    "error",
    {
      selector: "ForInStatement",
      message:
        "for..in iterates over the prototype chain, which is rarely intended. Use Object.keys(), Object.values(), or Object.entries() and iterate over the resulting array.",
    },
    {
      selector: "ForOfStatement",
      message:
        "for..of is restricted; prefer array methods such as .map(), .forEach(), or .filter() for iteration.",
    },
    {
      selector: "LabeledStatement",
      message:
        "Labeled statements are a form of GOTO and make code harder to follow. Refactor with functions or early returns instead.",
    },
    {
      selector: "WithStatement",
      message:
        "with is disallowed in strict mode and makes code hard to predict and optimize. Use a variable or destructuring instead.",
    },
  ],
  "eslint-js/no-unreachable-loop": ["error"],
  "eslint-js/no-useless-assignment": ["error"],
  "eslint-js/object-shorthand": [
    "error",
    "always",
    {
      avoidQuotes: true,
      ignoreConstructors: false,
    },
  ],
  "eslint-js/one-var": ["error", "never"],
  "eslint-js/prefer-arrow-callback": ["error"],
  "eslint-js/prefer-regex-literals": [
    "error",
    {
      disallowRedundantWrapping: true,
    },
  ],
} as const satisfies DummyRuleMap;

export const config = {
  jsPlugins: ["oxlint-plugin-eslint"],
  rules,
} as const satisfies OxlintConfig;

export default config;
