function parseChapters(data) {
  const regexChapters = /^\r\n(\d[0-9]+)\.\s(.*)\r\n$/gm;
  var chapters = [];
  var chapter = regexChapters.exec(data);
  console.log(chapter);
  while (chapter != null) {
    chapters.push({ id: chapter[1], desc: chapter[2] });
    chapter = regexChapters.exec(data);
  }
  return chapters;
}

export { parseChapters };
