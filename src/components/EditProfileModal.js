// import _ from 'lodash'
import React from 'react'
import { Button, Icon, Modal } from 'semantic-ui-react'
import {bindActionCreators} from 'redux'
import * as actions from '../actions/userActions'
import { connect } from 'react-redux'
class ModalExampleScrollingContent extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      form: {
        name: this.props.user.name,
        city: this.props.user.city,
        hometown: this.props.user.hometown,
        bio: this.props.user.bio
      },
      modalOpen: false
    }
  }
  handleOpen = () => {
    this.setState({
    form: {
      name: this.props.user.name,
      city: this.props.user.city,
      hometown: this.props.user.hometown,
      bio: this.props.user.bio
    },
    modalOpen: true,
  })
}
  handleClose = () => this.setState({ modalOpen: false })

  handleOnChange = (e) => {
    this.setState({...this.state,
      form: {...this.state.form,
        [e.target.name]: e.target.value
      }
    }, () => console.log(this.state))
  }

  handleSubmit = () => {
    this.props.actions.updateUserProfile(this.state.form)
    this.setState({
      form: {
        name: this.props.user.name,
        city: this.props.user.city,
        hometown: this.props.user.hometown,
        bio: this.props.user.bio
      },
      modalOpen: false,
    })
  }
  render(){
    return(
      <Modal trigger={<Button onClick={this.handleOpen}>Edit Profile</Button>} open={this.state.modalOpen}
        onClose={this.handleClose}>
      <Modal.Header>{this.props.user.name}</Modal.Header>
      <Modal.Content image scrolling>

        <Modal.Description>
          <div className="main">
            <h3 className="headline">Edit Profile</h3>
            <form onSubmit={this.handleSubmit} className="ui form">
              <label>Name</label>
              <input type="text" value={this.state.form.name} name="name" onChange={this.handleOnChange}/>
              <label>City</label>
              <input type="text" value={this.state.form.city} name="city" onChange={this.handleOnChange}/>
              <label>Hometown</label>
              <input type="text" name="hometown" value={this.state.form.hometown} onChange={this.handleOnChange}/>
              <label>Bio</label>
              <textarea type="text-area" name="bio" value={this.state.form.bio} onChange={this.handleOnChange}/>
            </form>
          </div>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button primary onClick={this.handleSubmit}>
          Submit <Icon name='right chevron' />
        </Button>
      </Modal.Actions>
    </Modal>

    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {actions: bindActionCreators(actions, dispatch)}
}

const mapStateToProps = (state) => {
  return {user: state.users.userData}
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalExampleScrollingContent)
