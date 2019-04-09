import React, { Component, Fragment } from "react";
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import axios from "axios";

import UserDropDownMenuItem from '../UsersDropdown/userDropdownMenuItem';

const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    formControl: {
      margin: theme.spacing.unit,
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing.unit * 2,
    },
  });

class UserDropdown extends Component {


    url = "https://jsonplaceholder.typicode.com/users";
    
    usersArr = [];
    constructor(props){
        super(props)
        axios
        .get(this.url)
        .then(response => {
            response.data.forEach(user=>{
                let userForDropDown = {
                    id:null,
                    name:null
                }
                userForDropDown.id = user.id;
                userForDropDown.name = user.name;
                this.usersArr.push(userForDropDown);
            })
            this.setState({ users: this.usersArr });
        })
        .catch(error => {
            console.log(error);
        });
   } 
    
    
    
    state = {
        users: null
    };
   
    componentDidMount() {
       
    }

    changeHandler = (event) => {
        const selectedItem = event.target.value;
        console.log(selectedItem);
    }

    render() { 
        
        const { classes } = this.props;
        
        return ( 
           
            // <FormControl className={classes.formControl}>
            //     <InputLabel>Select User</InputLabel>
            //    {this.state.users && (
            //     <Select
            //     value={this.state.users[0].id}
            //     onChange={()=> this.changeHandler}
            //     >
            //         <MenuItem value={''}><em>None</em></MenuItem>
            //         <UserDropDownMenuItem usersItems={this.state.users} />
            //     </Select>
            //     )}
            // </FormControl>
            
            
            this.state.users && (
            <Fragment>
                <br/>
                <select name="myselect">
                    <UserDropDownMenuItem usersItems={this.state.users} />
                </select>
                <br/><br/><br/><br/>
            </Fragment>
            )
        );
    }
}
 
export default withStyles(styles)(UserDropdown);