import { describe, expect, it } from "vitest";
import { presets } from "../presets/index.ts";
import { defineConfig } from "./define-config.ts";

describe(defineConfig, () => {
  it("returns the recommended preset when no config is passed", () => {
    expect(defineConfig()).toStrictEqual(presets.recommended);
  });

  it("uses the recommended preset when preset is omitted", () => {
    expect(defineConfig({ entry: ["src/index.ts"] })).toStrictEqual({
      ...presets.recommended,
      entry: ["src/index.ts"],
    });
  });

  it("applies explicit overrides on top of the selected preset", () => {
    expect(
      defineConfig({
        preset: "recommended",
        dts: false,
        deps: {
          onlyBundle: ["draft0"],
        },
      }),
    ).toStrictEqual({
      ...presets.recommended,
      dts: false,
      deps: {
        onlyBundle: ["draft0"],
      },
    });
  });
});
