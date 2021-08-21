//Parsing
function parseRules(data) {
  const regexRules = /^((\d+\.\d+[\w]?[.]?)\s(.*))/gm;
  var rules = [];
  var rule = regexRules.exec(data);
  console.log(rule);
  while (rule != null) {
    rules.push({ id: rule[1], desc: rule[2] });
    rule = regexRules.exec(data);
  }
  console.log(rules);
  return rules;
}

export { parseRules };
