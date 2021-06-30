import React from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
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
    }
  }),
);

const MyInfo=(props: any) => {

    const classes = useStyles();

    return <div className={classes.behindPaper}>
        <Paper className={classes.paper}>
           <h1>MY INFO</h1> 
           
           <p>My Info content goes here...</p>
           
           <Paper square className={classes.paperTop}>
               <h2>Second paper on top</h2>
               <p>Content of second paper</p>
               <br/>
               <Button variant="outlined" className={classes.buttonSharpEdge}>ADD INFORMATION</Button>
               <br/>
               <p>This is more content.</p>
               
           </Paper>
           <p>This is content near the bottom to push the app down the page.</p>
           <br/>
           <Paper square className={classes.paperTop2}>
               <h2>Different rgba value for top paper</h2>
               <p>Content goes here.</p>
               <br/>
               <Button variant="outlined" className={classes.buttonSharpEdge}>ADD</Button>
               <br/>
               <p>This is more content to see the image.</p>
               <br/>
           </Paper>
        </Paper>
    </div>;
}

export default MyInfo;