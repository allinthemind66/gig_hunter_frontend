import React, { Component } from 'react';
import './App.css';
import Navbar from './containers/Navbar.js'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './containers/Home'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Navbar />
          <Route exact path="/" component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
