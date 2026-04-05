import type { DummyRuleMap, OxlintConfig } from "oxlint";

const rules = {
  "jsx-a11y/alt-text": [
    "error",
    {
      img: ["Image"],
    },
  ],
  "jsx-a11y/anchor-ambiguous-text": ["error"],
  "jsx-a11y/anchor-has-content": ["error"],
  "jsx-a11y/anchor-is-valid": ["error"],
  "jsx-a11y/aria-activedescendant-has-tabindex": ["error"],
  "jsx-a11y/aria-props": ["error"],
  "jsx-a11y/aria-proptypes": ["error"],
  "jsx-a11y/aria-role": ["error"],
  "jsx-a11y/aria-unsupported-elements": ["error"],
  "jsx-a11y/autocomplete-valid": ["error"],
  "jsx-a11y/click-events-have-key-events": ["error"],
  "jsx-a11y/heading-has-content": ["error"],
  "jsx-a11y/html-has-lang": ["error"],
  "jsx-a11y/iframe-has-title": ["error"],
  "jsx-a11y/img-redundant-alt": ["error"],
  "jsx-a11y/label-has-associated-control": ["error"],
  "jsx-a11y/lang": ["error"],
  "jsx-a11y/media-has-caption": ["error"],
  "jsx-a11y/mouse-events-have-key-events": ["error"],
  "jsx-a11y/no-access-key": ["error"],
  "jsx-a11y/no-aria-hidden-on-focusable": ["error"],
  "jsx-a11y/no-autofocus": [
    "error",
    {
      ignoreNonDOM: true,
    },
  ],
  "jsx-a11y/no-distracting-elements": ["error"],
  "jsx-a11y/no-noninteractive-tabindex": ["error"],
  "jsx-a11y/no-redundant-roles": ["error"],
  "jsx-a11y/no-static-element-interactions": ["error"],
  "jsx-a11y/prefer-tag-over-role": ["error"],
  "jsx-a11y/role-has-required-aria-props": ["error"],
  "jsx-a11y/role-supports-aria-props": ["error"],
  "jsx-a11y/scope": ["error"],
  "jsx-a11y/tabindex-no-positive": ["error"],
  "react/button-has-type": ["error"],
  "react/checked-requires-onchange-or-readonly": ["error"],
  "react/display-name": ["error"],
  "react/exhaustive-deps": ["error"],
  "react/forbid-dom-props": ["error"],
  "react/forbid-elements": ["error"],
  "react/forward-ref-uses-ref": ["error"],
  "react/iframe-missing-sandbox": ["error"],
  "react/jsx-boolean-value": [
    "error",
    "never",
    {
      assumeUndefinedIsFalse: true,
    },
  ],
  "react/jsx-curly-brace-presence": ["error"],
  "react/jsx-filename-extension": [
    "error",
    {
      extensions: [".jsx", ".tsx"],
    },
  ],
  "react/jsx-fragments": ["error"],
  "react/jsx-handler-names": ["error"],
  "react/jsx-key": ["error"],
  // Disabled: Arbitrary threshold; better enforced through code review
  "react/jsx-max-depth": ["off"],
  "react/jsx-no-comment-textnodes": ["error"],
  "react/jsx-no-constructed-context-values": ["error"],
  "react/jsx-no-duplicate-props": ["error"],
  "react/jsx-no-script-url": ["error"],
  "react/jsx-no-target-blank": ["error"],
  "react/jsx-no-undef": ["error"],
  "react/jsx-no-useless-fragment": ["error"],
  "react/jsx-pascal-case": ["error"],
  "react/jsx-props-no-spread-multi": ["error"],
  // Disabled: Too restrictive; prop forwarding, polymorphic components, and “pass rest to DOM” are idiomatic React
  "react/jsx-props-no-spreading": ["off"],
  "react/no-array-index-key": ["error"],
  "react/no-children-prop": ["error"],
  "react/no-clone-element": ["error"],
  "react/no-danger": ["error"],
  "react/no-danger-with-children": ["error"],
  "react/no-did-mount-set-state": ["error"],
  "react/no-direct-mutation-state": ["error"],
  "react/no-find-dom-node": ["error"],
  "react/no-is-mounted": ["error"],
  // Disabled: Too restrictive; multiple components per file for colocation is idiomatic React and encouraged for readability
  "react/no-multi-comp": ["off"],
  "react/no-namespace": ["error"],
  "react/no-react-children": ["error"],
  "react/no-redundant-should-component-update": ["error"],
  "react/no-render-return-value": ["error"],
  "react/no-set-state": ["error"],
  "react/no-string-refs": ["error"],
  "react/no-this-in-sfc": ["error"],
  "react/no-unescaped-entities": ["error"],
  "react/no-unknown-property": [
    "error",
    {
      ignore: ["css", "jsx", "global"],
      requireDataLowercase: true,
    },
  ],
  "react/no-unsafe": ["error"],
  "react/no-will-update-set-state": ["error"],
  // Disabled: Too restrictive; hooks, constants, helpers beside components are idiomatic React
  "react/only-export-components": ["off"],
  "react/prefer-es6-class": ["error"],
  // Disabled: Deprecated; not needed on React 17+ with new JSX transform
  "react/react-in-jsx-scope": ["off"],
  "react/require-render-return": ["error"],
  "react/rules-of-hooks": ["error"],
  "react/self-closing-comp": ["error"],
  "react/state-in-constructor": ["error"],
  "react/style-prop-object": ["error"],
  "react/void-dom-elements-no-children": ["error"],
  // Disabled: Redundant; let the React compiler enforce this
  "react-perf/jsx-no-jsx-as-prop": ["off"],
  // Disabled: Redundant; let the React compiler enforce this
  "react-perf/jsx-no-new-array-as-prop": ["off"],
  // Disabled: Redundant; let the React compiler enforce this
  "react-perf/jsx-no-new-function-as-prop": ["off"],
  // Disabled: Redundant; let the React compiler enforce this
  "react-perf/jsx-no-new-object-as-prop": ["off"],
} as const satisfies DummyRuleMap;

export const config = {
  plugins: ["react", "react-perf", "jsx-a11y"],
  rules,
} as const satisfies OxlintConfig;

export default config;
