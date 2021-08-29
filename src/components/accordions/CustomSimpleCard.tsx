import React from 'react';
import { Paper } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

import {  Draggable } from "react-beautiful-dnd";



const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%'
    },
    headerTypography: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    headerPaper: {
        backgroundColor: 'rgba(255,255,255,0.1)',
    }
}));

const CustomAccordion = ( props : any ) => {
    const { person, index } = props;
    const classes = useStyles();
/**
 * 
 * <Draggable draggableId={this.props.task.id} index={this.props.index}>
                {provided => (
                    <Container
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        innerRef={provided.innerRef}
                    >
                        {this.props.task.content}
                    </Container>
                )}
            </Draggable>
 */
/**
 * 
 * <Draggable key={person.id} draggableId={person.id} index={index}>
                        {(provided, snapshot) => 
                                <CustomAccordion 
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    key={Math.random()}
                                    name={person.name}
                                    age={person.age}
                                    favoriteFood={person.favoriteFood}
                                    person={person}
                                    precedence={person.precedence}
                            />
                        }
                  
                    </Draggable>

 */
    return (
        <Draggable key={person.id} draggableId={person.id} index={index}>
        {(provided, snapshot) => (
            <Paper  ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}>
                NAME: {person.name}<br/>
                AGE: {person.age}<br/>
                FAVORITE FOOD: {person.favoriteFood}<br/>
                PRECEDENCE: {person.precedence}<br/>
            </Paper>
        )}
        </Draggable>
    );
}

export default CustomAccordion;