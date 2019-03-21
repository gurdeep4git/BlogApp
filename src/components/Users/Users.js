import React from "react";
import User from "../Users/User/User";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const users = props => {
    const users = [];

    for (let item of props.usersList.values()) {
        users.push(item);
    }

    return users.map(user => {
        let usersData = {
            id: null,
            name: null,
            initial: null
        };

        usersData.id = user.id;
        usersData.name = user.name;
        usersData.initial = user.name.substring(0, 1);

        return (
            <Grid item xs={3} key={user.id}>
                <Paper>
                    <User usersData={usersData} />
                </Paper>
            </Grid>
        );
    });
};

export default users;
