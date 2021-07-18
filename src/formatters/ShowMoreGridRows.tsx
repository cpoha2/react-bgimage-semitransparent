import React, {Fragment, SyntheticEvent, useEffect, useState} from 'react';
import {Divider, Button} from '@material-ui/core';

const ShowMoreGridRows = (props :any) => {
    const {defaultNumRowsVisible, showButton, rowsOfData, moreText, lessText, isExpanded} = props;
   
    const [displayAll, setDisplayAll] = useState(isExpanded);
    const [buttonText, setButtonText] = useState(moreText);

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
        if (buttonText === moreText) {
            setButtonText(lessText);
        } else {
            setButtonText(moreText);
        }
        setDisplayAll (!displayAll);
        
    }

    // probably do not need this button, since it will be inside the grid if used
    const getButtonSection = () => {
        if (doSplitData()) {          
            return <Fragment> 
                <Divider style={{width: '100%', height: '3px', backgroundColor: 'red'}}/> 
                <Button onClick={handleClick}>{buttonText}</Button>
            </Fragment>;
        }
    }

    useEffect(() => {
      if (isExpanded) {
        setButtonText(lessText);
        setDisplayAll(true);
      } else {
        setButtonText(moreText);
        setDisplayAll(false);
      }
      
      console.log('ShowMoreGridRows: use effect called');
    }, [isExpanded, lessText, moreText]);

    return <Fragment>
        {getAlwaysVisibleRecords()}
        {displayAll && getHiddenRecords()} 
        {showButton && getButtonSection()}
    </Fragment>;
}

export default ShowMoreGridRows;