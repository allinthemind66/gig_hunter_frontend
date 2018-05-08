import React from 'react'
import HomeUserGigs from '../components/HomeUserGigs'
import UserHomeAvatar from '../components/UserHomeAvatar'
import HomePostedGigs from '../components/HomePostedGigs'
import * as actions from '../actions/userActions'
import * as gigActions from '../actions/gigsActions'
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
        <h2>Welcome back {this.props.user.name}!</h2>
      </div>
      <div className="userHomeWrapper">
      {<HomeUserGigs/>}
      {<HomePostedGigs/>}
      </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {actions: bindActionCreators(actions, dispatch)}
}

const mapStateToProps = (state) => {
  return {user: state.users.userData, currentUser: state.auth.currentUser}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
