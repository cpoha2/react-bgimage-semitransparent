import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Image from '../assets/pf_bg4.jpg';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import GridRowData from '../formatters/GridRowData';
import ShowMoreGridRows from '../formatters/ShowMoreGridRows';

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

const DUMMY_GRID_ROWS = [
  
    <GridRowData key='1' label='ITEM 1' data='item 1 data'/>,
    <GridRowData key='2' label='ITEM 2' data='item 2 data'/>,            
    <GridRowData key='3' label='ITEM 3' data='item 3 data'/>,
    <GridRowData key='4' label='ITEM 4' data='item 4 data'/>,
    <GridRowData key='5' label='ITEM 5' data='item 5 data'/>,
    <GridRowData key='6' label='ITEM 6' data='item 6 data'/>,
    <GridRowData key='7' label='ITEM 7' data='item 7 data'/>,
];


const SearchStuff = (props : any) => {

    const classes = useStyles();

    let gridRows = DUMMY_GRID_ROWS;
    if (true)
      gridRows = [...gridRows, <GridRowData key='8' label='ITEM 8' data='item 8 data added later' />];


    
    return <div className={classes.behindPaper}>
        <Paper className={classes.paper}>
            <h1>GRID EXAMPLE</h1>
           
            <Paper className={classes.paperTop}>
              <Grid container direction='row' >
                <ShowMoreGridRows 
                    defaultNumRowsVisible={4} 
                    showDivider={true} 
                    moreText='Show More Grid Records' 
                    lessText='Show Less Grid Records' 
                    isExpanded={true} 
                    rowsOfData={gridRows}/>   
              </Grid>

             
            </Paper>
        </Paper>
        <br/>
        
        
    </div>;
}

export default SearchStuff;