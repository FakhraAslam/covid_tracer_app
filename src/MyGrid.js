import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import { pink } from '@material-ui/core/colors';
import './App.css';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  clr:{
color:pink,
  },
  paper: {
    height: 200,
    width: 220,
 
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function MyGrid() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
           {/*  <Grid container justify="center" spacing={spacing}>
         {[0, 1,2].map((value) => (
            <Grid key={value} item>
              <Paper className={classes.paper} >
               
              </Paper>
           
            </Grid>
          ))}
        </Grid> */}
       <Grid container justify="center" spacing={spacing}>
       <Grid  item>
              <Paper className={classes.paper} >
               Number of Infected Patients
               <hr/> 
              </Paper>
           
        </Grid>
        <Grid  item>
              <Paper className={classes.paper} >
               Number of recovered Patient
               <hr/> 
              </Paper>
           
        </Grid>
        <Grid  item>
              <Paper className={classes.paper} >
               Number of Deaths
               <hr/> 
              </Paper>
           
        </Grid>
        
    
       </Grid>
      </Grid>
     
    </Grid>
  );
}