import { beforeEach, describe, expect, it, vi } from "vitest";
import { getBuiltInRulesMeta } from "./get-built-in-rules-meta.ts";
import { getJsRulesMeta } from "./get-js-rules-meta.ts";
import { getRulesMeta } from "./get-rules-meta.ts";

vi.mock(import("./get-built-in-rules-meta.ts"));
vi.mock(import("./get-js-rules-meta.ts"));

describe(getRulesMeta, () => {
  beforeEach(() => {
    vi.mocked(getBuiltInRulesMeta).mockReturnValue([
      {
        scope: "jest",
        value: "no-alias-methods",
        category: "style",
        type_aware: false,
        fix: "none",
        default: false,
        docs_url: "https://example.test/jest/no-alias-methods",
        plugin: "jest",
        name: "jest/no-alias-methods",
        builtIn: true,
        compatible: false,
        referenced: false,
      },
      {
        scope: "vitest",
        value: "no-alias-methods",
        category: "style",
        type_aware: false,
        fix: "none",
        default: false,
        docs_url: "https://example.test/vitest/no-alias-methods",
        plugin: "vitest",
        name: "vitest/no-alias-methods",
        builtIn: false,
        compatible: true,
        referenced: false,
      },
    ]);

    vi.mocked(getJsRulesMeta).mockReturnValue([
      {
        scope: "eslint_js",
        value: "one-var",
        category: "style",
        type_aware: false,
        fix: "fixable_fix",
        default: false,
        docs_url: "https://example.test/eslint-js/one-var",
        plugin: "eslint-js",
        name: "eslint-js/one-var",
        builtIn: false,
        compatible: false,
        referenced: false,
      },
    ]);
  });

  it("returns metadata by concatenating built-in and js entries", () => {
    const meta = getRulesMeta();

    expect(meta.map((rule) => rule.name)).toStrictEqual([
      "jest/no-alias-methods",
      "vitest/no-alias-methods",
      "eslint-js/one-var",
    ]);
    expect(getBuiltInRulesMeta).toHaveBeenCalledTimes(1);
    expect(getJsRulesMeta).toHaveBeenCalledTimes(1);
  });

  it("returns an empty list when both providers are empty", () => {
    vi.mocked(getBuiltInRulesMeta).mockReturnValue([]);
    vi.mocked(getJsRulesMeta).mockReturnValue([]);

    expect(getRulesMeta()).toStrictEqual([]);
  });
});
