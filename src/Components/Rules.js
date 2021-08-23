import { Table, TableCell, TableRow } from "@material-ui/core";
import React from "react";
import { useState } from "react";

export default function Rules({ chapter }) {
  const [show, setshow] = useState(false);
  const chapterList = chapter;
  console.log(chapterList);

  if (chapterList === undefined) return <div>"aa"</div>;
  else
    return (
      <div>
        <Table>
          {chapterList.map((rules) => (
            <TableRow>
              <TableCell>
                {rules.id}. {rules.desc}
              </TableCell>
            </TableRow>
          ))}
        </Table>
      </div>
    );
}
