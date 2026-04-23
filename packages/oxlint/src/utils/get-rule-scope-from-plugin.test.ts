import { describe, expect, it } from "vitest";
import { getRuleScopeFromPlugin } from "./get-rule-scope-from-plugin.ts";

describe(getRuleScopeFromPlugin, () => {
  it("converts kebab-case plugin names to snake_case scopes", () => {
    expect(getRuleScopeFromPlugin("eslint-js")).toBe("eslint_js");
    expect(getRuleScopeFromPlugin("react-perf")).toBe("react_perf");
  });

  it("returns unchanged value when plugin has no hyphen", () => {
    expect(getRuleScopeFromPlugin("react")).toBe("react");
  });
});
