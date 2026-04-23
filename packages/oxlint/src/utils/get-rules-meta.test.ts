import { describe, expect, it } from "vitest";
import { getRulesMeta } from "./get-rules-meta.ts";

describe(getRulesMeta, () => {
  it("returns both built-in and js rule metadata entries", () => {
    const meta = getRulesMeta();

    expect(meta.length).toBeGreaterThan(0);
    expect(meta.some((rule) => rule.builtIn)).toBe(true);
    expect(meta.some((rule) => !rule.builtIn && rule.plugin === "eslint-js")).toBe(true);
  });

  it("includes compatible rule entries in the unified metadata list", () => {
    const meta = getRulesMeta();
    const compatibleRule = meta.find((rule) => rule.name === "vitest/no-alias-methods");

    expect(compatibleRule?.compatible).toBe(true);
    expect(compatibleRule?.builtIn).toBe(false);
  });
});
