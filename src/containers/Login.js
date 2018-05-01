import React from 'react'
import {api} from '../services/api'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions/authActions'
import { Link} from "react-router-dom";
class Login extends React.Component {
  state = {
    username: '',
    password: '',
    error: false
  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleOnSubmit = (e) => {
    e.preventDefault();
    api.auth.login(this.state).then(user => {
      if(user.message){
        this.setState({error: true})
      }
      else{
        this.setState({error: false})
        this.props.actions.handleLogin(user)
        this.props.history.push('/')
      }
    })
  }


  render(){
    return(
      <div>
        <h2>Welcome Back!</h2>
        <Link className="ui button" to='/signUp'>Sign Up?</Link>
        <h3>Sign In!</h3>
        {this.state.error ? <p>There is an error</p> : null}
        <form onSubmit={this.handleOnSubmit} className="ui form">
          <label>Username</label>
          <input type="text" name="username" value={this.state.username} onChange={this.handleOnChange}/>
          <label>Password</label>
          <input type="text" name="password" value={this.state.password} onChange={this.handleOnChange}/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {currentUser: state.auth.currentUser}
}

const mapDispatchToProps = (dispatch) => {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
