import React, { Component, Fragment } from 'react';
import Cockpit from '../src/containers/Cockpit/Cockpit';
import {BrowserRouter} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Cockpit />
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
