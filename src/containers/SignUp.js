import React from 'react'
import {api} from '../services/api'
import * as actions from '../actions/authActions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link} from "react-router-dom";

class SignUp extends React.Component {
  state = {
    name: '',
    username: '',
    password: '',
    city: '',
    primaryInstrument: '',
    secondaryInstrument: ''

  }

  componentDidMount(){
    const token = localStorage.getItem('token')
    if(token){
      this.props.history.push('/')
    }
  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleOnSubmit = (e) => {
    e.preventDefault();
    api.auth.signUp(this.state).then(user => {
      if(user.message){
        this.setState({error: true})
      }
      else{
        this.setState({error: false})
        this.props.actions.handleSignUp(user)
        this.props.history.push('/')
      }
    })
  }

  render(){
    return(
      <div className='loginForm'>
        <div className="gridColumn2">
          <div className="center">
        <h1>Welcome To Gig Hunter</h1>
        <h2>Sign Up!</h2>
        <Link className='ui button' to='/login'>Login?</Link>
      </div>
        <form onSubmit={this.handleOnSubmit} className="ui form">
          <label>Name</label>
          <input type="text" name="name" value={this.state.name} onChange={this.handleOnChange}/>
          <label>Username</label>
          <input type="text" name="username" value={this.state.username} onChange={this.handleOnChange}/>
          <label>Password</label>
          <input type="text" name="password" value={this.state.password} onChange={this.handleOnChange}/>
          <label>City</label>
          <input type="text" name="city" value={this.state.city} onChange={this.handleOnChange}/>
          <label>Primary Instrument</label>
          <input type="text" name="primaryInstrument" value={this.state.primaryInstrument} onChange={this.handleOnChange}/>
          <label>Secondary Instrument</label>
          <input type="text" name="secondaryInstrument" value={this.state.secondaryInstrument} onChange={this.handleOnChange}/>
          <input className='ui button' type="submit"/>
        </form>
      </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(null, mapDispatchToProps)(SignUp)
