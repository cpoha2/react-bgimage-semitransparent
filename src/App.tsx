import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import './App.css';
import { Grid, Paper } from '@material-ui/core';
import MyInfo from './components/MyInfo';
import SearchStuff from './components/SearchStuff';
import { AppStore } from './store/AppStore';
import MyAccordionTest from './components/accordions/MyAccordionTest';
import SvgIconTest from './components/SvgIconTest';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paperHeaderFooter: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      backgroundColor: '#cecece',
      borderRadius: '0',
    },
  }),
);


function App() {

  const classes = useStyles();


  return (
    <AppStore>
      <div className="App">
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Paper className={classes.paperHeaderFooter}>HEADER</Paper>
          </Grid>
          <Grid item xs={12}>
            <SvgIconTest/>
          </Grid>
          <Grid item xs={12}>
            <SearchStuff />
          </Grid>
          <Grid item xs={12}>
            <MyInfo />
          </Grid>
          <Grid item xs={12}>
            <MyAccordionTest/>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paperHeaderFooter}>FOOTER</Paper>
          </Grid>
        </Grid>
      </div>
    </AppStore>
    
  );
}

export default App;
