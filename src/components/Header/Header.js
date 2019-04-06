import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';

const styles = {
    root: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
    },
};

class header extends Component {
   
    render() {
    const { classes } = this.props;
    return ( 
        <div className={classes.root}>
            <AppBar color="secondary" position="relative">
                <Toolbar>
                <Typography variant="h6" color="inherit" className={classes.grow}>
                    App
                </Typography>
                
                <NavLink 
                to="/users" 
                exact 
                // --styling
                // activeClassName="active"
                // activeStyle={{}}
                >
                    <Button color="inherit">Users</Button>
                </NavLink>
                <NavLink to="/todos">
                    <Button color="inherit">Todos</Button>
                </NavLink>

                {/* <Link to="/">
                    <Button color="inherit">Posts</Button>
                </Link>
                <Link to="/users">
                    <Button color="inherit">Albums</Button>
                </Link> */}

                </Toolbar>
            </AppBar>
        </div>
     );
    }
}
 
export default withStyles(styles)(header);