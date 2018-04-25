import React from 'react'

export default class Login extends React.Component {
  state = {
    username: '',
    password: ''
  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render(){
    return(
      <div>
        <h2>Welcome Back!</h2>
        <h3>Sign In!</h3>
        <form className="ui form">
          <label>Username</label>
          <input type="text" name="username" value={this.state.username} onChange={this.handleOnChange}/>
          <label>Password</label>
          <input type="text" name="password" value={this.state.password} onChange={this.handleOnChange}/>
        </form>
      </div>
    )
  }
}
