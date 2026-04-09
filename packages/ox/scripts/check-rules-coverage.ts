import { getBuiltInRules } from "../src/lint/utils/get-built-in-rules.ts";
import { getCompatibleRules } from "../src/lint/utils/get-compatible-rules.ts";
import { getJsRules } from "../src/lint/utils/get-js-rules.ts";
import { getUsedRuleNames } from "../src/lint/utils/get-used-rule-names.ts";

console.log(JSON.stringify([...getUsedRuleNames()], null, 2));

// TODO: getJsRules - add "used" property to the rules
// TODO: getBuiltInRules - add compatibles rules
// TODO: getBuiltInRules - add "used" property to the rules
