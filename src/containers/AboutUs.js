import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AboutUs extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div>
                                          <section className="hero is-light">
  <div className="hero-body">
    <div className="container">
    <div className="columns is-vcentered">
    <div className="column">
      <h1 className="title">
        Assignment 1
      </h1>
      <h2 className="subtitle">
        About Us
      </h2>
    </div>
    <div className="column is-narrow">
                     <nav className="breadcrumb has-arrow-separator" aria-label="breadcrumbs">
  <ul>
    <li><Link
 to={"/home"}><u>Home</u></Link></li>
    <li className="is-active"><Link
 to={"/about"}>About Us</Link></li>
  </ul>
</nav>
</div>
</div>
</div>
  </div>
</section>
            <div className="container">
 <div className="card">
  <div className="card-content">
    <h2 className="is-size-4 has-text-weight-bold">
      COMP 4513
Assignment #2: React App
    </h2>
    <p className="subtitle">
      Joshua Wojak, Famida Ahmad, Abdullah Hausawi
    </p>
    
    <ul className="aboutUs">
    <h3 className="is-size-5 has-text-weight-bold">
Technologies Used:</h3>
    <li>
    React - <a href="https://reactjs.org/">https://reactjs.org/</a>
    </li>
    <li>
    Create React App - <a href="https://github.com/facebook/create-react-app">https://github.com/facebook/create-react-app</a>
    </li>
    <li>
    React Router - <a href="https://reacttraining.com/react-router/">https://reacttraining.com/react-router/</a>
    </li>
    <li>
    CompareBy() Function Modfied From - <a href="https://codepen.io/austinlyons/pen/YpmyJB">https://codepen.io/austinlyons/pen/YpmyJB</a>
    </li>
    <li>
    React Easy Chart <a href="https://rma-consulting.github.io/react-easy-chart/">https://rma-consulting.github.io/react-easy-chart/</a>
    </li>
      <li>
    Bulma <a href="https://bulma.io/">https://bulma.io//</a>
    </li>
    </ul>
  </div>
 
</div>
</div>
 </div>
        );
    }
}
export default AboutUs;
