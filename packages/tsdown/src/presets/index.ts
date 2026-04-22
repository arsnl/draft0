import type { UserConfig } from "tsdown";
import { preset as recommended } from "./recommended.ts";

export type PresetName = "recommended";

export type Presets = Record<PresetName, UserConfig>;

export { recommended };

/**
 * Presets for TSDown.
 *
 * @see https://tsdown.dev/reference/api/Interface.UserConfig for more information about the
 * configuration options.
 */
export const presets: Presets = {
  recommended,
};
