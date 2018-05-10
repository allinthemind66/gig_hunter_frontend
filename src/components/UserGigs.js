import React from 'react'
import { Link} from "react-router-dom";
const UserGigs = (props) => {

  return(
    <div>
      <h3>Upcoming Gigs</h3>
      <ul>
        {props.gigs && props.gigs.length ? props.gigs.map(gig => <Link key={gig.id} to={`/gigs/${gig.id}`}><li key={gig.id}>{gig.venue} - {props.parseDate(gig.date)}</li></Link>) : <p>This user currently has no upcoming gigs</p>}
      </ul>
    </div>
  )
}

export default UserGigs
