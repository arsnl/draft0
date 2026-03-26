import { defineConfig } from "eslint/config";
import globals from "globals";
import { type ESLintRules } from "eslint/rules";

export const getRulesConfig = () =>
  ({
    "array-callback-return": [
      "error",
      {
        allowImplicit: true,
        checkForEach: false,
        allowVoid: true,
      },
    ],
    "arrow-body-style": [
      "error",
      "as-needed",
      {
        requireReturnForObjectLiteral: false,
      },
    ],
    "block-scoped-var": ["error"],
    camelcase: [
      "error",
      {
        properties: "never",
        ignoreDestructuring: false,
        ignoreImports: false,
        ignoreGlobals: false,
      },
    ],
    curly: ["error", "all"],
    "consistent-return": [
      "error",
      {
        treatUndefinedAsUnspecified: true,
      },
    ],
    "constructor-super": ["error"],
    "default-case": [
      "error",
      {
        commentPattern: "^no default$",
      },
    ],
    "default-case-last": ["error"],
    "default-param-last": ["error"],
    "dot-notation": [
      "error",
      {
        allowKeywords: true,
      },
    ],
    eqeqeq: ["error", "always"],
    "for-direction": ["error"],
    "func-names": ["warn", "as-needed"],
    "getter-return": ["error"],
    "grouped-accessor-pairs": [
      "error",
      "getBeforeSet",
      {
        enforceForTSTypes: true,
      },
    ],
    "guard-for-in": ["error"],
    "new-cap": [
      "error",
      {
        newIsCap: true,
        capIsNew: false,
        properties: true,
      },
    ],
    "no-alert": ["warn"],
    "no-array-constructor": ["error"],
    "no-async-promise-executor": ["error"],
    "no-await-in-loop": ["error"],
    "no-bitwise": ["error"],
    "no-caller": ["error"],
    "no-case-declarations": ["error"],
    "no-class-assign": ["error"],
    "no-compare-neg-zero": ["error"],
    "no-cond-assign": ["error", "except-parens"],
    "no-console": ["warn"],
    "no-const-assign": ["error"],
    "no-constant-binary-expression": ["error"],
    "no-constant-condition": ["error"],
    "no-constructor-return": ["error"],
    "no-continue": ["error"],
    "no-control-regex": ["error"],
    "no-debugger": ["error"],
    "no-delete-var": ["error"],
    "no-dupe-args": ["error"],
    "no-dupe-class-members": ["error"],
    "no-dupe-else-if": ["error"],
    "no-dupe-keys": ["error"],
    "no-duplicate-case": ["error"],
    "no-else-return": [
      "error",
      {
        allowElseIf: false,
      },
    ],
    "no-empty": [
      "error",
      {
        allowEmptyCatch: true,
      },
    ],
    "no-empty-character-class": ["error"],
    "no-empty-function": ["error"],
    "no-empty-pattern": ["error"],
    "no-eval": ["error"],
    "no-empty-static-block": ["error"],
    "no-ex-assign": ["error"],
    "no-extend-native": ["error"],
    "no-extra-bind": ["error"],
    "no-extra-boolean-cast": ["error"],
    "no-extra-label": ["error"],
    "no-fallthrough": ["error"],
    "no-func-assign": ["error"],
    "no-global-assign": ["error"],
    "no-implied-eval": ["error"],
    "no-import-assign": ["error"],
    "no-inner-declarations": ["error"],
    "no-invalid-regexp": ["error"],
    "no-irregular-whitespace": ["error"],
    "no-iterator": ["error"],
    "no-label-var": ["error"],
    "no-labels": ["error"],
    "no-lone-blocks": ["error"],
    "no-lonely-if": ["error"],
    "no-loop-func": ["error"],
    "no-loss-of-precision": ["error"],
    "no-misleading-character-class": ["error"],
    "no-multi-assign": ["error"],
    "no-multi-str": ["error"],
    "no-new": ["error"],
    "no-new-func": ["error"],
    "no-new-native-nonconstructor": ["error"],
    "no-new-wrappers": ["error"],
    "no-nonoctal-decimal-escape": ["error"],
    "no-obj-calls": ["error"],
    "no-object-constructor": ["error"],
    "no-octal": ["error"],
    "no-octal-escape": ["error"],
    "no-param-reassign": [
      "error",
      {
        ignorePropertyModificationsFor: [
          "ctx",
          "context",
          "req",
          "request",
          "res",
          "response",
        ],
        props: true,
      },
    ],
    "no-plusplus": ["error"],
    "no-promise-executor-return": ["error"],
    "no-proto": ["error"],
    "no-prototype-builtins": ["error"],
    "no-redeclare": ["error"],
    "no-regex-spaces": ["error"],
    "no-restricted-exports": [
      "error",
      {
        restrictedNamedExports: ["default"],
      },
    ],
    "no-restricted-globals": [
      "error",
      {
        globals: [
          // Number globals
          ...["isFinite", "isNaN"].map((name) => ({
            name,
            message: `Use Number.${name} instead.`,
          })),
          // window globals
          ...[
            "addEventListener",
            "blur",
            "close",
            "closed",
            "confirm",
            "defaultStatus",
            "defaultstatus",
            "event",
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
      },
    ],
    "no-restricted-properties": [
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
    "no-restricted-syntax": [
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
    "no-return-assign": ["error", "always"],
    "no-script-url": ["error"],
    "no-self-assign": [
      "error",
      {
        props: true,
      },
    ],
    "no-self-compare": ["error"],
    "no-sequences": ["error"],
    "no-setter-return": ["error"],
    "no-shadow": ["error"],
    "no-shadow-restricted-names": [
      "error",
      {
        reportGlobalThis: true,
      },
    ],
    "no-sparse-arrays": ["error"],
    "no-template-curly-in-string": ["error"],
    "no-this-before-super": ["error"],
    "no-throw-literal": ["error"],
    "no-unassigned-vars": ["error"],
    "no-undef": ["error"],
    "no-undef-init": ["error"],
    "no-unneeded-ternary": [
      "error",
      {
        defaultAssignment: false,
      },
    ],
    "no-unexpected-multiline": ["error"],
    "no-unreachable": ["error"],
    "no-unreachable-loop": ["error"],
    "no-unsafe-finally": ["error"],
    "no-unsafe-negation": ["error"],
    "no-unsafe-optional-chaining": [
      "error",
      {
        disallowArithmeticOperators: true,
      },
    ],
    "no-unused-expressions": [
      "error",
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
        enforceForJSX: true,
      },
    ],
    "no-unused-labels": ["error"],
    "no-unused-vars": [
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
    "no-unused-private-class-members": ["error"],
    "no-useless-assignment": ["error"],
    "no-useless-backreference": ["error"],
    "no-useless-catch": ["error"],
    "no-useless-computed-key": ["error"],
    "no-useless-concat": ["error"],
    "no-useless-constructor": ["error"],
    "no-useless-escape": ["error"],
    "no-useless-rename": ["error"],
    "no-useless-return": ["error"],
    "no-var": ["error"],
    "no-with": ["error"],
    "object-shorthand": [
      "error",
      "always",
      {
        avoidQuotes: true,
        ignoreConstructors: false,
      },
    ],
    "one-var": ["error", "never"],
    "operator-assignment": ["error", "always"],
    "prefer-arrow-callback": ["error"],
    "prefer-const": [
      "error",
      {
        destructuring: "any",
        ignoreReadBeforeAssign: true,
      },
    ],
    "prefer-destructuring": [
      "error",
      {
        AssignmentExpression: {
          array: true,
          object: false,
        },
        VariableDeclarator: {
          array: false,
          object: true,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    "prefer-exponentiation-operator": ["error"],
    "prefer-numeric-literals": ["error"],
    "prefer-object-spread": ["error"],
    "prefer-promise-reject-errors": [
      "error",
      {
        allowEmptyReject: true,
      },
    ],
    "prefer-regex-literals": [
      "error",
      {
        disallowRedundantWrapping: true,
      },
    ],
    "prefer-rest-params": ["error"],
    "prefer-spread": ["error"],
    "prefer-template": ["error"],
    "preserve-caught-error": ["error"],
    radix: ["error"],
    "require-await": ["error"],
    "require-yield": ["error"],
    strict: ["error", "never"],
    "symbol-description": ["error"],
    "unicode-bom": ["error", "never"],
    "use-isnan": ["error"],
    "valid-typeof": [
      "error",
      {
        requireStringLiterals: true,
      },
    ],
    "vars-on-top": ["error"],
    yoda: ["error"],
    "prefer-object-has-own": ["error"],
  }) as const satisfies Partial<ESLintRules>;

export const getConfig = () =>
  defineConfig({
    name: "kit42/core",
    languageOptions: {
      globals: {
        ...globals.es2026,
        ...globals.node,
        ...globals.browser,
      },
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: "error",
      reportUnusedInlineConfigs: "error",
    },
    rules: getRulesConfig(),
  });

export default {
  getConfig,
  getRulesConfig,
};
