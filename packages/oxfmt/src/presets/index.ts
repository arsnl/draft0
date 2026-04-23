import type { OxfmtConfig } from "oxfmt";
import { preset as recommended } from "./recommended.ts";

export type PresetName = "recommended";

export type Presets = Record<PresetName, OxfmtConfig>;

export { recommended };

/**
 * Presets for Oxfmt.
 *
 * @see https://oxc.rs/docs/guide/usage/formatter/config-file-reference for more information about
 * the configuration options.
 */
export const presets: Presets = {
  recommended,
};
