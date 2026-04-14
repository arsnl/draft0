import type { OxlintConfig as OxlintConfigType } from "oxlint";
import type { PresetName } from "../common.ts";
import { defineConfig as defineOxlConfig } from "oxlint";
import { presets as oxlintPresets } from "../presets/index.ts";
import { mergeConfigs } from "./merge-configs.ts";

export type OxlintConfig = OxlintConfigType & {
  // TODO: Check if we can remove the root option and just auto-check if the config is a root config.
  root?: boolean;
  presets?: PresetName[];
  // TODO: Add esm and typescript options support
  // esm?: boolean;
  // typescript?: boolean;
};

export const defineConfig = (oxlintConfig: OxlintConfig = {}): OxlintConfigType => {
  const { root = true, presets = [], ...self } = oxlintConfig;
  const configs = [
    ...new Set<PresetName>([
      "core",
      ...presets,
      ...(presets.includes("next" as const) ? ["react" as const] : []),
    ]),
  ].map((preset) => oxlintPresets[preset]);

  return [...configs, self].reduceRight((acc, config) => mergeConfigs(config, acc, { root }), {});
};
