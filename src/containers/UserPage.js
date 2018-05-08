import React from 'react'
import UserGigs from '../components/UserGigs'
import UserAvatar from '../components/UserAvatar'
import UserBio from '../components/UserBio'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/userActions'
class UserPage extends React.Component {


  componentDidMount = () => {
    const token = localStorage.getItem('token')
    if(!token){
      this.props.history.push('/login')
    }
    else{
      const id = this.props.match.params.id
      this.props.actions.fetchUserData(id)
    }
  }

  parseDate = (date) => {
    let parts = date.split('-');
    let newDate = new Date(parts[0], parts[1]-1, parts[2]);
    return newDate.toDateString()
  }

  
  render(){
    return(
      <div>
      {<UserAvatar user={this.props.user} name={this.props.user.name}/>}
      <div>
      {<UserBio user={this.props.user}/>}
      {<UserGigs parseDate={this.parseDate} gigs={this.props.user.gigs} />}
      </div>
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
