import React from 'react'
// import HomeUserGigs from '../components/HomeUserGigs'
import UserHomeAvatar from '../components/UserHomeAvatar'
// import HomePostedGigs from '../components/HomePostedGigs'
import HomeGigsMenu from './HomeGigsMenu'
import * as actions from '../actions/userActions'
// import * as gigActions from '../actions/gigsActions'
import {bindActionCreators } from 'redux'
import { connect } from 'react-redux'
class Home extends React.Component {
  componentDidMount(){
    const token = localStorage.getItem('token')
    if(!token){
      this.props.history.push('/login')
    }
    else {
      let id = localStorage.getItem('id')
      this.props.actions.fetchUserData(id)
    }
  }

  handleRemoveGig = (gig) => {
    this.props.gigActions.removeGigFromUser(gig)
  }
  render(){
    return(
      <div className='wrapper'>
      <div className='userAvatarWrapper'>
        {<UserHomeAvatar user={this.props.user}/>}
        <div>
          <h2>Welcome Back {this.props.user.name}!</h2>
          <h5>Stats</h5>
        {this.props.user.gigs? <p>You have applied for {this.props.user.gigs.length} gigs!</p> : null}
        <p>You have posted {this.props.homePostedGigs.length} gigs!</p>
        <p>You have 0 messages in your inbox.</p>
        <p>Rating: 4.5</p>
      </div>
      </div>
      {/* <div className="userHomeWrapper"> */}
      {<HomeGigsMenu/>}
      {/* {<HomeUserGigs/>}
      {<HomePostedGigs/>} */}
      {/* </div> */}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {actions: bindActionCreators(actions, dispatch)}
}

const mapStateToProps = (state) => {
  return {user: state.users.userData, currentUser: state.auth.currentUser, homePostedGigs: state.users.userPostedGigs}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
