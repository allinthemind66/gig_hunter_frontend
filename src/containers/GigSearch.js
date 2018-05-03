import React from 'react'
import { Link} from "react-router-dom";
import * as actions from '../actions/gigsActions'
import * as userActions from '../actions/userActions'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
class GigSearch extends React.Component {

  componentDidMount = () => {
      const token = localStorage.getItem('token')
      if(!token){
        this.props.history.push('/login')
      }
      else{
        this.props.actions.fetchAllGigs()
      }
  }

  handleApplyGig = (gig) => {
    this.props.userActions.addGigApplication(gig)
  }

  parseDate = (date) => {
    let parts = date.split('-');
 // new Date(year, month [, day [, hours[, minutes[, seconds[, ms]]]]])
    let newDate = new Date(parts[0], parts[1]-1, parts[2]);
    return newDate.toDateString()
  }

  render(){
    return(
      <div>
        <h3>All Gigs</h3>
        <ul>
        {this.props.gigs.length > 0 ? this.props.gigs.map(gig => <li key={gig.id}> {gig.venue} - {this.parseDate(gig.date)} <Link to={`/gigs/${gig.id}`}>Go To Gig Page</Link><button className="ui green button" onClick={() => this.handleApplyGig(gig)}>Apply For This Gig!</button></li>) : null}
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
