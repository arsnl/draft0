import type { PresetName } from "../presets/index.ts";

/** Dependency graph for presets that require another preset to function correctly. */
const presetDependencies: Record<PresetName, readonly PresetName[]> = {
  angular: [],
  astro: [],
  core: [],
  jest: [],
  jsx: [],
  nestjs: [],
  next: ["react"],
  playwright: [],
  qwik: ["jsx"],
  reactRouter: ["react"],
  react: ["jsx"],
  remix: [],
  solid: ["jsx"],
  svelte: [],
  vitest: [],
  vue: [],
};

/**
 * Resolve transitive dependencies for the provided presets while preserving insertion order and
 * deduplicating entries.
 *
 * @param inputPresets - Presets explicitly requested by the user.
 *
 * @returns Presets plus required dependencies in dependency-first stable order. Names that are not
 *   present in the internal dependency map (e.g. a bogus runtime string) are ignored.
 */
export const resolvePresetDependencies = (inputPresets: readonly PresetName[]): PresetName[] => {
  const ordered: PresetName[] = ["core"];
  const visited = new Set<PresetName>(["core"]);
  const visiting = new Set<PresetName>();

  const visitPreset = (preset: PresetName): void => {
    if (visited.has(preset) || visiting.has(preset) || !Object.hasOwn(presetDependencies, preset)) {
      return;
    }

    visiting.add(preset);
    presetDependencies[preset].forEach((dependency) => {
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
