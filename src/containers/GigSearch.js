import React from 'react'
import { Link } from "react-router-dom";

export default class GigSearch extends React.Component {
  componentDidMount = () => {

  }
  render(){
    return(
      <div>
        <h3>All Gigs</h3>
        <div>
          <Link to='/gigs/1'>Merkin Concert Hall - Manhattan, NY</Link>
        </div>
        <div>
          <p>Gig 2</p>
        </div>
      </div>
    )
  }
}
