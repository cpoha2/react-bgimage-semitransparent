import React, {useEffect} from 'react';
import { useAppStore } from '../store/AppStore';
import AppReducerEventType from '../store/AppReducerEventType';
import GridRowData from '../formatters/GridRowData';
import ShowMoreGridRows from '../formatters/ShowMoreGridRows';
import Grid from '@material-ui/core/Grid';


const DUMMY_GRID_ROWS = [
  
    <GridRowData key='1' label='CHILD ONE 1' data='item 1 data'/>,
    <GridRowData key='2' label='CHILD ONE 2' data='item 2 data'/>,            
    <GridRowData key='3' label='CHILD ONE 3' data='item 3 data'/>,
    <GridRowData key='4' label='CHILD ONE 4' data='item 4 data'/>,
    <GridRowData key='5' label='CHILD ONE 5' data='item 5 data'/>,
    <GridRowData key='6' label='CHILD ONE 6' data='item 6 data'/>,
    <GridRowData key='7' label='CHILD ONE 7' data='item 7 data'/>,
];

const MyInfoChildOne = (props: any) => {

    let myGrids = DUMMY_GRID_ROWS;
    const newGrid = <GridRowData key='8' label='My New Grid Item' data='I added this to the dummy rows'/>
    const newGrid2 = <GridRowData key='9' label='Other' data='Verifying alignment of these longer text rows'/>
    const newGrid3 = <GridRowData key='10' label='My New Grid Item' data='Third additional row'/>
    myGrids = [...myGrids, newGrid, newGrid2, newGrid3];
    const {maxRowsToShow, isDisplayAllGridRows} = props;

    const [, dispatch] = useAppStore(); 

    useEffect(() => { 
        console.log('MyInfoChildOne: use effect called');
  
        if (myGrids.length > maxRowsToShow) {
        
            dispatch({
                type: AppReducerEventType.DISPLAY_BUTTON_CHILD_ONE_EXCEEDS_MAX,
                payload: true,
            });
        } else {
            dispatch({
                type: AppReducerEventType.DISPLAY_BUTTON_CHILD_ONE_EXCEEDS_MAX,
                payload: false,
            });
        } 
    }, [myGrids.length, maxRowsToShow, dispatch]);


    

    return <div>
        <h2>CHILD ONE GRID:</h2>
        <Grid container direction='row' alignItems='flex-start' justify='flex-start'>
          <ShowMoreGridRows 
                defaultNumRowsVisible={maxRowsToShow}                     
                isExpanded={isDisplayAllGridRows} 
                rowsOfData={myGrids}/> 
        </Grid>

    </div>;

};

export default MyInfoChildOne;