import React, { Component } from 'react';
import {PieChart} from 'react-easy-chart';
import axios from 'axios';


class UserSummary extends Component {
    
    
    constructor(props) {
        super(props);
        this.state = { 
            user: props.user[0],
            portfolioDetails: [],
            totalStocks: 0,
            totalValue: 0,
            stockPercent: []
        };
        
        this.calculateStocks = this.calculateStocks.bind(this);
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
        axios.get('https://pacific-earth-77905.herokuapp.com/api/portfolio/percentage/' + this.props.user[0].id)
            .then(response => {
                console.log(this.props.user[0].id)
                var chartData = response.data;

                chartData.forEach(function(e) {
                    e.value = e.total;
                    delete e.total;

                });

                chartData.forEach(function(e) {
                    e.key = e._id;
                    delete e._id;

                });

                console.log(chartData);
            
                    this.setState({ stockPercent: chartData });
                })
                .catch(function (error) {
                    alert('Error with api call ... error=' + error);
                });
        
        axios.get('https://pacific-earth-77905.herokuapp.com/api/portfolio/' + this.state.user.id)
            .then(response => {
            console.log(response.data);
                this.setState({portfolioDetails: response.data})
                
        axios.get('https://pacific-earth-77905.herokuapp.com/api/companies/')
            .then(response => {
                this.setState({stocks: response.data})

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

   calculateStocks() {
       var total = 0;
       console.log(this.state.portfolioDetails.length)
       
        for (var i; i < this.state.portfolioDetails.length; i++) {
            total += this.state.portfolioDetails[i].owned;
            
        }
       return total;
       
   }
    
    
    render() {
        
        return (
           <div className="container is-fullhd">
            
           <div className="columns">
           <div className="column">
                <li>Total Number of Companies:  {this.state.portfolioDetails.length}</li>
                <li>Total Number of Stocks:  {this.state.portfolioDetails.reduce((prev, next) => prev + next.owned,0)}</li>
                <li>Current Value of Portfolio: 129381 </li>
    <br /><br /> 
          
    <table className= "table is-narrow is-bordered"><thead>
            <tr>
        <th>Stock</th>
        <th>Percentage</th>
        </tr>
            </thead>
        <tbody>
        {
            this.state.stockPercent.map ( (stock, index) => {
               return ( 
                <tr key={stock.key + " "}>
                <td key={stock.key}>{stock.key}</td>
                <td key={stock.value}>{stock.value} %</td>
                </tr>
            )})   
        }
       </tbody> 
    </table>
            
            </div>
       <div className="column">
       <h1 className="is-size-5 has-text-weight-bold">Percentage Summary of Porfolio </h1>
    <br />
     <PieChart
       labels
       size={300}
       data = {this.state.stockPercent}
   // style = {"height: 100px"}
    />   

            
  </div>
  </div>
</div>
        );
    }
}
export default UserSummary;
