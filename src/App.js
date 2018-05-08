import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar.js'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './actions/authActions'
import Login from './containers/Login'
import SignUp from './containers/SignUp'
import Home from './containers/Home'
import GigPage from './containers/GigPage'
import UserPage from './containers/UserPage'
import PostGigForm from './containers/PostGigForm'
import GigSearch from './containers/GigSearch'
import UserSearch from './containers/UserSearch'
import Inbox from './containers/Inbox'
import {api} from './services/api'
class App extends Component {

  componentDidMount(){
    const token = localStorage.getItem('token')
    if(token){
      // console.log('there is a token', token)
      api.auth.getCurrentUser().then(resp => {
        console.log('this is the response', resp)
        // debugger
        const currentUser = {user: resp}
        this.props.actions.handleMounting(currentUser)
      })
    }
  }

  render() {
    return (
      <Router>
        <div className="app">
          {this.props.currentUser.id ? <Navbar /> : null}
          {/* <Navbar /> */}
          <Route exact path="/login" render={props =>{return <Login {...props}/>}  }/>
          <Route exact path="/signUp" component={SignUp}/>
          <Route exact path="/user/:id" component={UserPage}/>
          <Route exact path="/gigs/:id" component={GigPage}/>
          <Route exact path="/gigSearch" component={GigSearch}/>
          <Route exact path='/inbox' component={Inbox}/>
          <Route exact path="/" component={Home} />
          <Route exact path="/gig-page" component={GigPage}/>
          <Route exact path="/postGigForm" component={PostGigForm}/>
          <Route exact path="/userSearch" component={UserSearch}/>
        </div>
      </Router>
    );
  }
}
const mapStateToProps = (state) => {
  return {currentUser: state.auth.currentUser}
}

const mapDispatchToProps = (dispatch) => {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
