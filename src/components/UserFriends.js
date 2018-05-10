import React from 'react'
import {bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions/userActions'
import { Link} from "react-router-dom";
class UserFriends extends React.Component {


  render(){
    debugger
    return(
      <div className="userFriends">
        {this.props.friends.length > 0 ? this.props.friends.map(friend => <div className="gigPageUserFriendsDiv"><Link to={`/user/${friend.id}`}><img className='gigPageUserImages' src={friend.img_url} alt='friend'/><h3>{friend.name}</h3></Link></div>) : null}
      </div>
    )
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {actions: bindActionCreators(actions, dispatch)}
// }

const mapStateToProps = (state) => {
  debugger
  return {friends: state.users.friends}
}

export default connect(mapStateToProps, {})(UserFriends)
