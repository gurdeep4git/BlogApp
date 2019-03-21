import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const styles = {
    root: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
    },
};

const header = (props) => {
    const { classes } = props;
    return ( 
        <div className={classes.root}>
            <AppBar color="secondary" position="relative">
                <Toolbar>
                <Typography variant="h6" color="inherit" className={classes.grow}>
                    App
                </Typography>
                <Button color="inherit">Users</Button>
                <Button color="inherit">Posts</Button>
                <Button color="inherit">Albums</Button>
                <Button color="inherit">Todos</Button>
                </Toolbar>
            </AppBar>
        </div>
     );
}
 
export default withStyles(styles)(header);