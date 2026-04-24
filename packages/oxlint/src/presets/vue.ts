import type { OxlintConfig } from "oxlint";

/**
 * [Vue](https://vuejs.org/) preset for Oxlint.
 *
 * This preset depends on the `core` preset.
 *
 * ⚠️ Oxlint does not yet support template linting.
 *
 * @see https://oxc.rs/compatibility for more information about the compatibility of Oxlint with different file formats and parsers.
 */
export const preset: OxlintConfig = {
  plugins: ["vue"],
  rules: {
    "vue/define-emits-declaration": ["error"],
    "vue/define-props-declaration": ["error"],
    "vue/define-props-destructuring": ["error"],
    "vue/max-props": ["error"],
    "vue/no-arrow-functions-in-watch": ["error"],
    "vue/no-deprecated-destroyed-lifecycle": ["error"],
    "vue/no-export-in-script-setup": ["error"],
    "vue/no-import-compiler-macros": ["error"],
    "vue/no-lifecycle-after-await": ["error"],
    "vue/no-multiple-slot-args": ["error"],
    "vue/no-required-prop-with-default": ["error"],
    "vue/no-this-in-before-route-enter": ["error"],
    "vue/prefer-import-from-vue": ["error"],
    "vue/require-default-export": ["error"],
    "vue/require-typed-ref": ["error"],
    "vue/valid-define-emits": ["error"],
    "vue/valid-define-props": ["error"],
  },
};
