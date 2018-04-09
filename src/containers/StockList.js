import React, { Component } from 'react';
import axios from 'axios';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css'

class StockList extends Component {
 constructor(props) {
        super(props);
        this.state = {
            priceInfo: [],
            listMonth: "01",
            selected: "January"
        };
        // instead of using arrow syntax, this is a common way
        // to bind "this" correctly for React event handlers
     this._onSelect = this._onSelect.bind(this);
 }
    
  _onSelect (option) {
    this.setState({selected: option})
    
            axios.get('https://pacific-earth-77905.herokuapp.com/api/price/' + this.props.stockID + "/" + option.value)
        .then(response => {
            console.log(response.data);
                this.setState({ priceInfo: response.data });
            })
            .catch(function (error) {
                alert('Error with api call ... error=' + error);
            });
    
  }
    
    componentDidMount() {//Populate with default month (January) on view load
        axios.get('https://pacific-earth-77905.herokuapp.com/api/price/' + this.props.stockID + "/" + this.state.listMonth)
        .then(response => {
            console.log(response.data);
                this.setState({ priceInfo: response.data });
            })
            .catch(function (error) {
                alert('Error with api call ... error=' + error);
            });
    }
    
render() {
        const defaultOption = this.state.selected
    
    const options = [
  {value: "01", label: 'January'},
  {value: "02", label: 'February'}, 
  {value: "03", label: 'March'}, 
     {value: "04", label: 'April'},
        {value: '05', label: 'May'},
        {value: '06', label: 'June'},
        {value: '07', label: 'July'},
        {value: '08', label: 'August'},
        {value: '09', label: 'September'},
        {value: '10', label: 'October'},
        {value: '11', label: 'November'},
        {value: '12', label: 'December'}
]
    
        return (
<div className="container">
<article className="section columns">
 <section className="column">

            <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an month" />

            
</section>

 <section className="column">
<h1 className="is-size-5 has-text-weight-bold">Daily Price Information</h1><br />
<table className="table is-narrow is-bordered"><thead><tr><th>Date</th><th>Low</th><th>High</th><th>Close</th></tr></thead>
<tbody>
{
            this.state.priceInfo.map(function(stock) {
            return (
    <tr key={stock.date}>
                <td className="stockDate" key={stock._id}>{stock.date}</td>
                <td className="stockLow" key={stock._id}>{stock.low}</td>
                <td className="stockHigh" key={stock._id}>{stock.high}</td>
                <td className="stockClose" key={stock._id}>{stock.close}</td>
</tr>
                );
            })
}
            
</tbody></table>
            
</section></article>          
            
</div>
    )
  }
}
export default StockList;
