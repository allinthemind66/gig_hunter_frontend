import React from 'react'
import {bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions/userActions'
import HomePostedIndividualGig from './HomePostedIndividualGig'
class HomePostedGigs extends React.Component {

  componentDidMount(){
    this.props.actions.fetchUserPostedGigs()
  }

  render(){
    // debugger
    return(
      <div>
        <h3>Your Posted Gigs</h3>
        <ul>
        {this.props.userPostedGigs.map(gig => <HomePostedIndividualGig gig={gig} key={gig.id}/>)}
      </ul>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {actions: bindActionCreators(actions, dispatch)}
}

const mapStateToProps = (state) => {
  return {userPostedGigs: state.users.userPostedGigs}
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePostedGigs)
