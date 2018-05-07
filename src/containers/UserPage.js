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
    const token = localStorage.getItem('token')
    if(!token){
      this.props.history.push('/login')
    }
    else{
      const id = this.props.match.params.id
      console.log('the component did mount in userPage')
      this.props.actions.fetchUserData(id)

    }
  }

  parseDate = (date) => {
    let parts = date.split('-');
 // new Date(year, month [, day [, hours[, minutes[, seconds[, ms]]]]])
    let newDate = new Date(parts[0], parts[1]-1, parts[2]);
    return newDate.toDateString()
  }


  render(){
    return(
      <div><h1>This is an individual User page</h1>
      {<UserAvatar user={this.props.user} name={this.props.user.name}/>}
      {<UserBio user={this.props.user}/>}
      {<UserGigs parseDate={this.parseDate} gigs={this.props.user.gigs} />}
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
