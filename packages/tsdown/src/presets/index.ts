import type { UserConfig } from "tsdown";
import { preset as recommended } from "./recommended.ts";

export { recommended };

/**
 * Presets for TSDown.
 *
 * @see https://tsdown.dev/reference/api/Interface.UserConfig for more information about the
 * configuration options.
 */
export const presets = {
  recommended,
} as const satisfies Record<string, UserConfig>;

export type Presets = typeof presets;

export type PresetName = keyof Presets;
