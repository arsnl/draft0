import type { PresetName } from "../presets/index.ts";
import { describe, expect, it } from "vitest";
import { resolvePresetDependencies } from "./resolve-preset-dependencies.ts";

describe(resolvePresetDependencies, () => {
  it("seeds core when no presets are requested", () => {
    expect(resolvePresetDependencies([])).toStrictEqual(["core"]);
  });

  it("does not duplicate core when the user lists core explicitly", () => {
    expect(resolvePresetDependencies(["core"])).toStrictEqual(["core"]);
  });

  it("puts react before next when nextjs is requested", () => {
    expect(resolvePresetDependencies(["nextjs"])).toStrictEqual(["core", "jsx", "react", "nextjs"]);
  });

  it("pulls in jsx and react in order for react, qwik, and solid", () => {
    expect(resolvePresetDependencies(["react"])).toStrictEqual(["core", "jsx", "react"]);
    expect(resolvePresetDependencies(["qwik"])).toStrictEqual(["core", "jsx", "qwik"]);
    expect(resolvePresetDependencies(["solid"])).toStrictEqual(["core", "jsx", "solid"]);
  });

  it("puts react before reactRouter when reactRouter is requested", () => {
    expect(resolvePresetDependencies(["reactRouter"])).toStrictEqual([
      "core",
      "jsx",
      "react",
      "reactRouter",
    ]);
  });

  it("leaves a preset with no extra dependencies as only that preset after core", () => {
    expect(resolvePresetDependencies(["vitest"])).toStrictEqual(["core", "vitest"]);
    expect(resolvePresetDependencies(["jest"])).toStrictEqual(["core", "jest"]);
    expect(resolvePresetDependencies(["remix"])).toStrictEqual(["core", "remix"]);
  });

  it("does not duplicate existing dependencies", () => {
    expect(resolvePresetDependencies(["nextjs", "react"])).toStrictEqual([
      "core",
      "jsx",
      "react",
      "nextjs",
    ]);
  });

  it("skips a preset already in the list when the user requests it again", () => {
    expect(resolvePresetDependencies(["nextjs", "nextjs"])).toStrictEqual([
      "core",
      "jsx",
      "react",
      "nextjs",
    ]);
  });

  it("preserves unrelated preset order while injecting dependencies first", () => {
    expect(resolvePresetDependencies(["nextjs", "vitest"])).toStrictEqual([
      "core",
      "jsx",
      "react",
      "nextjs",
      "vitest",
    ]);
  });

  it("ignores a preset that is not in the dependency map (bogus runtime name)", () => {
    // Runtime-only string: not a key of `presetDependencies`, so it is dropped from the result.
    expect(resolvePresetDependencies(["__missing__" as PresetName])).toStrictEqual(["core"]);
  });
});
