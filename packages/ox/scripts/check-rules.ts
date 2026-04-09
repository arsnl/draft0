// oxlint-disable no-console
import { getRulesMeta } from "../src/lint/utils/get-rules-meta.ts";
import { getUsedRuleNames } from "../src/lint/utils/get-used-rule-names.ts";

const rulesMeta = getRulesMeta();
const usedRuleNames = getUsedRuleNames();
const unusedRules = rulesMeta.filter((rule) => !rule.isUsed);
const unknownRules = [...usedRuleNames.difference(new Set(rulesMeta.map(({ name }) => name)))];
const fail = Boolean(unusedRules.length || unknownRules.length);
const supportColors = process.stdout.getColorDepth() > 2;
const boldRed = (str: string) => (supportColors ? `\u001B[1;31m${str}\u001B[0m` : str);

if (unusedRules.length) {
  // change for bold and red color
  console.log(boldRed("Unused rules:"));
  unusedRules.forEach((rule) => {
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

console.log(`Found ${unusedRules.length} unused and ${unknownRules.length} unknown rules.`);

process.exit(fail ? 1 : 0);
