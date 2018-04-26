import React from 'react'
import {NavLink} from 'react-router-dom'
export default class Navbar extends React.Component {
  render(){
    return(
      <div>
        <nav className="navbar navbar-light">
          <span className="navbar-brand mb-0 h1"><h1><a href='/'>Gig Hunter</a></h1></span>
          <span>
            <NavLink className='ui blue button' to='/'>Home</NavLink>
            <NavLink className='ui blue button' to='/gigSearch'>Search Gigs</NavLink>
            <NavLink className='ui blue button' to='/postGig'>Post Gig</NavLink>
            <NavLink className='ui blue button' to='/'>Logout</NavLink>
          </span>
        </nav>
      </div>
    )
  }
}
