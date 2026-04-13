import type { OxlintConfig } from "oxlint";

const unique = <T>(values: readonly T[]): T[] => [...new Set(values)];

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
      plugins: unique([...(other.plugins ?? []), ...(self.plugins ?? [])]),
    }),
    ...((self.jsPlugins ?? other.jsPlugins) !== undefined && {
      jsPlugins: unique([...(other.jsPlugins ?? []), ...(self.jsPlugins ?? [])]),
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
      ignorePatterns: unique([...(other.ignorePatterns ?? []), ...(self.ignorePatterns ?? [])]),
    }),
    ...((self.extends ?? other.extends) !== undefined && {
      extends: unique([...(other.extends ?? []), ...(self.extends ?? [])]),
    }),
    ...rest,
  };
};

/**
 * Merge a full extends chain from left-to-right priority.
 *
 * @param configs Config chain ordered as `[base, ..., current]`.
 * @param options Merge options.
 * @param options.root Whether the result config should be a root config. Default is `true`.
 *
 * @returns A single merged Oxlint config.
 */
export const mergeManyConfigs = (
  configs: readonly OxlintConfig[],
  { root = true }: { root?: boolean } = {},
): OxlintConfig => configs.reduceRight((acc, config) => mergeConfigs(config, acc, { root }), {});
