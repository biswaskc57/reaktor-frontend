import React, { useState } from "react";
import Chapters from "./Chapters";
const Contents = ({ contents, chapters, title }) => {
  const [chapterTest, setChapterTest] = useState([]);
  const chapter = chapters;
  const content = contents;
  const [loginVisible, setLoginVisible] = useState(false);
  const hideWhenVisible = { display: loginVisible ? "none" : "" };
  const showWhenVisible = { display: loginVisible ? "" : "none" };
  console.log(content);

  function ruleHandler(id) {
    setChapterTest(
      chapters.filter((chapter) => chapter.id.slice(0, 1)[0] === id)
    );
    setLoginVisible(!loginVisible);
  }

  const hideVisible = () => {
    return (
      <div style={hideWhenVisible} className="defaultBlog">
        <li>
          {title.desc}{" "}
          <button onClick={() => ruleHandler(title.id)}>show rules</button>
        </li>
      </div>
    );
  };

  const showVisible = () => {
    return (
      <div style={showWhenVisible}>
        <li>
          {title.desc}{" "}
          <button onClick={() => ruleHandler(title.id)}>Show Chapters</button>
          <Chapters chapter={chapterTest} />
        </li>
      </div>
    );
  };

  return (
    <div>
      {hideVisible()}
      {showVisible()}
    </div>
  );
};

export default Contents;
