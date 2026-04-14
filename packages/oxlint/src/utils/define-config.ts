import type { OxlintConfig as OxlintConfigBase } from "oxlint";
import type { Simplify, SimplifyDeep } from "type-fest";
import type { PresetName } from "../common.ts";
import type { Presets } from "../presets/index.ts";
import type { MergeConfigs } from "./merge-configs.ts";
import { presets } from "../presets/index.ts";
import { mergeConfigs } from "./merge-configs.ts";

export type OxlintConfig = Simplify<
  {
    /**
     * Whether the config is the root config.
     *
     * @default true
     */
    root?: boolean;
    /**
     * The framework/library presets to use.
     *
     * @default [ ]
     */
    presets?: PresetName[];
    // TODO: Add esm and typescript options support
    // esm?: boolean;
    // typescript?: boolean;
  } & OxlintConfigBase
>;

type InputPresets<T extends OxlintConfig> = T["presets"] extends readonly PresetName[]
  ? T["presets"]
  : [];

type InputRoot<T extends OxlintConfig> = T extends { root: infer TRoot extends boolean }
  ? TRoot
  : true;

type MaybeAutoReact<T extends readonly PresetName[]> = "next" extends T[number]
  ? "react" extends T[number]
    ? []
    : ["react"]
  : [];

type DedupePresets<
  T extends readonly PresetName[],
  TSeen extends PresetName = never,
  TOutput extends PresetName[] = [],
> = T extends readonly [infer THead, ...infer TTail]
  ? THead extends PresetName
    ? TTail extends readonly PresetName[]
      ? THead extends TSeen
        ? DedupePresets<TTail, TSeen, TOutput>
        : DedupePresets<TTail, TSeen | THead, [...TOutput, THead]>
      : TOutput
    : TOutput
  : TOutput;

type OrderedPresetNames<T extends OxlintConfig> = DedupePresets<
  ["core", ...InputPresets<T>, ...MaybeAutoReact<InputPresets<T>>]
>;

type PresetConfigTuple<TPresetNames extends readonly PresetName[]> = {
  [K in keyof TPresetNames]: TPresetNames[K] extends PresetName ? Presets[TPresetNames[K]] : never;
};

type NormalizeMergeInput<T> = {
  [K in keyof T as K extends keyof OxlintConfigBase ? K : never]: Exclude<T[K], undefined>;
};

type SelfConfig<T extends OxlintConfig> = NormalizeMergeInput<Omit<T, "root" | "presets">>;

type ReduceConfigsLeft<
  TConfigs extends readonly OxlintConfigBase[],
  TRoot extends boolean,
  TAcc = Record<never, never>,
> = TConfigs extends readonly [infer THead, ...infer TRest]
  ? THead extends OxlintConfigBase
    ? TRest extends readonly OxlintConfigBase[]
      ? ReduceConfigsLeft<TRest, TRoot, MergeConfigs<THead, TAcc, TRoot>>
      : TAcc
    : TAcc
  : TAcc;

export type DefinedConfig<T extends OxlintConfig> = SimplifyDeep<
  ReduceConfigsLeft<[...PresetConfigTuple<OrderedPresetNames<T>>, SelfConfig<T>], InputRoot<T>>
>;

/**
 * Define an Oxlint configuration with type inference.
 *
 * Compared to Oxlint’s defineConfig, this helper returns a more opinionated configuration: it
 * applies stronger defaults and exposes extra fields so you can compose presets and overrides in
 * one place.
 *
 * The following extra options are available:
 *
 * - `root` - Controls whether root-level options are merged as root config. Defaults to `true`.
 * - `presets` - Select framework/library presets to compose with `core` Defaults to `[]`.
 *
 * The following extra presets are available:
 *
 * - `core` - Always included.
 * - `angular`
 * - `astro`
 * - `jest`
 * - `nestjs`
 * - `next`- Automatically includes the `react` preset.
 * - `qwik`
 * - `react`
 * - `remix`
 * - `solid`
 * - `svelte`
 * - `vitest`
 * - `vue`
 *
 * @param config - The Oxlint configuration to define.
 *
 * @returns The defined Oxlint configuration.
 */
export function defineConfig(): DefinedConfig<Record<never, never>>;
export function defineConfig<const TConfig extends OxlintConfig>(
  oxlintConfig: TConfig,
): DefinedConfig<TConfig>;
export function defineConfig<const TConfig extends OxlintConfig>(
  oxlintConfig?: TConfig,
): DefinedConfig<TConfig | Record<never, never>> {
  const { root = true, presets: inputPresets = [], ...self } = (oxlintConfig ?? {}) as OxlintConfig;

  const configs = [
    ...new Set<PresetName>([
      "core",
      ...inputPresets,
      ...(inputPresets.includes("next") && !inputPresets.includes("react")
        ? ["react" as const]
        : []),
    ]),
  ].map((preset) => presets[preset]);

  return [...configs, self].reduce(
    (acc, config) => mergeConfigs(config, acc, { root }),
    {},
  ) as DefinedConfig<TConfig | Record<never, never>>;
}
