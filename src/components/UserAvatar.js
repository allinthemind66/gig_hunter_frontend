import React from 'react'
import {bindActionCreators} from 'redux'
import * as actions from '../actions/userActions'
import * as friendsActions from '../actions/friendsActions'
import { connect } from 'react-redux'
import SendMessageModal from './SendMessageModal'
class UserAvatar extends React.Component {


handleImgSubmit = (data) => {
  this.props.actions.sendImageToController(data)
}

handleFriendRequest = () => {
  this.props.friendsActions.createFriendRequest(this.props.user.id)
}

  render(){
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
        <button className="ui button" onClick={this.handleFriendRequest}>Add Friend <i class="user plus icon"></i></button>
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

export default connect(null, mapDispatchToProps)(UserAvatar)
