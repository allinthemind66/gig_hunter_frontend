import React from 'react'
import UserGigs from '../components/UserGigs'
import UserAvatar from '../components/UserAvatar'
import UserBio from '../components/UserBio'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/userActions'
class UserPage extends React.Component {

  componentDidMount = () => {
    // debugger
    const id = this.props.match.params.id
    console.log('the component did mount in userPage')
    this.props.actions.fetchUserData(id)
  }


  render(){
    return(
      <div><h1>This is an individual User page page</h1>
      {<UserAvatar name={this.props.user.name}/>}
      {<UserBio user={this.props.user}/>}
      {<UserGigs gigs={this.props.user.gigs} />}
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {user: state.users.userData}
}

const mapDispatchToProps = (dispatch) => {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage)
