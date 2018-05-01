// import React from 'react'
// const UserGigs = (props) => {
//
//   return(
//     <div>
//       <h3>Upcoming Gigs</h3>
//       <ul>
//         {props.gigs ? props.gigs.map(gig => <div key={gig.id}><p>{gig.description}<button onClick={() => props.handleRemoveGig(gig)} className='ui red button'>X</button></p></div>) : null}
//       </ul>
//     </div>
//   )
// }
//
// export default UserGigs

import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/userActions'
import { bindActionCreators } from 'redux'
import { Link} from "react-router-dom";
class HomeUserGigs extends React.Component {
  parseDate = (date) => {
    let parts = date.split('-');
 // new Date(year, month [, day [, hours[, minutes[, seconds[, ms]]]]])
    let newDate = new Date(parts[0], parts[1]-1, parts[2]);
    return newDate.toDateString()
  }
  render(){
    // debugger
    // let gigs = this.props.userGigs ? this.props.userGigs.map(gig => <div key={gig.id}><p>{gig.description}<button onClick={() => this.props.actions.removeGigFromUser(gig)} className='ui red button'>X</button></p></div>) : null
    return(
      <div>
        <h3>Upcoming Gigs</h3>
        <ul>
          {this.props.userGigs ? this.props.userGigs.map(gig => <div key={gig.id}><p><Link to={`/gigs/${gig.id}`}>{gig.venue} - {this.parseDate(gig.date)}</Link><button onClick={() => this.props.actions.removeGigFromUser(gig)} className='ui red button'>X</button></p></div>) : null}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // debugger
  return {user: state.users.userData, userGigs: state.users.userGigs}
}

const mapDispatchToProps = (dispatch) => {
  return {actions: bindActionCreators(actions, dispatch)}
}


export default connect(mapStateToProps, mapDispatchToProps)(HomeUserGigs)
