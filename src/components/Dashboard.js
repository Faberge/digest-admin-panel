import React, { useState, useEffect } from 'react';
//import ImageUpload from './ImageUpload';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


  const initialValues = {
   id: 0,
   Annotation: '',
   ArticleName: '',
   QQ: ''
 };

 const galleryImageList = [
  "https://raw.githubusercontent.com/dxyang/StyleTransfer/master/style_imgs/mosaic.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
  "https://raw.githubusercontent.com/ShafeenTejani/fast-style-transfer/master/examples/dora-maar-picasso.jpg",
  "https://pbs.twimg.com/profile_images/925531519858257920/IyYLHp-u_400x400.jpg",
  "https://raw.githubusercontent.com/ShafeenTejani/fast-style-transfer/master/examples/dog.jpg",
  "http://r.ddmcdn.com/s_f/o_1/cx_462/cy_245/cw_1349/ch_1349/w_720/APL/uploads/2015/06/caturday-shutterstock_149320799.jpg"
];

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function Dashboard() {

  //const [values, setValues] = useState(initialValues);

  return (
     <form>
       <h1>Dashboard</h1>
         <Grid container>
           {/*Заголовок */}
           <Grid item xs={4}>
            <TextField
              fullWidth
              id="outlined-multiline-static"
              multiline
              rows={2}
              label="Заголовок статьи"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={1}> </Grid>
          {/*Аннотация */}
          <Grid item xs={7}>
            <TextField
              fullWidth
              id="outlined-multiline-static"
              multiline
              rows={2}
              label="Аннотация"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            
          </Grid>
        </Grid> 
      </form>
     
  );

};

export default Dashboard;