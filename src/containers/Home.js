import React from 'react'
import HomeUserGigs from '../components/HomeUserGigs'
import UserAvatar from '../components/UserAvatar'
import * as actions from '../actions/userActions'
import {bindActionCreators } from 'redux'
import { connect } from 'react-redux'
class Home extends React.Component {
  componentDidMount(){
    let id = 1
    this.props.actions.fetchUserData(id)
  }
  render(){
    return(
      <div><h1>This is the user home page</h1>
      {<UserAvatar/>}
      {<HomeUserGigs gigs={this.props.user.gigs}/>}
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
