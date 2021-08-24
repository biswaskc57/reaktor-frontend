import React from "react";
import "../App.css";
export default function RuleList({ rule }) {
  return (
    <div class="ruleList">
      <p>
        <strong>{rule.id}</strong> {rule.desc}
      </p>
    </div>
  );
}
