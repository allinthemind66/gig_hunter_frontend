import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar.js'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './containers/Login'
import SignUp from './containers/SignUp'
import Home from './containers/Home'
import GigPage from './containers/GigPage'
import UserPage from './containers/UserPage'
import PostGig from './containers/PostGig'
import GigSearch from './containers/GigSearch'
class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Navbar />
          <Route exact path="/login" component={Login}/>
          <Route exact path="/signUp" component={SignUp}/>
          <Route exact path="/user/:id" component={UserPage}/>
          <Route exact path="/gigs/:id" component={GigPage}/>
          <Route exact path="/gigSearch" component={GigSearch}/>
          <Route exact path="/" component={Home} />
          <Route exact path="/gig-page" component={GigPage}/>
          <Route exact path="/postGig" component={PostGig}/>
        </div>
      </Router>
    );
  }
}

export default App;
