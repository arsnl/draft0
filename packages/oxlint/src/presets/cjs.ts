import type { OxlintConfig } from "oxlint";

/**
 * Special preset for CommonJS modules.
 *
 * By default, Draft0 Oxlint rules are ESM first. This preset is used to make the rules CJS
 * friendly. This preset is not available in the preset list. It's applied automatically at the end
 * of the presets merge, when the `esm` option is set to `false` in the `defineConfig` function.
 */
export const preset: OxlintConfig = {
  env: {
    node: true,
  },
  rules: {
    "import/extensions": ["off"],
    "import/no-commonjs": ["off"],
    "node/global-require": ["error"],
    "node/no-exports-assign": ["error"],
    "node/no-new-require": ["error"],
    "node/no-path-concat": ["error"],
    "typescript/no-require-imports": ["off"],
    "typescript/no-var-requires": ["off"],
    "unicorn/prefer-import-meta-properties": ["off"],
    "unicorn/prefer-module": ["off"],
    "unicorn/require-module-attributes": ["off"],
    "unicorn/require-module-specifiers": ["off"],
  },
};
