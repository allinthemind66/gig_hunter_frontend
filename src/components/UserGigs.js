import React from 'react'
import { Link} from "react-router-dom";
const UserGigs = (props) => {

  return(
    <div>
      <h3>Upcoming Gigs</h3>
      <ul>
        {props.gigs ? props.gigs.map(gig => <Link to={`/gigs/${gig.id}`}><li key={gig.id}>{gig.venue} - {props.parseDate(gig.date)}</li></Link>) : null}
      </ul>
    </div>
  )
}

export default UserGigs
