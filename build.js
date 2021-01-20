const fs = require("fs");
const rules = require("./src/eslint-rule-hints");

const RULES_PLACEHOLDER = new RegExp(/INSERT_RULES/g);

/** @type {string} */
const snippets = fs.readFileSync("./src/snippets.json", "utf8");

fs.writeFileSync(
  "./snippets/snippets.json",
  snippets.replace(RULES_PLACEHOLDER, rules.join(","))
);
