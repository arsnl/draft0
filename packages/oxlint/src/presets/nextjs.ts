import type { OxlintConfig } from "oxlint";

/**
 * [Next.js](https://nextjs.org/) preset for Oxlint.
 *
 * This preset depends on the `core` and `react` presets.
 */
export const preset: OxlintConfig = {
  plugins: ["nextjs"],
  rules: {
    "nextjs/google-font-display": ["error"],
    "nextjs/google-font-preconnect": ["error"],
    "nextjs/inline-script-id": ["error"],
    "nextjs/next-script-for-ga": ["error"],
    "nextjs/no-assign-module-variable": ["error"],
    "nextjs/no-async-client-component": ["error"],
    "nextjs/no-before-interactive-script-outside-document": ["error"],
    "nextjs/no-css-tags": ["error"],
    "nextjs/no-document-import-in-page": ["error"],
    "nextjs/no-duplicate-head": ["error"],
    "nextjs/no-head-element": ["error"],
    "nextjs/no-head-import-in-document": ["error"],
    "nextjs/no-html-link-for-pages": ["error"],
    "nextjs/no-img-element": ["error"],
    "nextjs/no-page-custom-font": ["error"],
    "nextjs/no-script-component-in-head": ["error"],
    "nextjs/no-styled-jsx-in-document": ["error"],
    "nextjs/no-sync-scripts": ["error"],
    "nextjs/no-title-in-document-head": ["error"],
    "nextjs/no-typos": ["error"],
    "nextjs/no-unwanted-polyfillio": ["error"],
  },
};
