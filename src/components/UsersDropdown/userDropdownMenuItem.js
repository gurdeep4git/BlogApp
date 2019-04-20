import React from "react";

const userDropDownMenuItem = props => {
    return props.usersItems.map(item => {
        return (
            <option key={item.id} value={item.id}>
                {item.name}
            </option>
        );
    });
};

export default userDropDownMenuItem;
