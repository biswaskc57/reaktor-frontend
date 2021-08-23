import React, { useState } from "react";

const Contents = ({ contents, chapters }) => {
  const [chapterTest, setChapterTest] = useState([]);

  const content = contents;
  console.log(content);

  function ruleHandler(id) {
    setChapterTest(
      chapters.filter((chapter) => chapter.id.slice(0, 1)[0] === id)
    );
    console.log(chapterTest);

    console.log(id);
  }
  console.log(chapterTest);
  return (
    <div>
      <ol>
        {contents.map((title) => (
          <li>
            {title.desc}{" "}
            <button onClick={() => ruleHandler(title.id)}>show rules</button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Contents;
