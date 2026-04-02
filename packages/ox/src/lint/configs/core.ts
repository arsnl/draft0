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
  "import/consistent-type-specifier-style": ["error", "prefer-top-level"],
  "import/default": ["error"],
  "import/export": ["error"],
  // Disabled: TODO
  "import/exports-last": ["off"],
  "import/extensions": [
    "error",
    "always",
    {
      ignorePackages: true,
    },
  ],
  "import/first": ["error"],
  // Disabled: TODO
  "import/group-exports": ["off"],
  // Disabled: TODO
  "import/max-dependencies": ["off"],
  "import/named": ["error"],
  "import/namespace": ["error"],
  "import/no-absolute-path": ["error"],
  "import/no-amd": ["error"],
  // Disabled: TODO
  "import/no-anonymous-default-export": ["off"],
  // Disabled: TODO
  "import/no-commonjs": ["off"],
  "import/no-cycle": ["error"],
  // Disabled: TODO
  "import/no-default-export": ["off"],
  // Disabled: covered by eslint/no-duplicate-imports
  "import/no-duplicates": ["off"],
  "import/no-dynamic-require": ["error"],
  "import/no-empty-named-blocks": ["error"],
  "import/no-mutable-exports": ["error"],
  "import/no-named-as-default-member": ["error"],
  "import/no-named-as-default": ["error"],
  "import/no-named-default": ["error"],
  // Disabled: TODO
  "import/no-named-export": ["off"],
  "import/no-namespace": ["error"],
  // Disabled: TODO
  "import/no-nodejs-modules": ["off"],
  // Disabled: TODO
  "import/no-relative-parent-imports": ["off"],
  "import/no-self-import": ["error"],
  // Disabled: TODO
  "import/no-unassigned-import": ["off"],
  "import/no-webpack-loader-syntax": ["error"],
  // Disabled: TODO
  "import/prefer-default-export": ["off"],
  "import/unambiguous": ["error"],
  "jsdoc/check-access": ["error"],
  "jsdoc/check-property-names": ["error"],
  "jsdoc/check-tag-names": ["error"],
  "jsdoc/empty-tags": ["error"],
  "jsdoc/implements-on-classes": ["error"],
  "jsdoc/no-defaults": ["error"],
  "jsdoc/require-param-description": ["error"],
  "jsdoc/require-param-name": ["error"],
  // Disabled: TODO
  "jsdoc/require-param-type": ["off"],
  "jsdoc/require-param": ["error"],
  "jsdoc/require-property-description": ["error"],
  "jsdoc/require-property-name": ["error"],
  // Disabled: TODO
  "jsdoc/require-property-type": ["off"],
  "jsdoc/require-property": ["error"],
  "jsdoc/require-returns-description": ["error"],
  // Disabled: TODO
  "jsdoc/require-returns-type": ["off"],
  "jsdoc/require-returns": ["error"],
  "jsdoc/require-yields": ["error"],
  // TODO: Validate node rules
  "node/global-require": ["off"],
  // TODO: Validate node rules
  "node/handle-callback-err": ["off"],
  // TODO: Validate node rules
  "node/no-exports-assign": ["off"],
  // TODO: Validate node rules
  "node/no-new-require": ["off"],
  // TODO: Validate node rules
  "node/no-path-concat": ["off"],
  // TODO: Validate node rules
  "node/no-process-env": ["off"],
  "oxc/approx-constant": ["error"],
  "oxc/bad-array-method-on-arguments": ["error"],
  "oxc/bad-bitwise-operator": ["error"],
  "oxc/bad-char-at-comparison": ["error"],
  "oxc/bad-comparison-sequence": ["error"],
  "oxc/bad-min-max-func": ["error"],
  "oxc/bad-object-literal-comparison": ["error"],
  "oxc/bad-replace-all-arg": ["error"],
  // Disabled: TODO
  "oxc/branches-sharing-code": ["off"],
  "oxc/const-comparisons": ["error"],
  "oxc/double-comparisons": ["error"],
  "oxc/erasing-op": ["error"],
  "oxc/misrefactored-assign-op": ["error"],
  "oxc/missing-throw": ["error"],
  // Disabled: TODO
  "oxc/no-accumulating-spread": ["off"],
  // Disabled: TODO
  "oxc/no-async-await": ["off"],
  // Disabled: TODO
  "oxc/no-async-endpoint-handlers": ["off"],
  // Disabled: TODO
  "oxc/no-barrel-file": ["off"],
  "oxc/no-const-enum": ["error"],
  // Disabled: TODO
  "oxc/no-map-spread": ["off"],
  // Disabled: TODO
  "oxc/no-optional-chaining": ["off"],
  // Disabled: TODO
  "oxc/no-rest-spread-properties": ["off"],
  // Disabled: TODO
  "oxc/no-this-in-exported-function": ["off"],
  "oxc/number-arg-out-of-range": ["error"],
  "oxc/only-used-in-recursion": ["error"],
  "oxc/uninvoked-array-callback": ["error"],
  // Disabled: TODO
  "promise/always-return": ["off"],
  "promise/avoid-new": ["error"],
  // Disabled: TODO
  "promise/catch-or-return": ["off"],
  // Disabled: TODO
  "promise/no-callback-in-promise": ["off"],
  "promise/no-multiple-resolved": ["error"],
  "promise/no-nesting": ["error"],
  "promise/no-new-statics": ["error"],
  "promise/no-promise-in-callback": ["error"],
  "promise/no-return-in-finally": ["error"],
  "promise/no-return-wrap": ["error"],
  "promise/param-names": ["error"],
  "promise/prefer-await-to-callbacks": ["error"],
  "promise/prefer-await-to-then": [
    "error",
    {
      strict: true,
    },
  ],
  "promise/prefer-catch": ["error"],
  "promise/spec-only": ["error"],
  "promise/valid-params": ["error"],
  // Disabled: TODO
  "typescript/adjacent-overload-signatures": ["off"],
  // Disabled: TODO
  "typescript/array-type": ["off"],
  "typescript/await-thenable": ["error"],
  "typescript/ban-ts-comment": ["error"],
  // Disabled: TODO
  "typescript/ban-tslint-comment": ["off"],
  // Disabled: TODO
  "typescript/ban-types": ["off"],
  // Disabled: TODO
  "typescript/class-literal-property-style": ["off"],
  // Disabled: TODO
  "typescript/consistent-generic-constructors": ["off"],
  // Disabled: TODO
  "typescript/consistent-indexed-object-style": ["off"],
  "typescript/consistent-return": [
    "error",
    {
      treatUndefinedAsUnspecified: true,
    },
  ],
  // Disabled: TODO
  "typescript/consistent-type-assertions": ["off"],
  // Disabled: TODO
  "typescript/consistent-type-definitions": ["off"],
  "typescript/consistent-type-exports": [
    "error",
    {
      fixMixedExportsWithInlineTypeSpecifier: false,
    },
  ],
  "typescript/consistent-type-imports": [
    "error",
    {
      fixStyle: "separate-type-imports",
      prefer: "type-imports",
    },
  ],
  "typescript/dot-notation": ["error"],
  // Disabled: TODO
  "typescript/explicit-function-return-type": ["off"],
  // Disabled: TODO
  "typescript/explicit-module-boundary-types": ["off"],
  "typescript/no-array-delete": ["error"],
  "typescript/no-base-to-string": ["error"],
  // Disabled: TODO
  "typescript/no-confusing-non-null-assertion": ["off"],
  // Disabled: TODO
  "typescript/no-confusing-void-expression": ["off"],
  // Disabled: TODO
  "typescript/no-deprecated": ["off"],
  "typescript/no-duplicate-enum-values": ["error"],
  "typescript/no-duplicate-type-constituents": ["error"],
  // Disabled: TODO
  "typescript/no-dynamic-delete": ["off"],
  // Disabled: TODO
  "typescript/no-empty-interface": ["off"],
  "typescript/no-empty-object-type": ["error"],
  "typescript/no-explicit-any": ["error"],
  "typescript/no-extra-non-null-assertion": ["error"],
  // Disabled: TODO
  "typescript/no-extraneous-class": ["off"],
  "typescript/no-floating-promises": ["error"],
  "typescript/no-for-in-array": ["error"],
  "typescript/no-implied-eval": ["error"],
  // Disabled: TODO
  "typescript/no-import-type-side-effects": ["off"],
  // Disabled: TODO
  "typescript/no-inferrable-types": ["off"],
  // Disabled: TODO
  "typescript/no-invalid-void-type": ["off"],
  "typescript/no-meaningless-void-operator": ["error"],
  "typescript/no-misused-new": ["error"],
  "typescript/no-misused-promises": ["error"],
  "typescript/no-misused-spread": ["error"],
  // Disabled: TODO
  "typescript/no-mixed-enums": ["off"],
  "typescript/no-namespace": ["error"],
  // Disabled: TODO
  "typescript/no-non-null-asserted-nullish-coalescing": ["off"],
  "typescript/no-non-null-asserted-optional-chain": ["error"],
  // Disabled: TODO
  "typescript/no-non-null-assertion": ["off"],
  "typescript/no-redundant-type-constituents": ["error"],
  "typescript/no-require-imports": ["error"],
  // Disabled: TODO
  "typescript/no-restricted-types": ["off"],
  "typescript/no-this-alias": ["error"],
  // Disabled: TODO
  "typescript/no-unnecessary-boolean-literal-compare": ["off"],
  // Disabled: TODO
  "typescript/no-unnecessary-condition": ["off"],
  "typescript/no-unnecessary-parameter-property-assignment": ["error"],
  // Disabled: TODO
  "typescript/no-unnecessary-qualifier": ["off"],
  // Disabled: TODO
  "typescript/no-unnecessary-template-expression": ["off"],
  // Disabled: TODO
  "typescript/no-unnecessary-type-arguments": ["off"],
  "typescript/no-unnecessary-type-assertion": ["error"],
  "typescript/no-unnecessary-type-constraint": ["error"],
  // Disabled: TODO
  "typescript/no-unnecessary-type-conversion": ["off"],
  // Disabled: TODO
  "typescript/no-unnecessary-type-parameters": ["off"],
  "typescript/no-unsafe-argument": ["error"],
  "typescript/no-unsafe-assignment": ["error"],
  "typescript/no-unsafe-call": ["error"],
  "typescript/no-unsafe-declaration-merging": ["error"],
  "typescript/no-unsafe-enum-comparison": ["error"],
  "typescript/no-unsafe-function-type": ["error"],
  "typescript/no-unsafe-member-access": ["error"],
  "typescript/no-unsafe-return": ["error"],
  // Disabled: TODO
  "typescript/no-unsafe-type-assertion": ["off"],
  "typescript/no-unsafe-unary-minus": ["error"],
  // Disabled: TODO
  "typescript/no-useless-default-assignment": ["off"],
  "typescript/no-useless-empty-export": ["error"],
  // Disabled: TODO
  "typescript/no-var-requires": ["off"],
  "typescript/no-wrapper-object-types": ["error"],
  // Disabled: TODO
  "typescript/non-nullable-type-assertion-style": ["off"],
  "typescript/only-throw-error": ["error"],
  // Disabled: TODO
  "typescript/parameter-properties": ["off"],
  "typescript/prefer-as-const": ["error"],
  // Disabled: TODO
  "typescript/prefer-enum-initializers": ["off"],
  // Disabled: TODO
  "typescript/prefer-find": ["off"],
  // Disabled: TODO
  "typescript/prefer-for-of": ["off"],
  // Disabled: TODO
  "typescript/prefer-function-type": ["off"],
  // Disabled: TODO
  "typescript/prefer-includes": ["off"],
  // Disabled: TODO
  "typescript/prefer-literal-enum-member": ["off"],
  "typescript/prefer-namespace-keyword": ["error"],
  // Disabled: TODO
  "typescript/prefer-nullish-coalescing": ["off"],
  "typescript/prefer-optional-chain": ["error"],
  "typescript/prefer-promise-reject-errors": ["error"],
  // Disabled: TODO
  "typescript/prefer-readonly-parameter-types": ["off"],
  // Disabled: TODO
  "typescript/prefer-readonly": ["off"],
  // Disabled: TODO
  "typescript/prefer-reduce-type-parameter": ["off"],
  // Disabled: TODO
  "typescript/prefer-regexp-exec": ["off"],
  // Disabled: TODO
  "typescript/prefer-return-this-type": ["off"],
  "typescript/prefer-string-starts-ends-with": ["error"],
  // Disabled: TODO
  "typescript/prefer-ts-expect-error": ["off"],
  // Disabled: TODO
  "typescript/promise-function-async": ["off"],
  // Disabled: TODO
  "typescript/related-getter-setter-pairs": ["off"],
  "typescript/require-array-sort-compare": ["error"],
  "typescript/require-await": ["error"],
  "typescript/restrict-plus-operands": ["error"],
  "typescript/restrict-template-expressions": ["error"],
  // Disabled: TODO
  "typescript/return-await": ["off"],
  // Disabled: TODO
  "typescript/strict-boolean-expressions": ["off"],
  // Disabled: TODO
  "typescript/strict-void-return": ["off"],
  // Disabled: TODO
  "typescript/switch-exhaustiveness-check": ["off"],
  "typescript/triple-slash-reference": ["error"],
  "typescript/unbound-method": ["error"],
  // Disabled: TODO
  "typescript/unified-signatures": ["off"],
  // Disabled: TODO
  "typescript/use-unknown-in-catch-callback-variable": ["off"],
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
  /* disable all categories so that we can enable them selectively */
  categories: {
    correctness: "off",
    nursery: "off",
    pedantic: "off",
    perf: "off",
    restriction: "off",
    style: "off",
    suspicious: "off",
  },
  env: {
    browser: true,
  },
  options: {
    reportUnusedDisableDirectives: "warn",
    typeAware: true,
    typeCheck: true,
  },
  plugins: ["eslint", "import", "jsdoc", "node", "oxc", "promise", "typescript", "unicorn"],
  jsPlugins: ["oxlint-plugin-eslint"],
  rules,
} as const satisfies OxlintConfig;

export default config;
