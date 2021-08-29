import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Grid, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
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
           
         <Accordion ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps} > 
            
            <AccordionSummary
                
                expandIcon={<ExpandMoreIcon/>}
                aria-controls={`panel${person.key}-content`}
                id={`panel${person.key}-header`}
                className={classes.headerPaper}
            >
                <Typography className={classes.headerTypography}>{props.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                 {true && 
                     <Grid container direction='row' justifyContent='flex-end' alignItems='flex-start'>
                         <Grid item sm={6} md={3}>NAME: </Grid>
                         <Grid item sm={6} md={3}>{person.name}</Grid>

                         <Grid item sm={6} md={3}>AGE: </Grid>
                         <Grid item sm={6} md={3}>{person.age}</Grid>

                         <Grid item sm={6} md={3}>FAVORITE FOOD: </Grid>
                         <Grid item sm={6} md={3}>{person.favoriteFood}</Grid>

                         <Grid item sm={6} md={3}>PRECEDENCE: </Grid>
                         <Grid item sm={6} md={3}>{person.precedence}</Grid>

                     </Grid>
                 
                }
                { false && <>
                NAME: {person.name}<br/>
                AGE: {person.age}<br/>
                FAVORITE FOOD: {person.favoriteFood}<br/>
                PRECEDENCE: {person.precedence}<br/></>}
            </AccordionDetails>
        </Accordion>
        
        )}
        </Draggable>
    );
}

export default CustomAccordion;