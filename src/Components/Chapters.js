import { Table, TableCell, TableRow } from "@material-ui/core";
import React from "react";
import Rules from "./Rules";

export default function Chapters({ chapter, rules }) {
  const chapterList = chapter;

  if (chapterList === undefined) return <div></div>;
  else
    return (
      <div>
        <Table>
          {chapterList.map((chapters) => (
            <TableRow>
              <TableCell>
                <Rules id={chapters.id} desc={chapters.desc} rules={rules} />
              </TableCell>
            </TableRow>
          ))}
        </Table>
      </div>
    );
}
