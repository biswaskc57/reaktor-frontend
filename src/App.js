import React from "react";
import { useState, useEffect } from "react";
import "./App.css";

import Chapters from "./Components/Chapters";
import Contents from "./Components/Contents";
import { parseRules } from "./controllers/Rules";
import { parseSubRules } from "./controllers/Subrules";
import { parseChapters } from "./controllers/Chapters";
import { parseContents } from "./controllers/Contents";

function App() {
  const [contents, setContents] = useState([]);
  const [chapters, setChapters] = useState([]);
  const [rules, setRules] = useState([]);
  const [subRules, setSubRules] = useState([]);

  const url =
    "https://cors-anywhere.herokuapp.com/https://media.wizards.com/2021/downloads/MagicCompRules%2020210419.txt";

  async function getText(url) {
    const textData = (await fetch(url)).text();
    return textData;
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await getText(url);

      setRules(parseRules(data));
      setContents(parseContents(data));
      setChapters(parseChapters(data));
      setSubRules(parseSubRules(data));
    };

    fetchData();
  }, []);
  console.log(rules);
  console.log(subRules);
  console.log(contents);
  console.log(chapters);

  /*if (on === true) {
    const subChaptersTest = subChapters.filter(
      (rule) => rule.id.slice(0, 1)[0] === chapters[0].id
    );
    console.log(subChaptersTest);
    console.log(rules[0].id.split(0, 1)[0]);
    console.log(chapters[0].id);
  }*/

  return (
    <div>
      <Contents contents={contents} chapters={chapters} />
      <h1>Hello world</h1>
    </div>
  );
}

export default App;
