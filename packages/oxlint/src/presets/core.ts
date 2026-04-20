import type { DummyRuleMap, OxlintConfig } from "oxlint";

export const rules = {
  // Disabled: Too restrictive; read-only or write-only accessors are valid
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
  // Disabled: Purely cosmetic; too noisy across diverse codebases
  "eslint/capitalized-comments": ["off"],
  // Disabled: Conflicts with interface contracts and method override patterns
  "eslint/class-methods-use-this": ["off"],
  // Disabled: Arbitrary threshold; better enforced through code review
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
  // Disabled: Style preference; both declarations and expressions are valid
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
  // Disabled: Style preference; variable names are context-dependent
  "eslint/id-length": ["off"],
  // Disabled: TypeScript strict mode already catches uninitialized variables
  "eslint/init-declarations": ["off"],
  // Disabled: Arbitrary limit; co-located helper classes are valid
  "eslint/max-classes-per-file": ["off"],
  // Disabled: Arbitrary threshold; better enforced through code review
  "eslint/max-depth": ["off"],
  // Disabled: Arbitrary limit; better enforced through code review
  "eslint/max-lines-per-function": ["off"],
  // Disabled: Arbitrary limit; better enforced through code review
  "eslint/max-lines": ["off"],
  // Disabled: Arbitrary threshold; better enforced through code review
  "eslint/max-nested-callbacks": ["off"],
  // Disabled: Arbitrary limit; better enforced through code review
  "eslint/max-params": ["off"],
  // Disabled: Arbitrary limit; better enforced through code review
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
  // Disabled: Extremely rare edge case with minimal practical value
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
  // Disabled: Redundant; eslint/eqeqeq "always" already enforces strict equality
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
  "eslint/no-implicit-coercion": ["error"],
  "eslint/no-import-assign": ["error"],
  // Disabled: Too restrictive; inline comments often improve clarity
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
  // Disabled: Too noisy; trivial values don't need named constants
  "eslint/no-magic-numbers": ["off"],
  "eslint/no-misleading-character-class": ["error"],
  "eslint/no-multi-assign": ["error"],
  "eslint/no-multi-str": ["error"],
  // Disabled: Subjective; negated conditions can be more readable
  "eslint/no-negated-condition": ["off"],
  // Disabled: Style preference; formatted nested ternaries are readable
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
      ignorePropertyModificationsFor: [
        "acc",
        "accumulator",
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
  "eslint/no-plusplus": ["error"],
  "eslint/no-promise-executor-return": ["error"],
  "eslint/no-proto": ["error"],
  "eslint/no-prototype-builtins": ["error"],
  "eslint/no-redeclare": ["error"],
  "eslint/no-regex-spaces": ["error"],
  "eslint/no-restricted-exports": [
    "error",
    {
      restrictedNamedExports: ["default"],
    },
  ],
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
  // Disabled: Project-specific; no universal import restrictions to apply
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
  // Disabled: Too restrictive; ternary expressions are core JavaScript
  "eslint/no-ternary": ["off"],
  "eslint/no-this-before-super": ["error"],
  "eslint/no-throw-literal": ["error"],
  "eslint/no-unassigned-vars": ["error"],
  // Disabled: Rule in nursery and not ready yet
  "eslint/no-undef": ["off"],
  // Disabled: Too restrictive; undefined is standard in modern JS/TS
  "eslint/no-undefined": ["off"],
  "eslint/no-unexpected-multiline": ["error"],
  // Disabled: May produce false positives; not fully stable yet
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
  // Disabled: TypeScript handles this; conflicts with function hoisting
  "eslint/no-use-before-define": ["off"],
  "eslint/no-useless-assignment": ["error"],
  "eslint/no-useless-backreference": ["error"],
  "eslint/no-useless-call": ["error"],
  "eslint/no-useless-catch": ["error"],
  "eslint/no-useless-computed-key": ["error"],
  "eslint/no-useless-concat": ["error"],
  "eslint/no-useless-constructor": ["error"],
  "eslint/no-useless-escape": ["error"],
  "eslint/no-useless-rename": ["error"],
  "eslint/no-useless-return": ["error"],
  "eslint/no-var": ["error"],
  // Disabled: Conflicts with eslint/array-callback-return "allowVoid" option
  "eslint/no-void": ["off"],
  // Disabled: TODO/FIXME comments are expected during active development
  "eslint/no-warning-comments": ["off"],
  "eslint/no-with": ["error"],
  "eslint/object-shorthand": [
    "error",
    "always",
    {
      avoidQuotes: true,
      ignoreConstructors: false,
    },
  ],
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
  // Disabled: Redundant; typescript/require-await already covers this
  "eslint/require-await": ["off"],
  "eslint/require-yield": ["error"],
  // Only used for sorting import members since oxfmt don't support it yet.
  "eslint/sort-imports": [
    "error",
    {
      ignoreCase: true,
      ignoreDeclarationSort: true,
    },
  ],
  // Disabled: Too strict; logical grouping preferred over alphabetical
  "eslint/sort-keys": ["off"],
  // Disabled: Too strict; logical grouping preferred over alphabetical
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
  "eslint-js/one-var": ["error", "never"],
  "eslint-js/prefer-arrow-callback": ["error"],
  "import/consistent-type-specifier-style": ["error", "prefer-top-level"],
  "import/default": ["error"],
  "import/export": ["error"],
  // Disabled: Too restrictive; co-located exports improve readability
  "import/exports-last": ["off"],
  "import/extensions": [
    "error",
    "always",
    {
      ignorePackages: true,
    },
  ],
  "import/first": ["error"],
  // Disabled: Too restrictive; individual named exports are standard
  "import/group-exports": ["off"],
  // Disabled: Arbitrary limit; varies per module responsibility
  "import/max-dependencies": ["off"],
  "import/named": ["error"],
  "import/namespace": ["error"],
  "import/no-absolute-path": ["error"],
  "import/no-amd": ["error"],
  // Disabled: Framework configs often require anonymous default exports
  "import/no-anonymous-default-export": ["off"],
  // Disabled: Redundant; unicorn/prefer-module already covers this
  "import/no-commonjs": ["off"],
  "import/no-cycle": ["error"],
  // Disabled: Too strict universally; frameworks and configs need defaults
  "import/no-default-export": ["off"],
  // Disabled: Redundant; eslint/no-duplicate-imports already covers this
  "import/no-duplicates": ["off"],
  "import/no-dynamic-require": ["error"],
  "import/no-empty-named-blocks": ["error"],
  "import/no-mutable-exports": ["error"],
  "import/no-named-as-default-member": ["error"],
  "import/no-named-as-default": ["error"],
  "import/no-named-default": ["error"],
  // Disabled: Contradicts the codebase preference for named exports
  "import/no-named-export": ["off"],
  // Disabled: Too strict; wildcard imports are valid for packages without a default export
  "import/no-namespace": ["off"],
  // Disabled: Would break all Node.js and server-side projects
  "import/no-nodejs-modules": ["off"],
  // Disabled: Too restrictive without project-specific path alias setup
  "import/no-relative-parent-imports": ["off"],
  "import/no-self-import": ["error"],
  // Disabled: Side-effect imports (CSS, polyfills) are common and valid
  "import/no-unassigned-import": ["off"],
  "import/no-webpack-loader-syntax": ["error"],
  // Disabled: Contradicts the codebase preference for named exports
  "import/prefer-default-export": ["off"],
  // Disabled: Too strict; script files are common and valid
  "import/unambiguous": ["off"],
  "jsdoc/check-access": ["error"],
  "jsdoc/check-property-names": ["error"],
  "jsdoc/check-tag-names": ["error"],
  "jsdoc/empty-tags": ["error"],
  "jsdoc/implements-on-classes": ["error"],
  "jsdoc/no-defaults": ["error"],
  "jsdoc/require-param-description": ["error"],
  "jsdoc/require-param-name": ["error"],
  // Disabled: Redundant; TypeScript already provides type information
  "jsdoc/require-param-type": ["off"],
  "jsdoc/require-param": ["error"],
  "jsdoc/require-property-description": ["error"],
  "jsdoc/require-property-name": ["error"],
  // Disabled: Redundant; TypeScript already provides type information
  "jsdoc/require-property-type": ["off"],
  "jsdoc/require-property": ["error"],
  "jsdoc/require-returns-description": ["error"],
  // Disabled: Redundant; TypeScript already provides type information
  "jsdoc/require-returns-type": ["off"],
  "jsdoc/require-returns": ["error"],
  "jsdoc/require-yields": ["error"],
  // Disabled: Useless; cannot use with unicorn/prefer-module
  "node/global-require": ["off"],
  // Disabled: Redundant; already covered by eslint/no-unused-vars
  "node/handle-callback-err": ["off"],
  // Disabled: Conflicts with unicorn/prefer-module
  "node/no-exports-assign": ["off"],
  // Disabled: Conflicts with unicorn/prefer-module
  "node/no-new-require": ["off"],
  // Disabled: Conflicts with unicorn/prefer-module
  "node/no-path-concat": ["off"],
  // Disabled: Project-specific; no universal allowed variables to apply
  "node/no-process-env": ["off"],
  "oxc/approx-constant": ["error"],
  "oxc/bad-array-method-on-arguments": ["error"],
  "oxc/bad-bitwise-operator": ["error"],
  "oxc/bad-char-at-comparison": ["error"],
  "oxc/bad-comparison-sequence": ["error"],
  "oxc/bad-min-max-func": ["error"],
  "oxc/bad-object-literal-comparison": ["error"],
  "oxc/bad-replace-all-arg": ["error"],
  // Disabled: Rule in nursery and not ready yet
  "oxc/branches-sharing-code": ["off"],
  "oxc/const-comparisons": ["error"],
  "oxc/double-comparisons": ["error"],
  "oxc/erasing-op": ["error"],
  "oxc/misrefactored-assign-op": ["error"],
  "oxc/missing-throw": ["error"],
  // Disabled: Premature optimization; spread accumulation rarely bottlenecks
  "oxc/no-accumulating-spread": ["off"],
  // Disabled: Too restrictive; async/await is standard modern JavaScript
  "oxc/no-async-await": ["off"],
  // Disabled: Framework-specific; not applicable to all projects
  "oxc/no-async-endpoint-handlers": ["off"],
  // Disabled: Barrel files are a valid and widely used pattern
  "oxc/no-barrel-file": ["off"],
  "oxc/no-const-enum": ["error"],
  // Disabled: Micro-optimization; spread in .map() rarely bottlenecks
  "oxc/no-map-spread": ["off"],
  // Disabled: Too restrictive; optional chaining is standard JavaScript
  "oxc/no-optional-chaining": ["off"],
  // Disabled: Too restrictive; rest/spread properties are idiomatic JS
  "oxc/no-rest-spread-properties": ["off"],
  // Disabled: Too restrictive; class and prototype patterns use this
  "oxc/no-this-in-exported-function": ["off"],
  "oxc/number-arg-out-of-range": ["error"],
  "oxc/only-used-in-recursion": ["error"],
  "oxc/uninvoked-array-callback": ["error"],
  // Disabled: Irrelevant; promise/prefer-await-to-then already bans .then() chains
  "promise/always-return": ["off"],
  "promise/avoid-new": ["error"],
  "promise/catch-or-return": [
    "error",
    {
      allowFinally: true,
      terminationMethod: ["catch", "finally"],
    },
  ],
  "promise/no-callback-in-promise": ["error"],
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
  // Disabled: Style preference; grouping by concern can be clearer
  "typescript/adjacent-overload-signatures": ["off"],
  // Disabled: Style preference; both T[] and Array<T> are valid
  "typescript/array-type": ["off"],
  "typescript/await-thenable": ["error"],
  "typescript/ban-ts-comment": [
    "error",
    {
      "ts-expect-error": "allow-with-description",
      "ts-ignore": true,
      "ts-nocheck": true,
      "ts-check": true,
      minimumDescriptionLength: 3,
    },
  ],
  // Disabled: Legacy rule; irrelevant without TSLint migration history
  "typescript/ban-tslint-comment": ["off"],
  // Disabled: Deprecated; replaced by enabled typescript/no-wrapper-object-types
  "typescript/ban-types": ["off"],
  // Disabled: Style preference; both getters and readonly fields are valid
  "typescript/class-literal-property-style": ["off"],
  // Disabled: Style preference; context determines best constructor form
  "typescript/consistent-generic-constructors": ["off"],
  // Disabled: Style preference; both Record and index signatures valid
  "typescript/consistent-indexed-object-style": ["off"],
  "typescript/consistent-return": [
    "error",
    {
      treatUndefinedAsUnspecified: true,
    },
  ],
  "typescript/consistent-type-assertions": ["error", { assertionStyle: "as" }],
  // Disabled: Style preference; type and interface both have valid uses
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
  // Disabled: Too verbose; TypeScript inference handles return types reliably
  "typescript/explicit-function-return-type": ["off"],
  // Disabled: Too verbose; TypeScript inference handles boundary types reliably
  "typescript/explicit-module-boundary-types": ["off"],
  "typescript/no-array-delete": ["error"],
  "typescript/no-base-to-string": ["error"],
  // Disabled: Low severity; developers using ! understand its semantics
  "typescript/no-confusing-non-null-assertion": ["off"],
  // Disabled: Too strict; void returns in arrow functions are common
  "typescript/no-confusing-void-expression": ["off"],
  "typescript/no-deprecated": ["error"],
  "typescript/no-duplicate-enum-values": ["error"],
  "typescript/no-duplicate-type-constituents": ["error"],
  "typescript/no-dynamic-delete": ["error"],
  // Disabled: Redundant; typescript/no-empty-object-type already covers this
  "typescript/no-empty-interface": ["off"],
  "typescript/no-empty-object-type": ["error"],
  "typescript/no-explicit-any": ["error"],
  "typescript/no-extra-non-null-assertion": ["error"],
  "typescript/no-extraneous-class": [
    "error",
    { allowConstructorOnly: true, allowWithDecorator: true },
  ],
  "typescript/no-floating-promises": ["error"],
  "typescript/no-for-in-array": ["error"],
  "typescript/no-implied-eval": ["error"],
  // Disabled: Redundant; typescript/consistent-type-imports already handles this
  "typescript/no-import-type-side-effects": ["off"],
  // Disabled: Explicit types can serve as documentation and readability
  "typescript/no-inferrable-types": ["off"],
  "typescript/no-invalid-void-type": ["error"],
  "typescript/no-meaningless-void-operator": ["error"],
  "typescript/no-misused-new": ["error"],
  "typescript/no-misused-promises": ["error"],
  "typescript/no-misused-spread": ["error"],
  "typescript/no-mixed-enums": ["error"],
  "typescript/no-namespace": ["error"],
  "typescript/no-non-null-asserted-nullish-coalescing": ["error"],
  "typescript/no-non-null-asserted-optional-chain": ["error"],
  "typescript/no-non-null-assertion": ["error"],
  "typescript/no-redundant-type-constituents": ["error"],
  // Disabled: Redundant; unicorn/prefer-module already covers this
  "typescript/no-require-imports": ["off"],
  // Disabled: Project-specific; no universal type restrictions to apply
  "typescript/no-restricted-types": ["off"],
  "typescript/no-this-alias": ["error"],
  "typescript/no-unnecessary-boolean-literal-compare": ["warn"],
  "typescript/no-unnecessary-condition": ["error"],
  "typescript/no-unnecessary-parameter-property-assignment": ["error"],
  "typescript/no-unnecessary-qualifier": ["error"],
  "typescript/no-unnecessary-template-expression": ["error"],
  "typescript/no-unnecessary-type-arguments": ["error"],
  "typescript/no-unnecessary-type-assertion": ["error"],
  "typescript/no-unnecessary-type-constraint": ["error"],
  // Disabled: Rule in nursery and not ready yet
  "typescript/no-unnecessary-type-conversion": ["off"],
  // Disabled: Rule in nursery and not ready yet
  "typescript/no-unnecessary-type-parameters": ["off"],
  "typescript/no-unsafe-argument": ["error"],
  "typescript/no-unsafe-assignment": ["error"],
  "typescript/no-unsafe-call": ["error"],
  "typescript/no-unsafe-declaration-merging": ["error"],
  "typescript/no-unsafe-enum-comparison": ["error"],
  "typescript/no-unsafe-function-type": ["error"],
  "typescript/no-unsafe-member-access": ["error"],
  "typescript/no-unsafe-return": ["error"],
  // Disabled: Too strict; often used to cast to a more specific type
  "typescript/no-unsafe-type-assertion": ["off"],
  "typescript/no-unsafe-unary-minus": ["error"],
  // Disabled: Rule in nursery and not ready yet
  "typescript/no-useless-default-assignment": ["off"],
  "typescript/no-useless-empty-export": ["error"],
  // Disabled: Redundant; unicorn/prefer-module already covers this
  "typescript/no-var-requires": ["off"],
  "typescript/no-wrapper-object-types": ["error"],
  // Disabled: Conflicts with the codebase preference for non-null assertions
  "typescript/non-nullable-type-assertion-style": ["off"],
  "typescript/only-throw-error": ["error"],
  // Disabled: Style preference; both constructor patterns have valid uses
  "typescript/parameter-properties": ["off"],
  "typescript/prefer-as-const": ["error"],
  "typescript/prefer-enum-initializers": ["error"],
  "typescript/prefer-find": ["error"],
  // Disabled: Conflicts with enabled eslint-js/no-restricted-syntax ForOfStatement
  "typescript/prefer-for-of": ["off"],
  "typescript/prefer-function-type": ["error"],
  // Disabled: Redundant; unicorn/prefer-includes already covers this
  "typescript/prefer-includes": ["off"],
  "typescript/prefer-literal-enum-member": ["error"],
  "typescript/prefer-namespace-keyword": ["error"],
  "typescript/prefer-nullish-coalescing": ["error"],
  "typescript/prefer-optional-chain": ["error"],
  "typescript/prefer-promise-reject-errors": ["error"],
  // Disabled: Rule in nursery and not ready yet
  "typescript/prefer-readonly-parameter-types": ["off"],
  "typescript/prefer-readonly": ["warn"],
  "typescript/prefer-reduce-type-parameter": ["error"],
  // Disabled: Conflicts with unicorn/prefer-regexp-test
  "typescript/prefer-regexp-exec": ["off"],
  "typescript/prefer-return-this-type": ["error"],
  "typescript/prefer-string-starts-ends-with": ["error"],
  "typescript/prefer-ts-expect-error": ["error"],
  "typescript/promise-function-async": ["error"],
  "typescript/related-getter-setter-pairs": ["error"],
  "typescript/require-array-sort-compare": ["error"],
  "typescript/require-await": ["error"],
  "typescript/restrict-plus-operands": ["error"],
  "typescript/restrict-template-expressions": ["error"],
  "typescript/return-await": ["error", "in-try-catch"],
  // Disabled: Too strict; breaks idiomatic JavaScript truthiness checks
  "typescript/strict-boolean-expressions": ["off"],
  "typescript/strict-void-return": ["error"],
  "typescript/switch-exhaustiveness-check": ["error"],
  "typescript/triple-slash-reference": ["error"],
  "typescript/unbound-method": ["error"],
  "typescript/unified-signatures": ["error"],
  "typescript/use-unknown-in-catch-callback-variable": ["error"],
  "unicorn/catch-error-name": ["error"],
  "unicorn/consistent-assert": ["error"],
  "unicorn/consistent-date-clone": ["error"],
  "unicorn/consistent-empty-array-spread": ["error"],
  "unicorn/consistent-existence-index-check": ["error"],
  "unicorn/consistent-function-scoping": ["error"],
  "unicorn/consistent-template-literal-escape": ["error"],
  "unicorn/custom-error-definition": ["error"],
  // Disabled: Formatting concern; delegated to the formatter
  "unicorn/empty-brace-spaces": ["off"],
  "unicorn/error-message": ["error"],
  "unicorn/escape-case": ["error"],
  // Disabled: Too verbose; truthy .length checks are idiomatic JavaScript
  "unicorn/explicit-length-check": ["off"],
  "unicorn/filename-case": ["error"],
  "unicorn/new-for-builtins": ["error"],
  "unicorn/no-abusive-eslint-disable": ["error"],
  "unicorn/no-accessor-recursion": ["error"],
  "unicorn/no-anonymous-default-export": ["error"],
  // Disabled: Too strict; point-free function callbacks are idiomatic
  "unicorn/no-array-callback-reference": ["off"],
  // Disabled: Conflicts with eslint-js/no-restricted-syntax banning for...of alternative
  "unicorn/no-array-for-each": ["off"],
  "unicorn/no-array-method-this-argument": ["error"],
  // Disabled: Too opinionated; reduce is valid for many patterns
  "unicorn/no-array-reduce": ["off"],
  "unicorn/no-array-reverse": ["error"],
  "unicorn/no-array-sort": ["error"],
  // Disabled: Too strict; accessing awaited expression members is common
  "unicorn/no-await-expression-member": ["off"],
  "unicorn/no-await-in-promise-methods": ["error"],
  "unicorn/no-console-spaces": ["error"],
  "unicorn/no-document-cookie": ["error"],
  "unicorn/no-empty-file": ["error"],
  "unicorn/no-hex-escape": ["error"],
  "unicorn/no-immediate-mutation": ["error"],
  "unicorn/no-instanceof-array": ["error"],
  "unicorn/no-instanceof-builtins": ["error"],
  "unicorn/no-invalid-fetch-options": ["error"],
  "unicorn/no-invalid-remove-event-listener": ["error"],
  "unicorn/no-length-as-slice-end": ["error"],
  "unicorn/no-lonely-if": ["error"],
  "unicorn/no-magic-array-flat-depth": ["error"],
  "unicorn/no-negation-in-equality-check": ["error"],
  // Disabled: Duplicate of eslint/no-nested-ternary; intentionally allowed
  "unicorn/no-nested-ternary": ["off"],
  "unicorn/no-new-array": ["error"],
  "unicorn/no-new-buffer": ["error"],
  // Disabled: Too opinionated; null is standard in APIs and DOM
  "unicorn/no-null": ["off"],
  // Disabled: Too strict; object as default parameter is valid
  "unicorn/no-object-as-default-parameter": ["off"],
  // Disabled: Would break CLI tools, scripts, and shutdown logic
  "unicorn/no-process-exit": ["off"],
  "unicorn/no-single-promise-in-promise-methods": ["error"],
  "unicorn/no-static-only-class": ["error"],
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
  // Disabled: Subjective; readability is context-dependent
  "unicorn/no-unreadable-array-destructuring": ["off"],
  // Disabled: Subjective; formatted IIFEs are readable enough
  "unicorn/no-unreadable-iife": ["off"],
  "unicorn/no-useless-collection-argument": ["error"],
  "unicorn/no-useless-error-capture-stack-trace": ["error"],
  "unicorn/no-useless-fallback-in-spread": ["error"],
  "unicorn/no-useless-iterator-to-array": ["error"],
  "unicorn/no-useless-length-check": ["error"],
  "unicorn/no-useless-promise-resolve-reject": ["error"],
  "unicorn/no-useless-spread": ["error"],
  "unicorn/no-useless-switch-case": ["error"],
  "unicorn/no-useless-undefined": ["error"],
  "unicorn/no-zero-fractions": ["error"],
  // Disabled: Formatting concern; delegated to the formatter
  "unicorn/number-literal-case": ["off"],
  "unicorn/numeric-separators-style": ["error"],
  "unicorn/prefer-add-event-listener": ["error"],
  "unicorn/prefer-array-find": ["error"],
  "unicorn/prefer-array-flat-map": ["error"],
  "unicorn/prefer-array-flat": ["error"],
  "unicorn/prefer-array-index-of": ["error"],
  "unicorn/prefer-array-some": ["error"],
  "unicorn/prefer-at": ["error"],
  "unicorn/prefer-bigint-literals": ["error"],
  "unicorn/prefer-blob-reading-methods": ["error"],
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
  "unicorn/prefer-import-meta-properties": ["error"],
  "unicorn/prefer-includes": ["error"],
  "unicorn/prefer-keyboard-event-key": ["error"],
  "unicorn/prefer-logical-operator-over-ternary": ["error"],
  "unicorn/prefer-math-min-max": ["error"],
  "unicorn/prefer-math-trunc": ["error"],
  "unicorn/prefer-modern-dom-apis": ["error"],
  "unicorn/prefer-modern-math-apis": ["error"],
  "unicorn/prefer-module": ["error"],
  "unicorn/prefer-native-coercion-functions": ["error"],
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
  // Disabled: Too obscure; Function.prototype.apply is more idiomatic
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
  // Disabled: Too strict; it's not always appropriate to use top-level await
  "unicorn/prefer-top-level-await": ["off"],
  // Disabled: Too strict; other error types may be semantically correct
  "unicorn/prefer-type-error": ["off"],
  "unicorn/relative-url-style": ["error", "never"],
  // Disabled: Too strict; default comma separator is universally known
  "unicorn/require-array-join-separator": ["off"],
  "unicorn/require-module-attributes": ["error"],
  "unicorn/require-module-specifiers": ["error"],
  "unicorn/require-number-to-fixed-digits-argument": ["error"],
  // Disabled: May have false positives; cannot distinguish between window.postMessage() and other calls.
  "unicorn/require-post-message-target-origin": ["off"],
  "unicorn/switch-case-braces": ["error", "always"],
  "unicorn/switch-case-break-position": ["error"],
  "unicorn/text-encoding-identifier-case": ["error"],
  "unicorn/throw-new-error": ["error"],
} as const satisfies DummyRuleMap;

export const preset = {
  /* disable all categories so that we can enable rules selectively */
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
    builtin: true,
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
  overrides: [
    {
      files: [
        "**/*.{test,spec}.{js,jsx,cjs,mjs,ts,tsx}",
        "**/__tests__/**/*.{js,jsx,cjs,mjs,ts,tsx}",
      ],
      rules: {
        // Disabled: Too strict; mock callbacks often need empty functions
        "eslint/no-empty-function": ["off"],
        // Disabled: Too strict; explicit any is common in test code
        "typescript/no-explicit-any": ["off"],
        // Disabled: Too strict; help readability of test code
        "unicorn/consistent-function-scoping": ["off"],
      },
    },
  ],
} as const satisfies OxlintConfig;

export default preset;
