import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/userActions'
import * as gigActions from '../actions/gigsActions'
import { bindActionCreators } from 'redux'
import { Link} from "react-router-dom";
class HomeUserGigs extends React.Component {
  parseDate = (date) => {
    let parts = date.split('-');
    let newDate = new Date(parts[0], parts[1]-1, parts[2]);
    return newDate.toDateString()
  }
  render(){
    return(
      <div className='homeUserGigs'>
        <h3>Upcoming Gigs</h3>
        <ul>
          {this.props.userGigs ? this.props.userGigs.map(gig => <div key={gig.id}><p><Link to={`/gigs/${gig.id}`}>{gig.venue} - {this.parseDate(gig.date)}</Link>{/*<button onClick={() => this.props.gigActions.removeGigFromUser(gig)}>*/}<i onClick={() => this.props.gigActions.removeGigFromUser(gig, this.props.user.id)} className="trash icon"></i></p></div>): null}
        </ul>
        {this.props.userGigs && this.props.userGigs.length === 0 ? <p>You currently Have no Upcoming gigs</p> : null}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {user: state.users.userData, userGigs: state.users.userGigs}
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch),
    gigActions: bindActionCreators(gigActions, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(HomeUserGigs)
