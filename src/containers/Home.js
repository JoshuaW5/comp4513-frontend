import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component {

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
      <h1 className="title">Assignment 2</h1>
      <h2 className="subtitle">
        Users Stock Portolio Viewer
      </h2>
</div>
</div>
</section>
      <div className="box">
            <div className="container">
            <div className="columns">
  <div className="column is-one-fourth">
        <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src=" https://placeimg.com/640/480/nature/grayscale" alt="" />
          </figure>
        </div>
        <div className="card-content">
          <div className="content">
            Browse your portfolio
          </div>
          <Link className="button  is-fullwidth"
 to={"/users/" + this.props.userid}>
 View Portfolio
 </Link>
        </div>
      </div>
</div>
  <div className="column is-one-fourth">
        <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src="https://placeimg.com/640/480/tech/grayscale" alt="" />
          </figure>
        </div>
        <div className="card-content">
          <div className="content">
            Browse All Companies
          </div>
          <Link className="button  is-fullwidth"
 to={"/stocks"}>
 View Companies
 </Link>
        </div>
      </div>
</div>
 <div className="column is-one-fourth">
        <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src="https://placeimg.com/640/480/arch/grayscale" alt="" />
          </figure>
        </div>
        <div className="card-content">
          <div className="content">
            View Stock Visualizer
          </div>
          <Link className="button  is-fullwidth"
 to={"/visual"}>
 View Stock Visualizer
 </Link>
        </div>
      </div>
</div>        
  <div className="column is-one-fourth">
        <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src="https://placeimg.com/640/480/people/grayscale" alt="" />
          </figure>
        </div>
        <div className="card-content">
          <div className="content">
            Learn About Us
          </div>
          <Link className="button  is-fullwidth"
 to={"/about"}>
 View About Us
 </Link>
        </div>
      </div>
</div>
            </div>
            </div>
            </div>
            </div>
    );
  }
}
export default Home;
