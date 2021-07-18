import React, { Fragment, SyntheticEvent, useState, useEffect } from 'react';
import { Divider, Paper, Button, Grid } from '@material-ui/core';
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
  
  const showMoreText = 'Show More From Global';
  const showLessText = 'Show Less From Global';
  const [buttonText, setButtonText] = useState(showMoreText);
  const [globalState] = useAppStore(); 

  const [isShowMoreExpanded, setIsShowMoreExpanded] = useState(false);
  const maxRowsToShow = 6;

  

  const handleClickShowMore = (event: SyntheticEvent) => {
    event.preventDefault();
    console.log('you clicked Show More/Less');
    if (buttonText === showMoreText) {
      setButtonText(showLessText);
      setIsShowMoreExpanded(true);
    } else {
      setButtonText(showMoreText);
      setIsShowMoreExpanded(false);
    }
  };

  const getButtonSection = () => {
    if (globalState.displayButtonChildOneExceeds || globalState.displayButtonChildTwoExceeds) {
      return <Fragment>
        <Divider style={{width: '100%', height: '3px', backgroundColor: 'purple'}}/>
        <Button onClick={handleClickShowMore}>{buttonText}</Button>
      </Fragment>;
    }
  }

  useEffect(() => { 
      console.log('MyInfo: use effect called');

  }, []);


  return <div className={classes.behindPaper}>
    <Paper className={classes.paper}>
      <h1>MY INFO PARENT CLASS</h1>
      <Paper className={classes.paperTop} >
        <Grid container direction='row' >
          <Grid item xs={6} md={6}>
            <MyInfoChildOne maxRowsToShow={maxRowsToShow}  isDisplayAllGridRows={isShowMoreExpanded} />
  
          </Grid>
          <Grid item xs={6} md={6}>
            <MyInfoChildTwo maxRowsToShow={maxRowsToShow}  isDisplayAllGridRows={isShowMoreExpanded} />
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