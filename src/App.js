import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Rules from "./Components/Rules";
import { parseRules } from "./controllers/Rules";
import { parseSubRules } from "./controllers/Subrules";
import { parseSubChapters } from "./controllers/Subchapters";
import { parseChapters } from "./controllers/Chapters";

function App() {
  const [chapters, setChapters] = useState([]);
  const [subChapters, setSubChapters] = useState([]);
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
      setChapters(parseChapters(data));
      setSubChapters(parseSubChapters(data));
      setSubRules(parseSubRules(data));
    };

    fetchData();
  }, []);

  console.log(rules);
  console.log(subRules);
  console.log(chapters);
  console.log(subChapters);

  function ruleHandler(id) {
    const subChaptersTest = subChapters.filter(
      (chapter) => chapter.id.slice(0, 1)[0] === id
    );
    console.log(subChaptersTest);

    console.log(id);
  }

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
      <ol>
        {chapters.map((chapter) => (
          <li>
            {chapter.desc}{" "}
            <button onClick={() => ruleHandler(chapter.id)}>show rules</button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default App;
