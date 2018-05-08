import _ from 'lodash'
import React from 'react'
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'
import {bindActionCreators} from 'redux'
import * as actions from '../actions/gigsActions'
import { connect } from 'react-redux'
class ModalExampleScrollingContent extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      form: {
        venue: '',
        location: '',
        group: '',
        style: '',
        type: '',
        pay: '',
        concert_dress: '',
        time: '',
        date: '',
        rehearsals: '',
        description: '',
      },
      modalOpen: false
    }
  }

  componentDidMount = () => {
    this.setState({
      form: {
        venue: this.props.gig.venue,
        location: this.props.gig.location,
        group: this.props.gig.group,
        style: this.props.gig.style,
        type: this.props.gig.type,
        pay: this.props.gig.pay,
        concert_dress: this.props.gig.concert_dress,
        time: this.props.gig.time,
        date: this.props.gig.date,
        rehearsals: this.props.gig.rehearsals,
        description: this.props.gig.description
      },
      modalOpen: false
    })
    }
  handleOpen = () => this.setState({ ...this.state, modalOpen: true })
  handleClose = () => this.setState({ ...this.state, modalOpen: false })

  handleOnChange = (e) => {
    this.setState({...this.state,
      form: {...this.state.form,
        [e.target.name]: e.target.value
      }
    }, () => console.log(this.state))
  }

  handleSubmit = () => {
    this.props.actions.updateGig(this.state.form, this.props.gig.id)
    // this.setState({
    //   form: {
    //     venue: '',
    //     location: '',
    //     group: '',
    //     style: '',
    //     type: '',
    //     pay: '',
    //     concert_dress: '',
    //     time: '',
    //     date: '',
    //     rehearsals: '',
    //     description: ''
    //   },
    //   modalOpen: false
    // })
    this.setState({
      modalOpen:false
    })
    // debugger
    // const id = this.props.pageId
    // this.props.fetchGigData(id)
  }
  render(){
    return(
      <Modal trigger={<Button onClick={this.handleOpen}>Edit Profile</Button>} open={this.state.modalOpen}
        onClose={this.handleClose}>
      <Modal.Header>Edit Gig</Modal.Header>
      <Modal.Content image scrolling>

        <Modal.Description>
          {/* <Header>Modal Header</Header> */}
          <div className="main">
            <h3 className="headline">{this.props.gig.venue}</h3>
            <form onSubmit={this.handleSubmit} className="ui form">
              <label>Venue</label>
              <input type="text" value={this.state.form.venue} name="venue" onChange={this.handleOnChange}/>
              <label>Location</label>
              <input type="text" name="location" value={this.state.form.location} onChange={this.handleOnChange}/>
              <label>Group</label>
              <input type="text" name="group" value={this.state.form.group} onChange={this.handleOnChange}/>
              <label>Style</label>
              <input type="text" name="style" value={this.state.form.style} onChange={this.handleOnChange}/>
              <label>Total Pay</label>
              <input type="text" name="pay" value={this.state.form.pay} onChange={this.handleOnChange}/>
              <label>Concert Dress</label>
              <input type="text" name="concert_dress" value={this.state.form.concert_dress} onChange={this.handleOnChange}/>
              <label>Time</label>
              <input type="time" name="time" value={this.state.form.time} onChange={this.handleOnChange}/>
              <label>Date</label>
              <input type="date" name="date" value={this.state.form.date} onChange={this.handleOnChange}/>
              <label>Rehearsals</label>
              <input type="text" name="rehearsals" value={this.state.form.rehearsals} onChange={this.handleOnChange}/>
              <label>Description</label>
              <textarea type="text-area" name="description" value={this.state.form.description} onChange={this.handleOnChange}/>
            </form>
          </div>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={this.handleClose}>
          Cancel
        </Button>
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

export default connect(null, mapDispatchToProps)(ModalExampleScrollingContent)
