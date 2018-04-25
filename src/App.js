import React, { Component } from 'react';
import './App.css';
import Navbar from './containers/Navbar.js'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './containers/Login'
import SignUp from './containers/SignUp'
import Home from './containers/Home'
import GigPage from './containers/GigPage'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Navbar />
          <Route exact path="/login" component={Login}/>
          <Route exact path="/signUp" component={SignUp}/>

          <Route exact path="/" component={Home} />
          <Route exact path="/gig-page" component={GigPage}/>
        </div>
      </Router>
    );
  }
}

export default App;
