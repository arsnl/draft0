import type { UserConfig } from "tsdown";
import type { Merge, ReadonlyDeep, Simplify, SimplifyDeep } from "type-fest";
import type { Preset, PresetName } from "../common.ts";
import { presets } from "../common.ts";

export type TSDownConfig = Simplify<
  {
    /**
     * The TSDown preset to use.
     *
     * @default "default"
     */
    preset?: PresetName;
  } & UserConfig
>;

export type DefinedConfig<T extends TSDownConfig> = SimplifyDeep<
  Merge<
    Preset[T extends { preset: infer TPreset } ? TPreset : "default"],
    Omit<ReadonlyDeep<T>, "preset">
  >
>;

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
