import type { PresetName } from "../presets/index.ts";

/** Dependency graph for presets that require another preset to function correctly. */
const presetDependencies: Partial<Record<PresetName, readonly PresetName[]>> = {
  next: ["react"],
  reactRouter: ["react"],
};

/**
 * Resolve transitive dependencies for the provided presets while preserving insertion order and
 * deduplicating entries.
 *
 * @param inputPresets - Presets explicitly requested by the user.
 *
 * @returns Presets plus required dependencies in dependency-first stable order.
 */
export const resolvePresetDependencies = (inputPresets: readonly PresetName[]): PresetName[] => {
  const ordered: PresetName[] = [];
  const visited = new Set<PresetName>();
  const visiting = new Set<PresetName>();

  const visitPreset = (preset: PresetName): void => {
    if (visited.has(preset) || visiting.has(preset)) {
      return;
    }

    visiting.add(preset);
    (presetDependencies[preset] ?? []).forEach((dependency) => {
      visitPreset(dependency);
    });
    visiting.delete(preset);

    visited.add(preset);
    ordered.push(preset);
  };

  inputPresets.forEach((preset) => {
    visitPreset(preset);
  });

  return ordered;
};
