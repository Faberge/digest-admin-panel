import React, { useState } from "react";
//import ImageUpload from './ImageUpload';
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import NewsForm from "./NewsForm";
import useTable from "./UseTable";
import { TableBody, TableRow, TableCell } from "@material-ui/core";
import * as inputService from "../services/inputService";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(1),
    padding: theme.spacing(3),
  },
}));

const headCells = [
  { id: "created_dt", label: "Дата публикации" },
  { id: "title", label: "Заголовок" },
  { id: "title_annotation", label: "Аннотация" },
  { id: "content", label: "Контент" },
];

function NewsList() {
  const classes = useStyles();

  const [records, setRecords] = useState(inputService.getAllNews());

  const { TblContainer, TblHeader } = useTable(records, headCells);

  return (
    <Paper className={classes.pageContent}>
      <NewsForm />
      <TblContainer>
        <TblHeader />
        <TableBody>
          {records.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.created_dt}</TableCell>
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.title_annotation}</TableCell>
              <TableCell>{item.content}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TblContainer>
    </Paper>
  );
}

export default NewsList;
