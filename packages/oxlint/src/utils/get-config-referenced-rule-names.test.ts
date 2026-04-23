import { describe, expect, it } from "vitest";
import { getConfigReferencedRuleNames } from "./get-config-referenced-rule-names.ts";

describe(getConfigReferencedRuleNames, () => {
  it("collects root and override rule names", () => {
    const names = getConfigReferencedRuleNames({
      rules: {
        "eslint/no-console": ["warn"],
        "eslint/no-debugger": ["error"],
      },
      overrides: [
        {
          files: ["*.test.ts"],
          rules: {
            "vitest/no-focused-tests": ["error"],
            "eslint/no-console": ["off"],
          },
        },
        {
          files: ["*.ts"],
        },
      ],
    });

    expect(names).toStrictEqual(
      new Set(["eslint/no-console", "eslint/no-debugger", "vitest/no-focused-tests"]),
    );
  });

  it("returns an empty set for configs without rules", () => {
    expect(getConfigReferencedRuleNames({})).toStrictEqual(new Set());
  });
});
