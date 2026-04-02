import type { DummyRuleMap, OxlintConfig } from "oxlint";

export const rules = {
  "unicorn/catch-error-name": ["error"],
  // Disabled: TODO
  "unicorn/consistent-assert": ["off"],
  "unicorn/consistent-date-clone": ["error"],
  "unicorn/consistent-empty-array-spread": ["error"],
  "unicorn/consistent-existence-index-check": ["error"],
  // Disabled: TODO
  "unicorn/consistent-function-scoping": ["off"],
  "unicorn/custom-error-definition": ["error"],
  // Disabled: TODO
  "unicorn/empty-brace-spaces": ["off"],
  "unicorn/error-message": ["error"],
  "unicorn/escape-case": ["error"],
  // Disabled: TODO
  "unicorn/explicit-length-check": ["off"],
  "unicorn/filename-case": ["error"],
  // Disabled: TODO
  "unicorn/new-for-builtins": ["off"],
  "unicorn/no-abusive-eslint-disable": ["error"],
  // Disabled: TODO
  "unicorn/no-accessor-recursion": ["off"],
  "unicorn/no-anonymous-default-export": ["error"],
  // Disabled: TODO
  "unicorn/no-array-callback-reference": ["off"],
  // Disabled: TODO
  "unicorn/no-array-for-each": ["off"],
  "unicorn/no-array-method-this-argument": ["error"],
  // Disabled: TODO
  "unicorn/no-array-reduce": ["off"],
  "unicorn/no-array-reverse": ["error"],
  "unicorn/no-array-sort": ["error"],
  // Disabled: TODO
  "unicorn/no-await-expression-member": ["off"],
  "unicorn/no-await-in-promise-methods": ["error"],
  "unicorn/no-console-spaces": ["error"],
  "unicorn/no-document-cookie": ["error"],
  "unicorn/no-empty-file": ["error"],
  "unicorn/no-hex-escape": ["error"],
  "unicorn/no-immediate-mutation": ["error"],
  "unicorn/no-instanceof-array": ["error"],
  // Disabled: TODO
  "unicorn/no-instanceof-builtins": ["off"],
  "unicorn/no-invalid-fetch-options": ["error"],
  "unicorn/no-invalid-remove-event-listener": ["error"],
  "unicorn/no-length-as-slice-end": ["error"],
  "unicorn/no-lonely-if": ["error"],
  // Disabled: TODO
  "unicorn/no-magic-array-flat-depth": ["off"],
  "unicorn/no-negation-in-equality-check": ["error"],
  // Disabled: TODO
  "unicorn/no-nested-ternary": ["off"],
  "unicorn/no-new-array": ["error"],
  // Disabled: TODO
  "unicorn/no-new-buffer": ["off"],
  // Disabled: TODO
  "unicorn/no-null": ["off"],
  // Disabled: TODO
  "unicorn/no-object-as-default-parameter": ["off"],
  // Disabled: TODO
  "unicorn/no-process-exit": ["off"],
  "unicorn/no-single-promise-in-promise-methods": ["error"],
  // Disabled: TODO
  "unicorn/no-static-only-class": ["off"],
  "unicorn/no-thenable": ["error"],
  "unicorn/no-this-assignment": ["error"],
  "unicorn/no-typeof-undefined": [
    "error",
    {
      checkGlobalVariables: true,
    },
  ],
  "unicorn/no-unnecessary-array-flat-depth": ["error"],
  "unicorn/no-unnecessary-array-splice-count": ["error"],
  "unicorn/no-unnecessary-await": ["error"],
  "unicorn/no-unnecessary-slice-end": ["error"],
  // Disabled: TODO
  "unicorn/no-unreadable-array-destructuring": ["off"],
  // Disabled: TODO
  "unicorn/no-unreadable-iife": ["off"],
  "unicorn/no-useless-collection-argument": ["error"],
  "unicorn/no-useless-error-capture-stack-trace": ["error"],
  "unicorn/no-useless-fallback-in-spread": ["error"],
  "unicorn/no-useless-length-check": ["error"],
  // Disabled: TODO
  "unicorn/no-useless-promise-resolve-reject": ["off"],
  "unicorn/no-useless-spread": ["error"],
  "unicorn/no-useless-switch-case": ["error"],
  "unicorn/no-useless-undefined": ["error"],
  "unicorn/no-zero-fractions": ["error"],
  // Disabled: TODO
  "unicorn/number-literal-case": ["off"],
  "unicorn/numeric-separators-style": ["error"],
  // Disabled: TODO
  "unicorn/prefer-add-event-listener": ["off"],
  "unicorn/prefer-array-find": ["error"],
  "unicorn/prefer-array-flat-map": ["error"],
  "unicorn/prefer-array-flat": ["error"],
  "unicorn/prefer-array-index-of": ["error"],
  "unicorn/prefer-array-some": ["error"],
  "unicorn/prefer-at": ["error"],
  // Disabled: TODO
  "unicorn/prefer-bigint-literals": ["off"],
  // Disabled: TODO
  "unicorn/prefer-blob-reading-methods": ["off"],
  "unicorn/prefer-class-fields": ["error"],
  "unicorn/prefer-classlist-toggle": ["error"],
  "unicorn/prefer-code-point": ["error"],
  "unicorn/prefer-date-now": ["error"],
  "unicorn/prefer-default-parameters": ["error"],
  "unicorn/prefer-dom-node-append": ["error"],
  "unicorn/prefer-dom-node-dataset": ["error"],
  "unicorn/prefer-dom-node-remove": ["error"],
  "unicorn/prefer-dom-node-text-content": ["error"],
  "unicorn/prefer-event-target": ["error"],
  "unicorn/prefer-global-this": ["error"],
  "unicorn/prefer-includes": ["error"],
  "unicorn/prefer-keyboard-event-key": ["error"],
  "unicorn/prefer-logical-operator-over-ternary": ["error"],
  "unicorn/prefer-math-min-max": ["error"],
  "unicorn/prefer-math-trunc": ["error"],
  "unicorn/prefer-modern-dom-apis": ["error"],
  "unicorn/prefer-modern-math-apis": ["error"],
  "unicorn/prefer-module": ["error"],
  // Disabled: TODO
  "unicorn/prefer-native-coercion-functions": ["off"],
  "unicorn/prefer-negative-index": ["error"],
  "unicorn/prefer-node-protocol": ["error"],
  "unicorn/prefer-number-properties": [
    "error",
    {
      checkInfinity: true,
      checkNaN: true,
    },
  ],
  "unicorn/prefer-object-from-entries": ["error"],
  "unicorn/prefer-optional-catch-binding": ["error"],
  "unicorn/prefer-prototype-methods": ["error"],
  "unicorn/prefer-query-selector": ["error"],
  // Disabled: TODO
  "unicorn/prefer-reflect-apply": ["off"],
  "unicorn/prefer-regexp-test": ["error"],
  "unicorn/prefer-response-static-json": ["error"],
  "unicorn/prefer-set-has": ["error"],
  "unicorn/prefer-set-size": ["error"],
  "unicorn/prefer-spread": ["error"],
  "unicorn/prefer-string-raw": ["error"],
  "unicorn/prefer-string-replace-all": ["error"],
  "unicorn/prefer-string-slice": ["error"],
  "unicorn/prefer-string-starts-ends-with": ["error"],
  "unicorn/prefer-string-trim-start-end": ["error"],
  "unicorn/prefer-structured-clone": ["error"],
  "unicorn/prefer-ternary": ["error"],
  "unicorn/prefer-top-level-await": ["error"],
  // Disabled: TODO
  "unicorn/prefer-type-error": ["off"],
  "unicorn/relative-url-style": ["error", "never"],
  // Disabled: TODO
  "unicorn/require-array-join-separator": ["off"],
  "unicorn/require-module-attributes": ["error"],
  "unicorn/require-module-specifiers": ["error"],
  "unicorn/require-number-to-fixed-digits-argument": ["error"],
  // Disabled: TODO
  "unicorn/require-post-message-target-origin": ["off"],
  "unicorn/switch-case-braces": ["error", "always"],
  "unicorn/text-encoding-identifier-case": ["error"],
  "unicorn/throw-new-error": ["error"],
} as const satisfies DummyRuleMap;

export const config = {
  plugins: ["unicorn"],
  rules,
} as const satisfies OxlintConfig;

export default config;
