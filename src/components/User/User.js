import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const styles = theme => ({
    card: {
        maxWidth: 400
    },
    actions: {
        display: "flex"
    },
    expand: {
        transform: "rotate(0deg)",
        marginLeft: "auto",
        transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.shortest
        })
    },
    expandOpen: {
        transform: "rotate(180deg)"
    },
    avatar: {
        backgroundColor: red[500]
    }
});

class User extends Component {
    state = { expanded: false };

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

    render() {
        const { classes } = this.props;

        const users = [];

        for (let item of this.props.usersList.values()) {
            let usersData = {
                id: null,
                name: null,
                initial: null
            };

            usersData.id = item.id;
            usersData.name = item.name;
            usersData.initial = item.name.substring(0, 1);
            
            users.push(usersData);
        }
        
        return users.map(user => {
            return (
                <Card key={user.id} className={classes.card}>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="user" className={classes.avatar}>
                                {user.initial}
                            </Avatar>
                        }
                        title={user.name}
                    />
                    <CardContent>
                        <Typography component="p">
                            This impressive paella is a perfect party dish and a fun
                            meal to cook together with your guests. Add 1 cup of
                            frozen peas along with the mussels, if you like.
                        </Typography>
                    </CardContent>
                    <CardActions className={classes.actions} disableActionSpacing>
                        <IconButton
                            className={classnames(classes.expand, {
                                [classes.expandOpen]: this.state.expanded
                            })}
                            onClick={this.handleExpandClick}
                            aria-expanded={this.state.expanded}
                            aria-label="Show more"
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                    <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>
                                Add rice and stir very gently to distribute. Top
                                with artichokes and peppers, and cook without
                                stirring, until most of the liquid is absorbed, 15
                                to 18 minutes. Reduce heat to medium-low, add
                                reserved shrimp and mussels, tucking them down into
                                the rice, and cook again without stirring, until
                                mussels have opened and rice is just tender, 5 to 7
                                minutes more. (Discard any mussels that don’t open.)
                            </Typography>
                            <Typography>
                                Set aside off of the heat to let rest for 10
                                minutes, and then serve.
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
            );
        });
        
    }
}

User.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(User);
