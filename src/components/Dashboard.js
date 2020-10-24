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
           <Grid item xs={4}>
             <h2>Раздел в разработке</h2>
          </Grid>
          <Grid item xs={1}> </Grid>
          <Grid item xs={7}>
          </Grid>
          <Grid item xs={6}>
            
          </Grid>
        </Grid> 
      </form>
     
  );

};

export default Dashboard;