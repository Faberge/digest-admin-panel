import React, { useState } from "react";
//import ImageUpload from './ImageUpload';
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import NewsForm from "./NewsForm";
import useTable from "./UseTable";
import {
  TableBody,
  TableRow,
  TableCell,
  Toolbar,
  InputAdornment,
} from "@material-ui/core";
import * as inputService from "../services/inputService";
import Controls from "./controls/Controls";
import { Search } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(1),
    padding: theme.spacing(3),
  },
  searchInput: {
    width: "75%",
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
  const [filterFunc, setFilterFunc] = useState({
    fn: (items) => {
      return items;
    },
  });

  const {
    TblContainer,
    TblHeader,
    TblPagination,
    recordsAfterPagingAndSorting,
  } = useTable(records, headCells, filterFunc);

  const handleSearch = (e) => {
    let target = e.target;
    setFilterFunc({
      fn: (items) => {
        if (target.value === "") {
          return items;
        } else {
          return items.filter((x) =>
            x.title.toLowerCase().includes(target.value)
          );
        }
      },
    });
  };

  return (
    <Paper className={classes.pageContent}>
      <NewsForm /> {/*Надо убрать в модальное окно */}
      <br />
      <Toolbar>
        <Controls.Input
          label="Поиск по статьям"
          className={classes.searchInput}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
          onChange={handleSearch}
        />
      </Toolbar>
      <TblContainer>
        <TblHeader />
        <TableBody>
          {recordsAfterPagingAndSorting().map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.created_dt}</TableCell>
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.title_annotation}</TableCell>
              <TableCell>{item.content}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TblContainer>
      <TblPagination />
    </Paper>
  );
}

export default NewsList;
