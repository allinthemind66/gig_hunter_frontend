import React from 'react'
import { Link} from "react-router-dom";
import {bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions/userActions'
class HomePostedIndividualGig extends React.Component {
  state = {
    applicants: [],
    attendees: []

  }

  componentDidMount(){
    fetch(`http://localhost:3000/api/v1/gigs/${this.props.gig.id}/applicants`)
    .then(resp => resp.json())
    // .then(json => console.log(json))
    .then(json => this.setState({applicants: json}))
    // debugger

    fetch(`http://localhost:3000/api/v1/gigs/${this.props.gig.id}`)
    .then(resp => resp.json())
    .then(json => this.setState({attendees: json.users}))
  }

  addGigToUser = (gig, userId) => {
    // debugger
    fetch(`http://localhost:3000/api/v1/user_gigs/`,{
          method: 'POST',
          body: JSON.stringify({gigId: gig.id, userId: userId}),
          headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
        .then(resp => resp.json())
        .then(json => this.setState({
          attendees: [...this.state.attendees, json],
          //figure out how to remove gig from applicants instead of just clearing it.
          applicants: []
        }))
        // .then(json => console.log(json))
  }

  denyGig = (gigId, user) => {
    let i = this.state.applicants.indexOf(user)
    // this.setState({applicants: this.state.applicants.slice(0, i).concat(this.state.applicants.slice(i+1))})
    // debugger
    fetch(`http://localhost:3000/api/v1/gig_applications/deleteGigApplication`, {
      method: "DELETE",
      headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({gigId: gigId, userId: user.id})
    })
    .then(() => this.setState({applicants: this.state.applicants.slice(0, i).concat(this.state.applicants.slice(i+1))}) )
  }

  removeUserFromGig = (gigId, user) => {
    let i = this.state.attendees.indexOf(user)
    console.log('inside remove user from gig')
    fetch(`http://localhost:3000/api/v1/userGig/delete`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({gigId: gigId, userId: user.id})
    })
    .then(() => this.setState({attendees: this.state.attendees.slice(0, i).concat(this.state.attendees.slice(i+1))}) )
  }

  render(){
    return(
      <div>
        <h2><Link to={`/gigs/${this.props.gig.id}`}> {this.props.gig.venue} - {this.props.gig.date}</Link></h2>
        <div>
          <h3>Pending Applications</h3>
          {this.state.applicants.length > 0 ? this.state.applicants.map(user => <div key={user.id}><Link to={`/user/${user.id}`}><p>{user.name}</p></Link><button onClick={() => this.addGigToUser(this.props.gig, user.id)} className="ui green button">Accept</button><button onClick={() => this.denyGig(this.props.gig.id, user)} className="ui red button">Decline</button></div>) : <p>There are currently no applicants for this gig.</p>}
        </div>
        <div>
          <h3>Musicians Playing This Gig</h3>
          {this.state.attendees.length > 0 ? this.state.attendees.map(user => <div key={user.id}><Link to={`/user/${user.id}`}><p>{user.name}</p></Link><button onClick={() => this.removeUserFromGig(this.props.gig.id, user)}className="ui red button">Remove</button></div>) : <p>There a currently no musicians signed up to play</p>}
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(null, mapDispatchToProps)(HomePostedIndividualGig)
