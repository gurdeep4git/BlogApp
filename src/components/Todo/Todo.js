import React from 'react';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const todo = (props) => {

    const todos = [];

    for (let item of props.todosList.values()) {
        todos.push(item);
    }

    return todos.map(todo => {
        return (
            <Grid item xs={3} key={todo.id}>
                <Paper>
                    {todo.title}
                </Paper>
            </Grid>
        );
    });
}
 
export default todo;