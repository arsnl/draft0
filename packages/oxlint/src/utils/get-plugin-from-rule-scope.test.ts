import { describe, expect, it } from "vitest";
import { getPluginFromRuleScope } from "./get-plugin-from-rule-scope.ts";

describe(getPluginFromRuleScope, () => {
  it("converts snake_case plugin scopes to kebab-case names", () => {
    expect(getPluginFromRuleScope("eslint_js")).toBe("eslint-js");
    expect(getPluginFromRuleScope("react_perf")).toBe("react-perf");
  });

  it("returns unchanged value when scope has no underscore", () => {
    expect(getPluginFromRuleScope("react")).toBe("react");
  });
});
