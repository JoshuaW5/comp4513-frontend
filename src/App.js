import React, { Component } from 'react';
import HeaderApp from './components/HeaderApp.js';
import { Route } from 'react-router-dom';
import Home from './containers/Home.js';
import UserBrowser from './containers/UserBrowser.js';
import SingleUser from './containers/SingleUser.js';
import SingleStock from './containers/SingleStock.js';
import StockBrowser from './containers/StockBrowser.js';
import AboutUs from './containers/AboutUs.js';
import StockVisual from './containers/StockVisual.js';
import Login from './containers/Login.js';
import ChatViewer from './containers/ChatViewer.js';
import io from 'socket.io-client';
import { css } from 'glamor';
import './App.css';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            roster: [],
            name: '', //update with users name on login
            text: '',
            socket: io.connect('https://morning-everglades-75821.herokuapp.com/'),
            chat: false,
            authenticated: false
        };

        this.setName = this.setName.bind(this);
        this.authCheck = this.authCheck.bind(this);
		this.chatController = this.chatController.bind(this);

    }
	
	chatController() {
	console.log("chatcontroller");
	        this.state.socket.on('connect', function () { //need to implement a way to only connect after logging in.. perhaps do not display this code unless logged in?
            //this.setName();
            var username = "testUsername"; //this will be this.state.name
            this.setState({ text: username + " has logged in" }); //Send logged in message to server after logging in.
            console.log('Sending message:', this.state.text);
            this.state.socket.emit('message', this.state.text);
            this.setState({ text: "" });
        }.bind(this));

        this.state.socket.on('message', function (msg) {
            //when a message is sent to the server, it will send it to all clients and add to their messages array (name and message)
            this.setState({ messages: this.state.messages.concat([msg]) }); //update message state var
            if (window.location.pathname !== "/chat") {
                this.notify(msg);
            }
        }.bind(this));

        this.state.socket.on('roster', function (names) { //see who's logged in
            this.setState({ roster: this.state.roster.concat([names]) });
        }.bind(this));
	}

    setName() { //call this to set the name on login
        this.state.socket.emit('identify', this.state.name);
    }


    notify(message) {
        toast(message.text, {
            // glamor rule
            progressClassName: css({
                background: "#00d1b2"
            })
        });
    }

    authCheck(nextState) {
        this.setState({authenticated: nextState});
    }
	
	userInfo(info) {
		this.setState({name: info.firstname})
	}
    
    render() {

        document.documentElement.className = 'has-navbar-fixed-top'; //Add padding for fixed navbar
		
        return (
            <div>
            
 <HeaderApp />
           <Link
 to={"/chat"}>
 <ToastContainer />
 </Link>
           
 <main >
 <Route path="/" exact component={Login} />
 <Route path="/home" exact component={Home} />
 <Route path="/login" exact render={() => <Login loginProp={this.authCheck} chatController={this.chatController} userInfo={this.userInfo} />} />
 <Route path="/visual" exact component={StockVisual} />
 <Route path="/users" exact component={UserBrowser} />
 <Route path="/user/:id" exact component={SingleUser} />
 <Route path="/stock/:id" exact component={SingleStock} />
 <Route path="/stocks" exact component={StockBrowser} />
 <Route path="/about" exact component={AboutUs} />
  
 <Route path="/chat" exact render={(props) => (
  <ChatViewer {...props} messages={this.state.messages} /**name={this.state.name}**/ socket={this.state.socket}/>
)}/>
 </main>
 </div>
        );
    }
}
export default App;
