import React from 'react'

export default class Navbar extends React.Component {
  render(){
    return(
      <div>
        <nav className="navbar navbar-light">
          <span className="navbar-brand mb-0 h1"><h1><a href='/'>Gig Hunter</a></h1></span>
          <span>
            <a href="/"><button className='ui blue button' id="all-trips">Home</button></a>
            <a href='/gigSearch'><button className='ui blue button' id="add-trip">Search Gigs</button></a>
            <a href='/postGig'><button className='ui blue button' id="add-trip">Post Gig</button></a>
            <button className='ui blue button' id="add-trip">Logout</button>
          </span>
        </nav>
      </div>
    )
  }
}
