import React from "react";
import { Table, TableHead, TableRow, TableCell } from "@material-ui/core";

function UseTable(records, headCells) {
  const TblContainer = (props) => <Table>{props.children}</Table>;

  const TblHeader = (props) => {
    return (
      <TableHead>
        <TableRow>
          {headCells.map((headCell) => (
            <TableCell key={headCell.id}>{headCell.label}</TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  };

  return { TblContainer, TblHeader };
}

export default UseTable;
