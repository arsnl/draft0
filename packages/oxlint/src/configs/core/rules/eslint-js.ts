import { defineConfig, type DummyRuleMap } from "oxlint";

/**
 * ESLint rules that are not supported in Oxlint, yet.
 */
export const rules = {
  "eslint-js/no-restricted-exports": [
    "error",
    {
      restrictedNamedExports: ["default"],
    },
  ],
  "eslint-js/no-restricted-properties": [
    "error",
    {
      message: "arguments.callee is deprecated.",
      object: "arguments",
      property: "callee",
    },
    {
      message: "Use Number.isFinite instead.",
      object: "global",
      property: "isFinite",
    },
    {
      message: "Use Number.isFinite instead.",
      object: "self",
      property: "isFinite",
    },
    {
      message: "Use Number.isFinite instead.",
      object: "window",
      property: "isFinite",
    },
    {
      message: "Use Number.isNaN instead.",
      object: "global",
      property: "isNaN",
    },
    {
      message: "Use Number.isNaN instead.",
      object: "self",
      property: "isNaN",
    },
    {
      message: "Use Number.isNaN instead.",
      object: "window",
      property: "isNaN",
    },
    {
      message: "Use Object.defineProperty instead.",
      property: "__defineGetter__",
    },
    {
      message: "Use Object.defineProperty instead.",
      property: "__defineSetter__",
    },
    {
      message: "Use the exponentiation operator (**) instead.",
      object: "Math",
      property: "pow",
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

export const config = defineConfig({
  jsPlugins: ["oxlint-plugin-eslint"],
  rules,
});

export default config;
