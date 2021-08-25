import { Button } from "@material-ui/core";
import React, { useState } from "react";
import Chapters from "./Chapters";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import "../App.css";
const Contents = ({ chapters, title, rules }) => {
  const [chapterTest, setChapterTest] = useState([]);

  const [loginVisible, setLoginVisible] = useState(false);
  const hideWhenVisible = { display: loginVisible ? "none" : "" };
  const showWhenVisible = { display: loginVisible ? "" : "none" };

  function chapterHandler(id) {
    setChapterTest(
      chapters.filter((chapter) => chapter.id.slice(0, 1)[0] === id)
    );
    setLoginVisible(!loginVisible);
  }

  const hideVisible = () => {
    return (
      <div style={hideWhenVisible} className="defaultBlog">
        <strong>
          <p>
            <Button onClick={() => chapterHandler(title.id)}>
              <strong>
                {title.id}
                {". "}
                {title.desc}
              </strong>
              <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
            </Button>
          </p>
        </strong>
      </div>
    );
  };

  const showVisible = () => {
    return (
      <div style={showWhenVisible}>
        <div class="chapter">
          <span>
            {" "}
            <Button onClick={() => chapterHandler(title.id)}>
              <strong>
                {title.id}
                {". "}
                {title.desc}
              </strong>
              <KeyboardArrowUpIcon></KeyboardArrowUpIcon>
            </Button>
          </span>
        </div>
        <Chapters chapter={chapterTest} rules={rules} />
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
