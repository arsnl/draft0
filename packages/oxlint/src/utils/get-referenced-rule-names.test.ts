import { describe, expect, it } from "vitest";
import { getReferencedRuleNames } from "./get-referenced-rule-names.ts";

describe(getReferencedRuleNames, () => {
  it("returns rules referenced across all built-in presets", () => {
    const names = getReferencedRuleNames();

    expect(names.has("eslint/no-console")).toBe(true);
    expect(names.has("react/jsx-key")).toBe(true);
    expect(names.has("nextjs/no-img-element")).toBe(true);
    expect(names.has("vitest/prefer-called-times")).toBe(true);
  });

  it("does not include unknown rule names", () => {
    const names = getReferencedRuleNames();

    expect(names.has("unknown/rule")).toBe(false);
  });
});
