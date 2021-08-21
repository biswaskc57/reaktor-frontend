function parseSubChapters(data) {
  const regexChapters = /^\r\n(\d+)\.\s(.*)\r\n$/gm;
  var matches = [];
  var match = regexChapters.exec(data);
  while (match != null) {
    matches.push({ number: match[1], text: match[2] });
    match = regexChapters.exec(data);
  }
  return matches;
}

export { parseSubChapters };
