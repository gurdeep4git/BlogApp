import React from 'react';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Link } from 'react-router-dom';

const todo = (props) => {

    const todos = [];

    for (let item of props.todosList.values()) {
        todos.push(item);
    }

    return todos.map(todo => {
        return (
            <Grid item xs={3} key={todo.id}>
                <Paper>
                   <Link to={'/' + todo.id}>
                       {makeTodo(todo)}
                   </Link>
                </Paper>
            </Grid>
        );
    });
}

const makeTodo = (todo) => {
    if(todo.completed){
        return <p style={{color:"green"}}>{todo.title}</p>
    }
    else{
        return <p style={{color:"red"}}>{todo.title}</p>
    }
    
}
 
export default todo;

