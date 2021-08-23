function parseSubChapters(data) {
  const regexChapters = /^\r\n(\d[0-9]+)\.\s(.*)\r\n$/gm;
  var subChapters = [];
  var subChapter = regexChapters.exec(data);
  console.log(subChapter);
  while (subChapter != null) {
    subChapters.push({ id: subChapter[1], desc: subChapter[2] });
    subChapter = regexChapters.exec(data);
  }
  return subChapters;
}

export { parseSubChapters };
