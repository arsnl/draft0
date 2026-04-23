import type { OxlintConfig } from "oxlint";

/**
 * Merge two oxlint configs.
 *
 * @param self - The self config. The config that is being merged into.
 * @param other - The other config. The config that is being merged from.
 * @param options - The options for the merge.
 * @param options.root - Whether the config is the root config. Defaults to true.
 *
 * @returns The merged config.
 */
export const mergeConfigs = (
  self: OxlintConfig,
  other: OxlintConfig = {},
  { root = true }: { root?: boolean } = {},
): OxlintConfig => {
  const {
    categories: _categories,
    rules: _rules,
    options: _options,
    plugins: _plugins,
    jsPlugins: _jsPlugins,
    overrides: _overrides,
    settings: _settings,
    env: _env,
    globals: _globals,
    ignorePatterns: _ignorePatterns,
    extends: _extends,
    ...rest
  } = self;

  return {
    ...((self.categories ?? other.categories) !== undefined && {
      categories: { ...other.categories, ...self.categories },
    }),
    ...((self.rules ?? other.rules) !== undefined && {
      rules: { ...other.rules, ...self.rules },
    }),
    ...(root &&
      (self.options ?? other.options) !== undefined && {
        options: { ...other.options, ...self.options },
      }),
    ...((self.plugins ?? other.plugins) !== undefined && {
      plugins: [...new Set([...(other.plugins ?? []), ...(self.plugins ?? [])])],
    }),
    ...((self.jsPlugins ?? other.jsPlugins) !== undefined && {
      jsPlugins: [...new Set([...(other.jsPlugins ?? []), ...(self.jsPlugins ?? [])])],
    }),
    ...((self.overrides ?? other.overrides) !== undefined && {
      overrides: [...(other.overrides ?? []), ...(self.overrides ?? [])],
    }),
    ...((self.settings ?? other.settings) !== undefined && {
      settings: { ...other.settings, ...self.settings },
    }),
    ...((self.env ?? other.env) !== undefined && {
      env: { ...other.env, ...self.env },
    }),
    ...((self.globals ?? other.globals) !== undefined && {
      globals: { ...other.globals, ...self.globals },
    }),
    ...((self.ignorePatterns ?? other.ignorePatterns) !== undefined && {
      ignorePatterns: [
        ...new Set([...(other.ignorePatterns ?? []), ...(self.ignorePatterns ?? [])]),
      ],
    }),
    ...((self.extends ?? other.extends) !== undefined && {
      extends: [...(other.extends ?? []), ...(self.extends ?? [])],
    }),
    ...rest,
  };
};
