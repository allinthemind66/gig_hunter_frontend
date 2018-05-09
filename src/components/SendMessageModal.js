import React from 'react'
import { Button, Icon, Modal } from 'semantic-ui-react'
import {bindActionCreators} from 'redux'
import * as actions from '../actions/userActions'
import { connect } from 'react-redux'
class SendMessageModal extends React.Component {

    state = {
      form: {
        subject: "",
        city: "",
      },
      modalOpen: false
  }

  handleOpen = () => {
    this.setState({
    modalOpen: true
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
    // this.props.actions.updateUserProfile(this.state.form)
    this.setState({
      form: {
        name: '',
        city: '',

      },
      modalOpen: false,
    })
  }
  render(){
    return(
      <Modal trigger={<Button onClick={this.handleOpen}>Send Message <i class="envelope icon"/></Button>} open={this.state.modalOpen}
        onClose={this.handleClose}>
      <Modal.Header>{this.props.user.name}</Modal.Header>
      <Modal.Content image scrolling>

        <Modal.Description>
          <div className="main">
            <h3 className="headline">Message</h3>
            <form onSubmit={this.handleSubmit} className="ui form">
              <label>Subject</label>
              <input type="text" value={this.state.form.subject} name="subject" onChange={this.handleOnChange}/>
              <label>Content</label>
              <textarea type="text-area" name="content" value={this.state.form.content} onChange={this.handleOnChange}/>
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

// const mapDispatchToProps = (dispatch) => {
//   return {actions: bindActionCreators(actions, dispatch)}
// }

const mapStateToProps = (state) => {
  return {user: state.users.userData}
}

export default connect(mapStateToProps, {})(SendMessageModal)
