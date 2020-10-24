import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { useForm, Form } from './useForm';
import Controls from './controls/Controls';
import * as inputService from '../services/inputService';

const useStyles = makeStyles((theme) => ({

   paper: {
     alignItems: 'stretch',
     textAlign: 'center',
     color: theme.palette.text.secondary,
   },
 }));

const initialFieldValues ={
   id: 0,
   title: '',
   title_annotation: '',
   image_preview: 'https://comss.pics/image/gXuZz',
   hashtag_list: '',
   content: '',
   title_color: 'Blue',
   font: 'San-Francisco',
   published: true,
   created_dt: new Date()
}

export default function CreateNewsForm() {

   const classes = useStyles();

   const {
      values,
      setValues,
      handleInputChange
   } = useForm(initialFieldValues);

   
   return (
         <Form>
            <Grid container>
               <Grid container item xs={9}>
                  <Grid item xs={7}>
                     <Controls.Input 
                        label='Заголовок'
                        name='title'
                        value={values.title}
                        onChange={handleInputChange}
                     />
                     <Controls.Input
                        variant='outlined'
                        label='Аннотация'
                        name='title_annotation'
                        value={values.title_annotation}
                        onChange={handleInputChange}
                     />
                  </Grid>
                  <Grid item xs={3}>
                     <Controls.Select 
                        name='font'
                        label='Шрифт'
                        value={values.font}
                        onChange={handleInputChange}
                        options={inputService.getFontCollection()}
                     />
                     <Controls.Select 
                        name='title_color'
                        label='Цвет заголовка'
                        value={values.title_color}
                        onChange={handleInputChange}
                        options={inputService.getColorCollection()}
                     />
                  </Grid>
                  <Grid item xs={12}>
                     <Controls.Input 
                        label='Картинка превью'
                        name='content'
                        value={values.content}
                        onChange={handleInputChange}
                     />
                  </Grid>
      
                  <Grid item xs={12}>
                     <Controls.Input 
                        label='Контент'
                        name='content'
                        value={values.content}
                        onChange={handleInputChange}
                     />
                  </Grid>
               </Grid>
               <Grid container item xs={3}>
                  <Grid item xs={12}>
                     <Paper className={classes.paper}>Место под макет телефона</Paper>
                  </Grid>
               </Grid>
            </Grid>
         </Form>
   )
}

