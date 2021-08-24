import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import { Table, TableCell, TableRow } from "@material-ui/core";
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
    <div class="App">
      <div class="Topic">
        <h1>Magic: The Gatherings rule:</h1>
      </div>
      <div class="search">
        <input type="text"></input>
        <button type="submit">Search</button>
      </div>
      <div class="Contents">
        <h2>Table of Content:</h2>

        <Table>
          {contents.map((title) => (
            <TableRow>
              <TableCell>
                <Contents
                  contents={contents}
                  chapters={chapters}
                  title={title}
                  rules={rules}
                />
              </TableCell>
            </TableRow>
          ))}
        </Table>
      </div>
    </div>
  );
}

export default App;
