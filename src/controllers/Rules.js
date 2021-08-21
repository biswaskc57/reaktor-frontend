//Parsing
function parseRules(data) {
  const regexRules = /^((\d+\.\d+[\w]?[.]?)\s(.*))/gm;
  var matches = [];
  var match = regexRules.exec(data);
  console.log(match);
  while (match != null) {
    matches.push({ number: match[1], text: match[2] });
    match = regexRules.exec(data);
  }
  console.log(matches);
  return matches;
}

export { parseRules };
