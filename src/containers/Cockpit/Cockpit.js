import React, { Component, Fragment } from "react";
import Users from "../../components/Users/Users";
import axios from "axios";

import Grid from "@material-ui/core/Grid";

class Cockpit extends Component {
    url = "https://jsonplaceholder.typicode.com/users";
    users = new Map();

    state = {
        users: null
    };

    componentDidMount() {
        axios
            .get(this.url)
            .then(response => {
                response.data.forEach((element, i) => {
                    this.users.set(i + 1, element);
                });
                this.setState({ users: this.users });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        let users = "Loading...";
        if (this.state.users) {
            users = <Users usersList={this.state.users} />;
        }

        return (
            <Fragment>
                <div style={{ flexGrow: 1 }}>
                    <Grid container spacing={24}>
                        {users}
                    </Grid>
                </div>
            </Fragment>
        );
    }
}

export default Cockpit;
