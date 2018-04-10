import React, { Component } from 'react';
import HeaderMenu from './HeaderMenu.js';
import { Link } from 'react-router-dom';
import axios from 'axios';


class HeaderBar extends Component {

 constructor(props) {
  super(props);
  this.state = {
   openBurger: false,
    userID: this.props,
  };
  // instead of using arrow syntax, this is a common way
  // to bind "this" correctly for React event handlers
  this.openBurger = this.openBurger.bind(this);
 }

  componentDidMount() {
        // Here we are using the Axios package to retrieve "dummy" API data
        axios.get('https://pacific-earth-77905.herokuapp.com/api/getUserIDName/' + this.state.userID)
            .then(response => {
                this.setState({ userData: response.data });
            })
            .catch(function (error) {
                alert('Error with api call ... error=' + error);
            });
    }    
    
 openBurger() {
  this.state.openBurger ? this.setState({ openBurger: false }) : this.setState({ openBurger: true });
 }

    
    
 render() {
  return (

   <nav className="navbar is-primary is-fixed-top">
 <div className="navbar-brand">
 <Link
 to={"/home"} className="navbar-item">
 <span className="icon">
<i className="fab fa-lg fa-react"></i>
 </span></Link>
 <Link
 to={"/home"} className="navbar-item">
 <h1 className="title">{this.state.userData.first_name} + " " +  {this.state.userData.last_name} </h1></Link>
  
<Link  to={"/chat"} className="navbar-item">Chat</Link>
  <Link  to={"/login"} className="navbar-item">Logout</Link>

    <div className={"navbar-burger " + (this.state.openBurger ? "is-active" : "")} onClick={this.openBurger}>
      <span></span>
      <span></span>
      <span></span>
    </div>
 </div>

     <div className="navbar-end">

        <div  className={"navbar-menu " + (this.state.openBurger ? "is-active" : "")}> 
<HeaderMenu />
</div>
</div>
 
 </nav>
  );
 }
}
export default HeaderBar;
