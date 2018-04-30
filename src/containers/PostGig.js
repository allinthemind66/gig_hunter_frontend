import React from 'react'
import * as actions from '../actions/gigsActions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
class PostGig extends React.Component {
  state = {
    name: '',
    location: '',
    group: '',
    time: '',
    date: '',
    description: ''
  }

  componentDidMount = () => {
      const token = localStorage.getItem('token')
      if(!token){
        this.props.history.push('/login')
      }
  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    }, () => console.log(this.state))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.actions.postGig(this.state)
    this.setState = {
      name: '',
      location: '',
      group: '',
      time: '',
      date: ''
    }
    this.props.history.push('/gigSearch')
  }

  render(){
    return(
      <div>
        <h3>Post Gig</h3>
        <form onSubmit={this.handleSubmit} className="ui form">
          <label>Name</label>
          <input type="text" name="name" value={this.state.name} onChange={this.handleOnChange}/>
          <label>Description</label>
          <textarea type="text-area" name="description" value={this.state.description} onChange={this.handleOnChange}/>
          <label>Location</label>
          <input type="text" name="location" value={this.state.location} onChange={this.handleOnChange}/>
          <label>Group</label>
          <input type="text" name="group" value={this.state.group} onChange={this.handleOnChange}/>
          <label>Time</label>
          <input type="time" name="time" value={this.state.time} onChange={this.handleOnChange}/>
          <label>Date</label>
          <input type="date" name="date" onChange={this.handleOnChange}/>
          <input type='submit'/>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(null, mapDispatchToProps)(PostGig)
