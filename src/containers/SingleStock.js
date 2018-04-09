import React, { Component } from 'react';
import axios from 'axios';
import StockDetails from '../containers/StockDetails.js';
import StockSummary from '../containers/StockSummary.js';
import StockList from '../containers/StockList.js';

class SingleStock extends Component {

    constructor(props) {
        super(props);

        this.state = {
            stockID: this.props.match.params.id,
            listData: [],
            summaryData: [],
            stock: [],
            summary: true,
            list: false
        };
        
        this.summary = this.summary.bind(this);
        this.list = this.list.bind(this);
    }
    
        componentDidMount() {
        // Here we are using the Axios package to retrieve "dummy" API data
        axios.get('https://pacific-earth-77905.herokuapp.com/api/company/' + this.state.stockID)
            .then(response => {
                this.setState({ stock: response.data });
            })
            .catch(function (error) {
                alert('Error with api call ... error=' + error);
            });
    }
    
    
    summary() {
        this.state.summary ? this.setState({ summary: false }) : this.setState({ summary: true });
        this.state.list ? this.setState({ list: false }) : this.setState({ list: true });
    }

    list() {
        this.state.list ? this.setState({ list: false }) : this.setState({ list: true });
        this.state.summary ? this.setState({ summary: false }) : this.setState({ summary: true });

    }



    render() {
                

        let toDisplay = <StockSummary stock={this.state.stock} stockID={this.state.stockID} />
        
        if (this.state.list === true) { toDisplay = <StockList stock={this.state.stock} stockID={this.state.stockID}/> }


        return (

            <div>
        
        <StockDetails stock={this.state.stock} />
            
            
            
<div className="card">
<div className="tabs is-centered">
  <ul>
    <li className={this.state.summary ? "is-active" : ""}>
      <a onClick={this.summary}>
        <span className="icon is-small"><i className="fas fa-file-alt"></i></span>
        <span>Summary</span>
      </a>
    </li>
        <li className={this.state.list ? "is-active" : ""}>
      <a onClick={this.list}>
        <span className="icon is-small"><i className="fas fa-file-alt"></i></span>
        <span>List</span>
      </a>
    </li>
  </ul>
</div>
             <div className="card-content">
             {toDisplay}
             </div>
             </div>
             
             </div>
        );
    }
}
        


export default SingleStock;
