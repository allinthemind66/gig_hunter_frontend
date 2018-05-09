import React, { Component } from 'react'
import { Input, Menu, Segment } from 'semantic-ui-react'

export default class MenuExampleBasic extends Component {
  state = { activeItem: 'Inbox' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name})
renderSwitch = () => {
  switch(this.state.activeItem){
    case("Inbox"):
      return <p>Your Inbox is empty.</p>
    case("Sent"):
      return <p>You have no sent messages</p>
    case("Drafts"):
      return <p>You currently have no drafts</p>
    default:
      return <p>Something went wrong</p>
  }
}

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu attached='top' tabular>
          <Menu.Item name='Inbox' active={activeItem === 'Inbox'} onClick={this.handleItemClick}>Inbox</Menu.Item>
          <Menu.Item name='Sent' active={activeItem === 'Sent'} onClick={this.handleItemClick}>Sent</Menu.Item>
          <Menu.Item name='Drafts' active={activeItem === 'Drafts'} onClick={this.handleItemClick}>Drafts</Menu.Item>

          <Menu.Menu position='right'>
            <Menu.Item>
              <Input transparent icon={{ name: 'search', link: true }} placeholder='Search messages...' />
            </Menu.Item>
          </Menu.Menu>
        </Menu>

        <Segment attached='bottom'>
          {this.renderSwitch()}
        </Segment>
      </div>
    )
  }
}
