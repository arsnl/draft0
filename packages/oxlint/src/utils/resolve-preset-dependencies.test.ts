import { describe, expect, it } from "vitest";
import { resolvePresetDependencies } from "./resolve-preset-dependencies.ts";

describe(resolvePresetDependencies, () => {
  it("puts react before next when next is requested", () => {
    expect(resolvePresetDependencies(["next"])).toStrictEqual(["react", "next"]);
  });

  it("puts react before reactRouter when reactRouter is requested", () => {
    expect(resolvePresetDependencies(["reactRouter"])).toStrictEqual(["react", "reactRouter"]);
  });

  it("does not duplicate existing dependencies", () => {
    expect(resolvePresetDependencies(["next", "react"])).toStrictEqual(["react", "next"]);
  });

  it("preserves unrelated preset order while injecting dependencies first", () => {
    expect(resolvePresetDependencies(["next", "vitest"])).toStrictEqual([
      "react",
      "next",
      "vitest",
    ]);
  });
});
