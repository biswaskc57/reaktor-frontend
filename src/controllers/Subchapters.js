function parseSubChapters(data) {
  const regexChapters = /^\r\n(\d+)\.\s(.*)\r\n$/gm;
  var subChapters = [];
  var subChapter = regexChapters.exec(data);
  while (subChapter != null) {
    subChapters.push({ number: subChapter[1], text: subChapter[2] });
    subChapter = regexChapters.exec(data);
  }
  return subChapters;
}

export { parseSubChapters };
