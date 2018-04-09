import React, { Component } from 'react';
import axios from 'axios';



class StockPrice extends Component {
 constructor(props) {
        super(props);
        this.state = {
            stockID: this.props.stockID,
            stock: this.props.stock,
            mth: this.props.mth,
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
        axios.get('https://pacific-earth-77905.herokuapp.com/api/price/' + this.state.stockID +"/" + this.state.mth)
        .then(response => {
                this.setState({ stock: response.data });
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
            <div>Hello</div>
        );
    }

}
export default StockPrice;
