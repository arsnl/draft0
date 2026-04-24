import type { OxlintConfig } from "oxlint";
import type { Presets } from "../presets/index.ts";
import { describe, expect, it, vi } from "vitest";
import { getReferencedRuleNames } from "./get-referenced-rule-names.ts";

const { mockPresets } = vi.hoisted((): { mockPresets: Presets } => {
  const emptyConfig: OxlintConfig = {};
  return {
    mockPresets: {
      analog: emptyConfig,
      angular: emptyConfig,
      astro: emptyConfig,
      core: { rules: { "eslint/only-in-core": "warn" } },
      ember: emptyConfig,
      jest: { rules: { "shared/dedup": "error" } },
      jsx: { rules: { "jsx/flag-a": "error", "shared/dedup": "off" } },
      lit: emptyConfig,
      nestjs: emptyConfig,
      nextjs: {
        overrides: [
          { files: ["**/*.ts"], rules: { "next/override-a": "error" } },
          { files: ["**/*.md"] },
          { files: ["**/*.only-files"] },
          { files: ["**/*.spec.ts"], rules: { "next/override-b": "off" } },
        ],
      },
      nuxt: emptyConfig,
      playwright: emptyConfig,
      preact: emptyConfig,
      qwik: emptyConfig,
      reactNative: emptyConfig,
      reactRouter: emptyConfig,
      react: { rules: { "react/present": "warn" } },
      remix: emptyConfig,
      solid: emptyConfig,
      svelteKit: emptyConfig,
      svelte: emptyConfig,
      tanstackStart: emptyConfig,
      vitest: { rules: { "vitest/only": "off" } },
      vue: emptyConfig,
    },
  };
});

vi.mock(import("../presets/index.ts"), () => ({
  presets: mockPresets,
}));

describe(getReferencedRuleNames, () => {
  it("collects root rule keys from every preset", () => {
    const names = getReferencedRuleNames();

    expect([...names].toSorted((a, b) => a.localeCompare(b))).toStrictEqual(
      [
        "eslint/only-in-core",
        "jsx/flag-a",
        "next/override-a",
        "next/override-b",
        "react/present",
        "shared/dedup",
        "vitest/only",
      ].toSorted((a, b) => a.localeCompare(b)),
    );
  });

  it("merges override rule keys without requiring rules on every block", () => {
    const names = getReferencedRuleNames();

    expect(names.has("next/override-a")).toBe(true);
    expect(names.has("next/override-b")).toBe(true);
  });

  it("deduplicates the same rule name when it appears in multiple places", () => {
    const names = getReferencedRuleNames();
    const dedup = [...names].filter((name) => name === "shared/dedup");

    expect(dedup).toStrictEqual(["shared/dedup"]);
  });

  it("treats a rule as referenced even when the level is off", () => {
    const names = getReferencedRuleNames();

    expect(names.has("shared/dedup")).toBe(true);
    expect(names.has("next/override-b")).toBe(true);
    expect(names.has("vitest/only")).toBe(true);
  });

  it("does not include rule names that never appear in the mocked presets", () => {
    expect(getReferencedRuleNames().has("nope/not-in-config")).toBe(false);
  });
});
