import React from 'react';
import Paper from '@material-ui/core/Paper';
import Image from '../assets/pf_bg4.jpg';
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
      color: 'black',
      backgroundColor: 'rgba(255,255,255,0.5)',
      //opacity: '0.5',
      borderRadius: '0',
    },
    paperTop: {
        //opacity: '.8',
        backgroundColor: 'rgba(255,255,255,0.5)',
        color: 'red',
    }
  }),
);


const SearchStuff = (props : any) => {

    const classes = useStyles();

    return <div className={classes.behindPaper}>
        <Paper className={classes.paper}>
            <h1>SEARCH STUFF</h1>
            <p>Search Stuff content goes here</p>
            <Paper className={classes.paperTop}>
                <h2>This is a paper on top</h2>
                <p>This is content on the top paper</p>
            </Paper>
        </Paper>
        <br/>
        
        
    </div>;
}

export default SearchStuff;