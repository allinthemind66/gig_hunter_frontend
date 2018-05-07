import React from 'react'
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/authActions'
import {api} from '../services/api'
class Navbar extends React.Component {
  render(){
    // debugger
    return(
      <div>
        <nav className="navbar navbar-light">
          <span className="navbar-brand mb-0 h1"><h1><NavLink to='/'>Gig Hunter</NavLink></h1></span>
          <span>
            <NavLink className='ui blue button' to='/'>Home</NavLink>
            <NavLink className='ui blue button' to='/gigSearch'>Search Gigs</NavLink>
            <NavLink className='ui blue button' to='/userSearch'>Search Users</NavLink>
            <NavLink className='ui blue button' to='/postGigForm'>Post Gig</NavLink>
            <NavLink className='ui blue button' to='/login' onClick={this.props.actions.handleLogout}>Logout</NavLink>
          </span>
        </nav>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {currentUser: state.auth.currentUser}
}

const mapDispatchToProps = (dispatch) => {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
