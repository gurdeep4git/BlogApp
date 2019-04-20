import React, { Component, Fragment } from "react";
import axios from "axios";
import Todo from "../../components/Todo/Todo";
import UserDropdown from "../../components/UsersDropdown/UsersDropdown";
import Grid from "@material-ui/core/Grid";

class Todos extends Component {
    todos = new Map();

    state = {
        todosBySelectedUser: null
    };

    changeHandler = event => {
        const selectedItem = event.target.value;
        console.log(selectedItem);
        this.getTodosById(selectedItem);
    };

    getTodosById = id => {
        axios
            .get(`https://jsonplaceholder.typicode.com/todos?userId=${id}`)
            .then(response => {
                response.data.forEach((element, i) => {
                    this.todos.set(i + 1, element);
                });
                this.setState({ todosBySelectedUser: this.todos });
            })
            .catch(error => {
                console.log(error);
            });
    };

    render() {
        // let todos = "Loading...";
        // if (this.state.todosBySelectedUser) {
        //     todos = <Todo todosList={this.state.todosBySelectedUser} />;
        // }

        return (
            <Fragment>
                <div style={{ flexGrow: 1 }}>
                    <UserDropdown onchangeEvent={this.changeHandler} />
                    <Grid container spacing={24}>
                        {this.state.todosBySelectedUser ? (
                            <Todo todosList={this.state.todosBySelectedUser} />
                        ) : (
                            <p>Select a user to get todos.</p>
                        )}
                    </Grid>
                </div>
            </Fragment>
        );
    }
}

export default Todos;
