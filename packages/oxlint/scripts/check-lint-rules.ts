// oxlint-disable no-console
import { getReferencedRuleNames } from "../src/utils/get-referenced-rule-names.ts";
import { getRulesMeta } from "../src/utils/get-rules-meta.ts";

const rulesMeta = getRulesMeta();
const referencedRuleNames = getReferencedRuleNames();
const unreferencedRules = rulesMeta.filter((rule) => !rule.referenced);
const unknownRules = [
  ...referencedRuleNames.difference(new Set(rulesMeta.map(({ name }) => name))),
];
const fail = Boolean(unreferencedRules.length || unknownRules.length);
const supportColors = process.stdout.getColorDepth() > 2;
const boldRed = (str: string) => (supportColors ? `\u001B[1;31m${str}\u001B[0m` : str);

if (unreferencedRules.length) {
  console.log(boldRed("Unreferenced rules:"));
  unreferencedRules.forEach((rule) => {
    console.log(` - ${rule.name}`);
  });
  console.log();
}

if (unknownRules.length) {
  console.log(boldRed("Unknown rules:"));
  unknownRules.forEach((rule) => {
    console.log(` - ${rule}`);
  });
  console.log();
}

console.log(
  `Found ${unreferencedRules.length} unreferenced and ${unknownRules.length} unknown rules.`,
);

process.exit(fail ? 1 : 0);
