import type { OxfmtConfig as OxfmtConfigBase } from "oxfmt";
import type { Simplify } from "type-fest";
import type { PresetName } from "./presets/index.ts";

export type OxfmtConfig = Simplify<
  {
    /**
     * The Oxfmt preset to use.
     *
     * @default "default"
     */
    preset?: PresetName;
  } & OxfmtConfigBase
>;
