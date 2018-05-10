import React from 'react'
const UserBio = (props) => {

  return(
    <div className='ui card bio'>
      <h3>About {props.user.name}</h3>
      <p>{props.user.bio ? props.user.bio : <p>This user doesn't have a bio</p>}</p>
      <p>Hometown: {props.user.hometown}</p>
      <p>Current City: {props.user.city}</p>
      <p>The Instruments I play are</p>
      <ul>
        {props.user.instruments ?  props.user.instruments.map(instrument => <li key={instrument.id}>{instrument.name}</li>) : null}
      </ul>
    </div>
  )
}

export default UserBio
