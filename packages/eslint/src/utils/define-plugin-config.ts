import { defineConfig } from "eslint/config";
import { type ESLint, type Linter } from "eslint";
import { prefixRules } from "./prefix-rules.js";

export const definePluginConfig = <
  const TDefaultName extends string,
  const TRules extends Record<string, readonly unknown[]>,
  const TExtraRules extends Linter.RulesRecord,
>(config: {
  defaultPluginName: TDefaultName;
  /**
   * ESLint rules for the plugin (without the plugin name prefix).
   *
   * Keys should be the *bare* rule name, for example:
   * `{"no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }]}`.
   *
   * When you call `getConfig({ pluginName })` (or when `pluginName` falls back to `defaultPluginName`), this helper prefixes each rule key with the chosen plugin name.
   */
  rules: TRules;
  /**
   * ESLint plugin.
   */
  plugin: ESLint.Plugin;
  /**
   * A string to identify the configuration object. Used in error messages and inspection tools.
   */
  configName: string;
  /**
   * Extra config for the plugin. {@link Linter.Config}.
   */
  extraConfig?: Omit<Linter.Config, "name" | "plugins" | "rules"> & {
    /**
     * Extra ESLint rules that need to be applied to the plugin. Contrary to the `rules` parameter, the rules must include their plugin name prefix, if any.
     */
    rules?: TExtraRules;
  };
}) => {
  const extraRulesConfig = config.extraConfig?.rules ?? ({} as TExtraRules);

  const getDefaultPluginName = () => config.defaultPluginName;

  const getRules = <TPluginName extends string = TDefaultName>(
    {
      pluginName = config.defaultPluginName as unknown as TPluginName,
    }: { pluginName?: TPluginName } = {} as { pluginName?: TPluginName },
  ) => ({
    ...extraRulesConfig,
    ...prefixRules(pluginName, config.rules),
  });

  const getConfig = <TPluginName extends string = TDefaultName>(
    {
      pluginName = config.defaultPluginName as unknown as TPluginName,
    }: { pluginName?: TPluginName } = {} as { pluginName?: TPluginName },
  ) =>
    defineConfig({
      ...config.extraConfig,
      name: `kit42/${config.configName}`,
      plugins: { [pluginName]: config.plugin },
      rules: getRules({ pluginName }) as unknown as Linter.RulesRecord,
    });

  return { getRules, getConfig, getDefaultPluginName } as const;
};
