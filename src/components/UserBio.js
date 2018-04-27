import React from 'react'
const UserBio = (props) => {

  return(
    <div>
      <p>{props.user.bio}</p>
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
