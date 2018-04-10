import React, { Component } from 'react';
import UserDetailItem from './UserDetailItem.js';

class UserCompleteDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: props.user
        };
        // instead of using arrow syntax, this is a common way
        // to bind "this" correctly for React event handlers
        this.handleItemChange = this.handleItemChange.bind(this);
        this.openAddress = this.openAddress.bind(this);
        this.openCompany = this.openCompany.bind(this);
    }

    /* Called when the user changes the content in a UserDetailItem control.
     */
    handleItemChange(value, identifier) {
        let newUser = this.state.user;
        newUser[identifier] = value;
        this.setState({ user: newUser });
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

    render() {
        return (
            <div className="container">
            <div className="columns">
 <section className="column">
 <form >
 <UserDetailItem place="ID" icon="fa-address-card"
 type="text" label="ID"
identifier="id"
currentValue={this.state.user.id}
handleTextChange={this.handleItemChange} />
 
 <UserDetailItem place="First Name" icon="fa-user"
 type="text" label="First Name"
 identifier="last_name"
currentValue={this.state.user.first_name}
handleTextChange={this.handleItemChange} />
            
<UserDetailItem place="Last Name" icon="fa-user"
 type="text" label="Last Name"
 identifier="first_name"
currentValue={this.state.user.last_name}
handleTextChange={this.handleItemChange} />

 <UserDetailItem place="e.g. alexsmith@gmail.com"
 icon="fa-envelope"
type="email" label="Email"
 identifier="email"
 currentValue={this.state.user.email}
 handleTextChange={this.handleItemChange} />
 
  </form>
  </section>

</div>
</div>
        );
    }
}
export default UserCompleteDetails;
