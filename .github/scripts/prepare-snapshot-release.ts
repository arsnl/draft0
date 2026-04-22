import { execSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { env } from "node:process";

type ChangesetConfig = {
  changelog?: unknown;
  ignore?: string[];
  [key: string]: unknown;
};

type Workspace = {
  name: string;
  location: string;
};

const selectablePackages = [
  { name: "@draft0/oxlint", input: "INPUT_OXLINT" },
  { name: "@draft0/oxfmt", input: "INPUT_OXFMT" },
  { name: "@draft0/tsdown", input: "INPUT_TSDOWN" },
  { name: "@draft0/tsconfig", input: "INPUT_TSCONFIG" },
] as const;

const selectedPackages = new Set(
  selectablePackages.filter(({ input }) => env[input] === "true").map(({ name }) => name),
);

const unselectedPackages = selectablePackages
  .map(({ name }) => name)
  .filter((name) => !selectedPackages.has(name));

const configPath = ".changeset/config.json";
const parsedConfig = JSON.parse(readFileSync(configPath, "utf8")) as ChangesetConfig;

parsedConfig.changelog = false;
writeFileSync(configPath, `${JSON.stringify(parsedConfig, null, 2)}\n`, "utf8");

const shortSha = execSync("git rev-parse --short=7 HEAD", { encoding: "utf8" }).trim();
execSync(`npx changeset version --snapshot next.${shortSha}`, { stdio: "inherit" });

const workspaces = JSON.parse(
  execSync("npm query .workspace", { encoding: "utf8" }),
) as Workspace[];
const locationByPackageName = new Map(workspaces.map(({ name, location }) => [name, location]));

unselectedPackages.forEach((pkgName) => {
  const location = locationByPackageName.get(pkgName);
  if (!location) {
    process.stderr.write(
      `::error title=Invalid snapshot release configuration::Package "${pkgName}" is not a workspace member. Make sure it is listed in the root package.json "workspaces" field.\n`,
    );
    process.exit(1);
  }
  const packageJsonPath = path.join(location, "package.json");
  const packageJson = JSON.parse(readFileSync(packageJsonPath, "utf8")) as { private?: boolean };
  packageJson.private = true;
  writeFileSync(packageJsonPath, `${JSON.stringify(packageJson, null, 2)}\n`, "utf8");
});
