import React, { Component } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { css } from 'glamor';
import { Redirect } from 'react-router-dom';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = { user: props.user,
                   authenticated: false,
                  email: "",
                  pass: ""
                 };
    this.login = this.login.bind(this);
    this.handleEmail = this.handleEmail.bind(this)
    this.handlePass = this.handlePass.bind(this);                                           
    }
    
    handleEmail(e) {
    this.setState({ email: e.target.value });
  }
    
    handlePass(e) {
    this.setState({ pass: e.target.value });
  }
    
       login(e) {
           axios.post('https://pacific-earth-77905.herokuapp.com/api/users/' + this.state.email + "/" + this.state.pass )
            .then((response) => {
                if(response.status === 200) {
				console.log(response.data);
                                   this.setState({authenticated: true})
                this.props.loginProp(this.state.authenticated);
				this.props.userInfo(response.data);
				this.props.chatController();
				return <Redirect to='/home' />;
                } else if (response.status === 204) {
                    
                      


                    
                }
                 });
           
            }

  render() {
     
    return (
      <div>
                        <section className="hero is-light">
  <div className="hero-body">
    <div className="container">
      <h1 className="title">Assignment 2</h1>
      <h2 className="subtitle">Users Stock Portolio Viewer</h2>
</div>
</div>
</section>
      <div className="box">
       <div className="columns">
       <div className="column is-4 is-offset-4">    
<form>        
        <div className="field" >
 <label className="label">Email</label>
 <div className="control has-icons-left">
 <input className={"input " + (this.state.authenticated ? "is-success" : "is-danger")} 
 type="text"
placeholder="Email"
onChange={this.handleEmail} />
 <span className="icon is-small is-left">
 <i className={"fas fa-user"}></i>
 </span>
 </div>
 </div>
        
<div className="field">
 <label className="label">Password</label>
 <div className="control has-icons-left">
 <input className={"input " + (this.state.authenticated ? "is-success" : "is-danger")}
 type="password"
placeholder="Password" 
onChange={this.handlePass}/>
 <span className="icon is-small is-left">
 <i className={"fas fa-lock"}></i>
 </span>
 </div>
 </div>
        
        <div className="field">
		  <p className="control">
	
        <div onClick={this.login.bind(this)} className="button is-success">
		      Login
		    </div>
		  </p>
		</div>
        </form>
        </div></div>

        
      </div></div>
    );
  }
}
export default Login;
