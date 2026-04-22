import type { OxlintPlugin, OxlintRuleMeta } from "../common.ts";
import { spawnSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { COMPATIBLE_RULES, getPluginFromRuleScope, getRuleScopeFromPlugin } from "../common.ts";
import { getReferencedRuleNames } from "./get-referenced-rule-names.ts";

// `oxlint --rules --format json` is not a documented public contract and can drift across
// versions. If `isOxlintCliRuleMeta` starts rejecting entries, update both shapes together.
type OxlintCliRuleMeta = Omit<
  OxlintRuleMeta,
  "plugin" | "name" | "builtIn" | "compatible" | "referenced"
>;

const isOxlintCliRuleMeta = (rule: unknown): rule is OxlintCliRuleMeta =>
  typeof rule === "object" &&
  rule !== null &&
  "scope" in rule &&
  "value" in rule &&
  "category" in rule &&
  "type_aware" in rule &&
  "fix" in rule &&
  "default" in rule &&
  "docs_url" in rule;

const resolveOxlintBin = (): string => {
  let pkgPath: string;
  try {
    pkgPath = fileURLToPath(import.meta.resolve("oxlint/package.json"));
  } catch (error) {
    throw new Error(
      "Could not resolve `oxlint`. Install it as a peer dependency of `@draft0/oxlint`.",
      { cause: error },
    );
  }

  const pkg = JSON.parse(readFileSync(pkgPath, "utf8")) as {
    bin?: Record<string, string> | string;
  };
  const relativeBin = typeof pkg.bin === "string" ? pkg.bin : pkg.bin?.oxlint;

  if (!relativeBin) {
    throw new Error(
      `Could not locate the oxlint executable: ${pkgPath} is missing a \`bin.oxlint\` entry.`,
    );
  }

  return resolve(dirname(pkgPath), relativeBin);
};

/**
 * Get the built-in rules metadata.
 *
 * Built-in rules are rules that are part of the Oxlint core and are not third-party JavaScript
 * plugins.
 *
 * @returns The built-in rules metadata.
 */
export const getBuiltInRulesMeta = (): OxlintRuleMeta[] => {
  const referencedRuleNames = getReferencedRuleNames();
  const oxlintBin = resolveOxlintBin();

  const result = spawnSync(process.execPath, [oxlintBin, "--rules", "--format", "json"], {
    encoding: "utf8",
    maxBuffer: 50 * 1024 * 1024,
  });

  if (result.error) {
    throw new Error(`Failed to spawn oxlint (${oxlintBin}).`, { cause: result.error });
  }

  if (result.status !== 0) {
    const detail = result.stderr.trim();
    throw new Error(
      `\`oxlint --rules --format json\` exited with status ${
        result.status ?? "unknown"
      }${detail ? `:\n${detail}` : "."}`,
    );
  }

  let parsed: unknown;
  try {
    parsed = JSON.parse(result.stdout);
  } catch (error) {
    throw new Error("Failed to parse `oxlint --rules --format json` output as JSON.", {
      cause: error,
    });
  }

  if (!Array.isArray(parsed)) {
    throw new Error("`oxlint --rules --format json` output is not an array.");
  }

  const sourceRules = parsed.filter(isOxlintCliRuleMeta).map((rule) => {
    const plugin = getPluginFromRuleScope(rule.scope);
    const name = `${plugin}/${rule.value}`;

    return {
      ...rule,
      plugin,
      name,
      builtIn: true,
      compatible: false,
      referenced: referencedRuleNames.has(name),
    };
  });

  const compatibleRules = Object.entries(COMPATIBLE_RULES).map(
    ([compatibleRuleName, sourceRuleName]) => {
      const sourceRule = sourceRules.find(({ name }) => name === sourceRuleName);
      const [plugin, value] = compatibleRuleName.split("/") as [
        OxlintPlugin | undefined,
        string | undefined,
      ];

      if (!sourceRule) {
        throw new Error(
          `Source rule ${sourceRuleName} not found from Oxlint CLI rules while getting compatible rule ${compatibleRuleName}`,
        );
      }

      if (!plugin || !value) {
        throw new Error(
          `Compatible rule ${compatibleRuleName} name is invalid. Expected format: "plugin/value".`,
        );
      }

      const name = `${plugin}/${value}`;

      return {
        ...sourceRule,
        scope: getRuleScopeFromPlugin(plugin),
        value,
        plugin,
        name,
        builtIn: false,
        compatible: true,
        referenced: referencedRuleNames.has(name),
      } satisfies OxlintRuleMeta;
    },
  );

  return [...sourceRules, ...compatibleRules];
};
