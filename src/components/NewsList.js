import React from "react";
//import ImageUpload from './ImageUpload';
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import CreateNewsForm from "./CreateNewsForm";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(1),
    padding: theme.spacing(3),
  },
}));

function NewsList() {
  const classes = useStyles();

  return (
    <Paper className={classes.pageContent}>
      <CreateNewsForm />
    </Paper>
  );
}

export default NewsList;
