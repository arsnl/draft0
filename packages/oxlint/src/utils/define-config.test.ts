import { describe, expect, it } from "vitest";
import { defineConfig } from "./define-config.ts";

describe(defineConfig, () => {
  it("includes the core preset by default", () => {
    const config = defineConfig();

    expect(config.plugins).toContain("eslint");
    expect(config.rules?.["eslint/no-console"]).toStrictEqual(["warn"]);
  });

  it("auto-includes react when next preset is used", () => {
    const config = defineConfig({ presets: ["nextjs"] });

    expect(config.plugins).toContain("nextjs");
    expect(config.plugins).toContain("react");
    expect(config.rules?.["react/jsx-key"]).toStrictEqual(["error"]);
    expect(config.rules?.["nextjs/no-img-element"]).toStrictEqual(["error"]);
  });

  it("auto-includes react when reactRouter preset is used", () => {
    const config = defineConfig({ presets: ["reactRouter"] });

    expect(config.plugins).toContain("react");
    expect(config.rules?.["react/jsx-key"]).toStrictEqual(["error"]);
  });

  it("deduplicates repeated presets while preserving resulting config", () => {
    const config = defineConfig({ presets: ["nextjs", "react", "react"] });
    const reactPlugins = (config.plugins ?? []).filter((plugin) => plugin === "react");

    expect(reactPlugins).toHaveLength(1);
  });

  it("does not include root-only options when root is false", () => {
    const config = defineConfig({ root: false });

    expect(config.options).toBeUndefined();
  });

  it("keeps ESM-first rules by default", () => {
    const config = defineConfig();

    expect(config.rules?.["unicorn/prefer-module"]).toStrictEqual(["error"]);
    expect(config.env?.node).toBeUndefined();
  });

  it("applies CommonJS overrides when esm is false", () => {
    const config = defineConfig({ esm: false });

    expect(config.env?.node).toBe(true);
    expect(config.rules?.["import/extensions"]).toStrictEqual(["off"]);
    expect(config.rules?.["node/global-require"]).toStrictEqual(["error"]);
    expect(config.rules?.["unicorn/prefer-module"]).toStrictEqual(["off"]);
    expect(config.rules?.["unicorn/require-module-specifiers"]).toStrictEqual(["off"]);
  });

  it("lets local rule config override preset values", () => {
    const config = defineConfig({
      rules: {
        "eslint/no-console": ["error"],
      },
    });

    expect(config.rules?.["eslint/no-console"]).toStrictEqual(["error"]);
  });

  it("lets local rule config override CommonJS preset values", () => {
    const config = defineConfig({
      esm: false,
      rules: {
        "unicorn/prefer-module": ["warn"],
      },
    });

    expect(config.rules?.["unicorn/prefer-module"]).toStrictEqual(["warn"]);
  });
});
