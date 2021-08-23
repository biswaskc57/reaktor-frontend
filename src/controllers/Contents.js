function parseContents(data) {
  const regexChapters = /^\r\n(\d)\.\s(.*)\r\n$/gm;
  var contents = [];
  var content = regexChapters.exec(data);

  while (content != null) {
    contents.push({ id: content[1], desc: content[2] });
    content = regexChapters.exec(data);
  }
  console.log(contents);

  return contents;
}

export { parseContents };
