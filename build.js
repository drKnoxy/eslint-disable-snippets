const fs = require("fs");
const rules = require("./src/eslint-rule-hints");

const RULES_PLACEHOLDER = "INSERT_RULES";

/** @type {string} */
const snippets = fs.readFileSync("./src/snippets.json", "utf8");

fs.writeFileSync(
  "./snippets/snippets.json",
  snippets.replace(RULES_PLACEHOLDER, rules.join(","))
);
