import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import { SocketProvider, socketConnect } from 'socket.io-react';

class ChatViewer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };

    this.send = this.send.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value
    });
  }

  send() { //call this function to send() a message (when submitting a HTML form?)
    console.log('Sending message:', this.state.text);
    this.props.socket.emit('message', this.props.name+ " > " + this.state.text);
    this.setState({ text: "" });
  }

  render() {
    return (
      <div>
            <div className="chats">
                { 
                this.props.messages.map(function(message, i){
  console.log('test');
  return <li message={i}>{message.text}</li>;
})
                    
                }
            </div>
            
            <div className="field is-grouped">
  <p className="control is-expanded">
    <input className="input" name="text" value={this.state.text} onChange={this.handleChange}></input>
  </p>
  <p className="control">
    <a className="button is-info"onClick = { this.send }>
      Send
    </a>
  </p>
</div>
            
            
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
 to={"/users"}>
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
            </div></div>
    );
    
  }
}
export default ChatViewer;
