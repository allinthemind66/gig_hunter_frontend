import React from 'react'
const UserAvatar = () => {
  return(
    <div>
      <img className="avatar" src={require('../testImages/Rick.JPG')} alt="user_img"/>
      <h4>Rick</h4>
    </div>
  )
}

export default UserAvatar
