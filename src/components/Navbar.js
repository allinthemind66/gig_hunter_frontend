import React from 'react'
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/authActions'
import {api} from '../services/api'
class Navbar extends React.Component {
  render(){
    return(
      <div>
        <nav className="navbar navbar-light">
          <span className="navbar-brand mb-0 h1"><h1><NavLink to='/'>Gig Hunter</NavLink></h1></span>
          <span>
            <NavLink className='ui blue button' to='/'>Home <i className="home icon"></i></NavLink>
            <NavLink className='ui blue button' to='/inbox'>Inbox <i className="inbox icon"></i></NavLink>
            <NavLink className='ui blue button' to='/gigSearch'>Search Gigs <i className="music icon"></i></NavLink>
            <NavLink className='ui blue button' to='/userSearch'>Search Users <i className="user icon"></i></NavLink>
            <NavLink className='ui blue button' to='/postGigForm'>Post Gig <i className="paper plane icon"></i></NavLink>
            <NavLink className='ui blue button' to='/login' onClick={this.props.actions.handleLogout}>Logout <i className="arrow right icon"></i></NavLink>
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
