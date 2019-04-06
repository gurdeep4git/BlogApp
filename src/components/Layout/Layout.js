import React, { Component, Fragment } from "react";
import { Route } from 'react-router';
import { Switch } from 'react-router-dom';

import Header from "../Header/Header";
import Users from "../Users/Users";
import Todos from "../../containers/Todos/Todos";

class Layout extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                 <Switch>
                    <Route path="/" component={Users} exact />
                    <Route path="/todos" component={Todos} />
                </Switch>
            </Fragment>
        );
    }
}

export default Layout;
