import type { Merge, ReadonlyDeep, SimplifyDeep } from "type-fest";
import type { Presets, TSDownConfig } from "../common.ts";
import { presets } from "../common.ts";

export type DefinedConfig<T extends TSDownConfig> = SimplifyDeep<
  Merge<
    Presets[T extends { preset: infer TPreset } ? TPreset : "default"],
    Omit<ReadonlyDeep<T>, "preset">
  >
>;

/**
 * Define a TSDown configuration with type inference.
 *
 * Resolves {@link presets | `presets[preset]`} (default `preset` is `"default"`) and shallow-merges
 * your `config` on top so explicit options override the preset.
 *
 * See [UserConfig](https://tsdown.dev/reference/api/Interface.UserConfig) for the full set of build
 * options.
 *
 * @param config - TSDown options merged after the preset.
 *
 * @returns The merged configuration, typed as {@link DefinedConfig}.
 */
export function defineConfig(): DefinedConfig<Record<never, never>>;
export function defineConfig<const TConfig extends TSDownConfig>(
  config: TConfig,
): DefinedConfig<TConfig>;
export function defineConfig<const TConfig extends TSDownConfig>(
  config?: TConfig,
): DefinedConfig<TConfig | Record<never, never>> {
  const { preset = "default", ...self } = (config ?? {}) as TSDownConfig;
  const presetConfig = presets[preset];

  return {
    ...presetConfig,
    ...self,
  } as DefinedConfig<TConfig | Record<never, never>>;
}
