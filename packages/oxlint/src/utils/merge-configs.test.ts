import { describe, expect, it } from "vitest";
import { mergeConfigs } from "./merge-configs.ts";

describe(mergeConfigs, () => {
  it("merges object fields and deduplicates plugin-like arrays", () => {
    const merged = mergeConfigs(
      {
        categories: { style: "warn" },
        rules: { "eslint/no-console": ["error"] },
        plugins: ["react"],
        jsPlugins: ["oxlint-plugin-eslint"],
        ignorePatterns: ["dist"],
      },
      {
        categories: { style: "off", suspicious: "off" },
        rules: { "eslint/no-console": ["warn"], "eslint/no-debugger": ["error"] },
        plugins: ["react", "nextjs"],
        jsPlugins: ["oxlint-plugin-eslint", "oxlint-tsgolint"],
        ignorePatterns: ["dist", "build"],
      },
    );

    expect(merged.categories).toStrictEqual({ style: "warn", suspicious: "off" });
    expect(merged.rules).toStrictEqual({
      "eslint/no-console": ["error"],
      "eslint/no-debugger": ["error"],
    });
    expect(merged.plugins).toStrictEqual(["react", "nextjs"]);
    expect(merged.jsPlugins).toStrictEqual(["oxlint-plugin-eslint", "oxlint-tsgolint"]);
    expect(merged.ignorePatterns).toStrictEqual(["dist", "build"]);
  });

  it("appends non-deduplicated arrays in merge order", () => {
    const merged = mergeConfigs(
      {
        extends: [{ rules: { "react/jsx-key": ["error"] } }],
        overrides: [{ files: ["*.ts"], rules: { "eslint/no-console": ["warn"] } }],
      },
      {
        extends: [{ rules: { "eslint/no-debugger": ["error"] } }],
        overrides: [{ files: ["*.js"], rules: { "eslint/no-debugger": ["error"] } }],
      },
    );

    expect(merged.extends).toStrictEqual([
      { rules: { "eslint/no-debugger": ["error"] } },
      { rules: { "react/jsx-key": ["error"] } },
    ]);
    expect(merged.overrides).toStrictEqual([
      { files: ["*.js"], rules: { "eslint/no-debugger": ["error"] } },
      { files: ["*.ts"], rules: { "eslint/no-console": ["warn"] } },
    ]);
  });

  it("drops options when merging for a non-root config", () => {
    const merged = mergeConfigs(
      { options: { typeAware: false } },
      { options: { typeAware: true } },
      { root: false },
    );

    expect(merged.options).toBeUndefined();
  });

  it("merges settings/env/globals and root options", () => {
    const merged = mergeConfigs(
      {
        settings: { react: { version: "detect" } },
        env: { node: true },
        globals: { Bun: "readonly" },
        options: { typeAware: false },
      },
      {
        settings: { jest: { version: 29 } },
        env: { browser: true },
        globals: { window: "readonly" },
        options: { reportUnusedDisableDirectives: "warn", typeAware: true },
      },
    );

    expect(merged.settings).toStrictEqual({
      jest: { version: 29 },
      react: { version: "detect" },
    });
    expect(merged.env).toStrictEqual({ browser: true, node: true });
    expect(merged.globals).toStrictEqual({ window: "readonly", Bun: "readonly" });
    expect(merged.options).toStrictEqual({
      reportUnusedDisableDirectives: "warn",
      typeAware: false,
    });
  });

  it("omits optional keys when both configs do not define them", () => {
    const merged = mergeConfigs({}, {});

    expect(merged.plugins).toBeUndefined();
    expect(merged.rules).toBeUndefined();
    expect(merged.overrides).toBeUndefined();
    expect(merged.ignorePatterns).toBeUndefined();
  });

  it("keeps arrays from other config when self omits them", () => {
    const merged = mergeConfigs(
      {},
      {
        ignorePatterns: ["dist", "coverage"],
        extends: [{ rules: { "eslint/no-console": ["error"] } }],
      },
    );

    expect(merged.ignorePatterns).toStrictEqual(["dist", "coverage"]);
    expect(merged.extends).toStrictEqual([{ rules: { "eslint/no-console": ["error"] } }]);
  });

  it("keeps arrays from self config when other omits them", () => {
    const merged = mergeConfigs(
      {
        ignorePatterns: ["dist", "coverage"],
        extends: [{ rules: { "eslint/no-console": ["error"] } }],
      },
      {},
    );

    expect(merged.ignorePatterns).toStrictEqual(["dist", "coverage"]);
    expect(merged.extends).toStrictEqual([{ rules: { "eslint/no-console": ["error"] } }]);
  });
});
