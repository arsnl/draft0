// oxlint-disable no-console
import { execSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { env } from "node:process";

type ChangesetConfig = {
  changelog?: unknown;
  ignore?: string[];
  [key: string]: unknown;
};

const selectablePackages = [
  "@draft0/oxlint",
  "@draft0/oxfmt",
  "@draft0/tsdown",
  "@draft0/tsconfig",
] as const;

const selectedPackages = new Set(
  [
    env.INPUT_OXLINT === "true" ? "@draft0/oxlint" : "",
    env.INPUT_OXFMT === "true" ? "@draft0/oxfmt" : "",
    env.INPUT_TSDOWN === "true" ? "@draft0/tsdown" : "",
    env.INPUT_TSCONFIG === "true" ? "@draft0/tsconfig" : "",
  ].filter((pkg): pkg is string => pkg.length > 0),
);

if (selectedPackages.size < 1) {
  console.error("Select at least one package before running snapshot publish.");
  process.exit(1);
}

const configPath = ".changeset/config.json";
const parsedConfig = JSON.parse(readFileSync(configPath, "utf8")) as ChangesetConfig;
const unselectedPackages = selectablePackages.filter((pkg) => !selectedPackages.has(pkg));

parsedConfig.changelog = false;
writeFileSync(configPath, `${JSON.stringify(parsedConfig, null, 2)}\n`, "utf8");

const shortSha = execSync("git rev-parse --short=7 HEAD", { encoding: "utf8" }).trim();
execSync(`npx changeset version --snapshot next.${shortSha}`, { stdio: "inherit" });

unselectedPackages.forEach((pkg) => {
  const packageDir = pkg.replace("@draft0/", "");
  const packageJsonPath = path.join("packages", packageDir, "package.json");
  const packageJson = JSON.parse(readFileSync(packageJsonPath, "utf8")) as { private?: boolean };
  packageJson.private = true;
  writeFileSync(packageJsonPath, `${JSON.stringify(packageJson, null, 2)}\n`, "utf8");
});
