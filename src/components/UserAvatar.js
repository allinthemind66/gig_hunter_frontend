import React from 'react'
import {bindActionCreators} from 'redux'
import * as actions from '../actions/userActions'
import { connect } from 'react-redux'
class UserAvatar extends React.Component {


handleImgSubmit = (data) => {
  this.props.actions.sendImageToController(data)
}

  render(){
    return(
      <div>
        <h2>{this.props.name}</h2>
        {this.props.user.img_url ? <img className="avatar" src={this.props.user.img_url} alt="user_img"/> : <img className="avatar" src={require(`../userImgs/defaultImg.png`)} alt="user_img"/>}
        <div>
        <button className="ui button">Add Friend <i class="user plus icon"></i></button>
        <button className='ui button'>Send Message <i class="envelope icon"></i></button>
      </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(null, mapDispatchToProps)(UserAvatar)
