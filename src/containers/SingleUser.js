import React, { Component } from 'react';
import axios from 'axios';
import UserCompleteDetails from '../containers/UserCompleteDetails.js';
import UserPortfolio from '../containers/UserPortfolio.js';
import UserSummary from '../containers/UserSummary.js';
import { Link } from 'react-router-dom';

class SingleUser extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userID: this.props.match.params.id,
            userData: [],
            portfolioData: [],
            details: true,
            portfolio: false
        };

        this.details = this.details.bind(this);
        this.portfolio = this.portfolio.bind(this);
    }

    componentDidMount() {
        // Here we are using the Axios package to retrieve "dummy" API data
        axios.get('https://pacific-earth-77905.herokuapp.com/api/getUserIDName/' + this.state.userID)
            .then(response => {
                this.setState({ userData: response.data });
            })
            .catch(function (error) {
                alert('Error with api call ... error=' + error);
            });
    }

    details() {
        this.state.details ? this.setState({ details: false }) : this.setState({ details: true });
        this.state.portfolio ? this.setState({ portfolio: false }) : this.setState({ portfolio: true });
    }

    portfolio() {
        this.state.portfolio ? this.setState({ portfolio: false }) : this.setState({ portfolio: true });
        this.state.details ? this.setState({ details: false }) : this.setState({ details: true });
    }



    render() {
        if (!this.state.userData || this.state.userData.length === 0) {
            return null;
        }
        else {
            //let address = this.state.usersData.address;
            //let currentUser = this.state.users.find(function (user) {
            //    return user.id === currentID;
            //});
        }

        console.log(this.state.userData);
        console.log(this.props.match.params.id)
        
        let toDisplay = <UserSummary user={this.state.userData} />

        if (this.state.portfolio === true) { toDisplay = <UserPortfolio user={this.state.userData} /> }

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
        {this.state.userData.first_name + " " + this.state.userData.last_name} - Detailed View
      </h2>
    </div>
    <div className="column is-narrow">
                     <nav className="breadcrumb has-arrow-separator" aria-label="breadcrumbs">
  <ul>
    <li><Link
 to={"/home"}><u>Home</u></Link></li>
    <li className="is-active"><Link
 to={"/user"}>User</Link></li>
  </ul>
</nav>
</div>
</div>
</div>
  </div>
</section>
            

<div className="card">
<UserCompleteDetails user={this.state.userData} /> <br />
<div className="tabs is-centered">
  <ul>
    <li className={this.state.details ? "is-active" : ""}>
      <a onClick={this.details}>
        <span className="icon is-small"><i className="fas fa-address-card"></i></span>
        <span>Summary</span>
      </a>
    </li>
    <li className={this.state.portfolio ? "is-active" : ""}>
      <a onClick={this.portfolio}>
        <span className="icon is-small"><i className="fas fa-file-alt"></i></span>
        <span>Portfolio</span>
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



export default SingleUser;
