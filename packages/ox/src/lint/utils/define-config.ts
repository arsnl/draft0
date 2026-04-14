import type { OxlintConfig as OxlintConfigType } from "oxlint";
import type { OxlintConfigName } from "../common.ts";
import { defineConfig as defineOxlConfig } from "oxlint";
import { configs as oxlintConfigs } from "../configs/index.ts";
import { mergeConfigs } from "./merge-configs.ts";

export type OxlintConfig = OxlintConfigType & {
  // TODO: Check if we can remove the root option and just auto-check if the config is a root config.
  root?: boolean;
  configs?: OxlintConfigName[];
  // TODO: Add esm and typescript options support
  // esm?: boolean;
  // typescript?: boolean;
};

export const defineConfig = (oxlintConfig: OxlintConfig = {}): OxlintConfigType => {
  const { root = true, configs = [], ...self } = oxlintConfig;
  const selectedConfigs = [
    ...new Set<OxlintConfigName>([
      "core" as const,
      ...configs,
      ...(configs.includes("next") ? ["react" as const] : []),
    ]),
  ].map((config) => oxlintConfigs[config]);

  return [...selectedConfigs, self].reduceRight(
    (acc, config) => mergeConfigs(config, acc, { root }),
    {},
  );
};
