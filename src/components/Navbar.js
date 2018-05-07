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
            <NavLink className='ui blue button' to='/'>Home <i class="home icon"></i></NavLink>
            <button className='ui blue button'>Inbox <i class="inbox icon"></i></button>
            <NavLink className='ui blue button' to='/gigSearch'>Search Gigs <i class="music icon"></i></NavLink>
            <NavLink className='ui blue button' to='/userSearch'>Search Users <i class="user icon"></i></NavLink>
            <NavLink className='ui blue button' to='/postGigForm'>Post Gig <i class="paper plane icon"></i></NavLink>
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
