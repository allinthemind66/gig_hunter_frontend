import React from 'react'
const UserAvatar = (props) => {
  // debugger
  return(
    <div>
      <img className="avatar" src={require(`../userImgs/defaultImg.png`)} alt="user_img"/>
      <h4>{props.name}</h4>
    </div>
  )
}

export default UserAvatar
