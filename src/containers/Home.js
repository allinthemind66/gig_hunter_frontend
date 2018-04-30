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
    else{
      let id = 1
      this.props.actions.fetchUserData(id)
    }
  }

  handleRemoveGig = (gig) => {
    console.log('remove gig has been clicked!')
    console.log(gig)
  }
  render(){
    return(
      <div><h1>This is the user home page</h1>
      {<UserAvatar/>}
      {<HomeUserGigs handleRemoveGig={this.handleRemoveGig} gigs={this.props.user.gigs}/>}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {actions: bindActionCreators(actions, dispatch)}
}

const mapStateToProps = (state) => {
  return {user: state.users.userData}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
