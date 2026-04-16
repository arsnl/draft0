import type { Merge, ReadonlyDeep, SimplifyDeep } from "type-fest";
import type { OxfmtConfig, Preset } from "../common.ts";
import { presets } from "../common.ts";

export type DefinedConfig<T extends OxfmtConfig> = SimplifyDeep<
  Merge<
    Preset[T extends { preset: infer TPreset } ? TPreset : "default"],
    Omit<ReadonlyDeep<T>, "preset">
  >
>;

/**
 * Define an Oxfmt configuration with type inference.
 *
 * Resolves {@link presets | `presets`} (default is `"default"`) and shallow-merges your `config` on
 * top so explicit options override the preset.
 *
 * See the [Oxfmt configuration
 * reference](https://oxc.rs/docs/guide/usage/formatter/config-file-reference) for the full set of
 * formatter options.
 *
 * @param config - Oxfmt options merged after the preset.
 *
 * @returns The merged configuration, typed as {@link DefinedConfig}.
 */
export function defineConfig(): DefinedConfig<Record<never, never>>;
export function defineConfig<const TConfig extends OxfmtConfig>(
  config: TConfig,
): DefinedConfig<TConfig>;
export function defineConfig<const TConfig extends OxfmtConfig>(
  config?: TConfig,
): DefinedConfig<TConfig | Record<never, never>> {
  const { preset = "default", ...self } = (config ?? {}) as OxfmtConfig;
  const presetConfig = presets[preset];

  return {
    ...presetConfig,
    ...self,
  } as DefinedConfig<TConfig | Record<never, never>>;
}
