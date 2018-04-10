import React from 'react';
import { NavLink } from 'react-router-dom';

const HeaderMenu = function (props) {

  return (
    <div className="navbar-end">
        <div  className="navbar-menu is-active">
    <div className="navbar-start">
      <div className="navbar-item has-dropdown is-hoverable" id="menu">
        <a className="navbar-link">
          Menu
        </a>
        <div className="navbar-dropdown is-boxed">
        <NavLink className="navbar-item is-tab "
            to={ {pathname: "/home"}}>Home</NavLink>
      <NavLink className="navbar-item is-tab "
            to={ {pathname: "/chat"}}>Chat</NavLink>
        <NavLink className="navbar-item is-tab "
      
            to={ {pathname: "/user/:id"}}>Portfolio</NavLink>
        <NavLink className="navbar-item is-tab "
            to={ {pathname: "/stocks"}}>Companies</NavLink>
        <NavLink className="navbar-item is-tab "
            to={ {pathname: "/visual"}}>Stock Visualizer</NavLink>
        
      <NavLink className="navbar-item is-tab "
            to={ {pathname: "/about"}}>About Us</NavLink>
        </div>
      </div>
    </div>
    </div>
    
    </div>

  );
}
export default HeaderMenu;
