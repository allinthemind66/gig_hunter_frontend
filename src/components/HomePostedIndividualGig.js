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
    let data = fetch(`http://localhost:3000/api/v1/gigs/${this.props.gig.id}/applicants`)
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

  render(){
    return(
      <div>
        <h2>{this.props.gig.venue} - {this.props.gig.date}</h2>
        <div>
          <h3>applicants</h3>
          {this.state.applicants.length > 0 ? this.state.applicants.map(user => <div><Link to={`/user/${user.id}`}><p>{user.name}</p></Link><button onClick={() => this.addGigToUser(this.props.gig, user.id)} className="ui green button">Accept</button><button className="ui red button">Decline</button></div>) : <p>There are currently no applicants for this gig.</p>}
        </div>
        <div>
          <h3>Accepted</h3>
          {/* {this.state.attendees.length > 0 ? this.state.attendees.map(user => {<div><p>{user.name}</p></div> null};)} */}

          {this.state.attendees.length > 0 ? this.state.attendees.map(user => <div><Link to={`/user/${user.id}`}><p>{user.name}</p></Link><button className="ui red button">Remove</button></div>) : <p>There a currently no musicians signed up to play</p>}
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(null, mapDispatchToProps)(HomePostedIndividualGig)
