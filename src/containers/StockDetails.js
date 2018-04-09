import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class StockDetails extends Component {
 constructor(props) {
        super(props);
        this.state = {
            stock: this.props.stock
        };
        // instead of using arrow syntax, this is a common way
        // to bind "this" correctly for React event handlers
    }


    /* Called when the user changes the content in a UserDetailItem control.
     */


    /* This lifecycle function is called when a component receives new
     props values. Our parent component passes a user object to this
     component, so we need to update state when the props value changes.
    */
    

    render() {
if(!this.props.stock || this.props.stock.length === 0) {
            return null;
        }
        else {}
        
        console.log (this.state.stock);
        
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
        {this.props.stock[0].name} - Detailed View
      </h2>
    </div>
    <div className="column is-narrow">
                     <nav className="breadcrumb has-arrow-separator" aria-label="breadcrumbs">
  <ul>
    <li><Link
 to={"/home"}><u>Home</u></Link></li>
     <li><Link  to={"/stocks"}><u>Companies</u></Link></li>
    <li className="is-active"><Link  to={"/"}> {this.props.stock[0].symbol}</Link></li>
  </ul>
</nav>
</div>
</div>
</div>
  </div>
</section>
  <div className="container is-fullhd">
            <div className="card">
                            <div className="columns">
                            <div className="column">
 <div className="card-header-title is-centered">
    <figure className="image">
     <img src={'../logos/' + this.props.stock[0].symbol + '.svg'} alt="" />
    </figure>
  </div>
   <h1 className="title"> <div className="card-header-title is-centered">{this.props.stock[0].name}</div></h1>
  </div>
  <div className="card-content">
    <div className="media">
      <div className="media-left">
      </div>
    </div>
    <div className="content">
  </div>
  </div>
</div>
</div>
</div><br /></div>
        );
    }

}
export default StockDetails;
