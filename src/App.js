import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import { Table, TableCell, TableRow } from "@material-ui/core";
import Contents from "./Components/Contents";
import { parseRules } from "./controllers/Rules";
import { parseChapters } from "./controllers/Chapters";
import { parseContents } from "./controllers/Contents";

function App() {
  const [contents, setContents] = useState([]);
  const [chapters, setChapters] = useState([]);
  const [rules, setRules] = useState([]);
  const [search, setSearch] = useState("");

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
      <div class="wrap">
        <div class="search">
          <input
            type="text"
            class="searchTerm"
            placeholder="Search not working atm"
            value={search}
          ></input>
          <button type="submit" class="searchButton">
            Search
          </button>
        </div>
      </div>

      <h2>Table of Content:</h2>

      <Table>
        {contents.map((title) => (
          <div class="table-row">
            <TableRow>
              <TableCell>
                <div class="contents">
                  <Contents
                    contents={contents}
                    chapters={chapters}
                    title={title}
                    rules={rules}
                  />
                </div>
              </TableCell>
            </TableRow>
          </div>
        ))}
      </Table>
    </div>
  );
}

export default App;
