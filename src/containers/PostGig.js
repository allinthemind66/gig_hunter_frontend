import React from 'react'
import * as actions from '../actions/gigsActions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
class PostGig extends React.Component {
  state = {
    venue: '',
    location: '',
    group: '',
    style: '',
    type: '',
    pay: '',
    concert_dress: '',
    time: '',
    date: '',
    rehearsals: '',
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
      venue: '',
      location: '',
      group: '',
      style: '',
      type: '',
      pay: '',
      concert_dress: '',
      time: '',
      date: '',
      description: ''
    }
    this.props.history.push('/gigSearch')
  }

  render(){
    return(
      <div>
        <h3>Post Gig</h3>
        <form onSubmit={this.handleSubmit} className="ui form">
          <label>Venue</label>
          <input type="text" name="venue" value={this.state.venue} onChange={this.handleOnChange}/>
          <label>Location</label>
          <input type="text" name="location" value={this.state.location} onChange={this.handleOnChange}/>
          <label>Group/Ensemble Name</label>
          <input type="text" name="group" value={this.state.group} onChange={this.handleOnChange}/>
          <label>Style Of Music</label>
          <input type="text" name="style" value={this.state.style} onChange={this.handleOnChange}/>
          <label>Type Of Event</label>
          <input name="type" value={this.state.type} onChange={this.handleOnChange}/>
          <label>Total Pay($)</label>
          <input type="number" name="pay" value={this.state.pay} onChange={this.handleOnChange}/>
          <label>Concert Dress</label>
          <input name="concert_dress" value={this.state.concert_dress} onChange={this.handleOnChange}/>
          <label>Time</label>
          <input type="time" name="time" value={this.state.time} onChange={this.handleOnChange}/>
          <label>Date</label>
          <input type="date" name="date" onChange={this.handleOnChange}/>
          <label>Num Of Rehearsals</label>
          <input type="number" name="rehearsals" value={this.state.rehearsals} onChange={this.handleOnChange}/>
          <label>Description</label>
          <textarea type="text-area" name="description" value={this.state.description} onChange={this.handleOnChange}/>
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
