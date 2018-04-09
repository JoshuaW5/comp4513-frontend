import React, { Component } from 'react';
class UserMessageItem extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = { currentValue: props.currentValue };
    }



    handleChange(e) {
        // save the new value in our state
        this.setState({ currentValue: e.target.value });
        // and call the event handler passed to us by the parent
        this.props.handleTextChange(e.target.value, this.props.identifier);
    }

    render() {
        let values = [];
        for (let value of Object.values(this.props.currentValue)) {
            if (typeof value === 'object') {
                for (let value2 of Object.values(value)) {
                    values.push(value2);
                }
            }
            else {
                values.push(value);
            }
        }
        return (
            <div className="message-body"  ref={this.props.identifier}>
            {values.map(function(arrayValue){
            return <p key={arrayValue}>{arrayValue}</p>;
          })}
  </div>
        );
    }
}
export default UserMessageItem;
