import { defineConfig } from "eslint/config";
import { type ESLint, type Linter } from "eslint";
import { prefixRules } from "./prefix-rules.js";

export const definePluginConfig = <
  const TDefaultName extends string,
  const TRules extends Record<string, readonly unknown[]>,
  const TExtraRules extends Linter.RulesRecord,
>(config: {
  defaultPluginName: TDefaultName;
  rulesConfig: TRules;
  plugin: ESLint.Plugin;
  configName: string;
  extraConfig?: Omit<Linter.Config, "name" | "plugins" | "rules"> & {
    rules?: TExtraRules;
  };
}) => {
  const extraRulesConfig = config.extraConfig?.rules ?? ({} as TExtraRules);

  const getRulesConfig = <TPluginName extends string = TDefaultName>(
    {
      pluginName = config.defaultPluginName as unknown as TPluginName,
    }: { pluginName?: TPluginName } = {} as { pluginName?: TPluginName },
  ) => ({
    ...extraRulesConfig,
    ...prefixRules(pluginName, config.rulesConfig),
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
      rules: getRulesConfig({ pluginName }) as unknown as Linter.RulesRecord,
    });

  return { getRulesConfig, getConfig } as const;
};
