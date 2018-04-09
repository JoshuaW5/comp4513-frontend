import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UserPortfolioItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            symbol: props.symbol,
            name: props.name,
            amount: props.amount,
            total: props.total
        };
        // instead of using arrow syntax, this is a common way
        // to bind "this" correctly for React event handlers

    }

    /* This lifecycle function is called when a component receives new
     props values. Our parent component passes a user object to this
     component, so we need to update state when the props value changes.
    */
    componentWillReceiveProps(nextProps) {
        if (nextProps !== this.props) {
            this.setState({
                symbol: nextProps.symbol,
                name: nextProps.name,
                amount: nextProps.amount,
                //total: nextProps.amount*nextProps.price
                total: nextProps.total

            });
        }
    }

    render() {
        return (
            <tr key={this.state.symbol + ""}>
<td key={this.state.symbol}>
<Link
 to={"/stock/" + this.state.symbol}>
 {this.props.symbol}
 </Link>
</td>
            
<td key={this.state.name}>
<Link
 to={"/stock/" + this.state.symbol}>
{this.state.name}
</Link>
</td>
            
<td key={this.state.amount}>
{this.state.amount}
</td>

<td key={this.state.total}>
{this.state.total}
</td>
</tr>
        );
    }
}
export default UserPortfolioItem;
