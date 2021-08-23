import React from "react";
import { useState } from "react";
export default function Chapters({ chapter }) {
  const [show, setshow] = useState(false);
  const chapterList = chapter;
  console.log(chapterList);

  if (chapterList === undefined) return <div>"aa"</div>;
  else
    return (
      <div>
        <ul>
          {chapterList.map((rules) => (
            <li>
              {rules.id}. {rules.desc}
            </li>
          ))}
        </ul>
      </div>
    );
}
