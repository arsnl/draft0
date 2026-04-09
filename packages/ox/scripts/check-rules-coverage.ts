import { getBuiltInRulesMeta } from "../src/lint/utils/get-built-in-rules-meta.ts";
import { getCompatibleRules } from "../src/lint/utils/get-compatible-rules.ts";
import { getJsRulesMeta } from "../src/lint/utils/get-js-rules-meta.ts";
import { getUsedRuleNames } from "../src/lint/utils/get-used-rule-names.ts";

console.log(JSON.stringify([...getBuiltInRulesMeta()], null, 2));

// TODO: getJsRules - add "used" property to the rules
// TODO: getBuiltInRules - add compatibles rules
// TODO: getBuiltInRules - add "used" property to the rules
