import React, { Component, Fragment } from "react";
import axios from "axios";

import UserDropDownMenuItem from "../UsersDropdown/userDropdownMenuItem";

class UserDropdown extends Component {
    url = "https://jsonplaceholder.typicode.com/users";
    usersArr = [];

    constructor(props) {
        super(props);
        axios
            .get(this.url)
            .then(response => {
                response.data.forEach(user => {
                    let userForDropDown = {
                        id: null,
                        name: null
                    };
                    userForDropDown.id = user.id;
                    userForDropDown.name = user.name;
                    this.usersArr.push(userForDropDown);
                });
                this.setState({ users: this.usersArr });
            })
            .catch(error => {
                console.log(error);
            });
    }

    state = {
        users: null
    };

    render() {
        return (
            this.state.users && (
                <Fragment>
                    <br />
                    <select name="myselect" onChange={this.props.onchangeEvent}>
                        <option>--Select user--</option>
                        <UserDropDownMenuItem usersItems={this.state.users} />
                    </select>
                    <br />
                    <br />
                </Fragment>
            )
        );
    }
}

export default UserDropdown;
