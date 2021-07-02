import React, { SyntheticEvent, useState } from 'react';
import { Paper, Button, Box, Grid } from '@material-ui/core';
import Image from '../assets/myinfo_bg5.png';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';


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

  const handleClickAdd = (event: SyntheticEvent) => {
    event.preventDefault();
    console.log('you clicked');
  
    setCount((prevCount) => prevCount + 1 );

    setContent((prevState) => <>{prevState}<br/> You added a line</>);
  };

  return <div className={classes.behindPaper}>
    <Paper className={classes.paper}>
      <h1>MY INFO</h1>

      <p>My Info content goes here...</p>

      <Paper square className={classes.paperTop}>
        <h2>Second paper on top</h2>
        <p>Content of second paper</p>
        <br />
        <Button variant="outlined" className={classes.buttonSharpEdge}>ADD INFORMATION</Button>
        <br />

      </Paper>
      <p>This is content near the bottom to push the app down the page.</p>
      <br />
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