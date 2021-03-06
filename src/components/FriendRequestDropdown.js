import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link} from "react-router-dom";
import * as userActions from '../actions/userActions'

class FriendRequestDropdown extends React.Component {

  handleFriendRequests = () => {
    this.props.userActions.fetchUserFriendRequests()
  }

  acceptFriendRequest = (friend) => {
    this.props.userActions.acceptFriendRequest(friend)
  }

  declineFriendRequest = () => {

  }

  render(){
    return(
      <Dropdown onClick={this.handleFriendRequests} text='Friend Requests' pointing className='ui blue button'>
        <Dropdown.Menu>
          <Dropdown.Header>Friend Requests</Dropdown.Header>
          {this.props.friendRequests.length > 0 ? this.props.friendRequests.map(friend => <Dropdown.Item><Dropdown.Item><Link to={`/user/${friend.id}`}> {friend.name}</Link> <button onClick={() => this.acceptFriendRequest(friend)} className="ui green button">Accept</button><button className="ui red button">Decline</button></Dropdown.Item></Dropdown.Item>) : null}
          {/* <Dropdown.Item>
            <Dropdown text='Clothing'>
            <Dropdown.Menu>
            <Dropdown.Header>Mens</Dropdown.Header>
            <Dropdown.Item>Shirts</Dropdown.Item>
            <Dropdown.Item>Pants</Dropdown.Item>
            <Dropdown.Item>Jeans</Dropdown.Item>
            <Dropdown.Item>Shoes</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Header>Womens</Dropdown.Header>
            <Dropdown.Item>Dresses</Dropdown.Item>
            <Dropdown.Item>Shoes</Dropdown.Item>
            <Dropdown.Item>Bags</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Dropdown.Item> */}
      {/* <Dropdown.Item>Rick Nilon <button className="ui green button">Accept</button><button className="ui red button">Decline</button></Dropdown.Item> */}
      {/* <Dropdown.Item>Bedroom</Dropdown.Item> */}
    </Dropdown.Menu>
  </Dropdown>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {userActions: bindActionCreators(userActions, dispatch)}
}

const mapStateToProps = (state) => {
  return {friendRequests: state.users.friendRequests}
}





export default connect(mapStateToProps, mapDispatchToProps)(FriendRequestDropdown)
