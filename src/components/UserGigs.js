import React from 'react'
const UserGigs = (props) => {
  
  return(
    <div>
      <h3>Upcoming Gigs</h3>
      <ul>
        {props.gigs ? props.gigs.map(gig => <li>{gig.description}</li>) : null}
      </ul>
    </div>
  )
}

export default UserGigs
