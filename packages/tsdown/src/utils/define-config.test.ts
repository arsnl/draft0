import { describe, expect, it } from "vitest";
import { defineConfig } from "./define-config.ts";

describe(defineConfig, () => {
  it("returns the default draft0 base config when no config is passed", () => {
    expect(defineConfig()).toStrictEqual({
      entry: ["src/index.{js,jsx,ts,tsx,cjs,mjs,cts,mts}", "index.{js,jsx,ts,tsx,cjs,mjs,cts,mts}"],
      failOnWarn: true,
      dts: true,
      sourcemap: true,
      format: "esm",
      fixedExtension: false,
      unbundle: true,
      attw: {
        profile: "esm-only",
        level: "warn",
      },
      publint: {
        level: "suggestion",
      },
    });
  });

  it("applies defaults when draft0 options are omitted", () => {
    expect(defineConfig({ entry: ["src/index.ts"] })).toStrictEqual({
      entry: ["src/index.ts"],
      failOnWarn: true,
      dts: true,
      sourcemap: true,
      format: "esm",
      fixedExtension: false,
      unbundle: true,
      attw: {
        profile: "esm-only",
        level: "warn",
      },
      publint: {
        level: "suggestion",
      },
    });
  });

  it("switches to dual format when dual is true", () => {
    expect(defineConfig({ draft0: { dual: true } })).toStrictEqual({
      entry: ["src/index.{js,jsx,ts,tsx,cjs,mjs,cts,mts}", "index.{js,jsx,ts,tsx,cjs,mjs,cts,mts}"],
      failOnWarn: true,
      dts: true,
      sourcemap: true,
      format: ["esm", "cjs"],
      fixedExtension: true,
      unbundle: true,
      attw: {
        profile: "node16",
        level: "warn",
      },
      publint: {
        level: "suggestion",
      },
    });
  });

  it("sets unbundle to false when bundle is true", () => {
    expect(defineConfig({ draft0: { bundle: true } })).toStrictEqual({
      entry: ["src/index.{js,jsx,ts,tsx,cjs,mjs,cts,mts}", "index.{js,jsx,ts,tsx,cjs,mjs,cts,mts}"],
      failOnWarn: true,
      dts: true,
      sourcemap: true,
      format: "esm",
      fixedExtension: false,
      unbundle: false,
      attw: {
        profile: "esm-only",
        level: "warn",
      },
      publint: {
        level: "suggestion",
      },
    });
  });

  it("disables declaration emit when dts is false", () => {
    expect(defineConfig({ draft0: { dts: false } })).toStrictEqual({
      entry: ["src/index.{js,jsx,ts,tsx,cjs,mjs,cts,mts}", "index.{js,jsx,ts,tsx,cjs,mjs,cts,mts}"],
      failOnWarn: true,
      dts: false,
      sourcemap: false,
      format: "esm",
      fixedExtension: false,
      unbundle: true,
      publint: {
        level: "suggestion",
      },
    });
  });

  it("applies explicit tsdown overrides on top of draft0-derived defaults", () => {
    expect(
      defineConfig({
        draft0: { bundle: true },
        entry: ["src/cli.ts"],
        sourcemap: true,
      }),
    ).toStrictEqual({
      entry: ["src/cli.ts"],
      failOnWarn: true,
      dts: true,
      sourcemap: true,
      format: "esm",
      fixedExtension: false,
      unbundle: false,
      attw: {
        profile: "esm-only",
        level: "warn",
      },
      publint: {
        level: "suggestion",
      },
    });
  });
});
