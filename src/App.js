import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

class App extends Component {
  render() {
    return (
      <Fragment>
        <header>
          <div>logo</div>
          <nav></nav>
        </header>
        <Grid container spacing={24}>
          <Grid item xs={3}>
            <Button variant="contained" color="primary" fullWidth>
              Primary
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="primary" fullWidth>
              Primary
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="primary" fullWidth>
              Primary
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="primary" fullWidth>
              Primary
            </Button>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default App;
