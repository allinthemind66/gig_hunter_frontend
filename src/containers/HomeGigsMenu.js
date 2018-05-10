import React, { Component } from 'react'
import HomeUserGigs from '../components/HomeUserGigs'
import HomePostedGigs from '../components/HomePostedGigs'
import UserFriends from '../components/UserFriends'

import { Input, Menu, Segment } from 'semantic-ui-react'

export default class MenuExampleBasic extends Component {
  state = { activeItem: 'upcoming' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    let decideMenuItem = () => {
      if(this.state.activeItem == 'upcoming'){
        return <HomeUserGigs/>
      }
      else if (this.state.activeItem == 'posted') {
        return <HomePostedGigs/>
      }
      else{
        return <UserFriends/>
      }

    }
    return (
      <div>
        <Menu attached='top' tabular>
          <Menu.Item name='upcoming' active={activeItem === 'upcoming'} onClick={this.handleItemClick}>Your Upcoming Gigs</Menu.Item>
          <Menu.Item name='posted' active={activeItem === 'posted'} onClick={this.handleItemClick}>Your Posted Gigs</Menu.Item>
          <Menu.Item name='friends' active={activeItem === 'friends'} onClick={this.handleItemClick}>Your Friends</Menu.Item>

          <Menu.Menu position='right'>
            <Menu.Item>
              <Input transparent icon={{ name: 'search', link: true }} placeholder='Search gigs...' />
            </Menu.Item>
          </Menu.Menu>
        </Menu>

        <Segment attached='bottom'>
          {decideMenuItem()}
          {/* {this.state.activeItem == 'upcoming' ? <HomeUserGigs/> : <HomePostedGigs/>} */}
        </Segment>
      </div>
    )
  }
}
