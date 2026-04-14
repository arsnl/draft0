import type { OxlintConfig as OxlintConfigType } from "oxlint";
import type { SimplifyDeep } from "type-fest";
import type { PresetName } from "../common.ts";
import type { MergeConfigs } from "./merge-configs.ts";
import { presets as oxlintPresets } from "../presets/index.ts";
import { mergeConfigs } from "./merge-configs.ts";

export type OxlintConfig = OxlintConfigType & {
  root?: boolean;
  presets?: PresetName[];
  // TODO: Add esm and typescript options support
  // esm?: boolean;
  // typescript?: boolean;
};

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
  ["core", ...MaybeAutoReact<InputPresets<T>>, ...InputPresets<T>]
>;

type PresetConfigTuple<TPresetNames extends readonly PresetName[]> = {
  [K in keyof TPresetNames]: TPresetNames[K] extends PresetName
    ? (typeof oxlintPresets)[TPresetNames[K]]
    : never;
};

type NormalizeMergeInput<T> = {
  [K in keyof T as K extends keyof OxlintConfigType ? K : never]: Exclude<T[K], undefined>;
};

type SelfConfig<T extends OxlintConfig> = NormalizeMergeInput<Omit<T, "root" | "presets">>;

type ReduceConfigsLeft<
  TConfigs extends readonly OxlintConfigType[],
  TRoot extends boolean,
  TAcc = Record<never, never>,
> = TConfigs extends readonly [infer THead, ...infer TRest]
  ? THead extends OxlintConfigType
    ? TRest extends readonly OxlintConfigType[]
      ? ReduceConfigsLeft<TRest, TRoot, MergeConfigs<THead, TAcc, TRoot>>
      : TAcc
    : TAcc
  : TAcc;

export type DefineConfigReturn<T extends OxlintConfig> = SimplifyDeep<
  ReduceConfigsLeft<[...PresetConfigTuple<OrderedPresetNames<T>>, SelfConfig<T>], InputRoot<T>>
>;

export function defineConfig(): DefineConfigReturn<Record<never, never>>;
export function defineConfig<const TConfig extends OxlintConfig>(
  oxlintConfig: TConfig,
): DefineConfigReturn<TConfig>;
export function defineConfig<const TConfig extends OxlintConfig>(
  oxlintConfig?: TConfig,
): DefineConfigReturn<TConfig | Record<never, never>> {
  const resolvedConfig = (oxlintConfig ?? ({} as Record<never, never>)) as OxlintConfig;
  const { root = true, presets = [], ...self } = resolvedConfig;
  const selfConfig = self as OxlintConfigType;
  const configs = [
    ...new Set<PresetName>([
      "core",
      ...(presets.includes("next" as const) && !presets.includes("react" as const)
        ? ["react" as const]
        : []),
      ...presets,
    ]),
  ].map((preset) => oxlintPresets[preset]) as OxlintConfigType[];

  return [...configs, selfConfig].reduce<OxlintConfigType>(
    (acc, config) => mergeConfigs(config, acc, { root }),
    {},
  ) as DefineConfigReturn<TConfig | Record<never, never>>;
}
