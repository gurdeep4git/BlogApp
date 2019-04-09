
import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';

const userDropDownMenuItem = (props) => {
    debugger;
    return props.usersItems.map(item=>{
        //return <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>;
        return <option key={item.id} value={item.id}>{item.name}</option>;
    })
}
 
export default userDropDownMenuItem;