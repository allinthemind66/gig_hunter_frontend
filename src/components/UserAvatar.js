import React from 'react'
import {bindActionCreators} from 'redux'
import * as actions from '../actions/userActions'
import * as friendsActions from '../actions/friendsActions'
import { connect } from 'react-redux'
import SendMessageModal from './SendMessageModal'
class UserAvatar extends React.Component {



componentDidMount = () => {
}
handleImgSubmit = (data) => {
  this.props.actions.sendImageToController(data)
}

handleFriendRequest = () => {
  this.props.friendsActions.createFriendRequest(this.props.user.id)
}

  render(){
    
    debugger
    let renderAddFriendButton = ()=> {
      if(this.props.userFriends.length > 0 && this.props.userFriends.find(userFriend => userFriend.id === this.props.user.id)){
        return (<button className="ui button">Already Friends <i class="check icon"></i></button>)
      }
      else if (this.props.friendRequests.length > 0 && this.props.friendRequests.find(userFriend => userFriend.user_id === this.props.user.id)) {
        return (<button className="ui button">Friend Request Sent <i class="user plus icon"/></button>)
      }

      else if (this.props.user.id !== this.props.userData.id) {
        debugger
        return (
          <p></p>

        )
      }
      else{
        return(
          <button className="ui button" onClick={this.handleFriendRequest}>Add Friend <i class="user plus icon"></i></button>

        )
      }
    }
    return(
      <div className="userPageAvatarWrapper">
        <h2>{this.props.name}</h2>
        <div class="ui cards">
          <div class="card">
            <div class="image">
              {/* {this.props.user.img_url ? <img className="avatar" src={this.props.user.img_url} alt="user_img"/> : <img className="avatar" src={require(`../userImgs/defaultImg.png`)} alt="user_img"/>} */}
              {this.props.user.img_url ? <img /*className="avatar userAvatarPhoto"*/ src={this.props.user.img_url} alt="user_img"/> : <img className="avatar" src={require(`../userImgs/defaultImg.png`)} alt="user_img"/>}
            </div>
          </div>
        </div>
        <div>
          {renderAddFriendButton()}
          {/* {this.props.userFriends.length > 0 ? this.props.userFriends.find(userFriend => userFriend.id === this.props.user.id ? <button className="ui button" onClick={this.handleFriendRequest}>Add Friend <i class="user plus icon"></i></button> : <button className="ui button" onClick={this.handleFriendRequest}>Already Friends <i class="user plus icon"></i></button>) : null} */}
        {/* <button className="ui button" onClick={this.handleFriendRequest}>Add Friend <i class="user plus icon"></i></button> */}
        {/* <button className='ui button'>Send Message <i class="envelope icon"></i></button> */}
        <SendMessageModal/>
      </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch),
    friendsActions: bindActionCreators(friendsActions, dispatch),
  }
}

const mapStateToProps = (state) => {
  return {
    userData: state.users.userData,
    userFriends: state.users.friends,
    friendRequests: state.users.friendRequests
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserAvatar)
