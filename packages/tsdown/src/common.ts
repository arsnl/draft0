import type { UserConfig } from "tsdown";
import type { Simplify } from "type-fest";
import type { PresetName } from "./presets/index.ts";

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
