import React, { Fragment, SyntheticEvent, useState, useEffect } from 'react';
import { Divider, Paper, Button, Grid, Slider } from '@material-ui/core';
import Image from '../assets/myinfo_bg5.png';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { useAppStore } from '../store/AppStore';

import MyInfoChildOne from './MyInfoChildOne';
import MyInfoChildTwo from './MyInfoChildTwo';
import StyleTesterComponent from './StyleTesterComponent';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    behindPaper: {

      backgroundImage: `url(${Image})`,
      //opacity: '0.5',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: 'purple',
      backgroundColor: 'rgba(255,255,255,0.5)',
      //opacity: '0.5',
      borderRadius: '0',
    },
    paperTop: {
      //opacity: '.8',
      backgroundColor: 'rgba(255,255,255,0.5)',
      color: 'black',
    },
    paperTop2: {
      backgroundColor: 'rgba(255,255,255,0.8)',
      color: 'black',
    },
    buttonSharpEdge: {
      borderRadius: '0',
      border: '3px solid currentColor',
    },
    fontLarge: {
      fontFamily: 'Arial, sans-serif',
      fontSize: '1.5rem',
    },
    fontMedium: {
      fontFamily: 'Arial, sans-serif',
      fontSize: '1.25rem',
    },
  }),
);

const MyInfo = (props: any) => {

  const classes = useStyles();
  
  const showMoreText = 'Show More Global';
  const showLessText = 'Show Less Global';
  const [buttonText, setButtonText] = useState(showMoreText);
  const [globalState] = useAppStore(); 

  const [showAll, setShowAll] = useState(false);
  const [maxRowsToShow, setMaxRowsToShow] = useState(6);

  
  const handleClickShowMore = (event: SyntheticEvent) => {
    event.preventDefault();
    console.log('you clicked Show More/Less');
    if (buttonText === showMoreText) {
      setButtonText(showLessText);
      setShowAll(true);
    } else {
      setButtonText(showMoreText);
      setShowAll(false);
    }
  };

  const handleSliderChange = (event: any, newValue: number | number[]) => {
    setMaxRowsToShow(newValue as number);
  };

  const getButtonSection = () => {
    if (globalState.displayButtonChildOneExceeds || globalState.displayButtonChildTwoExceeds) {
      return <Fragment>
        <Divider style={{width: '100%', borderBottom: "4px dashed rgba(255,0,255,0.7)" }}/>
        <Grid container direction='row'>
          <Grid item xs={8} /> 
          <Grid item xs={4} ><Button onClick={handleClickShowMore}>{buttonText}</Button></Grid>
        </Grid>
        
      </Fragment>;
    }
  }

  useEffect(() => { 
      console.log('MyInfo: use effect called');

  }, []);


  return <div className={classes.behindPaper}>
    <Paper className={classes.paper}>
      <h1>Grid using global state</h1>
      <Paper className={classes.paperTop} >
      <div>Adjust max rows display on init:</div>  
      <Slider
              defaultValue={maxRowsToShow}
              min={1}
              max={10}
              valueLabelDisplay="auto"
              onChange={handleSliderChange}
              style={{width:'30%'}}
          />
        <Grid container direction='row' >
          <Grid item xs={6} md={6}>
            <MyInfoChildOne maxRowsToShow={maxRowsToShow}  displayAllRows={showAll} />
          </Grid>
          <Grid item xs={6} md={6}>
            <MyInfoChildTwo maxRowsToShow={maxRowsToShow}  displayAllRows={showAll} />
          </Grid>
        </Grid>
        {getButtonSection()}
      </Paper>
      
      <br/>
      
    </Paper>

    <StyleTesterComponent/>
  </div>;
}

export default MyInfo;