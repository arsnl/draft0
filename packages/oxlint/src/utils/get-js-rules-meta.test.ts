import { describe, expect, it } from "vitest";
import { getJsRulesMeta } from "./get-js-rules-meta.ts";

describe(getJsRulesMeta, () => {
  it("returns metadata entries for third-party JavaScript plugin rules", () => {
    const meta = getJsRulesMeta();

    expect(meta).toHaveLength(4);
    expect(meta.map((rule) => rule.name)).toStrictEqual([
      "eslint-js/no-restricted-syntax",
      "eslint-js/no-unreachable-loop",
      "eslint-js/one-var",
    ]);
    expect(meta.every((rule) => rule.plugin === "eslint-js")).toBe(true);
    expect(meta.every((rule) => !rule.builtIn)).toBe(true);
    expect(meta.every((rule) => !rule.compatible)).toBe(true);
  });

  it("marks js rules as referenced when presets include them", () => {
    const meta = getJsRulesMeta();
    const noRestrictedSyntax = meta.find((rule) => rule.name === "eslint-js/no-restricted-syntax");

    expect(noRestrictedSyntax?.referenced).toBe(true);
  });
});
