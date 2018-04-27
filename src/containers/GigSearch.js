import React from 'react'
import { Link, Route } from "react-router-dom";
import * as actions from '../actions/gigsActions'
import * as userActions from '../actions/userActions'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
class GigSearch extends React.Component {
  componentDidMount = () => {
    this.props.actions.fetchAllGigs()
  }

  handleAddGig = (gig) => {
    // debugger
    // console.log('trying to add gig')
    // console.log(gig);
    // this.props.userActions.addGigToUser(gig)
    fetch('http://localhost:3000/api/v1/users/',{
      method: 'POST',
      body: JSON.stringify(gig),
      headers: ({
        'Content-Type': 'application/json'
      })
    })
  }

  render(){
    return(
      <div>
        <h3>All Gigs</h3>
        <ul>
        {this.props.gigs.length > 0 ? this.props.gigs.map(gig => <li key={gig.id}>{gig.location} <Link to={`/gigs/${gig.id}`}>Go To Gig Page</Link><button onClick={() => this.handleAddGig(gig)}>Add Gig</button></li>) : null}
      </ul>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch),
    userActions: bindActionCreators(userActions, dispatch)
  }
}

const mapStateToProps = (state) => {
  return { gigs: state.gigs.gigsData}
}

export default connect(mapStateToProps, mapDispatchToProps)(GigSearch)
