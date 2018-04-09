import React, { Component } from 'react';
import UserListItem from '../containers/UserListItem.js';
import axios from 'axios';
import { Link } from 'react-router-dom';


class UserBrowser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // in our state, store list of users and the currently selected user
            currentUserId: 1,
            users: []
        };
        this.handleSelect = this.handleSelect.bind(this);
    }

    /* Each UserListItem can generate a selection/click event, which we, the
     parent, must handle. This passed key parameter will contain the user.id
     value of the selected user.
    */
    handleSelect(key) {
        this.setState({ currentUserId: key });
    }

    render() {
        if (!this.state.users || this.state.users.length === 0) {
            return null;
        }
        else {
            let currentID = this.state.currentUserId;
            return (
                <div>
                  <section className="hero is-light">
  <div className="hero-body">
    <div className="container">
    <div className="columns is-vcentered">
    <div className="column">
      <h1 className="title">
        Assignment 2
      </h1>
      <h2 className="subtitle">
        User List
      </h2>
    </div>
    <div className="column is-narrow">
                     <nav className="breadcrumb has-arrow-separator" aria-label="breadcrumbs">
  <ul>
    <li><Link
 to={"/home"}><u>Home</u></Link></li>
    <li className="is-active"><Link
 to={"/users"}>User List</Link></li>
  </ul>
</nav>
</div>
</div>
</div>
  </div>
</section>
<div className="container">
                <article className="section columns">
 <section className="column">
 <nav className="panel">
 <h3 className="panel-heading">User List</h3>
 {
 // loop through the users retrieved from our API and
 // generate a UserListItem component for each user
 this.state.users.map( (user,ind) => {
 // we will add support for active class later
 // activeClass is assigned in if statement, but eslint is flagging it as unused, next line will disable warning
 // eslint-disable-next-line
 let activeClass = "";
 if (user.id === currentID) activeClass = "is-active";
return (
 <UserListItem key={user.id} index={ind}
 identifier={user.id}
 select={this.handleSelect}
 >{user.name}</UserListItem>)
 })
 }
 </nav>
 </section>
 </article>
 </div>
 </div>
            );
        }
    }
    /* This React lifecycle event method is called *after* a component is
 mounted (that is, inserted into the DOM). This means it is called
12 Lab 20c: Intermediate React
 *after* the render, though render will happen again after this
 event as well. It is typical to make calls to external
 web services during this event.
 */
    componentDidMount() {
        // Here we are using the Axios package to retrieve "dummy" API data
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                response.data.sort(function (a, b) {
                    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
                    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }

                    // names must be equal
                    return 0;
                });

                this.setState({ users: response.data });
            })
            .catch(function (error) {
                alert('Error with api call ... error=' + error);
            });
    }

}
export default UserBrowser;
