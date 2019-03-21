import React, { Component, Fragment } from "react";
import Header from "../Header/Header";
import Cockpit from "../../containers/Cockpit/Cockpit";

class Layout extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <Cockpit />
            </Fragment>
        );
    }
}

export default Layout;
