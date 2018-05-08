import React from 'react'
import EditProfileModal from './EditProfileModal'
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'
import {bindActionCreators} from 'redux'
import * as actions from '../actions/userActions'
import { connect } from 'react-redux'
import ReactFilestack from 'filestack-react';
class UserAvatar extends React.Component {


handleImgSubmit = (data) => {
  this.props.actions.sendImageToController(data)
}

  render(){
    const options = {
      accept: 'image/*',
      maxFiles: 5,
      storeTo: {
        location: 's3',
      },
    };
    return(
      <div>
        {this.props.user.img_url ? <img className="avatar" src={this.props.user.img_url} alt="user_img"/> : <img className="avatar" src={require(`../userImgs/defaultImg.png`)} alt="user_img"/>}
        <br/>
          <ReactFilestack
            apikey={'Azn8tUJWMSDmfE1HYLWB9z'}
            buttonText="Edit Profile Image"
            buttonClass="ui button"
            options={options}
            onSuccess={this.handleImgSubmit}
          />
          <EditProfileModal/>
        <h4>{this.props.name}</h4>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(null, mapDispatchToProps)(UserAvatar)
