import React, { Fragment, SyntheticEvent, useState, useEffect } from 'react';
import { Divider, Paper, Button, Box, Grid } from '@material-ui/core';
import Image from '../assets/myinfo_bg5.png';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { useAppStore } from '../store/AppStore';

import MyInfoChildOne from './MyInfoChildOne';

import MyInfoChildTwo from './MyInfoChildTwo';

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
  const [content, setContent] = useState(<p>This is content</p>);
  const [count, setCount] = useState(0);

  const showMoreText = 'Show More From Global';
  const showLessText = 'Show Less From Global';
  const [buttonText, setButtonText] = useState(showMoreText);
  const [globalState] = useAppStore(); 

  const [isShowMoreExpanded, setIsShowMoreExpanded] = useState(false);
  const maxRowsToShow = 6;

  const handleClickAdd = (event: SyntheticEvent) => {
    event.preventDefault();
    console.log('you clicked');
    setCount((prevCount) => prevCount + 1 );
    setContent((prevState) => <>{prevState}<br/> You added a line</>);
  };

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

      <Paper square className={classes.paperTop2}>
        <h2>Different rgba value for top paper</h2>
        {content}<br/>
        Count: {count}<br/>

        <Button variant="outlined" className={classes.buttonSharpEdge} onClick={handleClickAdd}>ADD</Button>

        <p>This is more content to see the image.</p>
        <span className={classes.fontLarge}>Large font in simple span.&nbsp;</span>
        <span className={classes.fontMedium}>(Smaller info here)</span>
        <br />
        <Box component="span" className={classes.fontLarge}>Box of span type.&nbsp;</Box>
        <Box component="span" className={classes.fontMedium}>(Smaller text)</Box>
        <br />

      </Paper>
      <Paper className={classes.paperTop}>
        <Grid container direction="row" justify="flex-start" alignItems="flex-start">
          <Grid item xs={6}>
            <Box component="span" className={classes.fontLarge}>Personal Information&nbsp;</Box>
            <Box component="span" className={classes.fontMedium}>(Your name, etc)</Box>

          </Grid>
          <Grid item xs={6}>
            <Box component="span" className={classes.fontLarge}>Hobbies&nbsp;</Box>
            <Box component="span" className={classes.fontMedium}>(What you like to do)</Box>

          </Grid>
        </Grid>
        <br />

      </Paper>
    </Paper>

  </div>;
}

export default MyInfo;