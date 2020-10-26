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
import AddIcon from "@material-ui/icons/Add";
import * as inputService from "../services/inputService";
import Controls from "./controls/Controls";
import { Search } from "@material-ui/icons";
import PopUp from "./PopUp";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(1),
    padding: theme.spacing(3),
  },
  searchInput: {
    width: "75%",
  },
  addButton: {
    position: "absolute",
    right: "10px",
  },
}));

const headCells = [
  { id: "created_dt", label: "Опубликовано" },
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
  const [openPopUp, setOpenPopUp] = useState(false);

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

  const addOrEdit = (newsItem, resetForm) => {
    inputService.insertNews(newsItem);
    resetForm();
    setOpenPopUp(false);
    setRecords(inputService.getAllNews());
  };

  return (
    <>
      <Paper className={classes.pageContent}>
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
          <Controls.Button
            className={classes.addButton}
            text="Добавить статью"
            variant="outlined"
            startIcon={<AddIcon />}
            onClick={() => setOpenPopUp(true)}
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
      <PopUp
        title="Новая статья"
        openPopUp={openPopUp}
        setOpenPopUp={setOpenPopUp}
      >
        <NewsForm addOrEdit={addOrEdit} />
      </PopUp>
    </>
  );
}

export default NewsList;
