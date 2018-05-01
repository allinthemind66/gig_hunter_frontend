import React from 'react'
import HomeUserGigs from '../components/HomeUserGigs'
import UserAvatar from '../components/UserAvatar'
import * as actions from '../actions/userActions'
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
    console.log('remove gig has been clicked!')
    this.props.actions.removeGigFromUser(gig)
  }
  render(){
    return(
      <div><h1>This is the user home page</h1>
      <p>Welcome {this.props.user.name}</p>
      {<UserAvatar/>}
      {<HomeUserGigs />}
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
