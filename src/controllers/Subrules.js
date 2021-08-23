function parseSubRules(data) {
  const regexRules = /\n((\d{3}\.\d+)+[a-z])(.*)/g;
  var subRules = [];
  var subRule = regexRules.exec(data);
  console.log(subRule);
  while (subRule != null) {
    subRules.push({ id: subRule[2], desc: subRule[3] });
    subRule = regexRules.exec(data);
  }
  console.log(subRules);
  return subRules;
}
export { parseSubRules };
