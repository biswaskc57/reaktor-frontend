import React from "react";

export default function RuleList({ rule }) {
  return (
    <div>
      <p>
        <strong>{rule.id}</strong> {rule.desc}
      </p>
    </div>
  );
}
