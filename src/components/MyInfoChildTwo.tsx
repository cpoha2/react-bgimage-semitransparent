import React, {useEffect} from 'react';
import { useAppStore } from '../store/AppStore';
import AppReducerEventType from '../store/AppReducerEventType';
import GridRowData from '../formatters/GridRowData';
import ShowMoreGridRows from '../formatters/ShowMoreGridRows';
import Grid from '@material-ui/core/Grid';


const DUMMY_GRID_ROWS = [
  
    <GridRowData key='1' label='CHILD TWO 1' data='item 1 data'/>,
    <GridRowData key='2' label='CHILD TWO 2' data='item 2 data'/>,            
    //<GridRowData key='3' label='CHILD TWO 3' data='item 3 data'/>,
    //<GridRowData key='4' label='CHILD TWO 4' data='item 4 data'/>,
    //<GridRowData key='5' label='CHILD TWO 5' data='item 5 data'/>,
    //<GridRowData key='6' label='CHILD TWO 6' data='item 6 data'/>,
    //<GridRowData key='7' label='CHILD TWO 7' data='item 7 data'/>,
];

const MyInfoChildTwo = (props: any) => {

    let myGrids = DUMMY_GRID_ROWS;
    const newGrid = <GridRowData key='8' label='GRID TWO new Item' data='I added this to GRID TWO'/>
    myGrids = [...myGrids, newGrid];
    const {maxRowsToShow, displayAllRows} = props;

    const [, dispatch] = useAppStore(); 

    useEffect(() => { 
        console.log('MyInfoChildTwo: use effect called');
  
        if (myGrids.length > maxRowsToShow) {
        
            dispatch({
                type: AppReducerEventType.DISPLAY_BUTTON_CHILD_TWO_EXCEEDS_MAX,
                payload: true,
            });
        } else {
            dispatch({
                type: AppReducerEventType.DISPLAY_BUTTON_CHILD_TWO_EXCEEDS_MAX,
                payload: false,
            });
        }
    }, [myGrids.length, maxRowsToShow, dispatch]);


    

    return <div>
        <h2>CHILD TWO GRID:</h2>
        <Grid container>
          <ShowMoreGridRows 
                defaultNumRowsVisible={maxRowsToShow}                     
                isExpanded={displayAllRows} 
                rowsOfData={myGrids}/> 
        </Grid>

    </div>;

};

export default MyInfoChildTwo;