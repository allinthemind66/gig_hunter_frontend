import React from 'react'
const UserAvatar = (props) => {

  return(
    <div>
      <img className="avatar" src={require('../testImages/Rick.JPG')} alt="user_img"/>
      <h4>{props.name}</h4>
    </div>
  )
}

export default UserAvatar
