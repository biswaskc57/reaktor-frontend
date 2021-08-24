import React from "react";
import { useState, useEffect } from "react";
import "./App.css";

import Contents from "./Components/Contents";
import { parseRules } from "./controllers/Rules";
import { parseSubRules } from "./controllers/Subrules";
import { parseChapters } from "./controllers/Chapters";
import { parseContents } from "./controllers/Contents";

function App() {
  const [contents, setContents] = useState([]);
  const [chapters, setChapters] = useState([]);
  const [rules, setRules] = useState([]);

  const url =
    "https://cors-anywhere.herokuapp.com/https://media.wizards.com/2021/downloads/MagicCompRules%2020210419.txt";

  async function getText(url) {
    const textData = (
      await fetch(url, {
        headers: {
          "Content-Type": "text/plain",
        },
      })
    ).text();
    return textData;
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await getText(url);

      setRules(parseRules(data));
      setContents(parseContents(data));
      setChapters(parseChapters(data));
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Table of Content:</h1>
      <ol>
        {contents.map((title) => (
          <Contents
            contents={contents}
            chapters={chapters}
            title={title}
            rules={rules}
          />
        ))}
      </ol>
    </div>
  );
}

export default App;
