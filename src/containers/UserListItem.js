import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UserListItem extends Component {

    /* The parent for this component will handle the selection/click event
     */
    handlerSelectUser = (key) => {
        this.props.select(key);
    }

    render() {
        let classes = "panel-block ";
        classes += this.props.active;
        return (
            <Link
 to={"/user/"+this.props.identifier} className={classes}
            onClick={() => this.props.select(this.props.identifier)} >
 {this.props.children}
 </Link>
        );
    }
}
export default UserListItem;
