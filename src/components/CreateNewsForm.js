import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { useForm, Form } from "./useForm";
import Controls from "./controls/Controls";
import * as inputService from "../services/inputService";

const useStyles = makeStyles((theme) => ({
  paper: {
    alignItems: "stretch",
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const initialFieldValues = {
  id: 0,
  title: "",
  title_annotation: "",
  image_preview: "",
  hashtag_list: "",
  content: "",
  title_color: "Blue",
  font: "",
  published: true,
  created_dt: new Date(),
};

//Валидация формы
export default function CreateNewsForm() {
  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("title" in fieldValues) {
      temp.title = fieldValues.title ? "" : "Введите заголовок статьи!";
    }
    if ("title_annotation" in fieldValues) {
      temp.title_annotation = fieldValues.title_annotation
        ? ""
        : "Введите аннотацию!";
    }
    if ("image_preview" in fieldValues) {
      temp.image_preview = fieldValues.image_preview
        ? ""
        : "Добавьте изображение!";
    }
    if ("content" in fieldValues) {
      temp.content = fieldValues.content ? "" : "А где сама статья?";
    }
    if ("font" in fieldValues) {
      temp.font = fieldValues.font.length !== 0 ? "" : "Шрифт не указан!";
    }
    setErrors({
      ...temp,
    });
    if (fieldValues === values) {
      return Object.values(temp).every((x) => x === "");
    }
  };

  const classes = useStyles();

  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm,
  } = useForm(initialFieldValues, true, validate);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      inputService.insertNews(values);
      resetForm();
      window.alert("Статья опубликована на сервер!");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid container item xs={9}>
          <Grid item xs={7}>
            <Controls.Input
              label="Заголовок"
              name="title"
              value={values.title}
              onChange={handleInputChange}
              error={errors.title}
            />
            <Controls.Input
              variant="outlined"
              label="Аннотация"
              name="title_annotation"
              value={values.title_annotation}
              onChange={handleInputChange}
              error={errors.title_annotation}
            />
          </Grid>
          <Grid item xs={3}>
            <Controls.Select
              name="font"
              label="Шрифт"
              value={values.font}
              onChange={handleInputChange}
              options={inputService.getFontCollection()}
              error={errors.font}
            />
            <Controls.Select
              name="title_color"
              label="Цвет заголовка"
              value={values.title_color}
              onChange={handleInputChange}
              options={inputService.getColorCollection()}
            />
          </Grid>
          <Grid item xs={6}>
            <Controls.Input
              label="Картинка превью"
              name="image_preview"
              value={values.image_preview}
              onChange={handleInputChange}
              error={errors.image_preview}
            />
          </Grid>
          <Grid item xs={6}>
            <Controls.DatePicker
              label="Дата"
              name="created_dt"
              value={values.created_dt}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={12}>
            <Controls.Input
              label="Контент"
              name="content"
              value={values.content}
              onChange={handleInputChange}
              error={errors.content}
            />
          </Grid>
        </Grid>
        <Grid container item xs={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>Место под макет телефона</Paper>
          </Grid>
        </Grid>

        <Controls.Button
          type="submit"
          color="primary"
          size="medium"
          text="Создать"
        />

        <Controls.Button
          color="default"
          size="medium"
          text="Сброс"
          onClick={resetForm}
        />
      </Grid>
    </Form>
  );
}
