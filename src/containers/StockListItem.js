import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class StockListItem extends Component {
 
 handlerSelectUser = (key) => {
 this.props.select(key);
 } 

 render() {

 return (
 <Link className="panel-block" to={"/stock/" + this.props.identifier} key={this.props.identifier}  onClick={() => this.props.select(this.props.identifier)} >
 <figure className="icon is-large is-left"><img src={'../logos/'+this.props.identifier+'.svg'} alt="logo"/></figure>
 <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p> {this.props.children}
 </Link>
 );
 }
}
export default StockListItem;

