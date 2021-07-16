import React, {Fragment, SyntheticEvent, useState} from 'react';
import {Divider, Button} from '@material-ui/core';

const ShowMoreGridRows = (props :any) => {
    const {defaultNumRowsVisible, rowsOfData, moreText, lessText, isExpanded} = props;
   // const [rowsVisible, setRowsVisible] = useState(defaultNumRowsVisible);
    const [displayAll, setDisplayAll] = useState(isExpanded);

    const doSplitData = () => {
        if (defaultNumRowsVisible < rowsOfData.length ) {
            console.log('we are splitting');
            return true;
        }
        console.log('we do NOT split');
        return false;
    }

    const getAlwaysVisibleRecords = () => {
        if (doSplitData()) {
            const rows = rowsOfData.slice(0,defaultNumRowsVisible);
            console.log('rows of always visible data:', rows);
            return rows;
        }
        return rowsOfData;
       
       // return <span>{rows}</span>;
    }

    const getHiddenRecords = () => {
        if (doSplitData()) {
            const rows = rowsOfData.slice(defaultNumRowsVisible,rowsOfData.size);
            console.log('rows of hidden data:', rows);
            return rows;
        }
        return [];
    }

    const handleClick = (e: SyntheticEvent) => {
        console.log("You clicked show more or show less, no idea which");
        //getAlwaysVisibleRecords();
        //getHiddenRecords();
        setDisplayAll (!displayAll);
        
    }

    const getButtonSection = () => {
        if (doSplitData()) {
            
            if (displayAll ) {
              return <Fragment><Divider style={{width: '100%', height: '3px', backgroundColor: 'green'}}/> <Button onClick={handleClick}>{lessText}</Button></Fragment>;
            }
            return <Fragment> <Divider style={{width: '100%', height: '3px', backgroundColor: 'red'}}/> <Button onClick={handleClick}>{moreText}</Button></Fragment>;
        }
    }

    return <Fragment>
        {getAlwaysVisibleRecords()}

        {(displayAll ) &&  getHiddenRecords()} 
        
        
        {getButtonSection() }

        


    </Fragment>;
}

export default ShowMoreGridRows;