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
class UserGigs extends React.Component {
  render(){
    // debugger
    // let gigs = this.props.userGigs ? this.props.userGigs.map(gig => <div key={gig.id}><p>{gig.description}<button onClick={() => this.props.actions.removeGigFromUser(gig)} className='ui red button'>X</button></p></div>) : null
    return(
      <div>
        <h3>Upcoming Gigs</h3>
        <ul>
          {this.props.userGigs ? this.props.userGigs.map(gig => <div key={gig.id}><p>{gig.description}<button onClick={() => this.props.actions.removeGigFromUser(gig)} className='ui red button'>X</button></p></div>) : null}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {user: state.users.userData, userGigs: state.users.userGigs}
}

const mapDispatchToProps = (dispatch) => {
  return {actions: bindActionCreators(actions, dispatch)}
}


export default connect(mapStateToProps, mapDispatchToProps)(UserGigs)
