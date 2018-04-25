import React from 'react'

export default class SignUp extends React.Component {
  state = {
    username: '',
    password: '',
    city: '',
    primaryInstrument: '',

  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render(){
    return(
      <div>
        <h2>Sign Up!</h2>
        <form className="ui form">
          <label>Username</label>
          <input type="text" name="username" value={this.state.username} onChange={this.handleOnChange}/>
          <label>Password</label>
          <input type="text" name="password" value={this.state.password} onChange={this.handleOnChange}/>
          <label>City</label>
          <input type="text" name="city" value={this.state.city} onChange={this.handleOnChange}/>
          <label>Primary Instrument</label>
          <input type="text" name="primaryInstrument" value={this.state.primaryInstrument} onChange={this.handleOnChange}/>
          <label>Secondary Instrument</label>
          <input type="text" name="secondaryInstrument" value={this.state.secondaryInstrument} onChange={this.secondaryInstrument}/>
        </form>
      </div>
    )
  }
}
