import React from 'react'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import { Link} from "react-router-dom";
import * as actions from '../actions/userActions'
import UserSearchCard from '../components/UserSearchCard'
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
        <div className="ui category search userSearchInput">
          <div className="ui icon input">
            <input onChange={this.handleSearchInput} className="prompt" value={this.state.searchInput} type="text" placeholder="Search..."/>
            <i className="search icon"></i>
          </div>
        </div>
        <div className="userSearchWrapper">
          {this.props.allUsers ? this.props.allUsers.map(user => <Link key={user.id} to={`/user/${user.id}`}><UserSearchCard user={user}/></Link>) : null}
        </div>

        {/* <div className="ui category search userSearchInput">
          <div className="ui icon input">
            <input onChange={this.handleSearchInput} className="prompt" value={this.state.searchInput} type="text" placeholder="Search..."/>
            <i className="search icon"></i>
          </div>
        </div>
        <div className="userSearchWrapper">
        {this.props.allUsers ? this.props.allUsers.map(user => <div className="userSearchCard"><Link key={user.id} to={`/user/${user.id}`}><img className="userSearchImage" src={user.img_url} alt="user"/></Link><p className="subtitle">{user.name}</p></div>) : null}
        </div> */}
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
