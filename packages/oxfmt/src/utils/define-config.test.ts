import { describe, expect, it } from "vitest";
import { defaults } from "../defaults.ts";
import { defineConfig } from "./define-config.ts";

describe(defineConfig, () => {
  it("returns Draft0 defaults when no config is passed", () => {
    expect(defineConfig()).toStrictEqual(defaults);
  });

  it("applies overrides on top of defaults", () => {
    expect(defineConfig({ sortPackageJson: false })).toStrictEqual({
      ...defaults,
      sortPackageJson: false,
    });
  });

  it("supports explicit top-level overrides with shallow merge semantics", () => {
    expect(
      defineConfig({
        sortPackageJson: false,
        jsdoc: { separateReturnsFromParam: false },
      }),
    ).toStrictEqual({
      ...defaults,
      sortPackageJson: false,
      jsdoc: { separateReturnsFromParam: false },
    });
  });
});
