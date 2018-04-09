import React, { Component } from 'react';
import stocks from '../data/stocks.json';
import { Link } from 'react-router-dom';

class SingleStock extends Component {

    constructor(props) {
        super(props);

        this.state = {
            stockID: this.props.match.params.id,
            stock: []
        };
    }


    render() {
        if (!this.state.stockID) {
            return null;
        }
        else {

            let stockID = this.state.stockID;
            let stock = stocks.filter(function (sP) {
                return sP.symbol === stockID;
            });
            console.log(stock[0].symbol);
            return (
                <div>
                              <section className="hero is-light">
  <div className="hero-body">
    <div className="container">
    <div className="columns is-vcentered">
    <div className="column">
      <h1 className="title">
        Assignment 1
      </h1>
      <h2 className="subtitle">
        {stock[0].name}
      </h2>
    </div>
    <div className="column is-narrow">
                     <nav className="breadcrumb has-arrow-separator" aria-label="breadcrumbs">
  <ul>
    <li><Link
 to={"/home"}><u>Home</u></Link></li>
     <li><Link
 to={"/stocks"}><u>Stocks</u></Link></li>
    <li className="is-active"><Link
 to={"/"}>Stock</Link></li>
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
  <div className="card-image">
    <figure className="image">
     <img src={'../logos/' + stock[0].symbol + '.svg'} alt="" />
    </figure>
  </div>
  </div>
  <div className="column">
  <div className="card-content">
    <div className="media">
      <div className="media-left">
      </div>
    </div>
    <div className="content">
    <li>Symbol: {stock[0].symbol} </li>
    <li>Sector: {stock[0].sector} </li>
    <li>Sub-Industry: {stock[0].subIndustry} </li>
    <li>Address: {stock[0].address} </li>
    </div>
  </div>
  </div>
</div>
</div>
</div>
</div>
            );
        }
    }
}



export default SingleStock;
