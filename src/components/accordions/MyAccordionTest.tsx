import React, { useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {  Paper } from '@material-ui/core';
import Image from '../../assets/pf_bg4.jpg';
import CustomAccordion from './CustomAccordion';
import CustomSimpleCard from './CustomSimpleCard';
//import RootRef from "@material-ui/core/RootRef";
import { DragDropContext, Droppable, DropResult, DroppableProvided, DroppableStateSnapshot } from "react-beautiful-dnd";


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

const myItems = [
    {
        name: 'Anna Somebody',
        id: '111',
        age: 34,
        favoriteFood: 'Jelly Beans',
        precedence: 1,
    },

    {
        name: 'Bob Smith',
        id: '222',
        age: 55,
        favoriteFood: 'Blueberries',
        precedence: 2,
    },
    {
        name: 'Carol Thoone',
        id: '333',
        age: 38,
        favoriteFood: 'Escargot',
        precedence: 3,
    },
    {
        name: 'Darren Doe', 
        id: '444',
        age: 23, 
        favoriteFood: 'Chocolate',
        precedence: 4,
    }, 

]

const reorder = (list : any[], startIndex : number, endIndex : number) => {
    console.log("Attempt reorder now");
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

const MyAccordionTest = (props : any ) => {
  const classes = useStyles();

  const [peopleList, setPeopleList] = useState(myItems);

  const onDragUpdate = (result : any) => {
      console.log("drag update");
  }

  const onDragStart = (result : any) => {
      console.log("drag start")
  }

  const onBeforeCapture = (result : any) => {
      console.log("on before capture");
  }

  const onDragEnd = (result : DropResult) => {
    console.log("result:", result);

        // dropped outside the list
        if (!result.destination) {
            return;
        }


        const myItems = reorder(
            peopleList,
            result.source.index,
            result.destination.index
        );

        setPeopleList(myItems);

  }
  

  return ( 
    <div className={classes.behindPaper}>
        <Paper className={classes.paper}>
            <h1>Drag and Drop Accordions!</h1>
            <Paper className={classes.paperTop} >
            <DragDropContext onBeforeCapture={onBeforeCapture} onDragEnd={onDragEnd} onDragUpdate={onDragUpdate} onDragStart={onDragStart}>
                <Droppable droppableId="droppable">
                    {(provided : DroppableProvided, snapshot : DroppableStateSnapshot) => (
                        
                        <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            {peopleList.map((person, index) => (
                    
                                <CustomAccordion  
                                    index={index}
                                    key={index}
                                    person={person}  
                            />
                        
                  
                    
                ))} 
                
                {provided.placeholder}
                </div>
                
                )}
                </Droppable>
                </DragDropContext>
            </Paper>
        </Paper>
        </div>
  );
}

export default MyAccordionTest;