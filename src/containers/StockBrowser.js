import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class StockBrowser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            stocks: []
        };
    }

    componentDidMount() {
        // Here we are using the Axios package to retrieve "dummy" API data
        axios.get('https://pacific-earth-77905.herokuapp.com/api/companies/')
            .then(response => {
                this.setState({ stocks: response.data });
            })
            .catch(function (error) {
                alert('Error with api call ... error=' + error);
            });
    }

    render() {
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
        Company List
      </h2>
    </div>
    <div className="column is-narrow">
                     <nav className="breadcrumb has-arrow-separator" aria-label="breadcrumbs">
  <ul>
    <li><Link
 to={"/home"}><u>Home</u></Link></li>
    <li className="is-active"><Link
 to={"/stocks"}>Companies</Link></li>
  </ul>
</nav>
</div>
</div>
</div>
  </div>
</section>
            
             <div className="container is-fullhd">
            <table className="table is-bordered is-striped is-narrow is-hoverable stocksTable">
       <thead>

       </thead>
       <tbody>
       {
            this.state.stocks.map(function(stock) {
            return (
                <tr key={stock.symbol}>
                <td className="stocksTable">
                <Link to={"/stock/" + stock.symbol}><img className="stocksImg" src={'../logos/' + stock.symbol + '.svg'} alt="" key={stock.symbol}/></Link>
                <p className="stocksTable" >
                <Link to={"/stock/" + stock.symbol}>{stock.name}</Link>
                </p>
                </td>
                </tr>);
            })
            }
            
            
               
            
       

  </tbody>
  </table>
       </div></div>
        );
    }
}

export default StockBrowser;
