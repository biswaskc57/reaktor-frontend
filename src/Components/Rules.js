import { Table, TableCell, TableRow, Button } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
export default function Rules({ id, desc, rules }) {
  const [rule, setRules] = useState([]);
  const [loginVisible, setLoginVisible] = useState(false);
  const hideWhenVisible = { display: loginVisible ? "none" : "" };
  const showWhenVisible = { display: loginVisible ? "" : "none" };
  const ID = id;
  const allRules = rules;
  console.log(allRules);

  function ruleHandler(id) {
    setRules(allRules.filter((chapter) => chapter.id.slice(0, 3) === ID));
    setLoginVisible(!loginVisible);
  }
  console.log(rule);
  console.log(ID);
  console.log(allRules[100].id.slice(0, 3));
  return (
    <div>
      {id}.{desc}
      {rule.map((rule) => (
        <p>
          {rule.id} {rule.desc}
        </p>
      ))}
      <button onClick={() => ruleHandler(id)}>Show</button>
    </div>
  );
}
