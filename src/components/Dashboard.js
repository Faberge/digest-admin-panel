import React from 'react';
import Grid from '@material-ui/core/Grid';

 /* const initialValues = {
   id: 0,
   Annotation: '',
   ArticleName: '',
   QQ: ''
 };*/

function Dashboard() {

  return (
     <form>
       <h1>Dashboard</h1>
         <Grid container>
           {/*Заголовок */}
           <Grid item xs={4}>
          </Grid>
          <Grid item xs={1}> </Grid>
          {/*Аннотация */}
          <Grid item xs={7}>
          </Grid>
          <Grid item xs={6}>
            
          </Grid>
        </Grid> 
      </form>
     
  );

};

export default Dashboard;