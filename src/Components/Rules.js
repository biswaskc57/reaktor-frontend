import React from "react";
import { useState } from "react";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { Button } from "@material-ui/core";
import RuleList from "./RuleList";
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

  const hideVisible = () => {
    return (
      <div style={hideWhenVisible}>
        <Button onClick={() => ruleHandler(id)}>
          {id}.{desc}
          <KeyboardArrowDownIcon
            style={{ color: "red" }}
          ></KeyboardArrowDownIcon>
        </Button>
      </div>
    );
  };

  const showVisible = () => {
    return (
      <div style={showWhenVisible}>
        <Button onClick={() => ruleHandler(id)}>
          {id}.{desc}
          <KeyboardArrowUpIcon style={{ color: "red" }}></KeyboardArrowUpIcon>
        </Button>
        {rule.map((rule) => (
          <RuleList rule={rule} />
        ))}
      </div>
    );
  };

  return (
    <div>
      {hideVisible()}
      {showVisible()}
    </div>
  );
}
