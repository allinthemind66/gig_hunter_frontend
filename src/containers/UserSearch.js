import React from 'react'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import { Link} from "react-router-dom";
import * as actions from '../actions/userActions'

class UserSearch extends React.Component {
  state = {
    searchInput: ''
  }
  componentDidMount(){
    const token = localStorage.getItem('token')
    if(!token){
      this.props.history.push('/login')
    }
    else{
      this.props.actions.getAllUsers()
    }
  }

  handleSearchInput = (e) => {
    this.setState({
      searchInput: e.target.value
    }, ()=> this.props.actions.handleSearchForUsers(this.state.searchInput))
  }

  render(){

    return(
      <div>
        <div className="ui category search">
          <div className="ui icon input">
            <input onChange={this.handleSearchInput} className="prompt" value={this.state.searchInput} type="text" placeholder="Search..."/>
            <i className="search icon"></i>
          </div>
        </div>
        {this.props.allUsers ? this.props.allUsers.map(user => <div><Link key={user.id} to={`/user/${user.id}`}><img className="avatar" src={user.img_url} alt="user"/></Link><p>{user.name}</p></div>) : null}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {allUsers: state.users.filteredUsers}
}

const mapDispatchToProps = (dispatch) => {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(UserSearch)
