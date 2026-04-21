import type { OxlintConfig as OxlintConfigBase } from "oxlint";
import type { SimplifyDeep } from "type-fest";
import type { OxlintConfig } from "../common.ts";
import type { PresetName, Presets } from "../presets/index.ts";
import type { MergeConfigs } from "./merge-configs.ts";
import { presets } from "../presets/index.ts";
import { mergeConfigs } from "./merge-configs.ts";

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
 * Composes the requested {@link presets} in order and deep-merges your own options on top, so
 * explicit fields always win over presets. The opinionated `core` preset is prepended
 * automatically, duplicate presets are deduplicated, and some presets pull in their dependencies
 * (e.g. `next` implies `react`).
 *
 * See the [Oxlint configuration
 * reference](https://oxc.rs/docs/guide/usage/linter/config-file-reference) for the full set of
 * linter options. On top of those, this function accepts two extra fields:
 *
 * - `root` (default `true`) - Whether this is the root config. Some options are only valid on the
 *   root config, so set this to `false` for nested configs.
 * - `presets` (default `[]`) - Framework or tooling presets to include. Available names: `angular`,
 *   `astro`, `jest`, `nestjs`, `next`, `qwik`, `react`, `remix`, `solid`, `svelte`, `vitest`,
 *   `vue`.
 *
 * @example
 *   import { defineConfig } from "@draft0/oxlint";
 *
 *   export default defineConfig({
 *     presets: ["next", "vitest"],
 *     rules: {
 *       "no-console": "error",
 *     },
 *   });
 *
 * @param oxlintConfig - Oxlint options merged after the resolved presets.
 *
 * @returns The merged configuration, typed as {@link DefinedConfig}.
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
