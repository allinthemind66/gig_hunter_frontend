import React from 'react'
const UserGigs = (props) => {

  return(
    <div>
      <h3>Upcoming Gigs</h3>
      <ul>
        {props.gigs ? props.gigs.map(gig => <div><p>{gig.description}<button className='ui red button'>X</button></p></div>) : null}
      </ul>
    </div>
  )
}

export default UserGigs
