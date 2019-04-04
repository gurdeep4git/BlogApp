import React, { Component, Fragment } from "react";
import axios from "axios";
import Todo from '../../components/Todo/Todo';
import Grid from "@material-ui/core/Grid";

class Todos extends Component {
    
    url = "https://jsonplaceholder.typicode.com/todos";
    todos = new Map();

    state = { 
        todos : null
     }
    
    componentDidMount() {
        axios
            .get(this.url)
            .then(response => {
                response.data.forEach((element, i) => {
                    this.todos.set(i + 1, element);
                });
                this.setState({ todos: this.todos });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() { 

        let todos = "Loading...";
        if (this.state.todos) {
            todos = <Todo todosList={this.state.todos} />;
        }

        return ( 
            <Fragment>
                <div style={{ flexGrow: 1 }}>
                    <Grid container spacing={24}>
                        {todos}
                    </Grid>
                </div>
            </Fragment>
        );
    }
}
 
export default Todos;