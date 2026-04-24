import { describe, expect, it } from "vitest";
import { defineConfig } from "./define-config.ts";

describe(defineConfig, () => {
  it("includes the core preset by default", () => {
    const config = defineConfig();

    expect(config.plugins).toContain("eslint");
    expect(config.rules?.["eslint/no-console"]).toStrictEqual(["warn"]);
  });

  it("auto-includes react when next preset is used", () => {
    const config = defineConfig({ presets: ["next"] });

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
    const config = defineConfig({ presets: ["next", "react", "react"] });
    const reactPlugins = (config.plugins ?? []).filter((plugin) => plugin === "react");

    expect(reactPlugins).toHaveLength(1);
  });

  it("does not include root-only options when root is false", () => {
    const config = defineConfig({ root: false });

    expect(config.options).toBeUndefined();
  });

  it("lets local rule config override preset values", () => {
    const config = defineConfig({
      rules: {
        "eslint/no-console": ["error"],
      },
    });

    expect(config.rules?.["eslint/no-console"]).toStrictEqual(["error"]);
  });
});
