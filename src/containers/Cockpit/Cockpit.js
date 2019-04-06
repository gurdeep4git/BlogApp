
import Header from "../../components/Header/Header";
import Users from "../Users/Users";
import Todos from "../Todos/Todos";


import React, { Component, Fragment } from "react";
import { Route } from 'react-router';
import { Switch } from 'react-router-dom';

class Cockpit extends Component {
    
    render() {
        return (
            <Fragment>
            <Header />
             <Switch>
                <Route path="/" component={Users} exact />
                <Route path="/users" component={Users} exact />
                <Route path="/todos" component={Todos} />
                <Route path="/:id" component="<h1>Hi</h1>" />
            </Switch>
        </Fragment>
        );
    }
}

export default Cockpit;
