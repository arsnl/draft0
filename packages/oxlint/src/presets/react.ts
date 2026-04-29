import type { OxlintConfig } from "oxlint";

/**
 * [React](https://react.dev/) preset for Oxlint.
 *
 * This preset depends on the `core` and `jsx` presets.
 */
export const preset: OxlintConfig = {
  plugins: ["react", "react-perf"],
  rules: {
    "react/button-has-type": ["error"],
    "react/checked-requires-onchange-or-readonly": ["error"],
    "react/display-name": ["error"],
    "react/exhaustive-deps": ["error"],
    "react/forbid-component-props": ["off"], // Disabled: Too restrictive; className/style on custom components is a common, valid React pattern.
    "react/forbid-dom-props": ["error"],
    "react/forbid-elements": ["error"],
    "react/forward-ref-uses-ref": ["error"],
    "react/hook-use-state": ["error"],
    "react/iframe-missing-sandbox": ["error"],
    "react/jsx-boolean-value": ["error", "never", { assumeUndefinedIsFalse: true }],
    "react/jsx-curly-brace-presence": ["error"],
    "react/jsx-filename-extension": ["error", { extensions: [".jsx", ".tsx"] }],
    "react/jsx-fragments": ["error"],
    "react/jsx-handler-names": ["error"],
    "react/jsx-key": ["error"],
    "react/jsx-max-depth": ["off"], // Disabled: Arbitrary threshold; better enforced through code review
    "react/jsx-no-comment-textnodes": ["error"],
    "react/jsx-no-constructed-context-values": ["error"],
    "react/jsx-no-duplicate-props": ["error"],
    "react/jsx-no-script-url": ["error"],
    "react/jsx-no-target-blank": ["error"],
    "react/jsx-no-undef": ["error"],
    "react/jsx-no-useless-fragment": ["error"],
    "react/jsx-pascal-case": ["error"],
    "react/jsx-props-no-spread-multi": ["error"],
    "react/jsx-props-no-spreading": ["off"], // Disabled: Too restrictive; prop forwarding, polymorphic components, and “pass rest to DOM” are idiomatic React
    "react/no-array-index-key": ["error"],
    "react/no-children-prop": ["error"],
    "react/no-clone-element": ["error"],
    "react/no-danger": ["error"],
    "react/no-danger-with-children": ["error"],
    "react/no-did-mount-set-state": ["error"],
    "react/no-did-update-set-state": ["error"],
    "react/no-direct-mutation-state": ["error"],
    "react/no-find-dom-node": ["error"],
    "react/no-is-mounted": ["error"],
    "react/no-multi-comp": ["off"], // Disabled: Too restrictive; multiple components per file for colocation is idiomatic React and encouraged for readability
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
      { ignore: ["css", "jsx", "global"], requireDataLowercase: true },
    ],
    "react/no-unsafe": ["error"],
    "react/no-will-update-set-state": ["error"],
    "react/only-export-components": ["off"], // Disabled: Too restrictive; hooks, constants, helpers beside components are idiomatic React
    "react/prefer-es6-class": ["error", "always"], // Useless rule most of the time, but useful if the rule react/prefer-function-component is disabled
    "react/prefer-function-component": ["error"],
    "react/react-in-jsx-scope": ["off"], // Disabled: Deprecated; not needed on React 17+ with new JSX transform
    "react/require-render-return": ["error"],
    "react/rules-of-hooks": ["error"],
    "react/self-closing-comp": ["error"],
    "react/state-in-constructor": ["error"],
    "react/style-prop-object": ["error"],
    "react/void-dom-elements-no-children": ["error"],
    "react-perf/jsx-no-jsx-as-prop": ["off"], // Disabled: Redundant; let the React compiler enforce this
    "react-perf/jsx-no-new-array-as-prop": ["off"], // Disabled: Redundant; let the React compiler enforce this
    "react-perf/jsx-no-new-function-as-prop": ["off"], // Disabled: Redundant; let the React compiler enforce this
    "react-perf/jsx-no-new-object-as-prop": ["off"], // Disabled: Redundant; let the React compiler enforce this
  },
};
