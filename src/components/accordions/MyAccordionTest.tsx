import React, { useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {  Paper } from '@material-ui/core';
import Image from '../../assets/pf_bg4.jpg';
import CustomAccordion from './CustomAccordion';



import RootRef from "@material-ui/core/RootRef";

import { DragDropContext, Droppable } from "react-beautiful-dnd";


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
        name: 'John Doe', 
        id: '1',
        age: 23, 
        favoriteFood: 'Chocolate',
        precedence: 1,
    }, 
    {
        name: 'Bob Smith',
        id: '2',
        age: 55,
        favoriteFood: 'Blueberries',
        precedence: 2,
    },
    {
        name: 'Jenny Thoone',
        id: '3',
        age: 38,
        favoriteFood: 'Escargot',
        precedence: 3,
    },
    {
        name: 'Anna Somebody',
        id: '4',
        age: 34,
        favoriteFood: 'Jelly Beans',
        precedence: 4,
    }
]

const reorder = (list : any[], startIndex : number, endIndex : number) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

const MyAccordionTest = (props : any ) => {
  const classes = useStyles();

 // const peopleList = myItems;

  const [peopleList, setPeopleList] = useState(myItems);

  const onDragEnd = (result : any) => {
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
  
/**
 *    <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="droppable">
                    {(provided, snapshot) => (
                        <RootRef rootRef={provided.innerRef}>
                            <List style={getListStyle(snapshot.isDraggingOver)}>
                                {items.map((item, index) => (
                                    <Draggable key={item.id} draggableId={item.id} index={index}>
                                        {(provided, snapshot) => (
                                            <ListItem
                                                ContainerComponent="li"
                                                ContainerProps={{ ref: provided.innerRef }}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                style={getItemStyle(
                                                    snapshot.isDragging,
                                                    provided.draggableProps.style
                                                )}
                                            >
                                                <ListItemIcon>
                                                    <InboxIcon />
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={item.primary}
                                                    secondary={item.secondary}
                                                />
                                                <ListItemSecondaryAction>
                                                    <IconButton>
                                                        <EditIcon />
                                                    </IconButton>
                                                </ListItemSecondaryAction>
                                            </ListItem>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </List>
                        </RootRef>
                    )}
                </Droppable>
            </DragDropContext>

 */

  return ( 
    <div className={classes.behindPaper}>
        <Paper className={classes.paper}>
            <h1>Accordions!</h1>
            <Paper className={classes.paperTop} >
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="droppable">
                    {(provided, snapshot) => (
                        
                        <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            {peopleList.map((person, index) => (

                    
                                <CustomAccordion 
                                    ref={provided.innerRef}
                                    index={index}
                                    key={Math.random()}
                                    name={person.name}
                                    age={person.age}
                                    favoriteFood={person.favoriteFood}
                                    person={person}
                                    precedence={person.precedence}
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