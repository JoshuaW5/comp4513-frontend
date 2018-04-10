import React, { Component } from 'react';
import {BarChart} from 'react-easy-chart';
import axios from 'axios';



class StockSummary extends Component {
 constructor(props) {
        super(props);
        this.state = {
            stockID: this.props.stockID,
            stock: this.props.stock,
            stockMthPrice: []
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
            componentDidMount() {
        // Here we are using the Axios package to retrieve "dummy" API data
        axios.get('https://pacific-earth-77905.herokuapp.com/api/avg/price/' + this.state.stockID)
            .then(response => {
            
            var chartData = response.data;
            
            chartData.forEach(function(e) {
                e.x = e._id;
                delete e._id;
                
            });
            
            chartData.forEach(function(e) {
                e.y = e.Avg;
                delete e.Avg;
                
            });
            
            console.log(chartData);
            
                this.setState({ stockMthPrice: chartData });
            })
            .catch(function (error) {
                alert('Error with api call ... error=' + error);
            });
                

    }

    render() {
        
        if(!this.props.stock || this.props.stock.length === 0) {
            return null;
        }
        else {}
        
        return (
           <div className="container is-fullhd">
    <div className="columns">
    <div className="column">
    <li>Symbol: {this.props.stock[0].symbol} </li>
    <li>Sector: {this.props.stock[0].sector} </li>
    <li>Sub-Industry: {this.props.stock[0].subIndustry} </li>
    <li>Address: {this.props.stock[0].address} </li>
    </div>
    <div className="column">
    <h1 className="is-size-5 has-text-weight-bold">Stock Value By Month:</h1>
    <br />

    <BarChart
        colorBars
        axisLabels={{x: 'Month', y: 'Avg Price'}}
        axes
        data={this.state.stockMthPrice}
  />    
  </div>
  </div>
</div>
        );
    }

}
export default StockSummary;
