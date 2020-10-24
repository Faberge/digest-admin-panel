import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { useForm, Form } from './useForm';
import { TextField } from '@material-ui/core';


const initialFieldValues ={
   id: 0,
   title: '',
   title_annotation: '',
   image_preview: 'https://comss.pics/image/gXuZz',
   hashtag_list: '',
   content: '',
   title_color: 0,
   font: 'San Francisco',
   published: true,
   created_dt: new Date()
}

export default function CreateNewsForm() {

   const {
      values,
      setValues,
      handleInputChange
   } = useForm(initialFieldValues);

   
   return (
         <Form>
         <Grid container>
            <Grid item xs={6}>
               <TextField 
                  variant='outlined'
                  label='Заголовок'
                  name='title'
                  value={values.title}
                  onChange={handleInputChange}
               />
               <TextField 
                  variant='outlined'
                  label='Аннотация'
                  name='title_annotation'
                  value={values.title_annotation}
                  onChange={handleInputChange}
               />
            </Grid>
            <Grid item xs={6}></Grid>
         </Grid>
         </Form>
   )
}

