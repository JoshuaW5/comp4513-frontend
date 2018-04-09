import React, { Component } from 'react';
import {LineChart} from 'react-easy-chart';
import axios from 'axios';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css'
import { Link } from 'react-router-dom';


class StockVisual extends Component {
 constructor(props) {
        super(props);
        this.state = {
            companies: [],
            priceInfo1: [],
            priceInfo2: [],
            priceInfo3: [],
            listMonth: "01",
            listStock: "MMM",
            selected: "January",
            selected1: {label: "3M Company", value: "MMM"},
            selected2: {label: "3M Company", value: "MMM"},
            selected3: {label: "3M Company", value: "MMM"},
            stockMthPrice: [
            [{x: 1, y:1}, {x: 2, y:2}, {x: 3, y:3}, {x: 4, y:4}],
            [{x: 1, y:5}, {x: 2, y:6}, {x: 3, y:6}, {x: 4, y:5}],
            [{x:1 , y:4}, {x: 2, y:3}, {x: 3, y:2}, {x: 4, y:1}],]

        };
        // instead of using arrow syntax, this is a common way
        // to bind "this" correctly for React event handlers
     this._onSelect = this._onSelect.bind(this);
     this._onSelect1 = this._onSelect1.bind(this);
     this._onSelect2 = this._onSelect2.bind(this);
     this._onSelect3 = this._onSelect3.bind(this);

     
 }
    
  _onSelect (option) {
    this.setState({
        selected: option.label,
        listMonth: option.value,
        })  
    
            axios.get('https://pacific-earth-77905.herokuapp.com/api/price/' + this.state.selected1.value + "/" + this.state.listMonth)
        .then(response => {  
            
            var chartData = response.data
            var count = 1;
            
            chartData.forEach(function(e) {
                e.x = count;
                delete e.date;
                delete e._id;
                delete e.high;
                delete e.low;
                delete e.name;
                delete e.open;
                delete e.volume; 
                count++
            });
            
            chartData.forEach(function(e) {
                e.y = e.close;
                delete e.close;
                
            });
            
            this.setState({ priceInfo1: chartData });                   
            })
        
        axios.get('https://pacific-earth-77905.herokuapp.com/api/price/' + this.state.selected2.value + "/" + this.state.listMonth)
        .then(response => {      
             
            var chartData = response.data
            var count = 1;
            
            chartData.forEach(function(e) {
                e.x = count;
                delete e.date;
                delete e._id;
                delete e.high;
                delete e.low;
                delete e.name;
                delete e.open;
                delete e.volume; 
                count++
            });
            
            
            chartData.forEach(function(e) {
                e.y = e.close;
                delete e.close;
                
            });
            
            this.setState({ priceInfo2: chartData });                   
            })
        
        axios.get('https://pacific-earth-77905.herokuapp.com/api/price/' + this.state.selected3.value + "/" + this.state.listMonth)
        .then(response => {      
            var chartData = response.data
            var count = 1;
            
            chartData.forEach(function(e) {
                e.x = count;
                delete e.date;
                delete e._id;
                delete e.high;
                delete e.low;
                delete e.name;
                delete e.open;
                delete e.volume; 
                count++
            });
            
            
            chartData.forEach(function(e) {
                e.y = e.close;
                delete e.close;
                
            });
            
            this.setState({ priceInfo3: chartData });  
            
            })
    }
    
      _onSelect1 (option1) {
    this.setState({selected1: option1})
    
            axios.get('https://pacific-earth-77905.herokuapp.com/api/price/' + option1.value + "/" + this.state.listMonth)
        .then(response => {      
             
            var chartData = response.data
            var count = 1;
            
            chartData.forEach(function(e) {
                e.x = count;
                delete e.date;
                delete e._id;
                delete e.high;
                delete e.low;
                delete e.name;
                delete e.open;
                delete e.volume; 
                count++
            });
            
            chartData.forEach(function(e) {
                e.y = e.close;
                delete e.close;
                
            });
            
            this.setState({ priceInfo1: chartData });                   
            })
            .catch(function (error) {
                alert('Error with api call ... error=' + error);
            });
      }
    
      _onSelect2 (option2) {
    this.setState({selected2: option2})
    
            axios.get('https://pacific-earth-77905.herokuapp.com/api/price/' + option2.value + "/" + this.state.listMonth)
        .then(response => {      
             
            var chartData = response.data
            var count = 1;
            
            chartData.forEach(function(e) {
                e.x = count;
                delete e.date;
                delete e._id;
                delete e.high;
                delete e.low;
                delete e.name;
                delete e.open;
                delete e.volume; 
                count++
            });
            
            chartData.forEach(function(e) {
                e.y = e.close;
                delete e.close;
                
            });
            
            this.setState({ priceInfo2: chartData });                   
            })
            .catch(function (error) {
                alert('Error with api call ... error=' + error);
            });
    
  }
    
      _onSelect3 (option3) {
    this.setState({selected3: option3})
    
            axios.get('https://pacific-earth-77905.herokuapp.com/api/price/' + option3.value + "/" + this.state.listMonth)
        .then(response => {      
             
            var chartData = response.data
            var count = 1;
            
            chartData.forEach(function(e) {
                e.x = count;
                delete e.date;
                delete e._id;
                delete e.high;
                delete e.low;
                delete e.name;
                delete e.open;
                delete e.volume; 
                count++
            });
            
            chartData.forEach(function(e) {
                e.y = e.close;
                delete e.close;
                
            });
            
            this.setState({ priceInfo3: chartData });                   
            })
            .catch(function (error) {
                alert('Error with api call ... error=' + error);
            });
    
  }
    
    componentDidMount() {//Populate with default month (January) and default stock (MMM) on view load
        axios.get('https://pacific-earth-77905.herokuapp.com/api/price/' + this.state.selected1.value + "/" + this.state.listMonth)
        .then(response => {  
            
            var chartData = response.data
            var count = 1;
            
            chartData.forEach(function(e) {
                e.x = count;
                delete e.date;
                delete e._id;
                delete e.high;
                delete e.low;
                delete e.name;
                delete e.open;
                delete e.volume; 
                count++
            });
            
            chartData.forEach(function(e) {
                e.y = e.close;
                delete e.close;
                
            });
            
            this.setState({ priceInfo1: chartData });                   
            })
        
        axios.get('https://pacific-earth-77905.herokuapp.com/api/price/' + this.state.selected2.value + "/" + this.state.listMonth)
        .then(response => {      
             
            var chartData = response.data
            var count = 1;
            
            chartData.forEach(function(e) {
                e.x = count;
                delete e.date;
                delete e._id;
                delete e.high;
                delete e.low;
                delete e.name;
                delete e.open;
                delete e.volume; 
                count++
            });
            
            
            chartData.forEach(function(e) {
                e.y = e.close;
                delete e.close;
                
            });
            
            this.setState({ priceInfo2: chartData });                   
            })
        
        axios.get('https://pacific-earth-77905.herokuapp.com/api/price/' + this.state.selected3.value + "/" + this.state.listMonth)
        .then(response => {      
            var chartData = response.data
            var count = 1;
            
            chartData.forEach(function(e) {
                e.x = count;
                delete e.date;
                delete e._id;
                delete e.high;
                delete e.low;
                delete e.name;
                delete e.open;
                delete e.volume; 
                count++
            });
            
            
            chartData.forEach(function(e) {
                e.y = e.close;
                delete e.close;
                
            });
            
            this.setState({ priceInfo3: chartData });  
            
            })
            .catch(function (error) {
                alert('Error with api call ... error=' + error);
            });
        
                axios.get('https://pacific-earth-77905.herokuapp.com/api/companies/ssc')
        .then(response => {    
                    var options1 = response.data;
                    
                    options1.forEach(function(e) {
                e.value = e.symbol;
                delete e.symbol;
            });
    
options1.forEach(function(e) {
                e.label = e.name;
                delete e.name;
            });
                this.setState({companies: options1});
                    console.log(this.state.companies)
            })
            .catch(function (error) {
                alert('Error with api call ... error=' + error);
            });

    }
    
render() {
    
        const defaultOption = this.state.selected
        const defaultOption1 = this.state.selected1
        const defaultOption2 = this.state.selected2
        const defaultOption3 = this.state.selected3

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
    

var lineData = [this.state.priceInfo1, this.state.priceInfo2, this.state.priceInfo3];
    
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
        Stock Visualizer
      </h2>
    </div>
    <div className="column is-narrow">
                     <nav className="breadcrumb has-arrow-separator" aria-label="breadcrumbs">
  <ul>
    <li><Link
 to={"/home"}><u>Home</u></Link></li>
    <li className="is-active"><Link
 to={"/user"}>Stock Visualizer</Link></li>
  </ul>
</nav>
</div>
</div>
</div>
  </div>
</section>
            
<div className="container">
<article className="section columns">
 <section className="column">

            Select Month:<br />
            <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select a Month" /><br />
            
            Select Stock 1:<br />
            <Dropdown options={this.state.companies} onChange={this._onSelect1} value={defaultOption1} placeholder="Select a Stock 1" /><br />
            
            Select Stock 2:<br />
            <Dropdown options={this.state.companies} onChange={this._onSelect2} value={defaultOption2} placeholder="Select a Stock 2" /><br />
            
            Select Stock 3:
            <Dropdown options={this.state.companies} onChange={this._onSelect3} value={defaultOption3} placeholder="Select a Stock 3" /><br />

            
</section>

<section className="column">
    <h1 className="is-size-5 has-text-weight-bold">Stock Value By Month:</h1>
    <br />

            
    <LineChart 
        axisLabels={{x: 'Day', y: 'Money'}}
        axes
        width={400}
        height={200}
        interpolate={'cardinal'}
        data={lineData}
  />    
  </section>
            
</article>          
            
</div></div>
    )
  }
}
export default StockVisual;
