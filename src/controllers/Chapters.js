function parseChapters(data) {
  const regexChapters = /^\r\n(\d)\.\s(.*)\r\n$/gm;
  var chapters = [];
  var chapter = regexChapters.exec(data);

  while (chapter != null) {
    chapters.push({ id: chapter[1], desc: chapter[2] });
    chapter = regexChapters.exec(data);
  }
  console.log(chapters);

  return chapters;
}

export { parseChapters };
