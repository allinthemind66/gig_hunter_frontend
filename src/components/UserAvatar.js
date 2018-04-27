import React from 'react'
const UserAvatar = (props) => {
  // debugger
  return(
    <div>
      {props.name ? <img className="avatar" src={require(`../userImgs/defaultImg.png`)} alt="user_img"/> : null}
      <h4>{props.name}</h4>
    </div>
  )
}

export default UserAvatar
