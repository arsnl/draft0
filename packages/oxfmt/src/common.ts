import type { OxfmtConfig } from "oxfmt";
import type { Simplify } from "type-fest";
import type { PresetName } from "./presets/index.ts";

export type Draft0OxfmtConfig = Simplify<
  {
    /**
     * The Oxfmt preset to use.
     *
     * @default "recommended"
     */
    preset?: PresetName;
  } & OxfmtConfig
>;
