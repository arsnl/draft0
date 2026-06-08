import { spawnSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { getBuiltInRulesMeta } from "./get-built-in-rules-meta.ts";
import { getReferencedRuleNames } from "./get-referenced-rule-names.ts";

type SpawnSyncResult = ReturnType<typeof spawnSync>;

vi.mock(import("node:fs"));
vi.mock(import("node:url"));
vi.mock(import("node:child_process"));
vi.mock(import("./get-referenced-rule-names.ts"));

const OXLINT_PKG_PATH = "/tmp/node_modules/oxlint/package.json";
const DEFAULT_PKG_JSON = { bin: { oxlint: "bin/oxlint.js" } };
const DEFAULT_RULES_JSON =
  '[{"scope":"jest","value":"no-alias-methods","category":"style","type_aware":false,"fix":"none","default":false,"docs_url":"https://example.test/rule"}]';

const spawnResult = (overrides: Partial<SpawnSyncResult> = {}): SpawnSyncResult =>
  ({
    status: 0,
    stdout: DEFAULT_RULES_JSON,
    stderr: "",
    ...overrides,
  }) as SpawnSyncResult;

describe(getBuiltInRulesMeta, () => {
  beforeEach(() => {
    vi.mocked(fileURLToPath).mockReturnValue(OXLINT_PKG_PATH);
    vi.mocked(readFileSync).mockReturnValue(JSON.stringify(DEFAULT_PKG_JSON));
    vi.mocked(spawnSync).mockReturnValue(spawnResult());
    vi.mocked(getReferencedRuleNames).mockReturnValue(new Set<string>());
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it("loads metadata from oxlint cli output", () => {
    const meta = getBuiltInRulesMeta();

    expect(meta.map((rule) => rule.name)).toStrictEqual(["jest/no-alias-methods"]);
    expect(meta.every((rule) => rule.builtIn)).toBe(true);
    expect(meta.every((rule) => !rule.compatible)).toBe(true);
    expect(meta.every((rule) => !rule.referenced)).toBe(true);
  });

  it("marks built-in rules as referenced when presets include them", () => {
    vi.mocked(getReferencedRuleNames).mockReturnValue(new Set(["jest/no-alias-methods"]));

    const meta = getBuiltInRulesMeta();
    const noAliasMethods = meta.find((rule) => rule.name === "jest/no-alias-methods");

    expect(noAliasMethods?.referenced).toBe(true);
  });

  it("throws when resolving the oxlint package path fails", () => {
    vi.mocked(fileURLToPath).mockImplementation(() => {
      throw new TypeError("bad path");
    });

    expect(() => getBuiltInRulesMeta()).toThrow("Could not resolve `oxlint`.");
  });

  it("throws when package.json does not expose the oxlint binary", () => {
    vi.mocked(readFileSync).mockReturnValue("{}");

    expect(() => getBuiltInRulesMeta()).toThrow("missing a `bin.oxlint` entry");
  });

  it("resolves bin when package.json uses a string bin field", () => {
    vi.mocked(readFileSync).mockReturnValue(JSON.stringify({ bin: "bin/oxlint.js" }));

    expect(getBuiltInRulesMeta().map((rule) => rule.name)).toStrictEqual(["jest/no-alias-methods"]);
  });

  it("throws when spawning oxlint fails", () => {
    vi.mocked(spawnSync).mockReturnValue(spawnResult({ error: new Error("spawn crashed") }));

    expect(() => getBuiltInRulesMeta()).toThrow("Failed to spawn oxlint");
  });

  it("throws when the oxlint process exits with non-zero status", () => {
    vi.mocked(spawnSync).mockReturnValue(spawnResult({ status: 2, stderr: "permission denied" }));

    expect(() => getBuiltInRulesMeta()).toThrow("exited with status 2");
  });

  it("includes unknown status when process exits without status code", () => {
    vi.mocked(spawnSync).mockReturnValue(spawnResult({ status: null }));

    expect(() => getBuiltInRulesMeta()).toThrow("exited with status unknown.");
  });

  it("throws when oxlint output is invalid JSON", () => {
    vi.mocked(spawnSync).mockReturnValue(spawnResult({ stdout: "{not-valid-json}" }));

    expect(() => getBuiltInRulesMeta()).toThrow("Failed to parse `oxlint --rules --format json`");
  });

  it("throws when oxlint output is not an array", () => {
    vi.mocked(spawnSync).mockReturnValue(spawnResult({ stdout: '{"ok":true}' }));

    expect(() => getBuiltInRulesMeta()).toThrow("output is not an array");
  });
});
