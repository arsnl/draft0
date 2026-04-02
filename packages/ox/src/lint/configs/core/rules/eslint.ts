import type { DummyRuleMap, OxlintConfig } from "oxlint";

export const rules = {
  // Disabled: TODO
  "eslint/accessor-pairs": ["off"],
  "eslint/array-callback-return": [
    "error",
    {
      allowImplicit: true,
      checkForEach: false,
      allowVoid: true,
    },
  ],
  "eslint/arrow-body-style": [
    "error",
    "as-needed",
    {
      requireReturnForObjectLiteral: false,
    },
  ],
  "eslint/block-scoped-var": ["error"],
  // Disabled: TODO
  "eslint/capitalized-comments": ["off"],
  // Disabled: TODO
  "eslint/class-methods-use-this": ["off"],
  // Disabled: TODO
  "eslint/complexity": ["off"],
  "eslint/constructor-super": ["error"],
  "eslint/curly": ["error", "all"],
  "eslint/default-case-last": ["error"],
  "eslint/default-case": [
    "error",
    {
      commentPattern: "^no default$",
    },
  ],
  "eslint/default-param-last": ["error"],
  "eslint/eqeqeq": ["error", "always"],
  "eslint/for-direction": ["error"],
  "eslint/func-names": ["warn", "as-needed"],
  // Disabled: TODO
  "eslint/func-style": ["off"],
  "eslint/getter-return": ["error"],
  "eslint/grouped-accessor-pairs": [
    "error",
    "getBeforeSet",
    {
      enforceForTSTypes: true,
    },
  ],
  "eslint/guard-for-in": ["error"],
  // Disabled: TODO
  "eslint/id-length": ["off"],
  // Disabled: TODO
  "eslint/init-declarations": ["off"],
  // Disabled: TODO
  "eslint/max-classes-per-file": ["off"],
  // Disabled: TODO
  "eslint/max-depth": ["off"],
  // Disabled: TODO
  "eslint/max-lines-per-function": ["off"],
  // Disabled: TODO
  "eslint/max-lines": ["off"],
  // Disabled: TODO
  "eslint/max-nested-callbacks": ["off"],
  // Disabled: TODO
  "eslint/max-params": ["off"],
  // Disabled: TODO
  "eslint/max-statements": ["off"],
  "eslint/new-cap": [
    "error",
    {
      newIsCap: true,
      capIsNew: false,
      properties: true,
    },
  ],
  "eslint/no-alert": ["warn"],
  "eslint/no-array-constructor": ["error"],
  "eslint/no-async-promise-executor": ["error"],
  "eslint/no-await-in-loop": ["error"],
  "eslint/no-bitwise": ["error"],
  "eslint/no-caller": ["error"],
  "eslint/no-case-declarations": ["error"],
  "eslint/no-class-assign": ["error"],
  "eslint/no-compare-neg-zero": ["error"],
  "eslint/no-cond-assign": ["error", "except-parens"],
  "eslint/no-console": ["warn"],
  "eslint/no-const-assign": ["error"],
  "eslint/no-constant-binary-expression": ["error"],
  "eslint/no-constant-condition": ["error"],
  "eslint/no-constructor-return": ["error"],
  "eslint/no-continue": ["error"],
  "eslint/no-control-regex": ["error"],
  "eslint/no-debugger": ["error"],
  "eslint/no-delete-var": ["error"],
  // Disabled: TODO
  "eslint/no-div-regex": ["off"],
  "eslint/no-dupe-class-members": ["error"],
  "eslint/no-dupe-else-if": ["error"],
  "eslint/no-dupe-keys": ["error"],
  "eslint/no-duplicate-case": ["error"],
  "eslint/no-duplicate-imports": [
    "error",
    {
      allowSeparateTypeImports: true,
    },
  ],
  "eslint/no-else-return": [
    "error",
    {
      allowElseIf: false,
    },
  ],
  "eslint/no-empty-character-class": ["error"],
  "eslint/no-empty-function": ["error"],
  "eslint/no-empty-pattern": ["error"],
  "eslint/no-empty-static-block": ["error"],
  "eslint/no-empty": [
    "error",
    {
      allowEmptyCatch: true,
    },
  ],
  // Disabled: TODO
  "eslint/no-eq-null": ["off"],
  "eslint/no-eval": ["error"],
  "eslint/no-ex-assign": ["error"],
  "eslint/no-extend-native": ["error"],
  "eslint/no-extra-bind": ["error"],
  "eslint/no-extra-boolean-cast": ["error"],
  "eslint/no-extra-label": ["error"],
  "eslint/no-fallthrough": ["error"],
  "eslint/no-func-assign": ["error"],
  "eslint/no-global-assign": ["error"],
  // Disabled: TODO
  "eslint/no-implicit-coercion": ["off"],
  "eslint/no-import-assign": ["error"],
  // Disabled: TODO
  "eslint/no-inline-comments": ["off"],
  "eslint/no-inner-declarations": ["error"],
  "eslint/no-invalid-regexp": ["error"],
  "eslint/no-irregular-whitespace": ["error"],
  "eslint/no-iterator": ["error"],
  "eslint/no-label-var": ["error"],
  "eslint/no-labels": ["error"],
  "eslint/no-lone-blocks": ["error"],
  "eslint/no-lonely-if": ["error"],
  "eslint/no-loop-func": ["error"],
  "eslint/no-loss-of-precision": ["error"],
  // Disabled: TODO
  "eslint/no-magic-numbers": ["off"],
  "eslint/no-misleading-character-class": ["error"],
  "eslint/no-multi-assign": ["error"],
  "eslint/no-multi-str": ["error"],
  // Disabled: TODO
  "eslint/no-negated-condition": ["off"],
  // Disabled: TODO
  "eslint/no-nested-ternary": ["off"],
  "eslint/no-new-func": ["error"],
  "eslint/no-new-native-nonconstructor": ["error"],
  "eslint/no-new-wrappers": ["error"],
  "eslint/no-new": ["error"],
  "eslint/no-nonoctal-decimal-escape": ["error"],
  "eslint/no-obj-calls": ["error"],
  "eslint/no-object-constructor": ["error"],
  "eslint/no-param-reassign": [
    "error",
    {
      ignorePropertyModificationsFor: ["ctx", "context", "req", "request", "res", "response"],
      props: true,
    },
  ],
  "eslint/no-plusplus": ["error"],
  "eslint/no-promise-executor-return": ["error"],
  "eslint/no-proto": ["error"],
  "eslint/no-prototype-builtins": ["error"],
  "eslint/no-redeclare": ["error"],
  "eslint/no-regex-spaces": ["error"],
  "eslint/no-restricted-globals": [
    "error",
    { name: "event", message: "Use local parameter instead." },
    // Confusing browser globals
    ...[
      "addEventListener",
      "blur",
      "close",
      "closed",
      "confirm",
      "defaultStatus",
      "defaultstatus",
      "external",
      "find",
      "focus",
      "frameElement",
      "frames",
      "history",
      "innerHeight",
      "innerWidth",
      "length",
      "location",
      "locationbar",
      "menubar",
      "moveBy",
      "moveTo",
      "name",
      "onblur",
      "onerror",
      "onfocus",
      "onload",
      "onresize",
      "onunload",
      "open",
      "opener",
      "opera",
      "outerHeight",
      "outerWidth",
      "pageXOffset",
      "pageYOffset",
      "parent",
      "print",
      "removeEventListener",
      "resizeBy",
      "resizeTo",
      "screen",
      "screenLeft",
      "screenTop",
      "screenX",
      "screenY",
      "scroll",
      "scrollbars",
      "scrollBy",
      "scrollTo",
      "scrollX",
      "scrollY",
      "self",
      "status",
      "statusbar",
      "stop",
      "toolbar",
      "top",
    ].map((name) => ({
      name,
      message: `Use window.${name} instead.`,
    })),
  ],
  // Disabled: TODO
  "eslint/no-restricted-imports": ["off"],
  "eslint/no-return-assign": ["error", "always"],
  "eslint/no-script-url": ["error"],
  "eslint/no-self-assign": [
    "error",
    {
      props: true,
    },
  ],
  "eslint/no-self-compare": ["error"],
  "eslint/no-sequences": ["error"],
  "eslint/no-setter-return": ["error"],
  "eslint/no-shadow-restricted-names": [
    "error",
    {
      reportGlobalThis: true,
    },
  ],
  "eslint/no-shadow": ["error"],
  "eslint/no-sparse-arrays": ["error"],
  "eslint/no-template-curly-in-string": ["error"],
  // Disabled: TODO
  "eslint/no-ternary": ["off"],
  "eslint/no-this-before-super": ["error"],
  "eslint/no-throw-literal": ["error"],
  "eslint/no-unassigned-vars": ["error"],
  // TODO: Activate when it is ready. In nursery and not ready yet. Mark global variables as undefined.
  "eslint/no-undef": ["off"],
  // Disabled: TODO
  "eslint/no-undefined": ["off"],
  "eslint/no-unexpected-multiline": ["error"],
  // Disabled: TODO
  "eslint/no-unmodified-loop-condition": ["off"],
  "eslint/no-unneeded-ternary": [
    "error",
    {
      defaultAssignment: false,
    },
  ],
  "eslint/no-unreachable": ["error"],
  "eslint/no-unsafe-finally": ["error"],
  "eslint/no-unsafe-negation": ["error"],
  "eslint/no-unsafe-optional-chaining": [
    "error",
    {
      disallowArithmeticOperators: true,
    },
  ],
  "eslint/no-unused-expressions": [
    "error",
    {
      allowShortCircuit: true,
      allowTernary: true,
      allowTaggedTemplates: true,
      enforceForJSX: true,
    },
  ],
  "eslint/no-unused-labels": ["error"],
  "eslint/no-unused-private-class-members": ["error"],
  "eslint/no-unused-vars": [
    "warn",
    {
      vars: "all",
      varsIgnorePattern: /^_/.source,
      args: "after-used",
      argsIgnorePattern: /^_/.source,
      caughtErrors: "all",
      caughtErrorsIgnorePattern: /^_/.source,
      destructuredArrayIgnorePattern: /^_/.source,
      ignoreRestSiblings: true,
    },
  ],
  // Disabled: TODO
  "eslint/no-use-before-define": ["off"],
  "eslint/no-useless-backreference": ["error"],
  // Disabled: TODO
  "eslint/no-useless-call": ["off"],
  "eslint/no-useless-catch": ["error"],
  "eslint/no-useless-computed-key": ["error"],
  "eslint/no-useless-concat": ["error"],
  "eslint/no-useless-constructor": ["error"],
  "eslint/no-useless-escape": ["error"],
  "eslint/no-useless-rename": ["error"],
  "eslint/no-useless-return": ["error"],
  "eslint/no-var": ["error"],
  // Disabled: TODO
  "eslint/no-void": ["off"],
  // Disabled: TODO
  "eslint/no-warning-comments": ["off"],
  "eslint/no-with": ["error"],
  "eslint/operator-assignment": ["error", "always"],
  "eslint/prefer-const": [
    "error",
    {
      destructuring: "any",
      ignoreReadBeforeAssign: true,
    },
  ],
  "eslint/prefer-destructuring": [
    "error",
    {
      AssignmentExpression: { array: true, object: false },
      VariableDeclarator: { array: false, object: true },
    },
    {
      enforceForRenamedProperties: false,
    },
  ],
  "eslint/prefer-exponentiation-operator": ["error"],
  "eslint/prefer-numeric-literals": ["error"],
  "eslint/prefer-object-has-own": ["error"],
  "eslint/prefer-object-spread": ["error"],
  "eslint/prefer-promise-reject-errors": ["error"],
  "eslint/prefer-rest-params": ["error"],
  "eslint/prefer-spread": ["error"],
  "eslint/prefer-template": ["error"],
  "eslint/preserve-caught-error": ["error"],
  "eslint/radix": ["error"],
  "eslint/require-await": ["error"],
  "eslint/require-yield": ["error"],
  // Only used for sorting import members since oxfmt don't support it yet.
  "eslint/sort-imports": [
    "error",
    {
      ignoreCase: true,
      ignoreDeclarationSort: true,
    },
  ],
  // Disabled: TODO
  "eslint/sort-keys": ["off"],
  // Disabled: TODO
  "eslint/sort-vars": ["off"],
  "eslint/symbol-description": ["error"],
  "eslint/unicode-bom": ["error", "never"],
  "eslint/use-isnan": ["error"],
  "eslint/valid-typeof": [
    "error",
    {
      requireStringLiterals: true,
    },
  ],
  "eslint/vars-on-top": ["error"],
  "eslint/yoda": ["error"],
} as const satisfies DummyRuleMap;

export const config = {
  plugins: ["eslint"],
  rules,
} as const satisfies OxlintConfig;

export default config;
