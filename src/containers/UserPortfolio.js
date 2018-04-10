import React, { Component } from 'react';
import UserPortfolioItem from '../containers/UserPortfolioItem.js'
import axios from 'axios';

class UserPortfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: props.user[0],
            sort: 'symbol',
            portfolioDetails: [],
            stocks: [],
            symbol: false,
            name: false,
            amount: false,
            total: false
        };
        this.compareBy = this.compareBy.bind(this);
        this.sortBy = this.sortBy.bind(this);
    }

    compareBy(key) { //modified from https://codepen.io/austinlyons/pen/YpmyJB
        if (key === 'name' || key === 'symbol') {
              return function (a, b) {
                if (a[key].toUpperCase() < b[key].toUpperCase()) return -1;
                if (a[key].toUpperCase() > b[key].toUpperCase()) return 1;
                return 0;
              };
            }
     
        else {
               return function (a, b) {
                if (a[key] < b[key]) return -1;
                if (a[key] > b[key]) return 1;
                return 0;
            }

        }
    }

    sortBy(key, order) {
        let arrayCopy = this.state.portfolioDetails;
        
        if (this.state.symbol) {
            arrayCopy.reverse();
            this.setState({ symbol: false })
        }
        else {
            arrayCopy.sort(this.compareBy(key));

            this.setState({
                portfolioDetails: arrayCopy,
                symbol: true
            });
        }

    }


    /* This lifecycle function is called when a component receives new
     props values. Our parent component passes a user object to this
     component, so we need to update state when the props value changes.
    */
    componentWillReceiveProps(nextProps) {
        if (nextProps !== this.props) {
            this.setState({ user: nextProps.user });

        }
    }

    componentDidMount() {
        axios.get('https://pacific-earth-77905.herokuapp.com/api/portfolio/' + this.state.user.id)
            .then(response => {
                this.setState({portfolioDetails: response.data})
                
        axios.get('https://pacific-earth-77905.herokuapp.com/api/companies/')
            .then(response => {
                this.setState({stocks: response.data})
                console.log(this.state.portfolioDetails)
                console.log(this.state.stocks)

        let portfolioInfo = [];

        this.state.portfolioDetails.forEach(function (arrayItem) {
            response.data.forEach(function (arrayItem2) {
                if (arrayItem.symbol === arrayItem2.symbol) {
                    let stockInfo = {name: arrayItem2.name,
                                     symbol: arrayItem2.symbol,
                                     owned: arrayItem.owned}
                    
                    portfolioInfo.push(stockInfo);
                }
            });
        });
        
        this.setState({ portfolioDetails: portfolioInfo });
            
            })
            .catch(function (error) {
                alert('Error with api call ... error=' + error);
            });        
                
            
    
            
            })
            .catch(function (error) {
                alert('Error with api call ... error=' + error);
            });
        
    }

    render() {
        return (
            
<div className="section columns">
<section className="column is-one-third"></section>
<section className="column is-one-third">
<table className="table is-bordered is-striped is-narrow is-hoverable">
  <thead>
    <tr>
      <th onClick={() => this.sortBy('symbol')}><u><a>Symbol</a></u></th>
      <th onClick={() => this.sortBy('name')}><u><a>Name</a></u></th>
      <th onClick={() => this.sortBy('amount')}><u><a>Amount</a></u></th>
    <th onClick={() => this.sortBy('total')}><u><a>Current Value</a></u></th>

    </tr>
  </thead>
  <tbody>

        {
        
        this.state.portfolioDetails.map( (stock, index) => {
            return ( <UserPortfolioItem 
                    key={index}
                    symbol={stock.symbol}
                    name={stock.name} 
                    amount={stock.owned}
                    total={stock.owned*10} //update to stock.price later
/>);
})
        
        
     }   
  
  </tbody>
  </table></section></div>
        );
    }
}
export default UserPortfolio;
