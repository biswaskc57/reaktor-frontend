import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import { Table, TableCell, TableRow, Button } from "@material-ui/core";
import Contents from "./Components/Contents";

import { parseRules } from "./controllers/Rules";
import { parseChapters } from "./controllers/Chapters";
import { parseContents } from "./controllers/Contents";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

function App() {
  const [open, setOpen] = React.useState(false);
  const [contents, setContents] = useState([]);
  const [chapters, setChapters] = useState([]);
  const [rules, setRules] = useState([]);
  const [search, setSearch] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSearch("");
  };

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const url =
    "https://whispering-gorge-99066.herokuapp.com/https://media.wizards.com/2021/downloads/MagicCompRules%2020210419.txt";

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

  function searchHandler() {
    handleClickOpen();
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
          <input type="text" onChange={(e) => handleInputChange(e)}></input>
          <button class="searchButton" onClick={() => searchHandler()}>
            Search
          </button>

          <div>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="responsive-dialog-title"
            >
              <DialogTitle id="responsive-dialog-title">
                {'Search results for "' + search + '": '}
              </DialogTitle>
              <DialogContent>
                <DialogContentText>
                  {search !== "" ? (
                    <Table>
                      {rules
                        .filter((rule) =>
                          rule.desc.toLowerCase().includes(search)
                        )
                        .map((filteredrules) => (
                          <div>
                            <TableRow>
                              {filteredrules.length === 0 ? (
                                <TableCell>
                                  <strong>
                                    No results found with keyword {search}
                                  </strong>
                                </TableCell>
                              ) : (
                                <TableCell>
                                  <strong>{filteredrules.id}</strong> " "{" "}
                                  {filteredrules.desc}
                                </TableCell>
                              )}
                            </TableRow>
                          </div>
                        ))}
                    </Table>
                  ) : (
                    <Table>
                      <div>
                        <TableRow>
                          <TableCell>
                            <p>No results found!</p>
                          </TableCell>
                        </TableRow>
                      </div>
                    </Table>
                  )}
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button autoFocus onClick={handleClose} color="primary">
                  Close
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </div>
      </div>

      <h2>Table of Content:</h2>

      <Table>
        {contents.map((title) => (
          <div className="table-row">
            <TableCell class="table-cell" key={title.id}>
              <div class="contents">
                <Contents
                  contents={contents}
                  chapters={chapters}
                  title={title}
                  rules={rules}
                />
              </div>
            </TableCell>
          </div>
        ))}
      </Table>
    </div>
  );
}

export default App;
