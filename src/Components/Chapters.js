import { Table, TableCell, TableRow } from "@material-ui/core";
import React from "react";
import { useState } from "react";

export default function Chapters({ chapter }) {
  const chapterList = chapter;
  console.log(chapterList);

  if (chapterList === undefined) return <div>"aa"</div>;
  else
    return (
      <div>
        <Table>
          {chapterList.map((chapters) => (
            <TableRow>
              <TableCell>
                {chapters.id}. {chapters.desc}
              </TableCell>
            </TableRow>
          ))}
        </Table>
      </div>
    );
}
