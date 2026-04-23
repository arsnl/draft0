import { describe, expect, it } from "vitest";
import { COMPATIBLE_RULES, getCompatibleRules } from "./get-compatible-rules.ts";

describe(getCompatibleRules, () => {
  it("copies matching source rule configs to compatible rule names", () => {
    const compatibleRules = getCompatibleRules({
      sourceRules: {
        "jest/no-alias-methods": ["error"],
        "jest/no-focused-tests": ["warn"],
      },
      compatiblePlugin: "vitest",
    });

    expect(compatibleRules).toStrictEqual({
      "vitest/no-alias-methods": ["error"],
      "vitest/no-focused-tests": ["warn"],
    });
  });

  it("ignores mappings for missing source rules", () => {
    const compatibleRules = getCompatibleRules({
      sourceRules: {
        "jest/no-alias-methods": ["error"],
      },
      compatiblePlugin: "vitest",
    });

    expect(compatibleRules).toStrictEqual({
      "vitest/no-alias-methods": ["error"],
    });
  });

  it("returns an empty object when no mapping matches the plugin prefix", () => {
    const compatibleRules = getCompatibleRules({
      sourceRules: {
        "jest/no-alias-methods": ["error"],
      },
      compatiblePlugin: "react",
    });

    expect(compatibleRules).toStrictEqual({});
  });

  it("exposes stable compatible mappings used by presets", () => {
    expect(COMPATIBLE_RULES["vitest/no-alias-methods"]).toBe("jest/no-alias-methods");
    expect(COMPATIBLE_RULES["vitest/valid-expect"]).toBe("jest/valid-expect");
  });
});
